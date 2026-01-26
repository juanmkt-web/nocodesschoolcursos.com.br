import { Eye, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Como criar um SaaS do zero usando Bubble.io em 2024",
    author: "Ana Costa",
    date: "15 de jan. de 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    views: "12.4k",
    category: "Bubble",
  },
  {
    title: "Webflow vs Framer: Qual escolher para seu projeto?",
    author: "Bruno Martins",
    date: "12 de jan. de 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    views: "8.7k",
    category: "Webflow",
  },
  {
    title: "Automatize tudo: Guia completo de Make (Integromat)",
    author: "Carla Ribeiro",
    date: "10 de jan. de 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    views: "6.2k",
    category: "Automação",
  },
  {
    title: "Como ganhar R$ 10.000/mês como freelancer NoCode",
    author: "Daniel Souza",
    date: "08 de jan. de 2024",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1553729459-uj5aa9c43c07?w=600&h=400&fit=crop",
    views: "15.8k",
    category: "Carreira",
  },
];

const Blog = () => {
  return (
    <section className="py-12 md:py-24 bg-[#1E2842] relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-400 font-semibold text-xs md:text-sm">BLOG NOCODE</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            CONTEÚDO{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              GRATUITO
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-3xl mx-auto">
            Tutoriais, dicas e estratégias para você dominar o universo NoCode.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-3 left-3 text-xs bg-gradient-to-r from-violet-500 to-pink-500 text-white px-3 py-1 rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-white font-bold text-sm md:text-base leading-snug mb-3 group-hover:text-violet-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-white/50 text-xs">
                  <span>{post.author}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {post.views}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-semibold transition-colors">
            Ver todos os artigos <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Blog;
