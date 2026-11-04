"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import * as htmlToImage from "html-to-image";
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  Share2,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Award,
  Clock,
  Headphones,
  Check,
  Copy,
  QrCode,
  Download,
  Building2,
  Sparkles,
  ArrowLeft,
  X,
  MessageCircle,
  UserCheck,
  Calendar,
  Compass,
  Heart,
  TrendingUp,
  Users,
  Sun,
  Send,
  User,
  Star,
  Image as ImageIcon,
} from "lucide-react";
import { CosmicParticlesCanvas } from "./CosmicParticlesCanvas";

export function DigitalCardRenderer({
  card = {},
  business = {},
  isPreview = false,
  showDesktopFrame = false,
}) {
  const cardRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [downloadingImage, setDownloadingImage] = useState(false);

  // Astrology Specific Interactive Modals
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [servicesModalOpen, setServicesModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  // Booking Form State
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [selectedService, setSelectedService] = useState("Astrology Consultation");
  const [clientDate, setClientDate] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Extract card profile data (prefer published, fallback to draft)
  const profile = card.publishedVersion || card.draftVersion || {};
  const theme = profile.theme || {};
  const cards = profile.cards || [];
  const socialLinks = profile.socialLinks || [];
  const features = profile.features || [];

  const cardSlug = business.slug || profile.slug || "dr-shalmali-khune";
  const publicCardUrl = `https://mkdigitalnexus.in/business/${cardSlug}/digitalcard`;
  const websiteUrl = `/business/${cardSlug}`;
  const vcardUrl = `/api/business/digitalcard/${business.id || card.businessId || "6aeb074697a075aeb4e2ae95"}/vcard`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(publicCardUrl)}&margin=10`;

  const phone = business.contactDetails?.phone || profile.phone || "+91 9673791575";
  const rawWa = (business.contactDetails?.whatsapp || phone).replace(/[^\d]/g, "");
  const cleanWa = rawWa.startsWith("91") ? rawWa : `91${rawWa}`;
  const email = business.contactDetails?.email || profile.email || "sacredhealingpath11@gmail.com";
  const address = business.contactDetails?.address || "Pune, Maharashtra";
  const logo = profile.avatarUrl || business.logo || "/images/sacred-healing/logo.jpg";

  const instagramUrl =
    profile.socialLinks?.find((s) => s.platform === "instagram")?.url ||
    business.socialLinks?.find((s) => s.platform === "instagram")?.url ||
    "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5";
  const facebookUrl =
    profile.socialLinks?.find((s) => s.platform === "facebook")?.url ||
    business.socialLinks?.find((s) => s.platform === "facebook")?.url ||
    "https://www.facebook.com/share/1M9JNPzhPz/";

  // Check if this card should render the Sacred Astrology & Numerology Layout
  const isAstrologyCard =
    profile.layout === "astrology-grid" ||
    profile.theme?.preset === "sacred-astrology" ||
    profile.theme?.preset === "royal-gold" ||
    business.slug === "dr-shalmali-khune" ||
    business.category?.toLowerCase().includes("astrology") ||
    business.category?.toLowerCase().includes("tarot");

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(publicCardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: profile.name || business.businessName,
          text: `Check out the official digital business card of ${profile.name || business.businessName}`,
          url: publicCardUrl,
        });
      } catch (e) {
        // Ignored
      }
    } else {
      setShareModalOpen(true);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);

    try {
      await fetch("/api/business/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessId: business.id || card.businessId || "6aeb074697a075aeb4e2ae95",
          slug: cardSlug,
          name: clientName,
          phone: clientPhone,
          email: clientEmail,
          service: selectedService,
          preferredDate: clientDate,
          message: clientNotes,
          source: "digital-card",
        }),
      });

      setBookingSuccess(true);

      const msg = encodeURIComponent(
        `Hello Dr. Shalmali Khune (Sacred Healing Path),\nI booked a consultation via your Digital Card.\n• Name: ${clientName}\n• Phone: ${clientPhone}\n• Service: ${selectedService}\n• Preferred Date: ${clientDate || "Upcoming available"}\n• Notes: ${clientNotes || "Looking for guidance"}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${cleanWa}?text=${msg}`, "_blank");
      }, 700);
    } catch (err) {
      alert("Error booking consultation: " + err.message);
    } finally {
      setBookingLoading(false);
    }
  };

  const handleDownloadCardImage = async () => {
    if (!cardRef.current) return;
    setDownloadingImage(true);
    try {
      // Allow DOM state to settle
      await new Promise((r) => setTimeout(r, 80));

      const filter = (node) => {
        // Exclude elements marked with no-export (e.g. the download button itself)
        if (node?.classList && node.classList.contains("no-export")) {
          return false;
        }
        return true;
      };

      const dataUrl = await htmlToImage.toPng(cardRef.current, {
        quality: 0.98,
        pixelRatio: 2,
        cacheBust: true,
        filter,
        style: {
          height: "auto",
          maxHeight: "none",
          overflow: "visible",
        },
      });

      const cleanName = (profile.name || business.businessName || "Dr_Shalmali_Khune")
        .replace(/[^a-zA-Z0-9_-]/g, "_");
      const link = document.createElement("a");
      link.download = `${cleanName}_DigitalCard.png`;
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Card image export error:", err);
      alert("Unable to generate card image. Please try again.");
    } finally {
      setDownloadingImage(false);
    }
  };

  const renderIcon = (iconName, className = "w-4 h-4") => {
    switch (iconName) {
      case "globe":
        return <Globe className={className} />;
      case "message":
      case "whatsapp":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 2C6.516 2 2.016 6.5 2.016 12.016c0 1.945.547 3.773 1.508 5.344L2.016 22l4.805-1.477c1.516.891 3.289 1.406 5.211 1.406 5.516 0 10.016-4.5 10.016-10.016 0-5.516-4.5-10.016-10.016-10.016zm5.82 14.18c-.242.68-1.219 1.305-1.742 1.383-.492.078-1.109.117-3.563-.898-3.133-1.297-5.148-4.484-5.305-4.695-.148-.211-1.258-1.672-1.258-3.187 0-1.516.789-2.258 1.07-2.555.281-.297.609-.375.812-.375.203 0 .406.008.578.016.188.016.438-.07.688.531.25.602.859 2.094.93 2.25.078.156.125.344.023.547-.094.203-.141.328-.281.5-.148.164-.312.375-.445.508-.148.148-.305.312-.133.609.172.297.766 1.258 1.641 2.039 1.125 1.008 2.07 1.32 2.367 1.469.297.148.469.133.641-.07.172-.203.742-.867.945-1.164.203-.297.406-.25.688-.148.281.102 1.781.844 2.086.992.305.148.508.227.586.352.078.125.078.719-.164 1.398z" />
          </svg>
        );
      case "phone":
        return <Phone className={className} />;
      case "mail":
        return <Mail className={className} />;
      case "map":
      case "map-pin":
        return <MapPin className={className} />;
      case "instagram":
        return (
          <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "facebook":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "youtube":
        return (
          <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      case "user":
        return <UserCheck className={className} />;
      case "award":
        return <Award className={className} />;
      case "clock":
        return <Clock className={className} />;
      default:
        return <ExternalLink className={className} />;
    }
  };

  // =========================================================================
  // VIEW 1: VIBRANT CELESTIAL ASTROLOGY DIGITAL CARD (STATIC BG + PARALLAX SCROLL)
  // =========================================================================
  const AstrologyDigitalCardView = (
    <div
      ref={cardRef}
      className="relative z-10 w-full max-w-[430px] sm:max-w-[450px] h-[88vh] max-h-[860px] min-h-[660px] flex flex-col overflow-hidden rounded-[38px] sm:rounded-[44px] border-2 border-[#E5B84C]/80 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_50px_rgba(229,184,76,0.35),0_0_25px_rgba(16,185,129,0.2)] bg-gradient-to-b from-[#120726] via-[#0b0517] to-[#140b24] text-white select-none"
    >
      {/* ======================================================= */}
      {/* STATIC CELESTIAL BACKDROP (REMAINS FIXED DURING SCROLL)  */}
      {/* ======================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Layer A: Real Mountain Sunrise Celestial Image Overlay (Static Anchor) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${business.backgroundImage || "/api/business/media/gridfs/6aeb2260e1a5ffa0e214c051"})`,
          }}
        />

        {/* Layer B: Radiant Golden Sunburst Behind Emblem */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-tr from-[#E5B84C]/35 via-[#F59E0B]/25 to-transparent blur-3xl pointer-events-none animate-pulse" />

        {/* Layer C: Rotating Sacred Zodiac Astrological Mandala Watermark */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] opacity-25 pointer-events-none">
          <svg
            className="w-full h-full text-[#E5B84C] animate-[spin_100s_linear_infinite]"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="200" cy="200" r="190" strokeWidth="1.5" strokeDasharray="3 4" />
            <circle cx="200" cy="200" r="160" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="110" strokeWidth="1" strokeDasharray="6 3" />
            <circle cx="200" cy="200" r="60" strokeWidth="1.5" fill="rgba(229, 184, 76, 0.08)" />
            {[...Array(12)].map((_, i) => {
              const a = (i * 30 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={200 + 60 * Math.cos(a)}
                  y1={200 + 60 * Math.sin(a)}
                  x2={200 + 190 * Math.cos(a)}
                  y2={200 + 190 * Math.sin(a)}
                  strokeWidth="1.2"
                />
              );
            })}
          </svg>
        </div>

        {/* Layer D: Starlight Matrix Grid */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `radial-gradient(rgba(229, 184, 76, 0.5) 1.5px, transparent 1.5px)`,
            backgroundSize: "26px 26px",
          }}
        />

        {/* Layer E: Glowing Sunrise Horizon at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f59e0b]/40 via-[#b45309]/20 to-transparent pointer-events-none" />

        {/* Layer F: Interactive Live Floating Particles Strictly Inside Card */}
        <CosmicParticlesCanvas count={38} speed={0.35} className="absolute inset-0 pointer-events-none z-0" />
      </div>

      {/* ======================================================= */}
      {/* SCROLLABLE FOREGROUND CONTENT WITH LUXURY PARALLAX GLIDE*/}
      {/* (NO SCROLLBAR: Completely invisible scrollbar across all browsers) */}
      {/* ======================================================= */}
      <div className="relative z-10 w-full h-full overflow-y-auto overscroll-contain no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden flex flex-col justify-between scroll-smooth">
        {/* Top Action Pills (Full Website & Share) */}
        <div className="no-export w-full px-5 pt-5 flex items-center justify-between text-xs shrink-0">
          <Link
            href={websiteUrl}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#120726]/85 hover:bg-[#1f0d3d] backdrop-blur-md border border-[#E5B84C]/50 text-white font-semibold transition-all duration-200 hover:scale-105 shadow-md"
            title="Visit Full Website"
          >
            <Globe className="w-3.5 h-3.5 text-[#E5B84C]" />
            <span>Full Website</span>
          </Link>

          <button
            onClick={() => setShareModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#120726]/85 hover:bg-[#1f0d3d] backdrop-blur-md border border-[#E5B84C]/50 text-white font-semibold transition-all duration-200 hover:scale-105 shadow-md"
            title="Share & QR Code"
          >
            <Share2 className="w-3.5 h-3.5 text-[#E5B84C]" />
            <span>Share</span>
          </button>
        </div>

      {/* Main Content Body */}
      <main className="relative z-10 w-full px-5 sm:px-7 flex flex-col items-center pt-3 pb-8">
        {/* Emblem Logo Badge with Golden Aura */}
        <div
          className="relative mb-2 group cursor-pointer"
          onClick={() => setAboutModalOpen(true)}
          title="Tap to view Dr. Shalmali's profile"
        >
          <div className="absolute -inset-4 rounded-full bg-[#E5B84C]/45 blur-2xl pointer-events-none animate-pulse" />
          <div className="relative w-30 h-30 sm:w-34 sm:h-34 rounded-full p-1.5 bg-gradient-to-tr from-[#E5B84C] via-[#FBBF24] to-[#10B981] shadow-[0_0_55px_rgba(229,184,76,0.65)] transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Sacred Healing Path Emblem"
              className="w-full h-full object-cover rounded-full bg-[#0d071a]"
            />
          </div>
        </div>

        {/* Title: Dr. Shalmali Khune */}
        <div className="text-center mt-1">
          <h1 className="font-serif italic text-2xl sm:text-[29px] font-black tracking-wide leading-tight">
            <span className="text-white drop-shadow-md">Dr. Shalmali </span>
            <span className="bg-gradient-to-r from-[#FFF5D6] via-[#E5B84C] to-[#D97706] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(229,184,76,0.6)]">
              Khune
            </span>
          </h1>

          {/* Subheading: Modalities with Sacred Emerald Accents */}
          <p className="font-serif text-xs sm:text-[13px] text-[#E5B84C] tracking-wide font-medium mt-1 drop-shadow">
            Numerology <span className="text-[#10B981] px-0.5">✦</span> Tarot{" "}
            <span className="text-[#10B981] px-0.5">✦</span> Crystal & Reiki Healing
          </p>

          <p className="text-[10px] sm:text-[10.5px] text-slate-200 font-semibold mt-0.5 tracking-wider uppercase opacity-95">
            <span className="text-[#10B981] font-bold">सेक्रेड हीलिंग पाथ</span> • Sacred Healing Path • Pune
          </p>
        </div>

        {/* Information Paragraph About Dr. Shalmali Khune (Requested by User) */}
        <div className="w-full mt-3 px-1 text-center">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-black/55 backdrop-blur-md border border-[#E5B84C]/40 shadow-inner">
            <p className="text-[11.5px] sm:text-[12px] text-slate-100/95 leading-relaxed font-light">
              {profile.bio ||
                business.businessInformation?.about ||
                "As a passionate Numerologist, Tarot Reader, Life Coach, Crystal Healer, and Reiki Healer, I help individuals gain clarity, overcome challenges and make aligned life decisions. Combining ancient cosmic wisdom with intuitive guidance for holistic well-being."}
            </p>
          </div>
        </div>

        {/* 6-ACTION QUICK BUTTONS GRID (VIBRANT PEARL-GOLD) */}
        <div className="w-full grid grid-cols-3 gap-y-4 gap-x-3 my-5 px-1">
          {/* 1. Call */}
          <a
            href={`tel:${phone}`}
            className="flex flex-col items-center group cursor-pointer select-none"
            title={`Call ${phone}`}
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors drop-shadow">
              Call
            </span>
          </a>

          {/* 2. WhatsApp */}
          <a
            href={`https://wa.me/${cleanWa}?text=${encodeURIComponent("Hello Dr. Shalmali Khune, I would like to consult with you regarding Astrology / Numerology / Tarot guidance.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer select-none"
            title="Chat on WhatsApp"
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 2C6.516 2 2.016 6.5 2.016 12.016c0 1.945.547 3.773 1.508 5.344L2.016 22l4.805-1.477c1.516.891 3.289 1.406 5.211 1.406 5.516 0 10.016-4.5 10.016-10.016 0-5.516-4.5-10.016-10.016-10.016zm5.82 14.18c-.242.68-1.219 1.305-1.742 1.383-.492.078-1.109.117-3.563-.898-3.133-1.297-5.148-4.484-5.305-4.695-.148-.211-1.258-1.672-1.258-3.187 0-1.516.789-2.258 1.07-2.555.281-.297.609-.375.812-.375.203 0 .406.008.578.016.188.016.438-.07.688.531.25.602.859 2.094.93 2.25.078.156.125.344.023.547-.094.203-.141.328-.281.5-.148.164-.312.375-.445.508-.148.148-.305.312-.133.609.172.297.766 1.258 1.641 2.039 1.125 1.008 2.07 1.32 2.367 1.469.297.148.469.133.641-.07.172-.203.742-.867.945-1.164.203-.297.406-.25.688-.148.281.102 1.781.844 2.086.992.305.148.508.227.586.352.078.125.078.719-.164 1.398z" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors drop-shadow">
              WhatsApp
            </span>
          </a>

          {/* 3. Email */}
          <a
            href={`mailto:${email}`}
            className="flex flex-col items-center group cursor-pointer select-none"
            title={`Email ${email}`}
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors drop-shadow">
              Email
            </span>
          </a>

          {/* 4. Book Consultation */}
          <button
            onClick={() => {
              setBookingSuccess(false);
              setBookingModalOpen(true);
            }}
            className="flex flex-col items-center group cursor-pointer select-none"
            title="Book a Consultation Session"
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors text-center leading-tight drop-shadow">
              Book<br />Consultation
            </span>
          </button>

          {/* 5. Services */}
          <button
            onClick={() => setServicesModalOpen(true)}
            className="flex flex-col items-center group cursor-pointer select-none"
            title="View Astrology, Numerology & Tarot Services"
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="3" />
                <line x1="12" y1="3" x2="12" y2="9" />
                <line x1="12" y1="15" x2="12" y2="21" />
                <line x1="3" y1="12" x2="9" y2="12" />
                <line x1="15" y1="12" x2="21" y2="12" />
              </svg>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors drop-shadow">
              Services
            </span>
          </button>

          {/* 6. About Me */}
          <button
            onClick={() => setAboutModalOpen(true)}
            className="flex flex-col items-center group cursor-pointer select-none"
            title="About Dr. Shalmali Khune"
          >
            <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-gradient-to-br from-[#fff2df] via-[#fae0be] to-[#e4af78] text-[#3d1f05] flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.6),inset_0_2px_1px_rgba(255,255,255,0.9)] border-2 border-white/70 group-hover:scale-110 active:scale-95 transition-all duration-200">
              <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 mt-1.5 tracking-wide group-hover:text-[#E5B84C] transition-colors drop-shadow">
              About Me
            </span>
          </button>
        </div>

        {/* PROMINENT ACTION BUTTONS: SAVE CONTACT & DOWNLOAD CARD IMAGE */}
        <div className="w-full px-2 my-2 space-y-2.5">
          <a
            href={vcardUrl}
            download="Dr_Shalmali_Khune.vcf"
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] text-[#140628] font-black text-sm uppercase tracking-wider shadow-[0_14px_40px_rgba(229,184,76,0.65),inset_0_2px_1px_rgba(255,255,255,0.85)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            title="Save Contact to Phone (.vcf)"
          >
            <Download className="w-4 h-4 stroke-[3] group-hover:translate-y-0.5 transition-transform" />
            <span className="font-extrabold tracking-wide">Save Contact</span>
          </a>

          <button
            onClick={handleDownloadCardImage}
            disabled={downloadingImage}
            className="no-export w-full py-3.5 px-6 rounded-full bg-[#120726]/90 hover:bg-[#1f0d3d] border-2 border-[#10B981]/70 hover:border-[#E5B84C] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            title="Download Card in Image Format (.png)"
          >
            {downloadingImage ? (
              <>
                <div className="w-4 h-4 border-2 border-[#E5B84C] border-t-transparent rounded-full animate-spin" />
                <span className="text-[#E5B84C]">Generating Card Image...</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-4 h-4 text-[#10B981] stroke-[2.2]" />
                <span>Download Card (Image)</span>
              </>
            )}
          </button>
        </div>

        {/* SOCIAL ICONS ROW (INSTAGRAM, FACEBOOK, WHATSAPP) */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#120726]/90 border border-[#E5B84C]/60 text-white hover:text-[#10B981] hover:border-[#10B981] flex items-center justify-center shadow-lg transition-all hover:scale-115"
            title="Instagram"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#120726]/90 border border-[#E5B84C]/60 text-white hover:text-[#10B981] hover:border-[#10B981] flex items-center justify-center shadow-lg transition-all hover:scale-115"
            title="Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href={`https://wa.me/${cleanWa}?text=${encodeURIComponent("Hello Dr. Shalmali Khune, I would like to consult with you.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#120726]/90 border border-[#E5B84C]/60 text-white hover:text-[#10B981] hover:border-[#10B981] flex items-center justify-center shadow-lg transition-all hover:scale-115"
            title="WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 2C6.516 2 2.016 6.5 2.016 12.016c0 1.945.547 3.773 1.508 5.344L2.016 22l4.805-1.477c1.516.891 3.289 1.406 5.211 1.406 5.516 0 10.016-4.5 10.016-10.016 0-5.516-4.5-10.016-10.016-10.016zm5.82 14.18c-.242.68-1.219 1.305-1.742 1.383-.492.078-1.109.117-3.563-.898-3.133-1.297-5.148-4.484-5.305-4.695-.148-.211-1.258-1.672-1.258-3.187 0-1.516.789-2.258 1.07-2.555.281-.297.609-.375.812-.375.203 0 .406.008.578.016.188.016.438-.07.688.531.25.602.859 2.094.93 2.25.078.156.125.344.023.547-.094.203-.141.328-.281.5-.148.164-.312.375-.445.508-.148.148-.305.312-.133.609.172.297.766 1.258 1.641 2.039 1.125 1.008 2.07 1.32 2.367 1.469.297.148.469.133.641-.07.172-.203.742-.867.945-1.164.203-.297.406-.25.688-.148.281.102 1.781.844 2.086.992.305.148.508.227.586.352.078.125.078.719-.164 1.398z" />
            </svg>
          </a>
        </div>

        {/* Location & Trust Footer */}
        <div className="mt-8 text-center text-xs text-slate-200 font-medium flex items-center justify-center gap-1.5 opacity-90 drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-[#E5B84C]" />
          <span>Pune, Maharashtra • Worldwide Online Consultations</span>
        </div>
      </main>
    </div>
  </div>
  );

  // =========================================================================
  // VIEW 2: HORIZONTAL ACTION PILL CARDS (FOR OTHER PRESETS)
  // =========================================================================
  const StandardHorizontalCardView = (
    <div
      ref={!isAstrologyCard ? cardRef : null}
      className="relative z-10 w-full max-w-[440px] min-h-screen flex flex-col justify-between overflow-x-hidden sm:rounded-[36px] sm:border sm:border-white/15 sm:my-6 sm:shadow-[0_25px_80px_rgba(0,0,0,0.9)] bg-[#050912]/90 backdrop-blur-xl"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden sm:rounded-[36px] z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-[1]" />
      </div>

      <main className="relative z-10 w-full px-5 flex flex-col items-center pt-8 sm:pt-10">
        <div className="no-export w-full flex items-center justify-between mb-3 px-1 text-xs">
          <Link
            href={websiteUrl}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/90 font-medium transition-all duration-200 hover:scale-105"
            title="View Full Website"
          >
            <Globe className="w-3.5 h-3.5 text-amber-300" />
            <span>Full Website</span>
          </Link>

          <button
            onClick={() => setShareModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/90 font-medium transition-all duration-200 hover:scale-105"
            title="Share & QR Code"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Share</span>
          </button>
        </div>

        <div className="relative mb-3 group cursor-pointer" onClick={() => setShareModalOpen(true)}>
          <div className="absolute -inset-4 rounded-full bg-amber-400/40 blur-xl pointer-events-none animate-pulse" />
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-1 shadow-2xl border-2 border-amber-300">
            {profile.avatarUrl || business.logo ? (
              <img
                src={profile.avatarUrl || business.logo}
                alt={profile.name || business.businessName}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div
                style={{ backgroundColor: theme.accentColor || "#F59E0B" }}
                className="w-full h-full rounded-full flex items-center justify-center text-slate-950 font-black text-4xl shadow-inner"
              >
                {(profile.name || business.businessName || "B").charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>

        <div className="text-center mt-1">
          <h1 className="text-[25px] sm:text-[28px] font-black tracking-wider uppercase text-white font-serif drop-shadow-lg">
            {profile.name || business.businessName}
          </h1>
          <p className="text-[12.5px] sm:text-[13px] text-white/95 font-medium tracking-wide mt-1 max-w-xs mx-auto">
            {profile.designation || business.businessInformation?.tagline}
          </p>
        </div>

        {/* Bio / About text if available */}
        {(profile.bio || business.businessInformation?.about) && (
          <div className="w-full mt-3 px-1 text-center">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-xs">
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                {profile.bio || business.businessInformation?.about}
              </p>
            </div>
          </div>
        )}

        <div className="w-full space-y-3 mt-4">
          {cards.map((item) => (
            <a
              key={item.id}
              href={item.actionTarget || "#"}
              className={`relative w-full h-[68px] sm:h-[72px] rounded-full overflow-hidden flex items-center justify-between px-4 bg-gradient-to-r ${item.gradient || "from-[#fae8d2] via-[#f7d6b3] to-[#e7b889]"} border border-white/40 shadow-lg hover:scale-102 transition-all cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-black/80 text-amber-300 flex items-center justify-center">
                  {renderIcon(item.icon, "w-5 h-5")}
                </div>
                <div>
                  <span className="text-sm font-bold text-slate-900 block">{item.title}</span>
                  <span className="text-xs text-slate-600 block">{item.subtitle}</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-900" />
            </a>
          ))}
        </div>

        {/* Action Buttons: Save Contact & Download Image */}
        <div className="w-full space-y-2 mt-4 px-1">
          <a
            href={vcardUrl}
            download={`${(profile.name || business.businessName || "contact").replace(/\s+/g, "_")}.vcf`}
            className="w-full py-3.5 px-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all hover:brightness-110"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Save Contact (.vcf)</span>
          </a>

          <button
            onClick={handleDownloadCardImage}
            disabled={downloadingImage}
            className="no-export w-full py-3 px-4 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-60"
          >
            {downloadingImage ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
                <span>Exporting Image...</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Card (Image)</span>
              </>
            )}
          </button>
        </div>
      </main>

      <footer className="relative z-10 w-full px-5 py-6 text-center text-xs text-slate-400">
        <p>{profile.trustBadge?.text || "YOUR TRUSTED BUSINESS PARTNER"}</p>
      </footer>
    </div>
  );

  const activeCardView = isAstrologyCard ? AstrologyDigitalCardView : StandardHorizontalCardView;

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#07010f] text-white font-sans select-none overflow-x-hidden py-6 sm:py-10 px-3 sm:px-4">
      {/* ========================================================= */}
      {/* SERENE OBSIDIAN VELVET BACKDROP (NO SPREADING PARTICLES!) */}
      {/* ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-b from-[#120324] via-[#090114] to-[#05000a]">
        {/* Soft, gentle radial glow centered behind the card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#E5B84C]/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* CENTERED MOBILE CARD VIEW - IDENTICAL ON PC & MOBILE      */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {activeCardView}
      </div>

      {/* ========================================================= */}
      {/* MODAL 1: CONSULTATION BOOKING                             */}
      {/* ========================================================= */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-[#140628] border border-[#E5B84C]/50 p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#E5B84C] animate-pulse" />
              <p className="text-[11px] font-bold text-[#E5B84C] uppercase tracking-wider">
                Sacred Healing Path
              </p>
            </div>
            <h3 className="font-serif italic text-2xl font-bold text-white">
              Book a Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Guidance for Clarity · Healing for Balance · Alignment for a Better Life
            </p>

            {bookingSuccess ? (
              <div className="my-6 p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-white">Booking Request Received!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your inquiry has been saved into Dr. Shalmali Khune’s portal and WhatsApp is connecting to confirm your slot.
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#E5B84C] text-[#110424] font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B84C]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B84C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={clientDate}
                      onChange={(e) => setClientDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white text-xs focus:outline-none focus:border-[#E5B84C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Consultation Service
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white text-xs focus:outline-none focus:border-[#E5B84C]"
                  >
                    <option value="Tarot Consultation">Tarot Consultation</option>
                    <option value="Numerological Report">Numerological Report</option>
                    <option value="Mobile Numerology">Mobile Numerology</option>
                    <option value="Name Numerology">Name Numerology</option>
                    <option value="Crystal and Gemstone guidance">Crystal and Gemstone Guidance</option>
                    <option value="Tarot spells">Tarot Spells & Rituals</option>
                    <option value="Combined Holistic Consultation">Reiki & Life Coaching Holistic Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Brief Query / Concern (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={clientNotes}
                    onChange={(e) => setClientNotes(e.target.value)}
                    placeholder="e.g. Career transition, relationship harmony, mobile number analysis..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B84C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] text-[#110424] font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {bookingLoading ? (
                    <span>Booking Session...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm & Connect on WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: SERVICES SHOWCASE (ALL 6 CLIENT MODALITIES)       */}
      {/* ========================================================= */}
      {servicesModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-[#140628] border border-[#E5B84C]/50 p-6 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setServicesModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif italic text-2xl font-bold text-white">
              Sacred Services
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Holistic Guidance & Ancient Wisdom for Modern Living
            </p>

            <div className="mt-5 space-y-3.5">
              {/* 1. Tarot Consultation */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Tarot Consultation</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Intuitive answers and clarity for career, love, relationships, and major upcoming life decisions.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Tarot Consultation");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Book Tarot Session →
                  </button>
                </div>
              </div>

              {/* 2. Numerological Report */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0 font-mono font-black text-xs">
                  123
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Numerological Report</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Comprehensive life chart mapping core life path, destiny, strengths, and optimal life cycles.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Numerological Report");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Get Detailed Report →
                  </button>
                </div>
              </div>

              {/* 3. Mobile Numerology */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Mobile Numerology</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Harmonize your contact number frequency with birth vibrations to attract business and good fortune.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Mobile Numerology");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Analyze Mobile Number →
                  </button>
                </div>
              </div>

              {/* 4. Name Numerology */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0 font-serif font-black text-xs">
                  Abc
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Name Numerology</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Auspicious name spelling correction aligned to your destiny numbers for prosperity and harmony.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Name Numerology");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Book Name Correction →
                  </button>
                </div>
              </div>

              {/* 5. Crystal and Gemstone Guidance */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Crystal & Gemstone Guidance</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Authentic energized crystals and gemstone suggestions tailored to balance chakras and eliminate aura blockages.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Crystal and Gemstone guidance");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Get Crystal Guidance →
                  </button>
                </div>
              </div>

              {/* 6. Tarot Spells */}
              <div className="p-3.5 rounded-2xl bg-[#1c0836] border border-[#E5B84C]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/50 text-[#E5B84C] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-white">Tarot Spells</h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    Sacred energetic manifestation rituals, positive energy spells for protection, abundance, and inner peace.
                  </p>
                  <button
                    onClick={() => {
                      setServicesModalOpen(false);
                      setSelectedService("Tarot spells");
                      setBookingModalOpen(true);
                    }}
                    className="mt-1.5 text-xs font-bold text-[#E5B84C] hover:underline"
                  >
                    Book Tarot Spells →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: ABOUT DR. SHALMALI KHUNE                         */}
      {/* ========================================================= */}
      {aboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-[#140628] border border-[#E5B84C]/50 p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setAboutModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309]">
                <img src={logo} alt="" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl font-bold text-white">
                  Dr. Shalmali Khune
                </h3>
                <p className="text-xs text-[#E5B84C]">Sacred Healing Path • Pune</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              As a passionate Numerologist, Tarot Reader, Life Coach, Crystal Healer, and Reiki Healer, I help individuals gain clarity, overcome challenges and make aligned life decisions. My approach combines ancient cosmic wisdom with intuitive guidance for holistic well-being.
            </p>

            <div className="grid grid-cols-3 gap-2.5 my-5 text-center p-3 rounded-2xl bg-[#1b0833] border border-[#E5B84C]/20">
              <div>
                <p className="font-serif text-lg font-bold text-[#E5B84C]">7+</p>
                <p className="text-[10px] text-slate-400">Years Exp</p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-[#E5B84C]">3,500+</p>
                <p className="text-[10px] text-slate-400">Clients</p>
              </div>
              <div>
                <p className="font-serif text-lg font-bold text-[#E5B84C]">100%</p>
                <p className="text-[10px] text-slate-400">Private</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E5B84C]" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E5B84C]" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E5B84C]" />
                <span>{email}</span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E5B84C]/20 flex gap-2">
              <button
                onClick={() => {
                  setAboutModalOpen(false);
                  setBookingModalOpen(true);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#E5B84C] text-[#110424] font-bold text-xs uppercase text-center"
              >
                Book Session
              </button>
              <Link
                href={websiteUrl}
                className="flex-1 py-2.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase text-center hover:bg-white/15"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: SHARE / QR CODE                                  */}
      {/* ========================================================= */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-sm rounded-3xl bg-[#140628] border border-[#E5B84C]/50 p-6 shadow-2xl text-center">
            <button
              onClick={() => setShareModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif italic text-lg font-black text-white">Share Digital Card</h3>
            <p className="text-xs text-slate-400 mt-1">
              Scan with camera or share link with anyone
            </p>

            <div className="my-5 p-3 rounded-2xl bg-white inline-block shadow-md">
              <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48 rounded-lg" />
            </div>

            <div className="space-y-2">
              <a
                href={vcardUrl}
                download="Dr_Shalmali_Khune.vcf"
                className="w-full py-2.5 rounded-xl bg-[#E5B84C] text-[#110424] font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Contact to Phone (.vcf)</span>
              </a>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Check out the digital card for Dr. Shalmali Khune (Sacred Healing Path): ${publicCardUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Share via WhatsApp</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="w-full py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/15 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied!" : "Copy Public Link"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
