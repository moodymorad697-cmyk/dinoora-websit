import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

const countries = [
  { code: 'saudi-arabia', ar: 'السعودية', en: 'Saudi Arabia', port: 'Jeddah Islamic Port' },
  { code: 'uae', ar: 'الإمارات', en: 'UAE', port: 'Jebel Ali Port' },
  { code: 'kuwait', ar: 'الكويت', en: 'Kuwait', port: 'Shuwaikh Port' },
  { code: 'qatar', ar: 'قطر', en: 'Qatar', port: 'Hamad Port' },
  { code: 'bahrain', ar: 'البحرين', en: 'Bahrain', port: 'Khalifa Bin Salman Port' },
  { code: 'oman', ar: 'عُمان', en: 'Oman', port: 'Salalah Port' },
  { code: 'jordan', ar: 'الأردن', en: 'Jordan', port: 'Aqaba Port' },
  { code: 'iraq', ar: 'العراق', en: 'Iraq', port: 'Umm Qasr Port' },
  { code: 'algeria', ar: 'الجزائر', en: 'Algeria', port: 'Algiers Port' },
  { code: 'morocco', ar: 'المغرب', en: 'Morocco', port: 'Casablanca Port' },
  { code: 'tunisia', ar: 'تونس', en: 'Tunisia', port: 'Tunis Port' },
  { code: 'egypt', ar: 'مصر', en: 'Egypt', port: 'Alexandria Port' },
  { code: 'lebanon', ar: 'لبنان', en: 'Lebanon', port: 'Beirut Port' },
  { code: 'libya', ar: 'ليبيا', en: 'Libya', port: 'Tripoli Port' },
  { code: 'sudan', ar: 'السودان', en: 'Sudan', port: 'Port Sudan' },
  { code: 'yemen', ar: 'اليمن', en: 'Yemen', port: 'Aden Port' },
];

export default function CountriesPage() {
  const locale = useLocale();
  const ar = locale === 'ar';

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {ar ? 'الدول التي نخدمها' : 'Countries We Serve'}
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            {ar 
              ? 'دينورا تقدم خدمات استيراد وشحن من الصين لجميع الدول العربية'
              : 'Dinoora offers import and shipping services from China to all Arab countries'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link
              key={country.code}
              href={`/${locale}/countries/${country.code}`}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {ar ? country.ar : country.en}
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                {ar ? `الميناء: ${country.port}` : `Port: ${country.port}`}
              </p>
              <div className="flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                {ar ? 'عرض التفاصيل' : 'View Details'}
                <ArrowRight className="h-4 w-4 ml-2 rtl:rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
