import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, Users } from "lucide-react";
import heroBackground from "@/assets/hero-tech-grad.jpg";

const Hero = () => {
  return (
    <section
      className="hero-background relative flex items-center overflow-hidden pt-[56px] pb-1 md:pt-[112px] md:pb-16 min-h-[420px] sm:min-h-[500px] md:min-h-[600px]"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2842]/90 via-[#1E2842]/60 via-50% to-transparent to-70%"></div>
      <div className="absolute bottom-0 left-0 right-0 h-6 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-2 md:py-12 relative z-10">
        <div className="max-w-xl sm:max-w-2xl mb-3 md:mb-12">
          <div className="text-white animate-fade-in text-center md:text-left">
            <div className="inline-block bg-violet-500/20 backdrop-blur-sm border border-violet-400/40 rounded-full px-3 py-1 mb-2 md:px-4 md:py-1.5 md:mb-4">
              <span className="text-violet-300 font-semibold text-[10px] md:text-sm">GRADUAÇÃO EM ADS</span>
            </div>

            <h1
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-6 leading-tight"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.4)",
              }}
            >
              CONSTRUA UMA CARREIRA <span className="text-[#783BED]">EM TECNOLOGIA</span> SEM FRONTEIRAS.
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-white/90 leading-relaxed mb-3 md:mb-8">
              Não perca a maior oportunidade da década. Saia do zero e aprenda a desenvolver soluções, apps e sites que
              valem ouro no mercado corporativo atual.
            </p>

            <div className="mb-3 md:mb-8 flex justify-center md:justify-start">
              <a
                href="https://www.fasuleducacional.edu.br/graduacao/analise-e-desenvolvimento-de-sistemas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:from-violet-500 hover:to-blue-500 font-bold text-xs sm:text-sm md:text-lg px-6 sm:px-6 md:px-10 py-2.5 sm:py-5 md:py-7 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-1 animate-pulse-cta w-full sm:w-auto"
                >
                  QUERO ME INSCREVER <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-row gap-2 md:gap-6 justify-center md:justify-start flex-wrap">
              <div className="flex items-center gap-1 md:gap-2">
                <Award className="h-3.5 w-3.5 md:h-5 md:w-5 flex-shrink-0 text-[#2563EB]" />
                <span className="text-[10px] md:text-sm font-medium">Diploma MEC</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Clock className="h-3.5 w-3.5 md:h-5 md:w-5 flex-shrink-0 text-[#2563EB]" />
                <span className="text-[10px] md:text-sm font-medium">5 Semestres</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2">
                <Users className="h-3.5 w-3.5 md:h-5 md:w-5 flex-shrink-0 text-[#2563EB]" />
                <span className="text-[10px] md:text-sm font-medium">+10 mil Alunos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
