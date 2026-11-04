"use client";
import React, { useContext } from "react";
import { SectionContext } from "./SectionContext";

export function EditableElement({
  elementKey,
  sectionId,
  label = "Element",
  isEditing = false,
  selectedElementId = null,
  onSelectElement = () => {},
  className = "",
  style = {},
  as = "div",
  children,
  ...props
}) {
  const Component = as;
  const fullId = `${sectionId}.${elementKey}`;
  const isSelected = isEditing && selectedElementId === fullId;

  // Retrieve current section from SectionContext to access element-level styling overrides
  const currentSection = useContext(SectionContext);
  const storedOverrides = currentSection?.elements?.[elementKey] || {};
  const elementCustomStyles = storedOverrides.style || storedOverrides || {};

  const mergedStyle = {
    ...style,
    ...elementCustomStyles,
  };

  if (!isEditing) {
    return (
      <Component className={className} style={mergedStyle} {...props}>
        {children}
      </Component>
    );
  }

  const handleClick = (e) => {
    e.stopPropagation();
    onSelectElement(fullId, {
      sectionId,
      elementKey,
      label,
      styles: mergedStyle,
      elementStyles: elementCustomStyles,
    });
  };

  return (
    <Component
      onClick={handleClick}
      className={`relative transition-all duration-150 ${className} ${
        isSelected
          ? "ring-2 ring-blue-600 ring-offset-2 z-20"
          : "hover:outline hover:outline-2 hover:outline-blue-400/80 hover:outline-dashed"
      } cursor-pointer group/elem`}
      style={mergedStyle}
      data-element-id={fullId}
      {...props}
    >
      {isSelected && (
        <span className="absolute -top-6 left-0 bg-blue-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded shadow z-30 pointer-events-none">
          {label}
        </span>
      )}
      {children}
    </Component>
  );
}
