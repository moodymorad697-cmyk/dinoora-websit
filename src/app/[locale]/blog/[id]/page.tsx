import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import { blogArticles } from "@/lib/blog-content";
import { BASE_URL } from "@/lib/seo-config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const article = blogArticles.find((entry) => entry.id === id);

  if (!article) {
    return {
      title: locale === "ar" ? "المقال غير موجود" : "Article not found",
      robots: { index: false, follow: false },
    };
  }

  const content = locale === "ar" ? article.ar : article.en;
  return { title: content.title, description: content.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const ar = locale === "ar";
  
  const article = blogArticles.find(a => a.id === id);
  if (!article) notFound();
  const content = ar ? article.ar : article.en;

  const articleUrl = `${BASE_URL}/${locale}/blog/${id}`;
  const imageUrl = `${BASE_URL}${article.image}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": content.title,
    "description": content.description,
    "image": imageUrl,
    "author": {
      "@type": "Organization",
      "name": "Dinoora",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dinoora",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.png`
      },
      "url": BASE_URL
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-slate-900/40" />
        <div className="absolute inset-0 flex items-end p-8">
          <div className="max-w-4xl mx-auto">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
              <ArrowRight className={`w-4 h-4 ${ar ? 'rotate-180' : ''}`} />
              {ar ? "العودة للمدونة" : "Back to Blog"}
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{content.title}</h1>
            <p className="text-xl text-white/80 mt-4">{content.description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-slate-900/95 rounded-2xl border border-indigo-500/20 shadow-[0_16px_45px_rgba(99,102,241,0.15)] p-8 md:p-12">
          <div className="flex items-center gap-6 text-sm text-slate-400 mb-8 pb-8 border-b border-indigo-500/20">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{ar ? "فريق دينورا" : "Dinoora Team"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{ar ? "6 دقائق قراءة" : "6 min read"}</span>
            </div>
          </div>

          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-cyan-400 prose-a:text-cyan-400 prose-strong:text-white">
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>

          <div className="mt-12 pt-8 border-t border-indigo-500/20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{ar ? "لماذا دينورا؟" : "Why Dinoora?"}</h3>
            <p className="text-slate-300 mb-6">
              {ar 
                ? "دينورا هي شريكك الموثوق في الاستيراد من الصين. نساعدك في كل خطوة من رحلة الاستيراد، من البحث عن الموردين إلى التخليص الجمركي."
                : "Dinoora is your trusted partner for importing from China. We help you at every step of your importing journey, from finding suppliers to customs clearance."
              }
            </p>
            <Link 
              href={`/${locale}/quote`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              {ar ? "اطلب عرض سعر الآن" : "Request a Quote Now"}
              <ArrowRight className={`w-5 h-5 ${ar ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
