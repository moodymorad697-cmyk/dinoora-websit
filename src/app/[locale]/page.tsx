"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
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

const MagneticButton = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };
  
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0, 0)';
  };
  
  return (
    <button 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`group relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
);

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
  <section id={id} className={`relative py-32 overflow-hidden ${className}`}>
    {bgImage && (
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed scale-105" style={{ backgroundImage: `url('${bgImage}')` }} />
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
      desc: "Find verified suppliers with competitive pricing and quality standards",
      features: ["Supplier verification", "Price negotiation", "Sample evaluation"],
      gradient: "from-blue-500 to-blue-600",
      color: "blue"
    },
    { 
      icon: ShieldCheck, 
      title: "Quality Control", 
      desc: "Rigorous inspection at every production stage ensuring compliance",
      features: ["Pre-shipment inspection", "In-process QC", "Factory audits"],
      gradient: "from-emerald-500 to-green-600",
      color: "emerald"
    },
    { 
      icon: Warehouse, 
      title: "Warehousing", 
      desc: "Secure storage with real-time inventory tracking and management",
      features: ["Secure storage", "Inventory tracking", "Order consolidation"],
      gradient: "from-violet-500 to-purple-600",
      color: "violet"
    },
    { 
      icon: Ship, 
      title: "Global Shipping", 
      desc: "Air, sea, and land freight to 50+ countries worldwide",
      features: ["Air freight", "Sea freight", "Rail & Road"],
      gradient: "from-cyan-500 to-blue-600",
      color: "cyan"
    },
    { 
      icon: FileCheck, 
      title: "Customs Clearance", 
      desc: "Hassle-free documentation and regulatory compliance handling",
      features: ["Import/export docs", "Duty optimization", "Compliance"],
      gradient: "from-amber-500 to-orange-600",
      color: "amber"
    },
    { 
      icon: Package, 
      title: "Door Delivery", 
      desc: "DDP solutions delivered right to your warehouse door",
      features: ["DDP delivery", "Last-mile tracking", "Proof of delivery"],
      gradient: "from-rose-500 to-pink-600",
      color: "rose"
    },
  ];

  const features = [
    { icon: Target, title: "Precision Matching", desc: "AI-powered supplier matching based on your exact specifications", gradient: "from-blue-500 to-cyan-500", bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" },
    { icon: Shield, title: "Risk Management", desc: "Comprehensive insurance coverage and quality guarantees", gradient: "from-emerald-500 to-green-500", bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" },
    { icon: BarChart3, title: "Cost Optimization", desc: "Strategic sourcing reduces costs by average 23%", gradient: "from-purple-500 to-pink-500", bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80" },
    { icon: Handshake, title: "Dedicated Teams", desc: "Bilingual account managers for seamless communication", gradient: "from-orange-500 to-amber-500", bgImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80" },
    { icon: Clock, title: "Time Efficiency", desc: "40% faster lead times through optimized processes", gradient: "from-rose-500 to-red-500", bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80" },
    { icon: BadgeCheck, title: "Compliance Ready", desc: "Full regulatory compliance and certification support", gradient: "from-indigo-500 to-violet-500", bgImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" },
  ];

  const processSteps = [
    { step: "01", icon: MessageCircle, title: "Discovery", desc: "Deep-dive consultation to understand your product requirements, quality standards, and timeline" },
    { step: "02", icon: Search, title: "Sourcing", desc: "AI-powered supplier identification with comprehensive vetting and sample evaluation" },
    { step: "03", icon: ShieldCheck, title: "Verification", desc: "Rigorous quality control with pre-production, in-process, and pre-shipment inspections" },
    { step: "04", icon: Truck, title: "Fulfillment", desc: "End-to-end logistics management from factory floor to your warehouse door" },
  ];

  const testimonials = [
    { name: "Michael Chen", role: "CEO, TechGear Inc.", content: "Dinoora reduced our sourcing costs by 35% while improving quality. Game-changing partnership.", rating: 5 },
    { name: "Sarah Ahmed", role: "Procurement Director, Luxe Brands", content: "Their attention to detail and quality control is unmatched. Our go-to partner for China sourcing.", rating: 5 },
    { name: "David Park", role: "Operations Manager, AutoParts Co.", content: "From supplier verification to door delivery, they handle everything flawlessly.", rating: 5 },
  ];

  const knowledgeArticles = [
    { icon: BookOpen, title: "China Sourcing Guide 2024", category: "Guide", readTime: "12 min" },
    { icon: FileText, title: "Incoterms & Shipping Terms", category: "Reference", readTime: "8 min" },
    { icon: Lightbulb, title: "Quality Control Checklist", category: "Tools", readTime: "6 min" },
    { icon: HelpCircle, title: "Import Regulations FAQ", category: "FAQ", readTime: "10 min" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden pt-16">

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=2560&q=90')" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-blue-950/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(6,182,212,0.1),transparent_50%)]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Trusted by Fortune 500 Companies</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="text-white">Bridge to</span>
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    China Excellence
                  </span>
                </h1>

                <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
                  Premium sourcing, rigorous quality control, and seamless logistics. 
                  We transform your China trade operations with precision and reliability.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all">
                    <span onClick={() => scrollToSection('quote')}>Start Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-slate-700 text-white rounded-full font-semibold text-lg hover:bg-white/5 transition-all"
                  >
                    <Play className="w-5 h-5" />
                    Explore Services
                  </button>
                </div>

                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-600 border-2 border-slate-950 flex items-center justify-center text-sm font-bold text-white">
                        {String.fromCharCode(64+i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-sm text-slate-500">500+ successful projects</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="relative">
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Quote</h3>
                  
                  <div className="space-y-4">
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors" />
                    <input type="email" placeholder="Business Email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors" />
                    <input type="text" placeholder="Product Category" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors" />
                    <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      Get Quote in 24h
                    </button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700 flex items-center gap-4 text-sm text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span>No obligation. Free consultation.</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </section>

      {/* SERVICES SECTION */}
      <PremiumSection id="services" className="bg-slate-950">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              End-to-End Solutions
            </h2>
            <p className="text-xl text-slate-400">
              Comprehensive trade services designed for enterprise success
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className={`w-14 h-14 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient}`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* FEATURES GRID */}
      <PremiumSection id="features" className="bg-slate-900" bgImage="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80" overlay="bg-slate-950/90">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why Industry Leaders Choose Us
            </h2>
            <p className="text-xl text-slate-400">
              Precision, reliability, and results that drive growth
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${feature.bgImage}')` }}
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Content */}
                <div className="relative p-6">
                  <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats Bar */}
        <FadeIn delay={400}>
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: "+", label: "Suppliers Verified" },
              { value: 50, suffix: "+", label: "Countries Served" },
              { value: 99, suffix: "%", label: "Quality Rate" },
              { value: 40, suffix: "%", label: "Cost Savings" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </PremiumSection>

      {/* PROCESS SECTION */}
      <PremiumSection id="process" className="bg-slate-950">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-xl text-slate-400">
              A proven 4-step process from concept to delivery
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-800 hover:border-slate-700 transition-all h-full">
                  <div className="text-6xl font-bold text-slate-800 mb-4">{step.step}</div>
                  <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8">
                    <div className="h-px bg-gradient-to-r from-blue-500 to-transparent" />
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client Success Stories
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
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
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Trade Intelligence
            </h2>
            <p className="text-xl text-slate-400">
              Expert insights to optimize your China trade strategy
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeArticles.map((article, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="group bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                  <article.icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{article.category}</span>
                <h3 className="text-lg font-semibold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">{article.title}</h3>
                <span className="text-sm text-slate-500">{article.readTime} read</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </PremiumSection>

      {/* OPERATIONS - Daily Capabilities Section */}
      <PremiumSection id="operations" className="bg-slate-900" bgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80" overlay="bg-slate-950/95">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4" />
              يومياتنا / Our Operations
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              كل قدرة تُدار كوحدة نظام
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
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Supply Chain?
                </h2>
                <p className="text-xl text-slate-400 mb-8">
                  Get a comprehensive quote within 24 hours. No obligation, just expert insights.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Call us directly</div>
                      <div className="text-white font-semibold">+86 138 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Email us</div>
                      <div className="text-white font-semibold">enterprise@dinoora.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none" />
                    <input type="email" placeholder="Business Email" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Company Name" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none" />
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none" />
                  </div>
                  <select className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-500 focus:border-blue-500 focus:outline-none">
                    <option>Industry</option>
                    <option>Industrial Equipment</option>
                    <option>Consumer Electronics</option>
                    <option>Automotive</option>
                    <option>Textiles & Fashion</option>
                    <option>Other</option>
                  </select>
                  <textarea rows={4} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none resize-none" />
                  <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Get Premium Quote
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
