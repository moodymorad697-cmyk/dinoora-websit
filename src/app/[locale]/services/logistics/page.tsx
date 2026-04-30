import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function LogisticsPage() {
  const t = useTranslations('logistics');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-block text-blue-300 hover:text-white mb-6 transition-colors">
              ← Back to Services
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Logistics Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              End-to-end supply chain management and fulfillment services. 
              We provide technology-driven logistics solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">100%</span> Visibility
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">AI</span> Powered
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-blue-300 font-semibold">24/7</span> Monitoring
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
              Complete Supply Chain Management
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Technology-driven logistics solutions for modern businesses
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Supply Chain Management</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end supply chain visibility and management from supplier to customer.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Real-time tracking</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Inventory optimization</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Demand forecasting</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Risk management</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Fulfillment Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete order fulfillment including picking, packing, and shipping.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Order processing</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Pick and pack</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Returns management</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Quality control</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics and reporting for data-driven decision making.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Performance metrics</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Custom reports</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Trend analysis</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Predictive insights</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="text-5xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamless integration with your existing systems and platforms.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> API integration</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> ERP systems</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> E-commerce platforms</li>
                  <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Custom solutions</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Optimize Your Supply Chain</h3>
              <p className="text-xl text-gray-600 mb-8">
                Get technology-driven logistics solutions for your business
              </p>
              <Link 
                href="/quote"
                className="inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg"
              >
                Get Logistics Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
