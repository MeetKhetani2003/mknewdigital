"use client";
import React, { useState, useEffect } from "react";
import {
  Building2,
  Plus,
  Search,
  Filter,
  Globe,
  Edit3,
  Copy,
  Trash2,
  ExternalLink,
  CheckCircle,
  Clock,
  Sparkles,
  Lock,
  LogOut,
  RefreshCw,
  Share2,
  Eye,
} from "lucide-react";
import { NewBusinessModal } from "./NewBusinessModal";
import { VisualBuilder } from "./VisualBuilder";

export function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: "admin", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Business List State
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Modals & Active Builder State
  const [newModalOpen, setNewModalOpen] = useState(false);
  const [activeBuilderBusiness, setActiveBuilderBusiness] = useState(null);
  const [activeBuilderWebsite, setActiveBuilderWebsite] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  // Check auth session on mount
  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    setAuthChecking(true);
    try {
      const res = await fetch("/api/business/auth/me");
      const data = await res.json();
      if (data.authenticated) {
        setAuthenticated(true);
        loadBusinesses();
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
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/business/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });
      const data = await res.json();
      if (data.success) {
        setAuthenticated(true);
        loadBusinesses();
      } else {
        setLoginError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/business/auth/logout", { method: "POST" });
    setAuthenticated(false);
  };

  const loadBusinesses = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (cityFilter !== "all") params.append("city", cityFilter);
      if (categoryFilter !== "all") params.append("category", categoryFilter);
      if (statusFilter !== "all") params.append("status", statusFilter);

      const res = await fetch(`/api/business/businesses?${params.toString()}`);
      const data = await res.json();
      if (data.success) {
        setBusinesses(data.businesses || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authenticated) {
      loadBusinesses();
    }
  }, [search, cityFilter, categoryFilter, statusFilter, authenticated]);

  const handleOpenBuilder = async (business) => {
    try {
      const res = await fetch(`/api/business/websites/${business.id}`);
      const data = await res.json();
      setActiveBuilderBusiness(business);
      setActiveBuilderWebsite(data.website || { draftVersion: { sections: [] } });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDuplicate = async (id) => {
    if (confirm("Duplicate this business website?")) {
      try {
        const res = await fetch(`/api/business/businesses/${id}/duplicate`, {
          method: "POST",
        });
        const data = await res.json();
        if (data.success) {
          loadBusinesses();
        }
      } catch (err) {
        alert(err.message);
      }
    }
  };

  const handleTogglePublish = async (business) => {
    const newAction = business.status === "published" ? "unpublish" : "publish";
    try {
      const res = await fetch(`/api/business/businesses/${business.id}/publish`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: newAction }),
      });
      const data = await res.json();
      if (data.success) {
        loadBusinesses();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteBusiness = async (id) => {
    try {
      const res = await fetch(`/api/business/businesses/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setDeleteConfirmId(null);
        loadBusinesses();
      }
    } catch (err) {
      alert(err.message);
    }
  };

  // If in Visual Builder mode, show VisualBuilder component!
  if (activeBuilderBusiness) {
    return (
      <VisualBuilder
        initialBusiness={activeBuilderBusiness}
        initialWebsite={activeBuilderWebsite}
        onExit={() => {
          setActiveBuilderBusiness(null);
          setActiveBuilderWebsite(null);
          loadBusinesses();
        }}
      />
    );
  }

  // Auth checking loader
  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Not Authenticated -> Show Admin Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-10 animate-fade-in">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Lock className="w-7 h-7" />
          </div>

          <h2 className="text-2xl font-black text-slate-900 text-center tracking-tight">
            MK Digital Nexus Admin
          </h2>
          <p className="text-xs text-slate-500 text-center mt-1">
            Dynamic Business Website Builder & Manager
          </p>

          {loginError && (
            <div className="mt-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Admin Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter password (default: mkdigital2026!)"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-700 text-xs font-medium"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full mt-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
            >
              {loginLoading ? "Authenticating..." : "Sign In to Admin"}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-500 mb-2">
              Default credentials: <span className="font-mono font-semibold text-slate-700">admin</span> /{" "}
              <span className="font-mono font-semibold text-slate-700">mkdigital2026!</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setLoginForm({ username: "admin", password: "mkdigital2026!" });
                setLoginError("");
              }}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 underline"
            >
              Click here to auto-fill default credentials
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate Metrics
  const totalBusinesses = businesses.length;
  const publishedCount = businesses.filter((b) => b.status === "published").length;
  const draftCount = businesses.filter((b) => b.status === "draft").length;

  // Extract unique cities & categories for filters
  const cities = Array.from(new Set(businesses.map((b) => b.city).filter(Boolean)));
  const categories = Array.from(new Set(businesses.map((b) => b.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Admin Navigation Bar */}
      <header className="h-16 bg-white border-b border-slate-200/80 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
            MK
          </div>
          <div>
            <h1 className="text-base font-black tracking-tight text-slate-900 leading-tight">
              MK Digital Nexus
            </h1>
            <p className="text-[11px] font-semibold text-slate-400">
              Visual Business Website Builder Platform
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setNewModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Business</span>
          </button>

          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 py-8 space-y-8">
        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Businesses</span>
            <p className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">{totalBusinesses}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Published Websites</span>
            <p className="text-3xl sm:text-4xl font-black text-emerald-600 mt-2">{publishedCount}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Draft Websites</span>
            <p className="text-3xl sm:text-4xl font-black text-amber-600 mt-2">{draftCount}</p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Active Rendering Engine</span>
            <p className="text-sm font-bold text-slate-800 mt-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>26 Dynamic Sections</span>
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by business name, city, category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-600 text-xs font-medium"
            />
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none"
            >
              <option value="all">All Cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl border border-slate-200 bg-white text-xs font-semibold text-slate-700 outline-none"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>

            <button
              onClick={loadBusinesses}
              title="Refresh list"
              className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Business Grid / Cards */}
        {loading ? (
          <div className="py-24 text-center">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-slate-400 mt-3">Loading businesses...</p>
          </div>
        ) : businesses.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No Business Websites Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Create your first client business website using our 4-step wizard or adjust your search filters.
            </p>
            <button
              onClick={() => setNewModalOpen(true)}
              className="mt-6 px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Create First Business</span>
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((biz) => {
              const isPub = biz.status === "published";
              const publicUrl = `/business/${biz.slug}?city=${encodeURIComponent(biz.city || "")}&category=${encodeURIComponent(biz.category || "")}`;

              return (
                <div
                  key={biz.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Header badge & status */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {biz.city || "Junagadh"}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                          isPub
                            ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                            : "bg-amber-100 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {isPub ? "Published" : "Draft"}
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      {biz.logo ? (
                        <img src={biz.logo} alt="Logo" className="w-12 h-12 rounded-xl object-contain border border-slate-100 p-1" />
                      ) : (
                        <div
                          style={{ backgroundColor: biz.theme?.primaryColor || "#1B6FD6" }}
                          className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shrink-0 shadow-sm"
                        >
                          {biz.businessName.charAt(0).toUpperCase()}
                        </div>
                      )}

                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-base text-slate-900 truncate group-hover:text-blue-600 transition-colors">
                          {biz.businessName}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 truncate">{biz.category}</p>
                      </div>
                    </div>

                    {/* Slug & Details */}
                    <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] space-y-1.5 text-slate-500 font-mono">
                      <p className="truncate text-slate-700 font-semibold">
                        /business/{biz.slug}
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Theme: {biz.theme?.preset || "Modern Business"}
                      </p>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleOpenBuilder(biz)}
                      className="flex-1 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Open Builder</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleTogglePublish(biz)}
                        title={isPub ? "Unpublish Website" : "Publish Live Website"}
                        className={`p-2 rounded-xl border text-xs font-semibold transition-colors ${
                          isPub
                            ? "border-emerald-200 text-emerald-600 hover:bg-emerald-50"
                            : "border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        <Globe className="w-4 h-4" />
                      </button>

                      <a
                        href={`${publicUrl}&preview=true`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Preview Public Website"
                        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </a>

                      <button
                        onClick={() => handleDuplicate(biz.id)}
                        title="Duplicate Website"
                        className="p-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors"
                      >
                        <Copy className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setDeleteConfirmId(biz.id)}
                        title="Delete Business"
                        className="p-2 rounded-xl border border-slate-200 hover:bg-red-50 text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* New Business Modal */}
      <NewBusinessModal
        isOpen={newModalOpen}
        onClose={() => setNewModalOpen(false)}
        onCreated={(createdBiz) => {
          loadBusinesses();
          handleOpenBuilder(createdBiz);
        }}
      />

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-slate-200 text-center animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900">Delete Business Website?</h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              This action will permanently delete this business configuration and all associated sections. This cannot be undone.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 font-semibold text-xs text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteBusiness(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

