import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-40 mesh-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-float"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-24 lg:h-32">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="xMidYMax slice"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-cyan-400" />
              <span className="text-cyan-300 font-semibold text-xs md:text-sm">PÓS-GRADUAÇÃO E MBA</span>
            </div>

            {/* Main headline */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.1]">
              CHEGOU A HORA DE <span className="gradient-text">ESPECIALIZAR </span>
              SUA CARREIRA
            </h2>

            <p className="text-sm sm:text-base md:text-xl text-white/80 leading-relaxed mb-5 md:mb-8 max-w-2xl mx-auto px-2">
              O mercado não aceita mais o básico. Aprofunde seus conhecimentos, domine as tendências da sua área e
              conquiste os cargos de liderança que exigem qualificação superior.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-10 px-2">
              <a
                href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-400 hover:to-purple-500 font-bold text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all hover:-translate-y-1"
                >
                  QUERO ME ESPECIALIZAR <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </a>
              <a href="#cursos">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/20 text-white bg-white/5 hover:bg-white/10 font-semibold text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full backdrop-blur-sm"
                >
                  VER PÓS-GRADUAÇÕES
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 md:gap-10 justify-center">
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs md:text-sm font-bold">Diploma MEC</div>
                  <div className="text-[10px] md:text-xs text-white/60">Nota máxima</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs md:text-sm font-bold">100% Online</div>
                  <div className="text-[10px] md:text-xs text-white/60">Estude onde quiser</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                  <Globe className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs md:text-sm font-bold">+10 mil Alunos</div>
                  <div className="text-[10px] md:text-xs text-white/60">Em todo Brasil</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
