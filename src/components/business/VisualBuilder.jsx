"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { BuilderToolbar } from "./BuilderToolbar";
import { BuilderLeftPanel } from "./BuilderLeftPanel";
import { BuilderCanvas } from "./BuilderCanvas";
import { BuilderRightPanel } from "./BuilderRightPanel";
import { PREDEFINED_THEMES } from "@/lib/themes";

export function VisualBuilder({
  initialBusiness = {},
  initialWebsite = {},
  onExit = () => {},
  onSwitchToCardBuilder = null,
}) {
  const [business, setBusiness] = useState(initialBusiness);
  const [sections, setSections] = useState(
    initialWebsite?.draftVersion?.sections || initialWebsite?.publishedVersion?.sections || []
  );
  const [theme, setTheme] = useState(
    initialBusiness?.theme || PREDEFINED_THEMES["modern-business"]
  );

  const [viewport, setViewport] = useState("desktop"); // "desktop" | "tablet" | "mobile"
  const [previewMode, setPreviewMode] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState(sections[0]?.id || null);
  const [selectedElement, setSelectedElement] = useState(null);

  // Undo / Redo History Stack
  const [history, setHistory] = useState([
    {
      sections: initialWebsite?.draftVersion?.sections || [],
      business: initialBusiness,
      theme: initialBusiness?.theme || PREDEFINED_THEMES["modern-business"],
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Save status & publishing
  const [saveStatus, setSaveStatus] = useState("saved"); // "saved" | "saving" | "unsaved"
  const [isPublishing, setIsPublishing] = useState(false);
  const autosaveTimerRef = useRef(null);

  // Push state to undo/redo history
  const pushHistory = useCallback(
    (newSections, newBusiness, newTheme) => {
      setHistory((prev) => {
        const sliced = prev.slice(0, historyIndex + 1);
        const newEntry = {
          sections: JSON.parse(JSON.stringify(newSections)),
          business: JSON.parse(JSON.stringify(newBusiness)),
          theme: JSON.parse(JSON.stringify(newTheme)),
        };
        // Keep up to 30 history states
        if (sliced.length > 30) sliced.shift();
        return [...sliced, newEntry];
      });
      setHistoryIndex((prev) => Math.min(prev + 1, 30));
      setSaveStatus("unsaved");
    },
    [historyIndex]
  );

  const handleUndo = () => {
    if (historyIndex > 0) {
      const targetIndex = historyIndex - 1;
      const snapshot = history[targetIndex];
      setSections(snapshot.sections);
      setBusiness(snapshot.business);
      setTheme(snapshot.theme);
      setHistoryIndex(targetIndex);
      setSaveStatus("unsaved");
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const targetIndex = historyIndex + 1;
      const snapshot = history[targetIndex];
      setSections(snapshot.sections);
      setBusiness(snapshot.business);
      setTheme(snapshot.theme);
      setHistoryIndex(targetIndex);
      setSaveStatus("unsaved");
    }
  };

  // Keyboard shortcuts (Ctrl+Z, Ctrl+Y, Ctrl+S)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
        e.preventDefault();
        handleUndo();
      } else if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "y" || (e.key === "z" && e.shiftKey))
      ) {
        e.preventDefault();
        handleRedo();
      } else if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        saveDraft();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  // Save draft to API
  const saveDraft = async () => {
    setSaveStatus("saving");
    try {
      // 1. Update business details
      await fetch(`/api/business/businesses/${business.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(business),
      });

      // 2. Save website draft
      await fetch(`/api/business/websites/${business.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sections,
          globalSettings: { theme },
          animationSettings: { smoothScroll: true, disableOnMobile: false },
        }),
      });

      setSaveStatus("saved");
    } catch (err) {
      console.error("Save draft failed:", err);
      setSaveStatus("unsaved");
    }
  };

  // Autosave debounce (automatically saves 3 seconds after last edit)
  useEffect(() => {
    if (saveStatus === "unsaved") {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
      autosaveTimerRef.current = setTimeout(() => {
        saveDraft();
      }, 3000);
    }
    return () => {
      if (autosaveTimerRef.current) clearTimeout(autosaveTimerRef.current);
    };
  }, [saveStatus, sections, business, theme]);

  // Publish website to live URL
  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      // First save draft
      await saveDraft();

      // Trigger publish API
      const res = await fetch(`/api/business/businesses/${business.id}/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "publish" }),
      });
      const data = await res.json();
      if (data.success) {
        setBusiness(data.business);
        alert(`Website published successfully! Public URL:\n${window.location.origin}${data.publicUrl}`);
      }
    } catch (err) {
      alert(`Publish failed: ${err.message}`);
    } finally {
      setIsPublishing(false);
    }
  };

  // Section manipulation handlers
  const handleAddSection = (newSection, atIndex = null) => {
    let updated;
    if (atIndex !== null) {
      updated = [...sections];
      updated.splice(atIndex + 1, 0, newSection);
    } else {
      updated = [...sections, newSection];
    }
    setSections(updated);
    setSelectedSectionId(newSection.id);
    setSelectedElement(null);
    pushHistory(updated, business, theme);
  };

  const handleUpdateSection = (updatedSection) => {
    const updated = sections.map((s) => (s.id === updatedSection.id ? updatedSection : s));
    setSections(updated);
    pushHistory(updated, business, theme);
  };

  const handleDeleteSection = (sectionId) => {
    if (confirm("Are you sure you want to delete this section?")) {
      const updated = sections.filter((s) => s.id !== sectionId);
      setSections(updated);
      if (selectedSectionId === sectionId) {
        setSelectedSectionId(updated[0]?.id || null);
        setSelectedElement(null);
      }
      pushHistory(updated, business, theme);
    }
  };

  const handleDuplicateSection = (sectionId) => {
    const secToDup = sections.find((s) => s.id === sectionId);
    if (!secToDup) return;
    const duplicated = {
      ...JSON.parse(JSON.stringify(secToDup)),
      id: `sec_${secToDup.type}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: `${secToDup.name} (Copy)`,
    };
    const idx = sections.findIndex((s) => s.id === sectionId);
    const updated = [...sections];
    updated.splice(idx + 1, 0, duplicated);
    setSections(updated);
    setSelectedSectionId(duplicated.id);
    pushHistory(updated, business, theme);
  };

  const handleMoveSection = (index, direction) => {
    const newIdx = direction === "up" ? index - 1 : index + 1;
    if (newIdx < 0 || newIdx >= sections.length) return;
    const reordered = [...sections];
    const [moved] = reordered.splice(index, 1);
    reordered.splice(newIdx, 0, moved);
    setSections(reordered);
    pushHistory(reordered, business, theme);
  };

  const handleToggleVisibility = (sectionId) => {
    const updated = sections.map((s) => (s.id === sectionId ? { ...s, visible: !s.visible } : s));
    setSections(updated);
    pushHistory(updated, business, theme);
  };

  const handleApplyLayout = ({ sections: newSections, theme: newTheme }) => {
    setSections(newSections);
    setTheme(newTheme);
    setBusiness((prev) => ({ ...prev, theme: newTheme }));
    if (newSections.length > 0) {
      setSelectedSectionId(newSections[0].id);
      setSelectedElement(null);
    }
    pushHistory(newSections, { ...business, theme: newTheme }, newTheme);
  };

  const handleSelectElement = (elementId, data) => {
    setSelectedElement(data);
    setSelectedSectionId(data.sectionId);
  };

  const activeSection = sections.find((s) => s.id === selectedSectionId) || sections[0] || null;

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-slate-100 font-sans">
      {/* 1. TOP TOOLBAR */}
      <BuilderToolbar
        business={business}
        website={{ draftVersion: { sections } }}
        viewport={viewport}
        setViewport={setViewport}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onSaveDraft={saveDraft}
        saveStatus={saveStatus}
        previewMode={previewMode}
        setPreviewMode={setPreviewMode}
        onPublish={handlePublish}
        isPublishing={isPublishing}
        onExit={onExit}
        onSwitchToCardBuilder={onSwitchToCardBuilder}
      />

      {/* 2. THREE-PANEL WORKSPACE */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* LEFT PANEL: Section & Element Library, Layers, Theme, Info, Media, SEO */}
        {!previewMode && (
          <BuilderLeftPanel
            sections={sections}
            onAddSection={handleAddSection}
            onApplyLayout={handleApplyLayout}
            onReorderSections={(reordered) => {
              setSections(reordered);
              pushHistory(reordered, business, theme);
            }}
            onToggleVisibility={handleToggleVisibility}
            onDuplicateSection={handleDuplicateSection}
            onDeleteSection={handleDeleteSection}
            onSelectSection={(id) => {
              setSelectedSectionId(id);
              setSelectedElement(null);
            }}
            selectedSectionId={selectedSectionId}
            business={business}
            onUpdateBusiness={(updatedBiz) => {
              setBusiness(updatedBiz);
              pushHistory(sections, updatedBiz, theme);
            }}
            theme={theme}
            onUpdateTheme={(updatedTheme) => {
              setTheme(updatedTheme);
              setBusiness((prev) => ({ ...prev, theme: updatedTheme }));
              pushHistory(sections, { ...business, theme: updatedTheme }, updatedTheme);
            }}
          />
        )}

        {/* CENTER PANEL: Live Website Preview & Visual Editing Canvas */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <BuilderCanvas
            sections={sections}
            business={business}
            website={{ draftVersion: { sections } }}
            viewport={viewport}
            selectedSectionId={selectedSectionId}
            selectedElementId={selectedElement?.elementKey ? `${selectedElement.sectionId}.${selectedElement.elementKey}` : null}
            onSelectSection={(id) => {
              setSelectedSectionId(id);
              setSelectedElement(null);
            }}
            onSelectElement={handleSelectElement}
            onMoveSection={handleMoveSection}
            onDuplicateSection={handleDuplicateSection}
            onDeleteSection={handleDeleteSection}
            onAddSectionBelow={(idx) => {
              // Open left panel section library or trigger add
              alert("Select a section from the Left Library to insert it.");
            }}
            previewMode={previewMode}
          />
        </div>

        {/* RIGHT PANEL: Selected Element / Section Properties & Animation Controls */}
        {!previewMode && (
          <BuilderRightPanel
            selectedSection={activeSection}
            selectedElement={selectedElement}
            onUpdateSection={handleUpdateSection}
            business={business}
            theme={theme}
          />
        )}
      </div>
    </div>
  );
}

