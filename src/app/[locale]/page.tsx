"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { 
  ArrowRight, Globe, Search, ShieldCheck, Warehouse, Ship, FileCheck, Package,
  Factory, Boxes, Zap, Award, CheckCircle2, Star, Building2, Truck, Shield,
  BarChart3, Phone, Mail, MessageCircle, BookOpen, FileText, Lightbulb, 
  HelpCircle, Send, MapPin, TrendingUp, Users, Clock, ChevronDown, Play,
  X, Menu, Sparkles, Target, Workflow, Rocket, Handshake, BadgeCheck
} from "lucide-react";

// Premium Components
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PremiumSection = ({ 
  id, 
  children, 
  className = "", 
  bgImage = "",
  overlay = ""
}: { 
  id: string, 
  children: React.ReactNode, 
  className?: string,
  bgImage?: string,
  overlay?: string
}) => (
  <section id={id} className={`relative py-28 lg:py-36 overflow-hidden ${className}`}>
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${bgImage}')` }} />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>
    )}
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

const AnimatedCounter = ({ end, suffix = "" }: { end: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000, steps = 60, increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          setCount(current >= end ? end : Math.floor(current));
        }, duration / steps);
        return () => clearInterval(timer);
      }
    }, { threshold: 0.5 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'features', 'process', 'industries', 'testimonials', 'knowledge', 'quote'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'features', label: 'Why Us' },
    { id: 'process', label: 'Process' },
    { id: 'knowledge', label: 'Knowledge' },
    { id: 'quote', label: 'Get Quote', highlight: true },
  ];

  const services = [
    { 
      icon: Search, 
      title: "Product Sourcing", 
      desc: "Access our network of 500+ pre-vetted factories across 30 Chinese provinces. We match your specs to verified suppliers through AI-powered analysis.",
      features: ["Factory verification", "Price benchmarking", "Sample management"],
      gradient: "from-blue-500 to-blue-600",
      color: "blue"
    },
    { 
      icon: ShieldCheck, 
      title: "Quality Control", 
      desc: "Multi-stage inspection protocols following AQL standards. Our bilingual QC engineers ensure every shipment meets your exact specifications.",
      features: ["AQL sampling", "In-line inspection", "Factory audit"],
      gradient: "from-emerald-500 to-green-600",
      color: "emerald"
    },
    { 
      icon: Warehouse, 
      title: "Warehousing & Consolidation", 
      desc: "Smart warehousing in Guangzhou and Yiwu with barcode tracking, multi-supplier consolidation, and climate-controlled storage zones.",
      features: ["Multi-source consolidation", "Real-time inventory", "Secure storage"],
      gradient: "from-violet-500 to-purple-600",
      color: "violet"
    },
    { 
      icon: Ship, 
      title: "International Shipping", 
      desc: "Sea, air, rail, and express delivery to 50+ countries. Automated booking, real-time GPS tracking, and optimized routing for cost savings.",
      features: ["Sea & air freight", "Rail cargo", "Express delivery"],
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan"
    },
    { 
      icon: FileCheck, 
      title: "Customs & Compliance", 
      desc: "Full documentation management, HS code classification, duty optimization, and compliance with SASO, ESMA, and international regulations.",
      features: ["HS classification", "Duty optimization", "SASO/ESMA compliance"],
      gradient: "from-amber-500 to-orange-600",
      color: "amber"
    },
    { 
      icon: Package, 
      title: "Door-to-Door DDP", 
      desc: "Complete DDP solutions from Chinese factory floor to your warehouse door. All-inclusive pricing with zero hidden fees.",
      features: ["DDP all-inclusive", "Last-mile delivery", "POD confirmation"],
      gradient: "from-rose-500 to-pink-600",
      color: "rose"
    },
  ];

  const features = [
    { icon: Target, title: "AI-Powered Supplier Matching", desc: "Our proprietary algorithm analyzes 12,000+ data points to find factories that match your product specs, quality tier, and budget within 48 hours.", gradient: "from-blue-500 to-cyan-500", bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" },
    { icon: Shield, title: "Trade Risk Shield", desc: "Comprehensive trade insurance, escrow payment protection, and quality guarantees. We cover your investment from order to delivery.", gradient: "from-emerald-500 to-green-500", bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
    { icon: BarChart3, title: "Cost Intelligence", desc: "Our sourcing data shows clients save 23-40% vs. direct buying. Real-time price benchmarking across 500+ verified factories.", gradient: "from-purple-500 to-pink-500", bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" },
    { icon: Handshake, title: "Bilingual Account Teams", desc: "Dedicated Mandarin-Arabic-English account managers who understand both Chinese factory culture and Middle East business expectations.", gradient: "from-orange-500 to-amber-500", bgImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" },
    { icon: Clock, title: "Speed-to-Market", desc: "Parallel processing of sourcing, QC, and logistics cuts lead times by 40%. Your products reach market faster than competitors.", gradient: "from-rose-500 to-red-500", bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
    { icon: BadgeCheck, title: "Global Compliance", desc: "SASO, ESMA, CE, FDA — we handle certification for every destination. Zero customs rejections across 15,000+ shipments.", gradient: "from-indigo-500 to-violet-500", bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
  ];

  const processSteps = [
    { step: "01", icon: MessageCircle, title: "Discovery & Strategy", desc: "In-depth consultation to map your product specs, target costs, quality tier, and delivery timeline into an actionable sourcing plan." },
    { step: "02", icon: Search, title: "Source & Negotiate", desc: "AI-powered factory matching across 30 provinces. We shortlist top 3 suppliers, negotiate pricing, and manage sample production." },
    { step: "03", icon: ShieldCheck, title: "Inspect & Verify", desc: "AQL-standard inspections at 3 checkpoints: pre-production, during manufacturing, and final pre-shipment. Photo + video evidence." },
    { step: "04", icon: Truck, title: "Ship & Deliver", desc: "Consolidated shipping via optimal routes. Full customs clearance, real-time tracking, and DDP delivery to your warehouse door." },
  ];

  const testimonials = [
    { name: "Michael Chen", role: "CEO, TechGear Inc. — Riyadh", content: "Dinoora cut our sourcing costs by 35% while actually improving product quality. Their factory vetting process caught issues we would never have found ourselves. A true game-changer for our business.", rating: 5 },
    { name: "Sarah Ahmed", role: "Procurement Director, Luxe Brands — Dubai", content: "We've been importing from China for 8 years, but Dinoora's QC protocols are on another level. Zero defect shipments in 14 months. They've become our exclusive sourcing partner.", rating: 5 },
    { name: "David Park", role: "Operations Manager, AutoParts Co. — Jeddah", content: "From supplier verification to customs clearance to door delivery — they handle the entire pipeline. Our import operation went from chaos to clockwork in 3 months.", rating: 5 },
  ];

  const knowledgeArticles = [
    { icon: BookOpen, title: "Complete China Sourcing Guide 2024", category: "Guide", readTime: "15 min", href: "/blog" },
    { icon: FileText, title: "Incoterms Explained: EXW to DDP", category: "Shipping", readTime: "12 min", href: "/blog" },
    { icon: Lightbulb, title: "AQL Quality Control Checklist", category: "Quality", readTime: "10 min", href: "/blog" },
    { icon: HelpCircle, title: "Customs & Import Regulations FAQ", category: "Customs", readTime: "14 min", href: "/blog" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* === BACKGROUND LAYERS === */}
        {/* Layer 1: Base Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2560&q=90')" }} />
        </div>
        {/* Layer 2: Dark gradient overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-slate-950 via-slate-950/[0.98] to-blue-950/95" />
        {/* Layer 3: Radial color accents */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_20%_50%,_rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_80%_20%,_rgba(6,182,212,0.08),transparent_50%)]" />
        {/* Layer 4: Grid pattern */}
        <div className="absolute inset-0 z-[3] grid-pattern opacity-60" />

        {/* === FLOATING ORBS === */}
        <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[130px] animate-float z-[4]" />
        <div className="absolute bottom-[15%] right-[8%] w-[350px] h-[350px] bg-cyan-500/12 rounded-full blur-[110px] animate-float z-[4]" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[160px] animate-pulse-glow z-[4]" />

        {/* === FLOATING PARTICLES === */}
        {[
          { top: '15%', left: '10%', size: 3, delay: '0s' },
          { top: '25%', left: '85%', size: 2, delay: '1s' },
          { top: '60%', left: '15%', size: 2, delay: '2s' },
          { top: '75%', left: '75%', size: 3, delay: '0.5s' },
          { top: '35%', left: '60%', size: 2, delay: '1.5s' },
          { top: '80%', left: '40%', size: 2, delay: '3s' },
          { top: '10%', left: '50%', size: 3, delay: '2.5s' },
          { top: '50%', left: '90%', size: 2, delay: '0.8s' },
        ].map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/30 z-[5]"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animation: `particle-float ${6 + i}s ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* === DECORATIVE LINES === */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-[5]" />
        <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent z-[5]" />

        {/* === MAIN CONTENT === */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            
            {/* LEFT COLUMN - Text & CTA */}
            <FadeIn>
              <div className="space-y-7">
                {/* Badge */}
                <div className="section-badge animate-hero-shine">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available 24/7 — Trusted by 500+ Businesses</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
                  <span className="text-white block">Your Gateway to</span>
                  <span className="block mt-2 gradient-text-blue animate-gradient bg-[length:200%_200%]">
                    China Trade
                  </span>
                  <span className="block mt-1 text-white">Excellence</span>
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl text-slate-400 max-w-lg leading-relaxed">
                  From supplier sourcing to doorstep delivery — we handle the complexity so you can focus on growing your business.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button 
                    onClick={() => scrollToSection('quote')}
                    className="btn-premium animate-hero-shine group"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="btn-outline group"
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Explore Services
                  </button>
                </div>

                {/* Inline Stats Row */}
                <div className="flex items-center gap-6 sm:gap-8 pt-8 border-t border-white/[0.06]">
                  {[
                    { val: "500+", label: "Projects" },
                    { val: "50+", label: "Countries" },
                    { val: "99%", label: "Quality" },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-6 sm:gap-8">
                      <div className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white animate-count-glow">{stat.val}</div>
                        <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</div>
                      </div>
                      {i < 2 && <div className="hero-stat-divider hidden sm:block" />}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* RIGHT COLUMN - Quick Quote Card */}
            <FadeIn delay={300}>
              <div className="relative">
                {/* Glow behind card */}
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-600/25 via-cyan-500/15 to-indigo-600/20 rounded-[2rem] blur-2xl opacity-70" />
                
                {/* Card */}
                <div className="relative bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-white/[0.08] shadow-2xl shadow-black/30 overflow-hidden">
                  {/* Card Header */}
                  <div className="relative px-8 pt-8 pb-6">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Quick Quote</h3>
                        <p className="text-sm text-slate-500 mt-1">Get a response within 24 hours</p>
                      </div>
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="px-8 pb-8 space-y-4">
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="text" placeholder="Your Name" className="w-full pl-11 pr-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="email" placeholder="Business Email" className="w-full pl-11 pr-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                    </div>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input type="text" placeholder="Product Category" className="w-full pl-11 pr-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-slate-500 focus:border-blue-500/40 focus:bg-white/[0.06] focus:outline-none focus:ring-1 focus:ring-blue-500/20 transition-all" />
                    </div>
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-base hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 animate-hero-shine">
                      <Send className="w-4 h-4" />
                      Get Free Quote
                    </button>
                  </div>

                  {/* Card Footer */}
                  <div className="px-8 py-5 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>No obligation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      <span>100% Confidential</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* === TRUSTED BY MARQUEE === */}
          <FadeIn delay={500}>
            <div className="mt-20 pt-10 border-t border-white/[0.04]">
              <p className="text-center text-sm text-slate-600 uppercase tracking-widest font-medium mb-8">Trusted across industries worldwide</p>
              <div className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap opacity-40">
                {["Consumer Goods", "Electronics", "Industrial", "Furniture", "Retail", "Automotive"].map((industry, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                    <Building2 className="w-5 h-5" />
                    <span className="text-sm font-medium whitespace-nowrap">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* === SCROLL INDICATOR === */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-scroll-indicator" />
          </div>
        </div>

        {/* === BOTTOM GRADIENT FADE === */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-[6]" />
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-28 lg:py-36 overflow-hidden bg-slate-950">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/[0.05] rounded-full blur-[100px]" />
        <div className="absolute inset-0 dot-pattern" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge mb-6">
              <Zap className="w-4 h-4" />
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              End-to-End <span className="gradient-text-blue">Solutions</span>
            </h2>
            <p className="text-xl text-slate-400">
              Comprehensive trade services designed for enterprise success
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group h-full glow-card p-7">
                <div className={`w-14 h-14 mb-5 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                <p className="text-slate-400 mb-5 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1.5 bg-white/5 text-slate-300 rounded-lg text-xs border border-white/5">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <PremiumSection id="features" className="bg-slate-900" bgImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80" overlay="bg-slate-950/93">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge mb-6">
              <Award className="w-4 h-4" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Industry Leaders <span className="gradient-text-blue">Choose Us</span>
            </h2>
            <p className="text-xl text-slate-400">
              Precision, reliability, and results that drive growth
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <div 
                    className="w-full h-full bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-700"
                    style={{ backgroundImage: `url('${feature.bgImage}')` }}
                  />
                </div>
                
                {/* Gradient Overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.07] transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-7">
                  <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats Bar */}
        <FadeIn delay={400}>
          <div className="mt-20 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: 500, suffix: "+", label: "Suppliers Verified" },
                { value: 50, suffix: "+", label: "Countries Served" },
                { value: 99, suffix: "%", label: "Quality Rate" },
                { value: 40, suffix: "%", label: "Cost Savings" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold gradient-text-blue mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </PremiumSection>

      {/* PROCESS SECTION */}
      <PremiumSection id="process" className="bg-slate-950">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge mb-6">
              <Workflow className="w-4 h-4" />
              <span>Our Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Deliver <span className="gradient-text-blue">Excellence</span>
            </h2>
            <p className="text-xl text-slate-400">
              A proven 4-step process from concept to delivery
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative group">
                <div className="glass-card p-8 h-full hover:border-blue-500/20">
                  <div className="text-6xl font-bold text-white/[0.03] absolute top-4 right-6">{step.step}</div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-20 items-center">
                    <ArrowRight className="w-5 h-5 text-blue-500/50" />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* TESTIMONIALS */}
      <PremiumSection id="testimonials" className="bg-slate-900">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge mb-6">
              <Star className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client <span className="gradient-text-blue">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-400">
              Hear from businesses that transformed their China trade operations with us
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="glass-card p-8 h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* KNOWLEDGE SECTION */}
      <PremiumSection id="knowledge" className="bg-slate-950">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="section-badge mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trade <span className="gradient-text-blue">Intelligence</span>
            </h2>
            <p className="text-xl text-slate-400">
              Expert insights to optimize your China trade strategy
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeArticles.map((article, i) => (
            <FadeIn key={i} delay={i * 100}>
              <a href={`/${pathname.split('/')[1] || 'en'}${article.href}`} className="group glow-card p-6 cursor-pointer block">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                  <article.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{article.category}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-blue-300 transition-colors">{article.title}</h3>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime} read
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <a href={`/${pathname.split('/')[1] || 'en'}/blog`} className="inline-flex items-center gap-2 px-8 py-4 border border-blue-500/20 text-blue-400 rounded-full font-semibold text-base hover:bg-blue-500/10 hover:border-blue-500/30 transition-all">
              <BookOpen className="w-5 h-5" />
              View All Articles & Guides
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </PremiumSection>

      {/* OPERATIONS - Daily Capabilities Section */}
      <PremiumSection id="operations" className="bg-slate-900" bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" overlay="bg-slate-950/95">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="section-badge mb-6">
              <Workflow className="w-4 h-4" />
              <span>يومياتنا / Our Operations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              كل قدرة تُدار <span className="gradient-text-blue">كوحدة نظام</span>
            </h2>
            <p className="text-xl text-slate-400">
              مُزامَنة، قابلة للتدقيق، ومقاسة—هكذا نُدير عمليات التجارة مع الصين
            </p>
          </div>
        </FadeIn>

        {/* 5-Stage Pipeline */}
        <FadeIn delay={100}>
          <div className="mb-20">
            <div className="grid lg:grid-cols-5 gap-4">
              {[
                { 
                  stage: "01", 
                  title: "المورد - مزامنة", 
                  subtitle: "Supplier Sync",
                  desc: "مواءمة المورد مع المواصفات والمدة والإيقاع التشغيلي—ثم التحقق قبل أي التزام مالي.",
                  output: "تثبيت المواصفات ومزامنتها مع المورد قبل الالتزام.",
                  prevent: "يمنع عدم التطابق بين نية الشراء ومخرجات المصنع."
                },
                { 
                  stage: "02", 
                  title: "المستودع - تسجيل", 
                  subtitle: "Warehouse Intake",
                  desc: "استلام الشحنة وتسجيلها وترميزها وإدخالها ضمن مسار التجميع.",
                  output: "شحنة مرمّزة ضمن مسار التجميع.",
                  prevent: "يمنع ضياع البضاعة وتداخل دورات التجميع."
                },
                { 
                  stage: "03", 
                  title: "الفحص - تحقق", 
                  subtitle: "Quality Verification",
                  desc: "تنفيذ أخذ العينات وتسجيل الأدلة ومعالجة الانحرافات قبل تصريح الشحن.",
                  output: "تقرير فحص مسجل وشحنة مؤهلة للتصدير.",
                  prevent: "يمنع المنتجات الرديئة من الوصول للعميل."
                },
                { 
                  stage: "04", 
                  title: "الإرسال - تصريح", 
                  subtitle: "Export Clearance",
                  desc: "تدقيق المستندات التجارية مقابل واقع الشحنة—ومواءمتها لمتطلبات وجهة الوصول.",
                  output: "مستندات موثقة ومطابقة للشحنة.",
                  prevent: "يمنع التأخير الجمركي والغرامات."
                },
                { 
                  stage: "05", 
                  title: "التسليم - تأكيد", 
                  subtitle: "Delivery Confirm",
                  desc: "مزامنة الحجز والتسليم ومواعيد الإغلاق بين المستودع والناقل.",
                  output: "شحنة متنقلة ضمن موعد إغلاق محدد.",
                  prevent: "يمنع فشل الإرسال في جدولة النقل."
                },
              ].map((step, i) => (
                <div key={i} className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
                  <div className="text-4xl font-bold text-slate-700/50 mb-3">{step.stage}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-blue-400 mb-3">{step.subtitle}</p>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{step.desc}</p>
                  <div className="pt-4 border-t border-slate-700/50 space-y-2">
                    <div className="text-xs">
                      <span className="text-green-400">النتيجة:</span>
                      <span className="text-slate-400 mr-2">{step.output}</span>
                    </div>
                    <div className="text-xs">
                      <span className="text-red-400">الحماية:</span>
                      <span className="text-slate-400 mr-2">{step.prevent}</span>
                    </div>
                  </div>
                  {i < 4 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Operational Metrics */}
        <FadeIn delay={200}>
          <div className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700 mb-16">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">مؤشرات القدرة التشغيلية</h3>
            <p className="text-slate-400 text-center mb-8">مؤشرات تشغيلية—وليست وعوداً دعائية. الأرقام واقعية وقابلة للتدقيق.</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "120+", label: "مصانع مُتحقَّق منها ميدانياً", desc: "التحقق عبر إشارات المصنع، سجل الإنتاج، ومراجع التعامل." },
                { value: "30–60", label: "دورات شحن مُسيطر عليها / شهر", desc: "دورات مُزامَنة للتجميع متعدد الموردين ومواعيد الإغلاق." },
                { value: "8–15", label: "موردين منسَّقين / دورة", desc: "تحويل نية الشراء إلى منطق تنفيذ جاهز للمستودع." },
                { value: "0–1%", label: "انحراف في مراجعة المستندات", desc: "مطابقة المستندات مع واقع الشحنة قبل التصريح." },
              ].map((metric, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-lg font-medium text-blue-400 mb-2">{metric.label}</div>
                  <p className="text-sm text-slate-500">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Industry Intelligence */}
        <FadeIn delay={300}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">ذكاء القطاعات</h3>
            <p className="text-slate-400 text-center mb-8">التعامل مع القطاع مبني على بروتوكولات—التغليف والامتثال والمخاطر تختلف حسب النوع.</p>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { code: "CG", name: "سلع استهلاكية", desc: "تحكم باركود، خريطة كراتين، وبروتوكولات منع التلف.", color: "blue" },
                { code: "IM", name: "مواد صناعية", desc: "تحقق وزن، انضباط منصات، وحماية رطوبة.", color: "emerald" },
                { code: "EL", name: "إلكترونيات", desc: "تعامل مضاد للكهرباء الساكنة، تسجيل أرقام، وأدلة فحص.", color: "amber" },
                { code: "FU", name: "أثاث", desc: "حماية سطح، تحكم أبعاد، وتخطيط الحاوية.", color: "violet" },
                { code: "RD", name: "توزيع تجزئة", desc: "تجميع متعدد الأصناف، معايير لصق، وتوقيت إطلاق.", color: "rose" },
              ].map((sector, i) => (
                <div key={i} className={`bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-${sector.color}-500/50 transition-all`}>
                  <div className={`w-12 h-12 bg-${sector.color}-500/10 rounded-xl flex items-center justify-center mb-4`}>
                    <span className={`text-xl font-bold text-${sector.color}-400`}>{sector.code}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{sector.name}</h4>
                  <p className="text-sm text-slate-400">{sector.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Service Pipeline Tags */}
        <FadeIn delay={400}>
          <div className="flex flex-wrap justify-center gap-3">
            {["بحث منتجات", "تفاوض", "فحص", "تغليف", "تخزين", "شحن", "توثيق"].map((tag, i) => (
              <span key={i} className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </PremiumSection>

      {/* Incoterms Section - Trade Terms Explanation */}
      <section className="relative py-16 bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                شروط التجارة الدولية <span className="text-blue-400">Incoterms</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                نلتزم بمعايير التجارة العالمية لتوضيح المسؤوليات وتقليل سوء الفهم بين البائع والمشتري
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={100}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-400">EXW</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ex Works</h3>
                <p className="text-slate-400 mb-4">نتحمل مسؤولية التشغيل بالكامل من المصنع حتى باب مستودعك</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>توريد المنتجات من المصنع</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>التخزين والتجميع في المستودع</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>الشحن والتسليم النهائي</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-all">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-400">DDP</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Delivered Duty Paid</h3>
                <p className="text-slate-400 mb-4">التسليم مع دفع الرسوم الجمركية - شحن شامل حتى بابك</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>الشحن الدولي الكامل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>التخليص الجمركي</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>التوصيل النهائي للعميل</span>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-amber-400">FOB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Free On Board</h3>
                <p className="text-slate-400 mb-4">الشحن على متن الباخرة - تحمل تكاليف النقل البحري</p>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>النقل من المصنع للميناء</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>تحميل البضاعة على السفينة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>متابعة الشحن الدولي</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <div className="mt-10 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <div className="flex flex-wrap items-center justify-center gap-8 text-white text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>توضيح مسؤوليات البائع والمشتري</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-700" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>تقليل سوء الفهم والنزاعات التجارية</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-slate-700" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  <span>بروتوكولات قياسية معتمدة عالمياً</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section id="quote" className="relative py-32 bg-slate-950 overflow-hidden">
        {/* Background Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
        </div>
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-badge mb-6">
                  <Rocket className="w-4 h-4" />
                  <span>Get Started</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your <span className="gradient-text-blue">Supply Chain?</span>
                </h2>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Get a comprehensive quote within 24 hours. No obligation, just expert insights tailored to your business.
                </p>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Call us directly</div>
                      <div className="text-white font-semibold">+86 155 8723 7864</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email us</div>
                      <div className="text-white font-semibold">maomoody524@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-[2rem] blur-xl" />
                <div className="relative glass-card p-8">
                  <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                      <input type="email" placeholder="Business Email" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Company Name" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none transition-all" />
                    </div>
                    <select className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-500 focus:border-blue-500/50 focus:outline-none transition-all">
                      <option>Industry</option>
                      <option>Industrial Equipment</option>
                      <option>Consumer Electronics</option>
                      <option>Automotive</option>
                      <option>Textiles & Fashion</option>
                      <option>Other</option>
                    </select>
                    <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:border-blue-500/50 focus:outline-none resize-none transition-all" />
                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Get Premium Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
