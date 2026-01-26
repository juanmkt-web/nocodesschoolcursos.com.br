import {
  Layers,
  Paintbrush,
  Database,
  Workflow,
  Smartphone,
  ShoppingCart,
  ArrowRight,
  Star,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    icon: Layers,
    name: "Bubble.io",
    description: "Crie aplicações web completas e escaláveis sem código",
    level: "Intermediário",
    hours: "40h",
    students: "2.5k",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Paintbrush,
    name: "Webflow",
    description: "Design e desenvolvimento de sites profissionais",
    level: "Iniciante",
    hours: "30h",
    students: "3.2k",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    name: "Airtable",
    description: "Banco de dados visual para gerenciar qualquer projeto",
    level: "Iniciante",
    hours: "15h",
    students: "1.8k",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Workflow,
    name: "Make (Integromat)",
    description: "Automatize processos e conecte suas ferramentas",
    level: "Intermediário",
    hours: "25h",
    students: "2.1k",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Smartphone,
    name: "Framer",
    description: "Prototipagem e design interativo de alta fidelidade",
    level: "Iniciante",
    hours: "20h",
    students: "1.5k",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: ShoppingCart,
    name: "Shopify",
    description: "Monte sua loja virtual completa e profissional",
    level: "Iniciante",
    hours: "25h",
    students: "2.8k",
    color: "from-green-500 to-emerald-500",
  },
];

const Courses = () => {
  return (
    <section id="ferramentas" className="py-12 md:py-24 bg-gradient-to-br from-[#0f0f23] via-[#1a1a3e] to-[#0d0d1f] relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <div className="inline-block bg-gradient-to-r from-violet-500/20 to-pink-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-violet-400 font-semibold text-xs md:text-sm">FERRAMENTAS PREMIUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-4">
            DOMINE AS FERRAMENTAS{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
              MAIS PODEROSAS
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Aprenda as plataformas NoCode mais utilizadas por startups e empresas ao redor do mundo
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <tool.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">{tool.name}</h3>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">{tool.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full">{tool.level}</span>
                <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {tool.hours}
                </span>
                <span className="text-xs bg-white/10 text-white/80 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Users className="w-3 h-3" /> {tool.students}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-xs text-white/60 ml-2">5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white hover:from-violet-500 hover:via-purple-500 hover:to-pink-500 font-bold text-sm md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-1"
          >
            ACESSAR TODOS OS CURSOS <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
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
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1E2842"
          />
        </svg>
      </div>
    </section>
  );
};

export default Courses;
