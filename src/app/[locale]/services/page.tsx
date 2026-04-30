"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { 
  Search, 
  ShieldCheck, 
  Warehouse, 
  Ship, 
  FileCheck, 
  Package,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Clock,
  Award,
  Globe,
  Factory,
  Boxes,
  Truck,
  Plane,
  TrainFront,
  Anchor,
  ClipboardCheck,
  FileText,
  Shield,
  Zap,
  BarChart3,
  Briefcase
} from "lucide-react";

// 3D Service Card Component
const ServiceCard3D = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  gradient, 
  bgImage,
  link 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  features: string[], 
  gradient: string,
  bgImage: string,
  link: string
}) => {
  return (
    <div className="group relative">
      {/* Background glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
      
      <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-700">
        {/* Header with gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }} />
n          </div>
          
          {/* Icon */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
            <div className="w-20 h-20 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="pt-14 pb-8 px-8">
          <h3 className="text-2xl font-bold text-white mb-3 text-center">{title}</h3>
          <p className="text-slate-400 mb-6 text-center leading-relaxed">{description}</p>
          
          {/* Features */}
          <ul className="space-y-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-slate-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <Link 
            href={link}
            className={`group/btn flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
          >
            Learn More
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const t = useTranslations();

  const services = [
    {
      icon: Search,
      title: "Product Sourcing",
      description: "Find the best suppliers and products in China with our expert sourcing team. We handle supplier verification, price negotiation, and quality assurance.",
      features: [
        "Supplier identification and verification",
        "Price negotiation and MOQ management",
        "Sample acquisition and testing",
        "Industrial equipment sourcing",
        "Spare parts sourcing"
      ],
      gradient: "from-blue-500 to-blue-700",
      bgImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
      link: "/services/sourcing"
    },
    {
      icon: ShieldCheck,
      title: "Quality Inspection",
      description: "Ensure product quality with thorough inspections and factory audits. Our expert teams verify compliance with your specifications.",
      features: [
        "Pre-shipment inspection",
        "In-process inspection",
        "Factory audits",
        "Supplier compliance verification",
        "Loading supervision"
      ],
      gradient: "from-emerald-500 to-green-600",
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      link: "/services/inspection"
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure storage solutions in strategic locations across China. We offer inventory management and order consolidation services.",
      features: [
        "Secure warehousing in China",
        "Strategic locations near manufacturing hubs",
        "Free storage (limited period)",
        "Inventory management",
        "Order consolidation"
      ],
      gradient: "from-purple-500 to-purple-700",
      bgImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
      link: "/services/warehousing"
    },
    {
      icon: Ship,
      title: "Shipping & Freight",
      description: "Air, sea, rail, and trucking options for all your shipping needs. We provide DDP and DAP solutions for hassle-free delivery.",
      features: [
        "Air freight (fast delivery)",
        "Sea freight (cost-effective)",
        "Rail freight (cross-border)",
        "DDP (Door-to-Door)",
        "Cargo insurance"
      ],
      gradient: "from-cyan-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
      link: "/services/shipping"
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert customs brokerage and documentation services. We handle import/export licensing and regulatory compliance.",
      features: [
        "Import/export licensing",
        "Customs brokerage",
        "Document processing",
        "Duty optimization",
        "Regulatory compliance"
      ],
      gradient: "from-amber-500 to-orange-600",
      bgImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      link: "/services/customs"
    },
    {
      icon: Package,
      title: "Logistics Solutions",
      description: "End-to-end supply chain management and fulfillment services. We provide technology-driven logistics solutions.",
      features: [
        "End-to-end solutions",
        "Supply chain management",
        "Order fulfillment",
        "Dropshipping support",
        "API integration"
      ],
      gradient: "from-pink-500 to-rose-600",
      bgImage: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
      link: "/services/logistics"
    }
  ];

  const shippingModes = [
    { icon: Plane, title: "Air Freight", desc: "Fastest delivery option for urgent shipments", time: "3-7 days", gradient: "from-sky-400 to-blue-500" },
    { icon: Ship, title: "Sea Freight", desc: "Cost-effective for large volume shipments", time: "20-45 days", gradient: "from-cyan-400 to-blue-500" },
    { icon: TrainFront, title: "Rail Freight", desc: "Balance of speed and cost for Eurasia", time: "15-20 days", gradient: "from-emerald-400 to-green-500" },
    { icon: Truck, title: "Road Freight", desc: "Flexible for regional and cross-border delivery", time: "5-15 days", gradient: "from-amber-400 to-orange-500" },
  ];

  const stats = [
    { icon: TrendingUp, value: "10K+", label: "Shipments Delivered", gradient: "from-blue-500 to-cyan-500" },
    { icon: Users, value: "500+", label: "Active Clients", gradient: "from-emerald-500 to-green-500" },
    { icon: Globe, value: "50+", label: "Countries Served", gradient: "from-purple-500 to-pink-500" },
    { icon: Clock, value: "24/7", label: "Support Available", gradient: "from-amber-500 to-orange-500" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section - Port/Cargo Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-blue-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">حلول تجارة شاملة</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            خدماتنا
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              المتكاملة
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            من التوريد إلى التسليم، نتعامل مع كل خطوة من رحلة تجارتك مع الصين بالخبرة والموثوقية
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full mb-4">
              <Briefcase className="w-4 h-4" />
              ما نقدمه
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              حلول متكاملة
            </h2>
            <p className="text-lg text-slate-400">
              خدمات شاملة مصممة لتبسيط عمليات تجارتك مع الصين
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard3D key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Modes Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 text-sm font-semibold rounded-full mb-4">
              <Ship className="w-4 h-4" />
              خيارات الشحن
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              طرق شحن متعددة
            </h2>
            <p className="text-lg text-slate-400">
              اختر طريقة الشحن المثالية لجدولك الزمني وميزانيتك
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingModes.map((mode, index) => (
              <div key={index} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className={`w-16 h-16 mb-4 bg-gradient-to-br ${mode.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <mode.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{mode.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{mode.desc}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <span className="text-sm font-semibold text-cyan-400">{mode.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20 mb-4">
              <BarChart3 className="w-4 h-4" />
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Simple Process, Powerful Results
            </h2>
            <p className="text-lg text-gray-300">
              Four simple steps to start your China trade journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", icon: Search, title: "Consultation", desc: "Tell us what you need" },
              { step: "02", icon: Factory, title: "Sourcing", desc: "We find the best suppliers" },
              { step: "03", icon: ShieldCheck, title: "Quality Control", desc: "We inspect everything" },
              { step: "04", icon: Truck, title: "Delivery", desc: "Goods arrive at your door" },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl font-bold text-white/20 mb-4">{item.step}</div>
                  <div className="w-14 h-14 mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-950" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            جاهز للبدء؟
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر. دعنا نتعامل مع احتياجات تجارتك مع الصين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all"
            >
              اطلب عرض سعر مجاني
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/#quote"
              className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 text-white border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
