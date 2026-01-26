import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const CTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 h-8 md:h-16 lg:h-24 rotate-180">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-violet-400 font-semibold text-xs md:text-sm">OFERTA POR TEMPO LIMITADO</span>
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            COMECE SUA JORNADA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              NOCODE HOJE
            </span>
          </h2>
          <p className="text-sm md:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-8">
            Tenha acesso a todos os cursos, projetos práticos e comunidade exclusiva por um preço especial.
          </p>

          {/* Countdown */}
          <div className="mb-8 md:mb-10">
            <p className="text-xs md:text-sm uppercase tracking-wider mb-4 text-white/60">
              ESTA OFERTA EXPIRA EM:
            </p>
            <div className="inline-flex gap-2 md:gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/10">
              <div className="text-center px-2 md:px-4">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs uppercase text-white/50">DIAS</div>
              </div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-violet-400 flex items-center">:</div>
              <div className="text-center px-2 md:px-4">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs uppercase text-white/50">HRS</div>
              </div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-pink-400 flex items-center">:</div>
              <div className="text-center px-2 md:px-4">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs uppercase text-white/50">MIN</div>
              </div>
              <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-violet-400 flex items-center">:</div>
              <div className="text-center px-2 md:px-4">
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-[10px] md:text-xs uppercase text-white/50">SEG</div>
              </div>
            </div>
          </div>

          {/* Pricing highlight */}
          <div className="bg-gradient-to-r from-violet-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 mb-8 max-w-lg mx-auto">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-white/50 line-through text-lg md:text-xl">R$ 197</span>
              <span className="text-4xl md:text-5xl font-bold text-white">R$ 97</span>
              <span className="text-white/70">/mês</span>
            </div>
            <span className="inline-block text-xs md:text-sm bg-gradient-to-r from-violet-500 to-pink-500 text-white px-4 py-1.5 rounded-full font-semibold">
              50% DE DESCONTO
            </span>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 font-bold text-base md:text-xl px-8 md:px-14 py-6 md:py-8 rounded-full shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:shadow-[0_0_60px_rgba(139,92,246,0.8)] animate-pulse-cta mb-6 md:mb-8 w-full sm:w-auto"
          >
            GARANTIR MINHA VAGA <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6" />
          </Button>

          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              <span>Acesso a todos os cursos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              <span>Comunidade exclusiva</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-emerald-400" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
