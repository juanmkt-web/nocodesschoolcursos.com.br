import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-[80px] pb-8 md:pt-[140px] md:pb-24 min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 py-4 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-violet-500/20 to-cyan-500/20 backdrop-blur-sm border border-violet-400/40 rounded-full px-4 py-2 mb-4 md:px-6 md:py-2.5 md:mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-bold text-xs md:text-sm tracking-wider">
                🚀 CONSTRUA SEM CÓDIGO
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-8 leading-tight">
              CRIE APPS INCRÍVEIS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
                SEM ESCREVER CÓDIGO
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl text-white/80 leading-relaxed mb-6 md:mb-10 max-w-3xl mx-auto">
              Transforme suas ideias em produtos digitais reais. Aprenda as melhores ferramentas NoCode 
              e lance seu projeto em semanas, não meses.
            </p>

            <div className="mb-6 md:mb-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 font-bold text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-1 animate-pulse-cta"
              >
                COMEÇAR AGORA <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 rounded-full backdrop-blur-sm"
              >
                VER DEMONSTRAÇÃO
              </Button>
            </div>

            <div className="flex flex-row gap-4 md:gap-8 justify-center flex-wrap">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-400" />
                <span className="text-xs md:text-sm font-medium">Rápido de Aprender</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Clock className="h-4 w-4 md:h-5 md:w-5 text-cyan-400" />
                <span className="text-xs md:text-sm font-medium">Lance em Semanas</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-pink-400" />
                <span className="text-xs md:text-sm font-medium">+5.000 Alunos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-8 md:h-16 lg:h-24">
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
    </section>
  );
};

export default Hero;
