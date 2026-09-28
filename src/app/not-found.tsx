import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-amber-500 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          عذراً، الصفحة التي تبحث عنها لا موجودة أو تم نقلها.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            العودة للرئيسية
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold rounded-lg transition-colors duration-300"
          >
            تواصل معنا
          </Link>
        </div>
      </div>
    </div>
  )
}
