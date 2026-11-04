"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Star,
  Award,
  Clock,
  Heart,
  Compass,
  TrendingUp,
  Users,
  Sun,
  Moon,
  ShieldCheck,
  Send,
  X,
  Share2,
  Image as ImageIcon,
  ZoomIn,
  Eye,
  Filter,
} from "lucide-react";
import { CosmicParticlesCanvas } from "../CosmicParticlesCanvas";

export function SacredAstrologyTemplate({
  business = {},
  website = {},
  isEditing = false,
}) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Astrology Consultation");
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Gallery State
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  // Form State
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientDate, setClientDate] = useState("");
  const [clientTime, setClientTime] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);

  const phone = business.contactDetails?.phone || "+91 9673791575";
  const whatsapp = (business.contactDetails?.whatsapp || phone).replace(/[^\d]/g, "");
  const cleanWa = whatsapp.startsWith("91") ? whatsapp : `91${whatsapp}`;
  const email = business.contactDetails?.email || "sacredhealingpath11@gmail.com";
  const address = business.contactDetails?.address || "Pune, Maharashtra";
  const slug = business.slug || "dr-shalmali-khune";
  const digitalCardUrl = `/business/${slug}/digitalcard`;
  const logo = business.logo || "/images/sacred-healing/logo.jpg";
  const portraitPhoto =
    business.businessInformation?.ownerPhoto ||
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80";
  const instagramUrl =
    business.socialLinks?.find((s) => s.platform === "instagram")?.url ||
    "https://www.instagram.com/sacr_ed_healingpath?utm_source=qr&exln=czIxd2dwODRzejM5";
  const facebookUrl =
    business.socialLinks?.find((s) => s.platform === "facebook")?.url ||
    "https://www.facebook.com/share/1M9JNPzhPz/";
  const bio =
    business.businessInformation?.about ||
    "As a passionate Numerologist, Tarot Reader, Life Coach, Crystal Healer, and Reiki Healer, I help individuals gain clarity, overcome challenges and make aligned life decisions. Combining ancient cosmic wisdom with intuitive guidance for holistic well-being.";
  const ownerName = business.businessInformation?.ownerName || "Dr. Shalmali Khune";
  const businessName = business.businessName || "Sacred Healing Path";
  const heroSubtitle =
    business.businessInformation?.heroSubtitle ||
    "Guidance for Clarity · Healing for Balance · Alignment for a Better Life";
  const heroBadge =
    business.businessInformation?.tagline ||
    "सेक्रेड हीलिंग पाथ • Numerologist, Tarot Reader, Life Coach, Crystal & Reiki Healer";
  const tagline = heroBadge;

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

  const servicesList =
    business.businessInformation?.services && business.businessInformation.services.length > 0
      ? business.businessInformation.services
      : defaultServices;

  const renderServiceIcon = (srv, idx) => {
    const type = srv.iconType || idx;
    if (type === "tarot" || idx === 0) {
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="8" height="14" rx="1.5" />
          <rect x="13" y="6" width="8" height="14" rx="1.5" transform="rotate(8 17 13)" />
          <circle cx="7" cy="11" r="2" />
        </svg>
      );
    }
    if (type === "numerology" || idx === 1) {
      return (
        <div className="grid grid-cols-3 gap-0.5 text-[8px] font-mono font-black tracking-tight text-center leading-none">
          <span>1</span><span>2</span><span>3</span>
          <span>4</span><span>5</span><span>6</span>
          <span>7</span><span>8</span><span>9</span>
        </div>
      );
    }
    if (type === "mobile" || idx === 2) {
      return <Phone className="w-7 h-7" />;
    }
    if (type === "name" || idx === 3) {
      return <Sparkles className="w-7 h-7" />;
    }
    if (type === "crystal" || idx === 4) {
      return <Star className="w-7 h-7" />;
    }
    return <Sun className="w-7 h-7" />;
  };

  // Fallback Curated High-Resolution Spiritual Images
  const fallbackGallery = [
    {
      id: "gal-1",
      url: "/images/sacred-healing/logo.jpg",
      title: "Sacred Healing Path Emblem",
      category: "Sacred Healing",
      caption: "Our sacred cosmic emblem embodying Om, the Flower of Life, and dawn illumination.",
    },
    {
      id: "gal-2",
      url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      title: "Vedic Astrology Chart & Planetary Alignment",
      category: "Astrology",
      caption: "Accurate planetary calculations revealing your destiny, career timing, and karmic life path.",
    },
    {
      id: "gal-3",
      url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      title: "Mystical Tarot Wisdom & Cards Spread",
      category: "Tarot",
      caption: "Intuitive oracle insights addressing relationship crossroads, career choices, and spiritual guidance.",
    },
    {
      id: "gal-4",
      url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      title: "Pythagorean & Chaldean Numerology Matrix",
      category: "Numerology",
      caption: "3x3 Sacred numeric matrix aligning name spelling, lucky days, and business resonance.",
    },
    {
      id: "gal-5",
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      title: "Amethyst Energy Crystals & Sound Therapy",
      category: "Spiritual Healing",
      caption: "Vibrational chakra balancing and aura cleansing using genuine amethyst crystals and sound bowls.",
    },
    {
      id: "gal-6",
      url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
      title: "Spiritual Meditation & Inner Awakening",
      category: "Spiritual Healing",
      caption: "Holistic mindfulness and guided meditative alignment for peace, balance, and higher consciousness.",
    },
    {
      id: "gal-7",
      url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
      title: "Private Consultation Sanctuary in Pune",
      category: "Consultation",
      caption: "A serene, confidential space designed for deep reflective consultations and spiritual rejuvenation.",
    },
    {
      id: "gal-8",
      url: "/images/sacred-healing/design-mockup.jpg",
      title: "Cosmic Healing Path Layout Blueprint",
      category: "Sacred Healing",
      caption: "Harmonizing ancient cosmic wisdom with modern digital clarity.",
    },
  ];

  // Fetch Gallery Images from MongoDB GridFS
  useEffect(() => {
    async function loadGallery() {
      setGalleryLoading(true);
      try {
        const res = await fetch(`/api/business/media/gridfs?slug=${slug}`);
        const data = await res.json();
        if (data.success && data.files && data.files.length > 0) {
          const formatted = data.files.map((f, i) => ({
            id: f.id,
            url: f.url,
            title: f.title || `Sacred Healing Asset ${i + 1}`,
            category: f.category || "Sacred Healing",
            caption: f.filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
          }));
          setGalleryImages(formatted);
        } else {
          setGalleryImages(fallbackGallery);
        }
      } catch (e) {
        console.warn("Failed to load GridFS images, using curated gallery:", e);
        setGalleryImages(fallbackGallery);
      } finally {
        setGalleryLoading(false);
      }
    }
    loadGallery();
  }, [slug]);

  const testimonials = [
    {
      name: "Verified Client",
      role: "Entrepreneur, Pune",
      content:
        "Her guidance through Tarot and Numerology brought amazing clarity in my career and personal life. Highly recommended!",
      rating: 5,
    },
    {
      name: "Pooja Deshmukh",
      role: "Corporate Executive, Mumbai",
      content:
        "Dr. Shalmali’s astrology reading gave me exact clarity during a critical career transition. Her warmth, depth, and precision are unparalleled.",
      rating: 5,
    },
    {
      name: "Anand Kulkarni",
      role: "Architect, Pune",
      content:
        "The name spelling correction and numerology blueprint she suggested brought immense positive momentum to our business within months.",
      rating: 5,
    },
  ];

  const handleOpenBooking = (serviceName = "General Consultation") => {
    setSelectedService(serviceName);
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);

    try {
      // 1. Save directly into MongoDB Inquiries database
      await fetch("/api/business/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessId: business.id || "6aeb074697a075aeb4e2ae95",
          slug: slug,
          name: clientName,
          phone: clientPhone,
          email: clientEmail,
          service: selectedService,
          preferredDate: clientDate,
          preferredTime: clientTime,
          message: clientNotes,
          source: "website",
        }),
      });

      setBookingSubmitted(true);

      // 2. Open WhatsApp with pre-filled message
      const msg = encodeURIComponent(
        `Hello Dr. Shalmali Khune (Sacred Healing Path),\nI would like to book a consultation session.\n• Name: ${clientName}\n• Phone: ${clientPhone}\n• Service: ${selectedService}\n• Preferred Date: ${clientDate || "Upcoming available"}\n• Query: ${clientNotes || "General guidance"}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/${cleanWa}?text=${msg}`, "_blank");
      }, 700);
    } catch (err) {
      alert("Error submitting inquiry: " + err.message);
    } finally {
      setBookingLoading(false);
    }
  };

  // Filter gallery images
  const filteredGallery =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (img) => img.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  const categories = ["All", "Astrology", "Numerology", "Tarot", "Spiritual Healing", "Consultation"];

  return (
    <div className="min-h-screen bg-[#0e021e] text-[#FDFCF8] font-sans selection:bg-[#E5B84C] selection:text-black overflow-x-hidden relative">
      {/* Background Cosmic Gradient & Ambient Stardust */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Cosmic Purple & Amethyst Radial Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-b from-[#5c1a8f]/30 via-[#340f58]/20 to-transparent blur-[150px]" />
        <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-[#E5B84C]/12 rounded-full blur-[170px]" />
        <div className="absolute bottom-1/4 right-10 w-[700px] h-[700px] bg-[#7c2d12]/15 rounded-full blur-[190px]" />

        {/* Live Floating Celestial Particles */}
        <CosmicParticlesCanvas count={65} speed={0.35} className="absolute inset-0 pointer-events-none z-0" />

        {/* Subtle Star Dust Grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(rgba(229, 184, 76, 0.45) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* ==================================================== */}
      {/* 1. TOP NAVBAR                                        */}
      {/* ==================================================== */}
      <header className="relative z-30 w-full border-b border-[#E5B84C]/25 bg-[#120326]/90 backdrop-blur-md sticky top-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] via-[#FBBF24] to-[#B45309] shadow-[0_0_25px_rgba(229,184,76,0.4)] group-hover:scale-105 transition-transform">
              <img
                src={logo}
                alt="Sacred Healing Path Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div>
              <span className="font-serif italic font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-[#E5B84C] transition-colors">
                {ownerName}
              </span>
              <p className="text-[10px] sm:text-[11px] font-medium tracking-widest text-[#E5B84C] uppercase">
                <span className="text-[#10B981] font-bold">सेक्रेड हीलिंग पाथ</span> • {businessName}
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-semibold tracking-wider text-slate-200">
            <a href="#hero" className="hover:text-[#E5B84C] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#E5B84C] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#E5B84C] transition-colors">
              Services
            </a>
            <a href="#gallery" className="hover:text-[#E5B84C] transition-colors flex items-center gap-1 text-[#E5B84C]">
              <Sparkles className="w-3 h-3" />
              <span>Gallery</span>
            </a>
            <a href="#benefits" className="hover:text-[#E5B84C] transition-colors">
              Benefits
            </a>
            <a href="#testimonials" className="hover:text-[#E5B84C] transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="hover:text-[#E5B84C] transition-colors">
              Contact
            </a>
          </nav>

          {/* Consultation Button */}
          <div className="flex items-center gap-3">
            <Link
              href={digitalCardUrl}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#E5B84C]/50 bg-[#E5B84C]/10 text-[#E5B84C] hover:bg-[#E5B84C]/20 text-xs font-bold transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Digital Card</span>
            </Link>

            <button
              onClick={() => handleOpenBooking("General Consultation")}
              className="px-5 py-2.5 rounded-full border border-[#E5B84C] bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] hover:brightness-110 text-[#110424] font-black text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(229,184,76,0.35)] transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* 2. ENHANCED HERO SECTION                             */}
      {/* ==================================================== */}
      <section
        id="hero"
        className="relative z-10 pt-10 pb-20 sm:pt-16 sm:pb-28 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden"
      >
        {/* Left Side: Brand & Hero Intro */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          {/* Top Cosmic Accreditation Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#E5B84C]/25 via-[#10B981]/20 to-[#E5B84C]/25 border border-[#E5B84C]/50 text-[#F5DEB3] text-xs font-semibold backdrop-blur-md shadow-[0_0_25px_rgba(229,184,76,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981] animate-pulse" />
            <span>{heroBadge}</span>
          </div>

          {/* Logo Emblem & Title Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
            <div className="relative shrink-0">
              <div className="absolute -inset-2 rounded-full bg-[#E5B84C]/35 blur-xl animate-pulse" />
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#E5B84C] via-[#FBBF24] to-[#10B981] shadow-[0_0_50px_rgba(229,184,76,0.5)]">
                <img
                  src={logo}
                  alt="Sacred Healing Path Emblem"
                  className="w-full h-full object-cover rounded-full bg-[#0d071a]"
                />
              </div>
            </div>

            <div className="space-y-1 text-center sm:text-left">
              <h1 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                <span className="text-white drop-shadow-md">{ownerName.split(" ")[0]} </span>
                <span className="bg-gradient-to-r from-[#FFF5D6] via-[#E5B84C] to-[#D97706] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(229,184,76,0.6)]">
                  {ownerName.split(" ").slice(1).join(" ") || "Khune"}
                </span>
              </h1>
              <p className="text-base sm:text-xl font-serif text-[#E5B84C] tracking-wide font-medium">
                Numerology <span className="text-[#10B981] px-1">✦</span> Tarot Reading{" "}
                <span className="text-[#10B981] px-1">✦</span> Crystal & Reiki Healing
              </p>
            </div>
          </div>

          {/* Tagline / Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow">
            {heroSubtitle}
          </p>

          {/* Social Proof Strip */}
          <div className="py-2.5 px-4 rounded-2xl bg-[#1a0833]/70 border border-[#E5B84C]/25 backdrop-blur-md flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 text-[#FBBF24] font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>4.9 / 5 Rating</span>
            </div>
            <span className="hidden sm:inline text-[#E5B84C]/40">•</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-200">
              <Users className="w-4 h-4 text-[#E5B84C]" />
              <span>3,500+ Seekers Guided</span>
            </div>
            <span className="hidden sm:inline text-[#E5B84C]/40">•</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Confidential</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <button
              onClick={() => handleOpenBooking("Consultation Session")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] hover:brightness-110 text-[#140628] font-black text-xs uppercase tracking-wider shadow-[0_8px_30px_rgba(229,184,76,0.45)] transition-all hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Consultation</span>
            </button>

            <a
              href={`https://wa.me/${cleanWa}?text=${encodeURIComponent("Hello Dr. Shalmali Khune, I would like to book a quick consultation.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(16,185,129,0.35)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Connect</span>
            </a>

            <Link
              href={digitalCardUrl}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-[#E5B84C]/40 text-[#FDFCF8] font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#E5B84C]" />
              <span>Digital Card</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Grand Layered Astrological Celestial Zodiac Wheel */}
        <div className="relative shrink-0 flex items-center justify-center">
          <div className="relative w-80 h-80 sm:w-[420px] sm:h-[420px] flex items-center justify-center">
            {/* Ambient Pulsing Nebulae Behind Wheel */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E5B84C]/30 via-[#9333EA]/25 to-[#F59E0B]/20 blur-3xl animate-pulse" />
            <div className="absolute inset-6 rounded-full bg-[#E5B84C]/10 blur-2xl" />

            {/* Rotating Celestial Mandala Wheel SVG */}
            <svg
              className="w-full h-full text-[#E5B84C]/50 animate-[spin_100s_linear_infinite]"
              viewBox="0 0 400 400"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="200" cy="200" r="195" strokeWidth="1" strokeDasharray="2 4" />
              <circle cx="200" cy="200" r="185" strokeWidth="2" />
              <circle cx="200" cy="200" r="160" strokeWidth="1.5" strokeDasharray="6 4" />
              <circle cx="200" cy="200" r="120" strokeWidth="2" />
              <circle cx="200" cy="200" r="80" strokeWidth="1.5" />
              <circle cx="200" cy="200" r="40" strokeWidth="2" fill="rgba(229, 184, 76, 0.15)" />

              {/* 12 Zodiac Rays */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 200 + 80 * Math.cos(angle);
                const y1 = 200 + 80 * Math.sin(angle);
                const x2 = 200 + 185 * Math.cos(angle);
                const y2 = 200 + 185 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.5" />;
              })}

              {/* 12 Sacred Zodiac Symbols */}
              {["♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓"].map((sign, i) => {
                const angle = ((i * 30 + 15) * Math.PI) / 180;
                const x = 200 + 140 * Math.cos(angle);
                const y = 200 + 140 * Math.sin(angle);
                return (
                  <text
                    key={i}
                    x={x}
                    y={y}
                    fill="#E5B84C"
                    fontSize="16"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-serif select-none"
                  >
                    {sign}
                  </text>
                );
              })}

              {/* Central Sacred Geometry Star of Wisdom */}
              <polygon points="200,130 255,235 145,235" strokeWidth="1.5" fill="none" />
              <polygon points="200,270 255,165 145,165" strokeWidth="1.5" fill="none" />
            </svg>

            {/* Glowing Golden Center Sun with ॐ - Dead-Centered */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] opacity-80 blur-xl animate-pulse" />
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#120824] border-2 border-[#E5B84C] flex items-center justify-center text-[#E5B84C] font-serif text-3xl font-bold shadow-[0_0_35px_rgba(229,184,76,0.7)]">
                ॐ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. ABOUT DR. SHALMALI KHUNE                          */}
      {/* ==================================================== */}
      <section id="about" className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-[40px] bg-[#16052b]/85 border border-[#E5B84C]/30 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center gap-10">
          {/* Left Arched Window with Meditating Sunrise Silhouette */}
          <div className="relative shrink-0 w-64 h-80 sm:w-72 sm:h-96 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-[#E5B84C]/70 shadow-[0_0_40px_rgba(229,184,76,0.3)] bg-[#0d041a]">
            <img
              src={portraitPhoto}
              alt={ownerName}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140628] via-transparent to-transparent opacity-70" />

            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#140628]/95 border border-[#E5B84C]/60 text-[10px] font-bold text-[#E5B84C] uppercase tracking-widest shadow-md">
                Sacred Guide
              </span>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex-1 space-y-5 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E5B84C]/15 border border-[#E5B84C]/40 text-[#E5B84C] font-bold text-xs uppercase tracking-widest">
              About Me
            </span>

            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-tight">
              About Dr. Shalmali Khune
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              {bio}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#E5B84C]/20 text-center">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E5B84C]">7+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E5B84C]">3,500+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Consultations</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-bold text-[#E5B84C]">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. MY SERVICES & MODALITIES (6 Client Modalities)    */}
      {/* ==================================================== */}
      <section id="services" className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="text-[#E5B84C] text-lg font-serif">⤜</span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-wide">
            My Services & Modalities
          </h2>
          <span className="text-[#E5B84C] text-lg font-serif">⤛</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl mx-auto mb-12">
          Ancient Wisdom, Numerological Vibrations & Intuitive Tarot Guidance Tailored to Your Journey
        </p>

        {/* Dynamic Modality Cards (Powered by Client Settings & Logo Theme) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesList.map((srv, idx) => (
            <div
              key={srv.id || idx}
              className="rounded-[32px] p-7 bg-[#120726]/90 border border-[#E5B84C]/40 shadow-xl hover:border-[#10B981]/70 hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center justify-between space-y-5 group"
            >
              <div className="flex flex-col items-center space-y-3.5">
                <div className="w-18 h-18 rounded-full p-1 bg-gradient-to-tr from-[#E5B84C] via-[#FBBF24] to-[#10B981] shadow-md flex items-center justify-center transform group-hover:scale-108 transition-transform">
                  <div className="w-full h-full rounded-full bg-[#0d071a] flex items-center justify-center text-[#E5B84C]">
                    {renderServiceIcon(srv, idx)}
                  </div>
                </div>

                <h3 className="font-serif italic text-xl text-white font-bold group-hover:text-[#E5B84C] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <button
                onClick={() => handleOpenBooking(srv.title)}
                className="w-full py-2.5 rounded-full border border-[#E5B84C]/60 hover:bg-gradient-to-r hover:from-[#E5B84C] hover:to-[#10B981] hover:text-[#0a0414] text-[#E5B84C] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                {srv.actionText || "Book Consultation"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. SACRED GALLERY SECTION (POWERED BY MONGODB GRIDFS) */}
      {/* ==================================================== */}
      <section id="gallery" className="relative z-10 py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-10">
          <div className="flex items-center justify-center gap-3">
            <span className="text-[#E5B84C] text-lg font-serif">⤜</span>
            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-wide">
              Sacred Gallery & Visual Journey
            </h2>
            <span className="text-[#E5B84C] text-lg font-serif">⤛</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto font-light">
            Explore authentic consultation moments, sacred Vedic Kundali calculations, intuitive tarot spreads, and spiritual healing energies.
          </p>

          {/* Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#E5B84C] text-[#110424] shadow-[0_0_20px_rgba(229,184,76,0.5)] scale-105"
                    : "bg-[#18062d]/80 text-slate-300 border border-[#E5B84C]/30 hover:border-[#E5B84C] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {galleryLoading ? (
          <div className="py-16 text-center text-slate-400">
            <Sparkles className="w-8 h-8 text-[#E5B84C] animate-spin mx-auto mb-2" />
            <p className="text-xs font-semibold">Loading Sacred Gallery from MongoDB...</p>
          </div>
        ) : filteredGallery.length === 0 ? (
          <div className="py-16 text-center text-slate-400 p-8 rounded-3xl bg-[#16052b]/60 border border-[#E5B84C]/20">
            <ImageIcon className="w-10 h-10 text-[#E5B84C]/40 mx-auto mb-3" />
            <p className="text-sm font-bold text-white">No images in this category yet</p>
            <p className="text-xs text-slate-400 mt-1">
              Upload photos anytime from your password-protected Settings Portal.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxImage(item)}
                className="group relative rounded-3xl overflow-hidden border border-[#E5B84C]/30 bg-[#150428] shadow-xl hover:shadow-[0_0_35px_rgba(229,184,76,0.35)] hover:border-[#E5B84C] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d0217]">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150428] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#110221]/90 border border-[#E5B84C]/50 text-[10px] font-bold text-[#E5B84C] uppercase tracking-wider backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Hover Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                    <div className="w-11 h-11 rounded-full bg-[#E5B84C] text-[#110424] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                      <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Card Title & Details */}
                <div className="p-4 space-y-1">
                  <h3 className="font-serif text-sm font-bold text-white group-hover:text-[#E5B84C] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Gallery Client Portal Link */}
        <div className="mt-8 text-center">
          <Link
            href={`/business/${slug}/settings`}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#18062d] border border-[#E5B84C]/40 text-[#E5B84C] hover:bg-[#E5B84C]/10 text-xs font-semibold transition-all"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Manage & Upload Photos in Client Settings</span>
          </Link>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. HOW IT CAN HELP YOU                               */}
      {/* ==================================================== */}
      <section id="benefits" className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="text-[#E5B84C] text-lg font-serif">⤜</span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-wide">
            How It Can Help You
          </h2>
          <span className="text-[#E5B84C] text-lg font-serif">⤛</span>
        </div>

        {/* 5 Circular Benefit Medallions on Pedestals */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-[#18062d]/70 border border-[#E5B84C]/20 hover:border-[#E5B84C]/60 transition-all">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140628] flex items-center justify-center text-[#E5B84C]">
                <Compass className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              Clarity in Decisions
            </span>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-[#18062d]/70 border border-[#E5B84C]/20 hover:border-[#E5B84C]/60 transition-all">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140628] flex items-center justify-center text-[#E5B84C]">
                <Heart className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              Emotional Healing
            </span>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-[#18062d]/70 border border-[#E5B84C]/20 hover:border-[#E5B84C]/60 transition-all">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140628] flex items-center justify-center text-[#E5B84C]">
                <TrendingUp className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              Personal Growth
            </span>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-[#18062d]/70 border border-[#E5B84C]/20 hover:border-[#E5B84C]/60 transition-all">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140628] flex items-center justify-center text-[#E5B84C]">
                <Users className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              Better Relationships
            </span>
          </div>

          <div className="flex flex-col items-center space-y-3 p-4 rounded-2xl bg-[#18062d]/70 border border-[#E5B84C]/20 hover:border-[#E5B84C]/60 transition-all col-span-2 sm:col-span-1">
            <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#E5B84C] to-[#B45309] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#140628] flex items-center justify-center text-[#E5B84C]">
                <Sun className="w-7 h-7" />
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-white leading-tight">
              Peace & Balance
            </span>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. WHAT CLIENTS SAY                                  */}
      {/* ==================================================== */}
      <section id="testimonials" className="relative z-10 py-16 sm:py-20 px-4 sm:px-8 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="text-[#E5B84C] text-lg font-serif">⤜</span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#FDFCF8] font-bold tracking-wide">
            What Clients Say
          </h2>
          <span className="text-[#E5B84C] text-lg font-serif">⤛</span>
        </div>

        <div className="relative p-8 sm:p-12 rounded-[36px] bg-[#18062d]/90 border border-[#E5B84C]/35 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() =>
              setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
            }
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#140628] border border-[#E5B84C]/60 text-[#E5B84C] flex items-center justify-center shadow-lg hover:scale-110 transition-all"
            title="Previous Review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <p className="font-serif italic text-lg sm:text-xl text-slate-100 leading-relaxed font-light">
            "{testimonials[testimonialIndex].content}"
          </p>

          <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#E5B84C]/20 flex-wrap gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-[#E5B84C]/20 border border-[#E5B84C]/40 flex items-center justify-center text-[#E5B84C] font-bold">
                {testimonials[testimonialIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm text-white">{testimonials[testimonialIndex].name}</p>
                <p className="text-[11px] text-slate-400">{testimonials[testimonialIndex].role}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#FBBF24]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <button
            onClick={() =>
              setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
            }
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#140628] border border-[#E5B84C]/60 text-[#E5B84C] flex items-center justify-center shadow-lg hover:scale-110 transition-all"
            title="Next Review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 8. CTA BANNER (Begin Your Healing Journey Today)     */}
      {/* ==================================================== */}
      <section className="relative z-10 py-24 px-4 sm:px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e021e] via-transparent to-[#0e021e]" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif italic text-4xl sm:text-5xl text-[#FDFCF8] font-bold tracking-tight">
            Begin Your Healing Journey Today
          </h2>

          <p className="text-base text-slate-200 font-light max-w-xl mx-auto">
            Get personalized guidance through Astrology, Numerology and Tarot.
          </p>

          <button
            onClick={() => handleOpenBooking("Healing Journey Session")}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] hover:brightness-110 text-[#140628] font-black text-xs uppercase tracking-widest shadow-[0_10px_40px_rgba(229,184,76,0.5)] transition-all hover:scale-105 inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 9. FOOTER BAR                                        */}
      {/* ==================================================== */}
      <footer id="contact" className="relative z-10 border-t border-[#E5B84C]/25 bg-[#090114] py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-300">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-medium">
            <a href={`tel:${phone}`} className="flex items-center gap-2 hover:text-[#E5B84C] transition-colors">
              <Phone className="w-4 h-4 text-[#E5B84C]" />
              <span>{phone}</span>
            </a>

            <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-[#E5B84C] transition-colors">
              <Mail className="w-4 h-4 text-[#E5B84C]" />
              <span>{email}</span>
            </a>

            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-[#E5B84C]" />
              <span>{address}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-[#120726] border border-[#E5B84C]/40 text-white hover:text-[#10B981] hover:border-[#10B981] flex items-center justify-center transition-all"
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
              className="w-9 h-9 rounded-full bg-[#120726] border border-[#E5B84C]/40 text-white hover:text-[#10B981] hover:border-[#10B981] flex items-center justify-center transition-all"
              title="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Combo Link to Digital Business Card */}
      {!isEditing && (
        <aside className="fixed bottom-5 left-5 z-40 hidden sm:block">
          <Link
            href={digitalCardUrl}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#16052b]/95 text-white font-bold text-xs shadow-2xl border border-[#E5B84C]/50 backdrop-blur-md hover:bg-black hover:scale-105 transition-all group"
            title="Open Interactive Digital Business Card"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5B84C] animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-[#E5B84C]" />
            <span>Digital Business Card</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E5B84C]/20 text-[#E5B84C] border border-[#E5B84C]/40 font-extrabold">
              NFC
            </span>
          </Link>
        </aside>
      )}

      {/* ==================================================== */}
      {/* LIGHTBOX MODAL FOR GALLERY IMAGES                    */}
      {/* ==================================================== */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full rounded-3xl bg-[#140628] border border-[#E5B84C]/50 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Large Image Preview */}
            <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[60vh] md:max-h-[75vh] overflow-hidden">
              <img
                src={activeLightboxImage.url}
                alt={activeLightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Info & Booking Sidebar */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-5 text-left">
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-[#E5B84C]/15 border border-[#E5B84C]/40 text-[11px] font-bold text-[#E5B84C] uppercase tracking-wider inline-block">
                  {activeLightboxImage.category}
                </span>

                <h3 className="font-serif italic text-2xl font-bold text-white">
                  {activeLightboxImage.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  {activeLightboxImage.caption}
                </p>

                <div className="pt-3 border-t border-[#E5B84C]/20 text-xs text-slate-400 space-y-1">
                  <p>• Stored permanently in MongoDB GridFS</p>
                  <p>• Verified authentic spiritual asset</p>
                </div>
              </div>

              <div className="space-y-2.5 pt-4">
                <button
                  onClick={() => {
                    const svc =
                      activeLightboxImage.category === "Astrology"
                        ? "Astrology Janam Kundali Session"
                        : activeLightboxImage.category === "Tarot"
                        ? "Tarot Reading Session"
                        : activeLightboxImage.category === "Numerology"
                        ? "Numerology Blueprint Session"
                        : "Holistic Spiritual Consultation";
                    setActiveLightboxImage(null);
                    handleOpenBooking(svc);
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] text-[#110424] font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation For This</span>
                </button>

                <button
                  onClick={() => setActiveLightboxImage(null)}
                  className="w-full py-2.5 rounded-full border border-white/20 text-slate-300 hover:text-white text-xs font-semibold hover:bg-white/10 transition-all"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* CONSULTATION BOOKING MODAL                           */}
      {/* ==================================================== */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#140628] border border-[#E5B84C]/40 p-6 sm:p-8 shadow-2xl text-left">
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
              Schedule Your Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Connect with Dr. Shalmali Khune for Astrology, Numerology & Tarot guidance
            </p>

            {bookingSubmitted ? (
              <div className="my-6 p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-bold text-white">Booking Inquiry Saved!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your inquiry is saved in Dr. Shalmali’s portal. Connecting you to WhatsApp to finalize your slot.
                </p>
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2 rounded-full bg-[#E5B84C] text-[#110424] font-bold text-xs uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Ananya Sharma"
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
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="you@gmail.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B84C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={clientTime}
                      onChange={(e) => setClientTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white text-xs focus:outline-none focus:border-[#E5B84C]"
                    >
                      <option value="">Any Convenient Time</option>
                      <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                      <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Select Consultation Focus
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white text-xs focus:outline-none focus:border-[#E5B84C]"
                  >
                    {servicesList.map((srv, idx) => (
                      <option key={srv.id || idx} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                    <option value="Combined Holistic Consultation">Complete Combined Holistic Session</option>
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
                    placeholder="e.g. Auspicious timing for new business, career clarity, relationship guidance..."
                    className="w-full px-3.5 py-2 rounded-xl bg-[#1b0833] border border-[#E5B84C]/30 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-[#E5B84C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E5B84C] via-[#FBBF24] to-[#D97706] text-[#110424] font-black text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {bookingLoading ? (
                    <span>Submitting Inquiry...</span>
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
    </div>
  );
}
