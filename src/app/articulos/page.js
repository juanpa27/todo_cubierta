import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { articles } from './data/articles';

export const metadata = {
  title: 'Artículos sobre Neumáticos y Mantenimiento Vehicular | Todo Cubierta',
  description: 'Explora nuestros artículos especializados sobre neumáticos, mantenimiento de vehículos y consejos de conducción. Información experta para mantener tu vehículo en óptimas condiciones.',
  keywords: ['neumáticos', 'mantenimiento vehicular', 'consejos de conducción', 'seguridad vial', 'Todo Cubierta'],
};

export default function ArticulosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-6">Guías de Expertos en Neumáticos</h1>
        <p className="text-xl text-base-content/80">
          Descubre información valiosa sobre neumáticos, mantenimiento vehicular y consejos de conducción, 
          directamente de los expertos de Todo Cubierta.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link 
            href={`/articulos/${article.slug}`} 
            key={article.slug} 
            className="group"
          >
            <article className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Card Image with Gradient Overlay */}
              <figure className="relative h-64">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 to-transparent" />
              </figure>

              {/* Card Content */}
              <div className="card-body">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.keywords.slice(0, 2).map((keyword) => (
                    <span 
                      key={keyword} 
                      className="badge badge-primary badge-outline"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="card-title text-2xl group-hover:text-primary transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-base-content/70 line-clamp-3 mb-4">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-base-200">
                  <div className="flex items-center gap-4 text-sm text-base-content/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

