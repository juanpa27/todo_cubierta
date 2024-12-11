import { articles } from '../data/articles';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return {
    title: `${article.title} | Todo Cubierta`,
    description: article.excerpt,
    keywords: article.keywords.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['Todo Cubierta'],
    },
  };
}

export default function ArticlePage({ params }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return <div>Artículo no encontrado</div>;
  }

  // Generate table of contents from content
  const headings = article.content.match(/<h2>(.*?)<\/h2>/g)?.map(heading => 
    heading.replace(/<\/?h2>/g, '')
  ) || [];

  return (
    <div className="min-h-screen bg-base-100/50">
      {/* Hero Section */}
      <div className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.keywords.map((keyword) => (
                <span key={keyword} className="badge badge-primary">{keyword}</span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center gap-6 text-base-content/60">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(article.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                5 min de lectura
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="font-semibold mb-4">Contenido</h3>
                  <ul className="space-y-3 text-sm">
                    {headings.map((heading, index) => (
                      <li key={index}>
                        <a 
                          href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hover:text-primary transition-colors block"
                        >
                          {heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="max-w-3xl mx-auto w-full">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body prose prose-lg max-w-none">
                {/* Featured Image */}
                <div className="relative h-[400px] -mx-6 -mt-6 mb-8">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>

                {/* Article Content */}
                <div 
                  className="prose-headings:scroll-mt-24 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                            prose-p:text-base-content/80 prose-p:leading-relaxed
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-base-content prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Article Footer */}
                <div className="border-t border-base-200 mt-8 pt-8">
                  <div className="flex flex-wrap gap-4">
                    {article.keywords.map((keyword) => (
                      <Link 
                        key={keyword} 
                        href={`/articulos/tags/${keyword}`}
                        className="badge badge-outline hover:badge-primary transition-colors"
                      >
                        {keyword}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Artículos Relacionados</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {articles
                  .filter(a => a.slug !== article.slug)
                  .slice(0, 2)
                  .map(relatedArticle => (
                    <Link 
                      key={relatedArticle.slug} 
                      href={`/articulos/${relatedArticle.slug}`}
                      className="card bg-base-100 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="card-body">
                        <h3 className="card-title">{relatedArticle.title}</h3>
                        <p className="text-base-content/70 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Scroll to top button */}
      <ScrollToTopButton />
    </div>
  );
}

