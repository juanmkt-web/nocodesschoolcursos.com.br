import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Eu era designer gráfico e queria criar meus próprios produtos digitais. Com o curso de Bubble, consegui lançar meu primeiro SaaS em 3 meses. Hoje faturo R$ 25.000/mês com uma ferramenta de gestão para clínicas que criei 100% sem código.",
    name: "Lucas Ferreira",
    role: "Fundador - ClinicaApp",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Sempre quis empreender mas não sabia programar. O NoCodePro mudou minha vida. Aprendi Webflow e hoje tenho uma agência focada em sites NoCode. Saí do CLT e dobrei minha renda em 6 meses trabalhando de casa.",
    name: "Camila Santos",
    role: "CEO - Studio Flow",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Como product manager, aprender NoCode foi um divisor de águas. Agora consigo criar protótipos funcionais rapidamente e validar ideias antes de passar para o time de dev. O curso de Make me economiza horas toda semana com automações.",
    name: "Rafael Oliveira",
    role: "Product Manager - TechStartup",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="py-12 md:py-24 bg-[#1E2842] relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-16 lg:h-24 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16 animate-fade-in text-white">
          <div className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-400 font-semibold text-xs md:text-sm">CASOS DE SUCESSO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            CRIADORES QUE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              TRANSFORMARAM SUAS VIDAS
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto">
            Conheça histórias reais de pessoas que aprenderam NoCode e conquistaram sua independência.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </button>

          <div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-in mx-8 md:mx-16"
            key={currentTestimonial.id}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <Quote className="h-8 w-8 md:h-12 md:w-12 text-violet-400 mb-4 md:mb-6" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-10 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-4 md:gap-6 border-t border-white/20 pt-6 md:pt-8">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-violet-400 object-cover flex-shrink-0"
              />
              <div>
                <p className="text-white font-bold text-lg md:text-xl">{currentTestimonial.name}</p>
                <p className="text-violet-400 text-sm md:text-base">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "w-10 bg-gradient-to-r from-violet-500 to-pink-500" : "w-2.5 bg-white/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
