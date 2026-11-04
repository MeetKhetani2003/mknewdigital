"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Lock,
  Eye,
  EyeOff,
  Building2,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Upload,
  Image as ImageIcon,
  Check,
  Copy,
  Trash2,
  ExternalLink,
  Sparkles,
  Globe,
  Sliders,
  LogOut,
  Save,
  CheckCircle,
  RefreshCw,
  Search,
  Filter,
  Download,
  AlertCircle,
  Clock,
  User,
  ArrowRight,
} from "lucide-react";

export function ClientSettingsPortal({ initialBusiness, initialSlug }) {
  const [business, setBusiness] = useState(initialBusiness);
  const [slug] = useState(initialSlug);

  // Auth State
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  // Active Tab: 'inquiries' | 'gallery' | 'website' | 'card'
  const [activeTab, setActiveTab] = useState("inquiries");

  // Inquiries State
  const [inquiries, setInquiries] = useState([]);
  const [inquiriesLoading, setInquiriesLoading] = useState(false);
  const [inquirySearch, setInquirySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // GridFS Media State
  const [gridfsFiles, setGridfsFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(null);

  // Direct Image Upload States
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadLogoSuccess, setUploadLogoSuccess] = useState(false);
  const [uploadingPortrait, setUploadingPortrait] = useState(false);
  const [uploadPortraitSuccess, setUploadPortraitSuccess] = useState(false);

  // Content Customization States
  const [websiteSaving, setWebsiteSaving] = useState(false);
  const [websiteSaved, setWebsiteSaved] = useState(false);
  const [cardSaving, setCardSaving] = useState(false);
  const [cardSaved, setCardSaved] = useState(false);

  // Brand & Identity
  const [editBusinessName, setEditBusinessName] = useState(business?.businessName || "");
  const [editOwnerName, setEditOwnerName] = useState(business?.businessInformation?.ownerName || "Dr. Shalmali Khune");
  const [editTagline, setEditTagline] = useState(business?.businessInformation?.tagline || "");
  const [editHeroSubtitle, setEditHeroSubtitle] = useState(business?.businessInformation?.heroSubtitle || "");
  const [editLogoUrl, setEditLogoUrl] = useState(business?.logo || "");
  const [editOwnerPhoto, setEditOwnerPhoto] = useState(business?.businessInformation?.ownerPhoto || "");
  const [editBio, setEditBio] = useState(business?.businessInformation?.about || "");

  // Contact & Location
  const [editPhone, setEditPhone] = useState(business?.contactDetails?.phone || "");
  const [editWa, setEditWa] = useState(business?.contactDetails?.whatsapp || "");
  const [editEmail, setEditEmail] = useState(business?.contactDetails?.email || "");
  const [editAddress, setEditAddress] = useState(business?.contactDetails?.address || "");
  const [editOpeningHours, setEditOpeningHours] = useState(business?.contactDetails?.openingHours || "Mon - Sun: 10:00 AM - 7:00 PM");

  // Social & External URLs
  const [editInstagramUrl, setEditInstagramUrl] = useState(
    business?.socialLinks?.find((s) => s.platform === "instagram")?.url ||
      "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5"
  );
  const [editFacebookUrl, setEditFacebookUrl] = useState(
    business?.socialLinks?.find((s) => s.platform === "facebook")?.url ||
      "https://www.facebook.com/share/1M9JNPzhPz/"
  );
  const [editYoutubeUrl, setEditYoutubeUrl] = useState(
    business?.socialLinks?.find((s) => s.platform === "youtube")?.url || ""
  );
  const [editGoogleMapsUrl, setEditGoogleMapsUrl] = useState(business?.contactDetails?.googleMapsUrl || "");

  // 6 Services / Modalities
  const defaultServices = [
    {
      id: "srv-1",
      title: "Tarot Consultation",
      description: "Intuitive card spreads unlocking clear guidance on love, career directions, emotional blockages, and your upcoming soul milestones.",
      actionText: "Book Tarot Consultation",
      iconType: "tarot",
    },
    {
      id: "srv-2",
      title: "Numerological Report",
      description: "In-depth master birth date calculation revealing your life path number, destiny vibrations, key traits, and favorable cosmic timelines.",
      actionText: "Get Numerological Report",
      iconType: "numerology",
    },
    {
      id: "srv-3",
      title: "Mobile Numerology",
      description: "Deep vibration analysis of your phone digits to eliminate unfavorable frequencies and choose an auspicious SIM number for wealth and harmony.",
      actionText: "Analyze Mobile Number",
      iconType: "mobile",
    },
    {
      id: "srv-4",
      title: "Name Numerology",
      description: "Scientific spelling harmonization for personal, baby, or brand names to activate prosperity vibrations and neutralize conflicting numbers.",
      actionText: "Correct Name Spelling",
      iconType: "name",
    },
    {
      id: "srv-5",
      title: "Crystal & Gemstone Guidance",
      description: "Personalized natural gemstone and crystal recommendations to align your chakras, shield your aura, and balance mental tranquility.",
      actionText: "Get Crystal Guidance",
      iconType: "crystal",
    },
    {
      id: "srv-6",
      title: "Tarot Spells & Rituals",
      description: "Sacred intention candle rituals and energy alignment focused on manifesting peace, releasing negative cords, and attracting abundance.",
      actionText: "Inquire Tarot Spells",
      iconType: "spells",
    },
  ];

  const [editServices, setEditServices] = useState(
    business?.businessInformation?.services?.length ? business.businessInformation.services : defaultServices
  );

  // Digital Card custom fields
  const [editCardTitle, setEditCardTitle] = useState(
    business?.businessInformation?.cardTitle || business?.businessInformation?.ownerName || "Dr. Shalmali Khune"
  );
  const [editCardModalities, setEditCardModalities] = useState(
    business?.businessInformation?.cardModalities || "Numerology ✦ Tarot ✦ Crystal & Reiki Healing"
  );
  const [editCardSubtitle, setEditCardSubtitle] = useState(
    business?.businessInformation?.cardSubtitle || "सेक्रेड हीलिंग पाथ • Sacred Healing Path • Pune"
  );
  const [editCardBio, setEditCardBio] = useState(
    business?.businessInformation?.cardBio || business?.businessInformation?.about || ""
  );

  // Security / Password update
  const [newPassword, setNewPassword] = useState("");
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const websiteUrl = `/business/${slug}`;
  const cardUrl = `/business/${slug}/digitalcard`;

  // Check auth session
  useEffect(() => {
    checkAuth();
  }, [slug]);

  const checkAuth = async () => {
    setAuthChecking(true);
    try {
      const res = await fetch(`/api/business/auth/client-me?slug=${slug}`);
      const data = await res.json();
      if (data.authenticated) {
        setAuthenticated(true);
        if (data.business) {
          const b = data.business;
          setBusiness(b);
          setEditBusinessName(b.businessName || "");
          setEditOwnerName(b.businessInformation?.ownerName || "Dr. Shalmali Khune");
          setEditTagline(b.businessInformation?.tagline || "");
          setEditHeroSubtitle(b.businessInformation?.heroSubtitle || "");
          setEditLogoUrl(b.logo || "");
          setEditOwnerPhoto(b.businessInformation?.ownerPhoto || "");
          setEditBio(b.businessInformation?.about || "");
          setEditPhone(b.contactDetails?.phone || "");
          setEditWa(b.contactDetails?.whatsapp || "");
          setEditEmail(b.contactDetails?.email || "");
          setEditAddress(b.contactDetails?.address || "");
          setEditOpeningHours(b.contactDetails?.openingHours || "Mon - Sun: 10:00 AM - 7:00 PM");
          setEditInstagramUrl(
            b.socialLinks?.find((s) => s.platform === "instagram")?.url ||
              "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5"
          );
          setEditFacebookUrl(
            b.socialLinks?.find((s) => s.platform === "facebook")?.url ||
              "https://www.facebook.com/share/1M9JNPzhPz/"
          );
          setEditYoutubeUrl(b.socialLinks?.find((s) => s.platform === "youtube")?.url || "");
          setEditGoogleMapsUrl(b.contactDetails?.googleMapsUrl || "");
          if (b.businessInformation?.services?.length) {
            setEditServices(b.businessInformation.services);
          }
          setEditCardTitle(
            b.businessInformation?.cardTitle || b.businessInformation?.ownerName || "Dr. Shalmali Khune"
          );
          setEditCardModalities(
            b.businessInformation?.cardModalities || "Numerology ✦ Tarot ✦ Crystal & Reiki Healing"
          );
          setEditCardSubtitle(
            b.businessInformation?.cardSubtitle || "सेक्रेड हीलिंग पाथ • Sacred Healing Path • Pune"
          );
          setEditCardBio(b.businessInformation?.cardBio || b.businessInformation?.about || "");
        }
        loadInquiries();
        loadGridfsFiles();
      } else {
        setAuthenticated(false);
      }
    } catch (e) {
      setAuthenticated(false);
    } finally {
      setAuthChecking(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");

    try {
      const res = await fetch("/api/business/auth/client-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, password: passwordInput }),
      });
      const data = await res.json();
      if (data.success) {
        setAuthenticated(true);
        loadInquiries();
        loadGridfsFiles();
      } else {
        setAuthError(data.message || "Invalid password");
      }
    } catch (err) {
      setAuthError(err.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/business/auth/client-logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    setAuthenticated(false);
  };

  // Inquiries methods
  const loadInquiries = async () => {
    setInquiriesLoading(true);
    try {
      const res = await fetch(`/api/business/inquiries?slug=${slug}`);
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries || []);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setInquiriesLoading(false);
    }
  };

  const handleUpdateInquiryStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/business/inquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setInquiries((prev) =>
          prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
        );
      }
    } catch (e) {
      alert("Error updating status: " + e.message);
    }
  };

  const handleDeleteInquiry = async (id) => {
    if (!confirm("Are you sure you want to remove this inquiry?")) return;
    try {
      await fetch(`/api/business/inquiries/${id}`, { method: "DELETE" });
      setInquiries((prev) => prev.filter((inq) => inq.id !== id));
    } catch (e) {
      alert("Error deleting inquiry: " + e.message);
    }
  };

  // GridFS methods
  const loadGridfsFiles = async () => {
    try {
      const res = await fetch(`/api/business/media/gridfs?businessId=${business?.id || slug}`);
      const data = await res.json();
      if (data.success) {
        setGridfsFiles(data.files || []);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("businessId", business?.id || slug);

      const res = await fetch("/api/business/media/gridfs", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setUploadSuccess(true);
        setTimeout(() => setUploadSuccess(false), 2500);
        loadGridfsFiles();
      } else {
        alert(data.message || "Failed to upload image to GridFS");
      }
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDirectUpload = async (file, targetField) => {
    if (!file) return;
    if (targetField === "logo") {
      setUploadingLogo(true);
      setUploadLogoSuccess(false);
    } else if (targetField === "portrait") {
      setUploadingPortrait(true);
      setUploadPortraitSuccess(false);
    }

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("businessId", business?.id || slug);

      const res = await fetch("/api/business/media/gridfs", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.url) {
        if (targetField === "logo") {
          setEditLogoUrl(data.url);
          setUploadLogoSuccess(true);
          setTimeout(() => setUploadLogoSuccess(false), 3000);
        } else if (targetField === "portrait") {
          setEditOwnerPhoto(data.url);
          setUploadPortraitSuccess(true);
          setTimeout(() => setUploadPortraitSuccess(false), 3000);
        }
        loadGridfsFiles();
      } else {
        alert(data.message || "Failed to upload image to MongoDB GridFS");
      }
    } catch (err) {
      alert("Upload failed: " + err.message);
    } finally {
      if (targetField === "logo") setUploadingLogo(false);
      if (targetField === "portrait") setUploadingPortrait(false);
    }
  };

  const handleDeleteGridfsFile = async (id) => {
    if (!confirm("Delete this image from MongoDB GridFS?")) return;
    try {
      await fetch(`/api/business/media/gridfs/${id}`, { method: "DELETE" });
      setGridfsFiles((prev) => prev.filter((f) => f.id !== id));
    } catch (e) {
      alert("Delete failed: " + e.message);
    }
  };

  const handleCopyLink = (url) => {
    navigator.clipboard?.writeText(window.location.origin + url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const handleUpdateServiceField = (index, field, value) => {
    setEditServices((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  // Save Whole Website Content & URLs Updates
  const handleSaveWebsiteInfo = async () => {
    setWebsiteSaving(true);
    setWebsiteSaved(false);
    try {
      const updates = {
        businessName: editBusinessName || business.businessName,
        logo: editLogoUrl,
        contactDetails: {
          ...(business.contactDetails || {}),
          phone: editPhone,
          whatsapp: editWa,
          email: editEmail,
          address: editAddress,
          openingHours: editOpeningHours,
          googleMapsUrl: editGoogleMapsUrl,
        },
        socialLinks: [
          { platform: "instagram", url: editInstagramUrl },
          { platform: "facebook", url: editFacebookUrl },
          { platform: "youtube", url: editYoutubeUrl },
        ],
        businessInformation: {
          ...(business.businessInformation || {}),
          ownerName: editOwnerName,
          tagline: editTagline,
          heroSubtitle: editHeroSubtitle,
          about: editBio,
          ownerPhoto: editOwnerPhoto,
          services: editServices,
          cardTitle: editCardTitle,
          cardModalities: editCardModalities,
          cardSubtitle: editCardSubtitle,
          cardBio: editCardBio,
        },
      };

      if (newPassword && newPassword.trim().length >= 4) {
        updates.clientPassword = newPassword.trim();
      }

      const res = await fetch(`/api/business/businesses/${business.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      const data = await res.json();
      if (data.success) {
        setBusiness(data.business);
        setWebsiteSaved(true);
        if (newPassword) {
          setPasswordChangeSuccess(true);
          setNewPassword("");
          setTimeout(() => setPasswordChangeSuccess(false), 3000);
        }
        setTimeout(() => setWebsiteSaved(false), 2500);
      } else {
        alert(data.message || "Failed to save updates");
      }
    } catch (e) {
      alert("Save failed: " + e.message);
    } finally {
      setWebsiteSaving(false);
    }
  };

  // Export Inquiries to CSV
  const handleExportCSV = () => {
    if (inquiries.length === 0) return alert("No inquiries to export");
    const headers = ["Date", "Name", "Phone", "Email", "Service", "Preferred Date", "Message", "Status"];
    const rows = inquiries.map((i) => [
      new Date(i.createdAt).toLocaleDateString(),
      `"${i.name}"`,
      `"${i.phone}"`,
      `"${i.email}"`,
      `"${i.service}"`,
      `"${i.preferredDate}"`,
      `"${(i.message || "").replace(/"/g, '""')}"`,
      i.status,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${slug}-inquiries-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch =
      inq.name?.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.phone?.includes(inquirySearch) ||
      inq.service?.toLowerCase().includes(inquirySearch.toLowerCase());
    const matchesStatus = statusFilter === "all" || inq.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Auth Loading
  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not Authenticated -> Show Password Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans">
        <div className="max-w-md w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl text-center">
          {/* Logo or Emblem */}
          {business?.logo ? (
            <img
              src={business.logo}
              alt="Logo"
              className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-amber-400/80 p-1 shadow-lg object-contain bg-white/10"
            />
          ) : (
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Lock className="w-8 h-8" />
            </div>
          )}

          <h2 className="text-2xl font-black text-white tracking-tight">
            {business?.businessName || "Client Portal"}
          </h2>
          <p className="text-xs text-amber-300 font-semibold tracking-wider uppercase mt-1">
            Private Client Settings & Inquiries Hub
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Enter your secure client access key to manage inquiries, upload images, and customize your website and digital card.
          </p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4 text-left">
            <div>
              <label className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                Client Access Key
              </label>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter access password..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white font-mono text-sm outline-none focus:border-amber-400 transition-colors pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-slate-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {authError && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              {authLoading ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Unlock Client Portal</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
            <Link href={websiteUrl} className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>Public Website</span>
            </Link>

            <Link href={cardUrl} className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Card</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Portal View
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans select-none flex flex-col">
      {/* Top Header */}
      <header className="h-18 px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          {business?.logo ? (
            <img src={business.logo} alt="Logo" className="w-10 h-10 rounded-full border border-amber-400/60 p-0.5 object-cover" />
          ) : (
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 font-black flex items-center justify-center">
              {business?.businessName?.charAt(0) || "B"}
            </div>
          )}

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-black text-white">{business.businessName}</h1>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Client Portal
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">
              /business/{slug}/settings
            </p>
          </div>
        </div>

        {/* Live Links & Logout */}
        <div className="flex items-center gap-2.5">
          <Link
            href={websiteUrl}
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700"
          >
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>Website</span>
          </Link>

          <Link
            href={cardUrl}
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all border border-slate-700"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Card</span>
          </Link>

          <button
            onClick={handleLogout}
            className="p-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div className="bg-slate-900/60 border-b border-slate-800 px-6 flex items-center gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab("inquiries")}
          className={`px-5 py-3.5 border-b-2 font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "inquiries"
              ? "border-amber-400 text-amber-400 bg-slate-900"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Inquiries & Appointments ({inquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("gallery")}
          className={`px-5 py-3.5 border-b-2 font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "gallery"
              ? "border-amber-400 text-amber-400 bg-slate-900"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>GridFS Image Gallery ({gridfsFiles.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("website")}
          className={`px-5 py-3.5 border-b-2 font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "website"
              ? "border-amber-400 text-amber-400 bg-slate-900"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>Website Content Customizer</span>
        </button>

        <button
          onClick={() => setActiveTab("card")}
          className={`px-5 py-3.5 border-b-2 font-bold text-xs flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === "card"
              ? "border-amber-400 text-amber-400 bg-slate-900"
              : "border-transparent text-slate-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Digital Card Customizer</span>
        </button>
      </div>

      {/* Main Body Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 sm:p-8">
        {/* ==================================================== */}
        {/* TAB 1: INQUIRIES & APPOINTMENTS TABLE                */}
        {/* ==================================================== */}
        {activeTab === "inquiries" && (
          <div className="space-y-6">
            {/* Header & Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search inquiries by name, phone..."
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-medium outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-bold text-slate-300 outline-none"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </select>

                <button
                  onClick={handleExportCSV}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>

                <button
                  onClick={loadInquiries}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
                  title="Refresh inquiries"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Inquiries Table */}
            {inquiriesLoading ? (
              <div className="py-20 text-center">
                <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs text-slate-400 mt-2">Loading inquiries...</p>
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="py-16 text-center bg-slate-900 rounded-3xl border border-slate-800 p-8">
                <Calendar className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">No Inquiries Found</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  When clients book a consultation on your website or digital card, their inquiries will appear here automatically.
                </p>
              </div>
            ) : (
              <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-950 text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-800">
                      <tr>
                        <th className="py-4 px-6">Client Name</th>
                        <th className="py-4 px-6">Contact Details</th>
                        <th className="py-4 px-6">Service Requested</th>
                        <th className="py-4 px-6">Preferred Timing</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Quick Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      {filteredInquiries.map((inq) => {
                        const cleanPhone = (inq.phone || "").replace(/[^\d]/g, "");
                        const waNumber = cleanPhone.startsWith("91") ? cleanPhone : `91${cleanPhone}`;
                        const waText = encodeURIComponent(
                          `Hello ${inq.name}, thank you for inquiring about ${inq.service} with Dr. Shalmali Khune (Sacred Healing Path). I would be pleased to schedule your session.`
                        );

                        return (
                          <tr key={inq.id} className="hover:bg-slate-800/50 transition-colors">
                            <td className="py-4 px-6 font-bold text-white">
                              <div>{inq.name}</div>
                              <span className="text-[10px] text-slate-400 font-normal">
                                {new Date(inq.createdAt).toLocaleDateString()} at{" "}
                                {new Date(inq.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                              </span>
                            </td>

                            <td className="py-4 px-6 font-mono text-slate-300">
                              <div>{inq.phone}</div>
                              {inq.email && <div className="text-[10px] text-slate-400">{inq.email}</div>}
                            </td>

                            <td className="py-4 px-6">
                              <span className="font-semibold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                                {inq.service || "Consultation"}
                              </span>
                            </td>

                            <td className="py-4 px-6 text-slate-300">
                              <div>{inq.preferredDate || "Anytime"}</div>
                              <div className="text-[10px] text-slate-400">{inq.preferredTime}</div>
                            </td>

                            <td className="py-4 px-6">
                              <select
                                value={inq.status}
                                onChange={(e) => handleUpdateInquiryStatus(inq.id, e.target.value)}
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold border outline-none ${
                                  inq.status === "new"
                                    ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
                                    : inq.status === "contacted"
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                    : inq.status === "confirmed"
                                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                    : "bg-slate-700 text-slate-300 border-slate-600"
                                }`}
                              >
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="completed">Completed</option>
                              </select>
                            </td>

                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-1.5">
                                <a
                                  href={`https://wa.me/${waNumber}?text=${waText}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 transition-colors"
                                  title="Chat on WhatsApp"
                                >
                                  <MessageCircle className="w-4 h-4" />
                                </a>

                                <a
                                  href={`tel:${inq.phone}`}
                                  className="p-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors"
                                  title="Call Client"
                                >
                                  <Phone className="w-4 h-4" />
                                </a>

                                <button
                                  onClick={() => handleDeleteInquiry(inq.id)}
                                  className="p-2 rounded-xl hover:bg-red-500/20 text-slate-500 hover:text-red-400 transition-colors"
                                  title="Delete Inquiry"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 2: MONGODB GRIDFS IMAGE GALLERY & UPLOADER       */}
        {/* ==================================================== */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Upload Box */}
            <div className="p-8 rounded-3xl bg-slate-900 border-2 border-dashed border-slate-700 hover:border-amber-400 text-center transition-all">
              <Upload className="w-10 h-10 text-amber-400 mx-auto mb-3" />
              <h3 className="font-black text-base text-white">Upload Images to MongoDB GridFS</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                Images are stored directly in your MongoDB Atlas GridFS storage bucket and served through high-speed streaming endpoints.
              </p>

              <label className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg transition-all">
                <Upload className="w-4 h-4" />
                <span>{uploading ? "Uploading to GridFS..." : "Select Image from Computer"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>

              {uploadSuccess && (
                <p className="text-xs text-emerald-400 font-bold mt-3 flex items-center justify-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Image uploaded and stored in MongoDB GridFS successfully!</span>
                </p>
              )}
            </div>

            {/* Grid of Uploaded Files */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>GridFS Media Assets ({gridfsFiles.length})</span>
              </h4>

              {gridfsFiles.length === 0 ? (
                <div className="py-12 text-center bg-slate-900/50 rounded-2xl border border-slate-800 text-slate-500 text-xs">
                  No images uploaded yet. Upload your first logo, banner, or certificate above.
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {gridfsFiles.map((file) => (
                    <div
                      key={file.id}
                      className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between group"
                    >
                      <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                        <img
                          src={file.url}
                          alt={file.filename}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-3 space-y-2">
                        <p className="text-xs font-bold text-white truncate" title={file.filename}>
                          {file.filename}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {(file.length / 1024).toFixed(1)} KB • {new Date(file.uploadDate).toLocaleDateString()}
                        </p>

                        {/* Quick Set Buttons */}
                        <div className="grid grid-cols-2 gap-1.5 pt-1">
                          <button
                            type="button"
                            onClick={() => {
                              setEditLogoUrl(file.url);
                              alert("Updated Logo to this image! Make sure to click 'Save Website & URLs' to publish changes.");
                            }}
                            className={`py-1 px-1.5 rounded-md text-[10px] font-bold border transition-colors ${
                              editLogoUrl === file.url
                                ? "bg-amber-400 text-slate-950 border-amber-400"
                                : "bg-slate-950 text-slate-300 border-slate-800 hover:border-amber-400/60"
                            }`}
                          >
                            {editLogoUrl === file.url ? "✓ Active Logo" : "Set as Logo"}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setEditOwnerPhoto(file.url);
                              alert("Updated Portrait to this image! Make sure to click 'Save Website & URLs' to publish changes.");
                            }}
                            className={`py-1 px-1.5 rounded-md text-[10px] font-bold border transition-colors ${
                              editOwnerPhoto === file.url
                                ? "bg-amber-400 text-slate-950 border-amber-400"
                                : "bg-slate-950 text-slate-300 border-slate-800 hover:border-amber-400/60"
                            }`}
                          >
                            {editOwnerPhoto === file.url ? "✓ Active Portrait" : "Set as Portrait"}
                          </button>
                        </div>

                        <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                          <button
                            onClick={() => handleCopyLink(file.url)}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold flex items-center justify-center gap-1"
                          >
                            {copiedUrl === file.url ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedUrl === file.url ? "Copied" : "Copy URL"}</span>
                          </button>

                          <button
                            onClick={() => handleDeleteGridfsFile(file.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/20"
                            title="Delete from GridFS"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 3: WHOLE WEBSITE CONTENT & URLS MANAGER          */}
        {/* ==================================================== */}
        {activeTab === "website" && (
          <div className="max-w-4xl space-y-6">
            {/* Top Action Bar with Quick Save */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-amber-400" />
                  <span>Whole Website Content & URLs Manager</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Customize branding, hero text, contact numbers, email, social links, all 6 modalities, and about bio.
                </p>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Link
                  href={websiteUrl}
                  target="_blank"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 border border-slate-700"
                >
                  <Eye className="w-3.5 h-3.5 text-blue-400" />
                  <span>View Live Site</span>
                </Link>

                <button
                  onClick={handleSaveWebsiteInfo}
                  disabled={websiteSaving}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  {websiteSaved ? (
                    <>
                      <Check className="w-4 h-4 text-slate-950" />
                      <span>Saved Live!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      <span>{websiteSaving ? "Saving..." : "Save All Changes"}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* SECTION 1: BRANDING & HERO SECTION */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">1. Brand Identity & Hero Section</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Business Name</label>
                  <input
                    type="text"
                    value={editBusinessName}
                    onChange={(e) => setEditBusinessName(e.target.value)}
                    placeholder="e.g. Sacred Healing Path"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Practitioner Full Name</label>
                  <input
                    type="text"
                    value={editOwnerName}
                    onChange={(e) => setEditOwnerName(e.target.value)}
                    placeholder="e.g. Dr. Shalmali Khune"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Hero Top Badge (Hindi / Modalities)</label>
                <input
                  type="text"
                  value={editTagline}
                  onChange={(e) => setEditTagline(e.target.value)}
                  placeholder="e.g. सेक्रेड हीलिंग पाथ • Numerologist, Tarot Reader, Life Coach, Crystal & Reiki Healer"
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Hero Cosmic Subtitle / Mantra</label>
                <input
                  type="text"
                  value={editHeroSubtitle}
                  onChange={(e) => setEditHeroSubtitle(e.target.value)}
                  placeholder="e.g. Guidance for Clarity · Healing for Balance · Alignment for a Better Life"
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                />
              </div>

              {/* BRAND ASSETS & DIRECT MONGODB GRIDFS IMAGE UPLOADS */}
              <div className="grid sm:grid-cols-2 gap-5 pt-2">
                {/* 1. Official Logo Uploader Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Official Logo / Sacred Emblem</span>
                    </label>
                    {editLogoUrl?.includes("/api/business/media/gridfs/") ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                        Stored in GridFS
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        External / Local
                      </span>
                    )}
                  </div>

                  {/* Thumbnail & Upload Controls */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-slate-900 shrink-0 shadow-lg group">
                      {editLogoUrl ? (
                        <img
                          src={editLogoUrl}
                          alt="Logo Preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                          <ImageIcon className="w-6 h-6 mb-1 text-slate-600" />
                          <span className="text-[9px]">No Logo</span>
                        </div>
                      )}
                      {uploadingLogo && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-amber-400 animate-spin mb-1" />
                          <span className="text-[8px] text-amber-300 font-bold">Uploading</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <label className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs cursor-pointer transition-all shadow-md active:scale-95">
                        <Upload className="w-3.5 h-3.5 text-slate-950" />
                        <span>{uploadingLogo ? "Uploading to GridFS..." : "Upload New Logo"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleDirectUpload(file, "logo");
                          }}
                          disabled={uploadingLogo}
                        />
                      </label>

                      {uploadLogoSuccess && (
                        <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                          <Check className="w-3.5 h-3.5" />
                          <span>Logo uploaded & saved to GridFS!</span>
                        </p>
                      )}

                      <p className="text-[10px] text-slate-400 leading-tight">
                        Upload your PNG, JPG, or SVG emblem. Automatically hosted in MongoDB.
                      </p>
                    </div>
                  </div>

                  {/* Direct Endpoint / URL Fallback */}
                  <div className="pt-2.5 border-t border-slate-900 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Logo Endpoint / URL</span>
                      {copiedUrl && (
                        <button
                          type="button"
                          onClick={() => setEditLogoUrl(copiedUrl)}
                          className="text-amber-400 hover:underline font-bold"
                        >
                          Paste Copied GridFS Image
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={editLogoUrl}
                      onChange={(e) => setEditLogoUrl(e.target.value)}
                      placeholder="/api/business/media/gridfs/... or https://..."
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-[11px] font-mono outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                {/* 2. Hero / About Portrait Photo Uploader Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3.5 shadow-md">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>About / Practitioner Portrait Photo</span>
                    </label>
                    {editOwnerPhoto?.includes("/api/business/media/gridfs/") ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                        Stored in GridFS
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                        External / Local
                      </span>
                    )}
                  </div>

                  {/* Thumbnail & Upload Controls */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-slate-900 shrink-0 shadow-lg group">
                      {editOwnerPhoto ? (
                        <img
                          src={editOwnerPhoto}
                          alt="Portrait Preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                          <ImageIcon className="w-6 h-6 mb-1 text-slate-600" />
                          <span className="text-[9px]">No Photo</span>
                        </div>
                      )}
                      {uploadingPortrait && (
                        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center">
                          <RefreshCw className="w-5 h-5 text-amber-400 animate-spin mb-1" />
                          <span className="text-[8px] text-amber-300 font-bold">Uploading</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      <label className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs cursor-pointer transition-all shadow-md active:scale-95">
                        <Upload className="w-3.5 h-3.5 text-slate-950" />
                        <span>{uploadingPortrait ? "Uploading to GridFS..." : "Upload Portrait Photo"}</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleDirectUpload(file, "portrait");
                          }}
                          disabled={uploadingPortrait}
                        />
                      </label>

                      {uploadPortraitSuccess && (
                        <p className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 animate-pulse">
                          <Check className="w-3.5 h-3.5" />
                          <span>Portrait uploaded & saved to GridFS!</span>
                        </p>
                      )}

                      <p className="text-[10px] text-slate-400 leading-tight">
                        Appears in the About Me section and practitioner bio on website.
                      </p>
                    </div>
                  </div>

                  {/* Direct Endpoint / URL Fallback */}
                  <div className="pt-2.5 border-t border-slate-900 space-y-1">
                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                      <span>Portrait Endpoint / URL</span>
                      {copiedUrl && (
                        <button
                          type="button"
                          onClick={() => setEditOwnerPhoto(copiedUrl)}
                          className="text-amber-400 hover:underline font-bold"
                        >
                          Paste Copied GridFS Image
                        </button>
                      )}
                    </div>
                    <input
                      type="text"
                      value={editOwnerPhoto}
                      onChange={(e) => setEditOwnerPhoto(e.target.value)}
                      placeholder="/api/business/media/gridfs/... or https://..."
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-[11px] font-mono outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: CONTACT & SANCTUARY LOCATION */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Phone className="w-4 h-4 text-emerald-400" />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">2. Direct Contact & Sanctuary Details</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Calling Phone Number</label>
                  <input
                    type="text"
                    value={editPhone}
                    onChange={(e) => setEditPhone(e.target.value)}
                    placeholder="+91 9673791575"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">WhatsApp Number</label>
                  <input
                    type="text"
                    value={editWa}
                    onChange={(e) => setEditWa(e.target.value)}
                    placeholder="+91 9673791575"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Official Email</label>
                  <input
                    type="email"
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                    placeholder="sacredhealingpath11@gmail.com"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Sanctuary City & Address</label>
                  <input
                    type="text"
                    value={editAddress}
                    onChange={(e) => setEditAddress(e.target.value)}
                    placeholder="Pune, Maharashtra • Worldwide Online"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Consultation Days & Timings</label>
                <input
                  type="text"
                  value={editOpeningHours}
                  onChange={(e) => setEditOpeningHours(e.target.value)}
                  placeholder="Mon - Sun: 10:00 AM - 7:00 PM (By Prior Appointment)"
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white"
                />
              </div>
            </div>

            {/* SECTION 3: OFFICIAL SOCIAL MEDIA & LOCATION URLS */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Globe className="w-4 h-4 text-blue-400" />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">3. Official Social Media & Location URLs</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Instagram Profile URL</label>
                  <input
                    type="url"
                    value={editInstagramUrl}
                    onChange={(e) => setEditInstagramUrl(e.target.value)}
                    placeholder="https://www.instagram.com/sacr_ed_healingpath?..."
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Facebook Page URL</label>
                  <input
                    type="url"
                    value={editFacebookUrl}
                    onChange={(e) => setEditFacebookUrl(e.target.value)}
                    placeholder="https://www.facebook.com/share/..."
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">YouTube Channel URL</label>
                  <input
                    type="url"
                    value={editYoutubeUrl}
                    onChange={(e) => setEditYoutubeUrl(e.target.value)}
                    placeholder="https://youtube.com/@sacredhealingpath"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Google Maps Sanctuary Link</label>
                  <input
                    type="url"
                    value={editGoogleMapsUrl}
                    onChange={(e) => setEditGoogleMapsUrl(e.target.value)}
                    placeholder="https://maps.google.com/?q=Pune"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-[11px]"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4: ABOUT PRACTITIONER BIO STORY */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <User className="w-4 h-4 text-amber-400" />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">4. About Dr. Shalmali Khune (Bio & Story)</h4>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Full Practitioner Story (Appears on Website & About Modal)</label>
                <textarea
                  rows={4}
                  value={editBio}
                  onChange={(e) => setEditBio(e.target.value)}
                  placeholder="Share your spiritual journey, modalities, and philosophy..."
                  className="w-full mt-1 p-3 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400 leading-relaxed"
                />
              </div>
            </div>

            {/* SECTION 5: ALL 6 SERVICES & MODALITIES */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E5B84C]" />
                  <h4 className="font-bold text-white text-xs uppercase tracking-wider">5. All 6 Services & Modalities (Content & CTAs)</h4>
                </div>
                <span className="text-[10px] text-slate-400 font-bold">Live on Website & Card</span>
              </div>

              <div className="space-y-4">
                {editServices.map((srv, idx) => (
                  <div key={srv.id || idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        Modality #{idx + 1}
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Service Title</label>
                        <input
                          type="text"
                          value={srv.title}
                          onChange={(e) => handleUpdateServiceField(idx, "title", e.target.value)}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] text-slate-400 uppercase font-bold">Booking Button Label</label>
                        <input
                          type="text"
                          value={srv.actionText}
                          onChange={(e) => handleUpdateServiceField(idx, "actionText", e.target.value)}
                          className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-400 uppercase font-bold">Service Description</label>
                      <textarea
                        rows={2}
                        value={srv.description}
                        onChange={(e) => handleUpdateServiceField(idx, "description", e.target.value)}
                        className="w-full mt-1 p-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs leading-relaxed"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 6: CLIENT PORTAL PASSWORD & SECURITY */}
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <Lock className="w-4 h-4 text-purple-400" />
                <h4 className="font-bold text-white text-xs uppercase tracking-wider">6. Client Settings Password</h4>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Update Portal Password</label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password (leave blank to keep current)"
                    className="w-full p-2.5 pr-10 rounded-xl bg-slate-950 border border-slate-700 text-white font-mono text-xs outline-none focus:border-amber-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {passwordChangeSuccess && (
                  <p className="text-[11px] text-emerald-400 font-bold mt-1.5 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Password updated successfully!</span>
                  </p>
                )}
              </div>
            </div>

            {/* Save All Changes Bottom Action */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white">Save All Content & URLs</p>
                <p className="text-[11px] text-slate-400">Instantly publishes all updates to your live website & card</p>
              </div>

              <button
                onClick={handleSaveWebsiteInfo}
                disabled={websiteSaving}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-xl transition-all cursor-pointer"
              >
                {websiteSaved ? (
                  <>
                    <Check className="w-4 h-4 text-slate-950" />
                    <span>Changes Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>{websiteSaving ? "Saving Everything..." : "Save Website & URLs"}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ==================================================== */}
        {/* TAB 4: DIGITAL CARD CUSTOMIZER                       */}
        {/* ==================================================== */}
        {activeTab === "card" && (
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <div>
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Interactive Digital Business Card Customizer</span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Manage headline, modalities line, about snippet, and quick WhatsApp action buttons.
                </p>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Link
                  href={cardUrl}
                  target="_blank"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-1.5 border border-slate-700"
                >
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>Preview Live Card</span>
                </Link>

                <button
                  onClick={handleSaveWebsiteInfo}
                  disabled={websiteSaving}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{websiteSaving ? "Saving..." : "Save Card"}</span>
                </button>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 text-xs">
              {/* Card Emblem / Photo Preview & Direct Upload */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 bg-[#0e071c] shrink-0">
                    {editLogoUrl ? (
                      <img src={editLogoUrl} alt="Card Emblem" className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-500">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                    )}
                    {uploadingLogo && (
                      <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-full">
                        <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xs">Digital Card Emblem</h5>
                    <p className="text-[10px] text-slate-400">
                      {editLogoUrl?.includes("/api/business/media/gridfs/")
                        ? "Stored in MongoDB GridFS"
                        : "Current Active Emblem"}
                    </p>
                  </div>
                </div>

                <label className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs cursor-pointer border border-slate-700 transition-all">
                  <Upload className="w-3.5 h-3.5" />
                  <span>{uploadingLogo ? "Uploading..." : "Upload Emblem"}</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleDirectUpload(file, "logo");
                    }}
                    disabled={uploadingLogo}
                  />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Card Practitioner Title</label>
                  <input
                    type="text"
                    value={editCardTitle}
                    onChange={(e) => setEditCardTitle(e.target.value)}
                    placeholder="e.g. Dr. Shalmali Khune"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-slate-400 uppercase font-bold">Card Subtitle / Location</label>
                  <input
                    type="text"
                    value={editCardSubtitle}
                    onChange={(e) => setEditCardSubtitle(e.target.value)}
                    placeholder="e.g. सेक्रेड हीलिंग पाथ • Sacred Healing Path • Pune"
                    className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Modalities Line (Below Name)</label>
                <input
                  type="text"
                  value={editCardModalities}
                  onChange={(e) => setEditCardModalities(e.target.value)}
                  placeholder="e.g. Numerology ✦ Tarot ✦ Crystal & Reiki Healing"
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[10px] text-slate-400 uppercase font-bold">Card About Me Short Paragraph</label>
                <textarea
                  rows={3}
                  value={editCardBio}
                  onChange={(e) => setEditCardBio(e.target.value)}
                  placeholder="Concise bio displayed inside the card container..."
                  className="w-full mt-1 p-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white font-medium outline-none focus:border-amber-400 leading-relaxed"
                />
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-end">
                <button
                  onClick={handleSaveWebsiteInfo}
                  disabled={websiteSaving}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <Save className="w-4 h-4" />
                  <span>{websiteSaving ? "Saving..." : "Save Card Settings"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

