import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import carlosFoto from "@/assets/carlos-silva.png";
import marianaFoto from "@/assets/mariana-campos.png";
import pedroFoto from "@/assets/pedro-oliveira.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Minha startup coletava muitos dados, mas a gente não sabia o que fazer com eles. Com a especialização em IA, implementei algoritmos de Machine Learning que personalizam a oferta para cada cliente. Deixamos de 'chutar' o que o cliente queria e passamos a prever. O faturamento triplicou.",
    name: "Mariana Campos",
    role: "Fundadora de Startup",
    course: "Inteligência Artificial",
    photo: marianaFoto,
  },
  {
    id: 2,
    quote:
      "Nas reuniões de diretoria, ganhava quem tinha a opinião mais forte. O MBA em BI mudou esse jogo. Aprendi a transformar planilhas complexas em dashboards visuais e estratégicos. Hoje, nenhuma decisão importante é tomada na empresa sem passar pelos dados que minha equipe gera.",
    name: "Carlos Silva",
    role: "Head de Inovação",
    course: "MBA em Análise de Dados e BI",
    photo: carlosFoto,
  },
  {
    id: 3,
    quote:
      "Trabalhava com Growth Marketing, mas minhas análises eram muito básicas. A Pós em Ciência de Dados me ensinou a criar modelos preditivos. Agora eu não apenas analiso o que passou, eu prevejo o comportamento de compra do mês seguinte. Meu passe valorizou muito no mercado.",
    name: "Pedro Oliveira",
    role: "Growth Manager",
    course: "Ciência de Dados e IA",
    photo: pedroFoto,
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
    <section id="depoimentos" className="pt-6 pb-12 sm:py-16 md:py-24 desktop:pb-[120px] mesh-gradient relative">
      <div className="absolute bottom-0 left-0 right-0 h-6 md:h-16 lg:h-20 pointer-events-none">
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
      <div className="container mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        <div className="text-center mb-4 sm:mb-10 md:mb-16 animate-fade-in text-white">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1.5 md:mb-4">
            ESPECIALISTAS <span className="gradient-text">DE SUCESSO</span>
          </h2>
          <p className="text-[11px] sm:text-sm md:text-lg text-white/70 max-w-3xl mx-auto px-2">
            Confira histórias reais de quem saiu da média e se destacou na Era dos Dados com nossas Pós-Graduações.
          </p>
        </div>

        {/* Carousel para telas menores que 1200px */}
        <div
          className="max-w-4xl mx-auto block desktop:hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Seta esquerda */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-500/20 transition-colors border border-white/10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
          </button>

          {/* Seta direita */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-cyan-500/20 transition-colors border border-white/10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/80" />
          </button>

          <div
            className="glass-effect-tech rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 lg:p-12 shadow-2xl animate-fade-in block mx-8 sm:mx-10 md:mx-14"
            key={currentTestimonial.id}
          >
            <Quote className="h-7 w-7 sm:h-9 sm:w-9 md:h-12 md:w-12 text-cyan-400 mb-3 sm:mb-4 md:mb-6" />
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-5 sm:mb-6 md:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-3 sm:gap-5 md:gap-6 border-t border-white/10 pt-4 sm:pt-6 md:pt-8">
              <img
                src={currentTestimonial.photo}
                alt={currentTestimonial.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 sm:border-4 border-cyan-400/50 object-cover flex-shrink-0"
                loading="eager"
              />
              <div>
                <p className="text-white font-bold text-base sm:text-lg md:text-xl">{currentTestimonial.name}</p>
                <p className="text-cyan-400 text-sm md:text-base">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex ? "w-10 bg-gradient-to-r from-cyan-500 to-purple-600" : "w-2.5 bg-white/30"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid de 3 cards para telas >= 1200px */}
        <div className="hidden desktop:grid grid-cols-3 gap-6 ultrawide:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-effect-tech rounded-2xl p-6 ultrawide:p-7 shadow-2xl animate-fade-in flex flex-col h-full hover:border-cyan-500/30 transition-all"
            >
              <Quote className="h-7 w-7 ultrawide:h-8 ultrawide:w-8 text-cyan-400 mb-4 ultrawide:mb-5" />
              <p className="text-base wide:text-lg ultrawide:text-xl text-white mb-5 ultrawide:mb-6 leading-relaxed italic font-light flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 ultrawide:gap-5 border-t border-white/10 pt-5 ultrawide:pt-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-14 h-14 ultrawide:w-16 ultrawide:h-16 rounded-full border-3 border-cyan-400/50 object-cover"
                />
                <div>
                  <p className="text-white font-bold text-base ultrawide:text-lg">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
