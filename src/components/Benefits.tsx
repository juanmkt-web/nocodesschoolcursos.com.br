import { Layers, Rocket, Palette, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Layers,
    title: "Domine",
    highlight: "Bubble & Webflow",
  },
  {
    icon: Palette,
    title: "Crie Designs",
    highlight: "Profissionais",
  },
  {
    icon: Rocket,
    title: "Lance Produtos",
    highlight: "em Semanas",
  },
  {
    icon: TrendingUp,
    title: "Escale seu",
    highlight: "Negócio Digital",
  },
];

const highlights = ["Bubble.io", "Webflow", "Framer", "Make", "Airtable"];

const Benefits = () => {
  return (
    <section className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f] relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left side - Main Title */}
              <div className="animate-fade-in text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">NOCODE</span>
                  <br />
                  PARA CRIADORES AMBICIOSOS
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed mb-4 md:mb-8">
                  O mercado de NoCode está explodindo. Empresas pagam até <strong className="text-white">R$ 15.000/mês</strong> por desenvolvedores NoCode experientes. Aprenda as ferramentas mais demandadas e conquiste sua independência.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - Benefits List */}
              <div className="space-y-3 md:space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 animate-fade-in group"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/30 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm sm:text-base md:text-xl leading-tight">
                        {benefit.title} <strong className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{benefit.highlight}</strong>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-6 md:pt-10">
                  <button className="w-full lg:w-auto bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full shadow-[0_20px_40px_rgba(139,92,246,0.4)] hover:shadow-[0_25px_50px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                    QUERO APRENDER NOCODE
                    <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
