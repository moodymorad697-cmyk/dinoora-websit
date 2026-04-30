import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function CustomsPage() {
  const t = useTranslations('customs');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-block text-blue-300 hover:text-white mb-6 transition-colors">
              ← Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Customs Clearance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Expert customs brokerage and documentation services. 
              We handle import/export licensing and regulatory compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">100%</span> Compliance
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">50+</span> Countries
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">24/7</span> Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Expert Customs Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Navigate customs regulations with our expert brokerage services
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Complete documentation preparation and management for smooth customs clearance.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Commercial invoices</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Packing lists</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Certificates of origin</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Bill of lading</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">🏛️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Ensure full compliance with import/export regulations in all destination countries.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> HS code classification</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Duty optimization</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Tax planning</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Compliance audits</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">📄</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Licensing</h3>
                <p className="text-gray-600 mb-4">
                  Assistance with import/export licenses and special permits for regulated goods.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Import licenses</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Export permits</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Special permits</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Renewal management</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Clearance</h3>
                <p className="text-gray-600 mb-4">
                  Expedited customs clearance to minimize delays and get your goods moving faster.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Pre-clearance options</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Priority processing</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Direct release</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> 24/7 availability</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Clear Customs Faster</h3>
              <p className="text-xl text-gray-600 mb-8">
                Get expert customs brokerage services for hassle-free clearance
              </p>
              <Link 
                href="/quote"
                className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Get Customs Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
