import {
  GraduationCap,
  Monitor,
  Clock,
  Layers,
  Workflow,
  Globe,
  Smartphone,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Inteligência Artificial",
    description: "Domine as técnicas mais avançadas de IA e machine learning para transformar dados em soluções inteligentes.",
    type: "LATO SENSU",
    modality: "100% EAD",
    hours: "360 A 720H",
    duration: "3 A 12 MESES",
    price: "R$ 86,00",
    installments: "18X",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Zap,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "MBA em Análise de Dados com BI e Big Data",
    description: "Aprenda a transformar grandes volumes de dados em insights estratégicos usando as ferramentas mais modernas do mercado.",
    type: "LATO SENSU",
    modality: "100% EAD",
    hours: "360 A 720H",
    duration: "3 A 12 MESES",
    price: "R$ 86,00",
    installments: "18X",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Layers,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Ciência de Dados e Inteligência Artificial",
    description: "Combine estatística, programação e IA para extrair valor dos dados e criar modelos preditivos de alta performance.",
    type: "LATO SENSU",
    modality: "100% EAD",
    hours: "360 A 720H",
    duration: "3 A 12 MESES",
    price: "R$ 86,00",
    installments: "18X",
    url: "https://www.fasuleducacional.edu.br/posgraduacao/cursos",
    icon: Monitor,
    gradient: "from-pink-500 to-orange-500",
  },
];

const careerAreas = [
  { icon: Layers, title: "Cientista de Dados", description: "Transforme dados em insights" },
  { icon: Smartphone, title: "Analista de BI", description: "Crie dashboards estratégicos" },
  { icon: Workflow, title: "Engenheiro de Dados", description: "Construa pipelines robustos" },
  { icon: Zap, title: "Especialista em IA", description: "Desenvolva modelos inteligentes" },
  { icon: Palette, title: "Analista de Big Data", description: "Processe grandes volumes" },
  { icon: Globe, title: "Consultor em Analytics", description: "Transforme empresas com dados" },
];

const Courses = () => {
  return (
    <section id="cursos" className="pb-8 md:pb-24 dark-section relative">
      <div className="absolute top-0 left-0 right-0 h-4 md:h-16 lg:h-20 rotate-180">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-6 sm:pt-20">
        {/* Header */}
        <div className="text-center mb-5 sm:mb-16 text-white animate-fade-in">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-extrabold mb-2 sm:mb-4">
            NOSSAS <span className="gradient-text">PÓS-GRADUAÇÕES</span>
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed px-2">
            Especialize-se nas áreas mais promissoras do mercado de tecnologia e acelere sua carreira na era dos dados.
          </p>
        </div>

        {/* Course Cards */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-20">
          <div className="grid md:grid-cols-3 gap-3 md:gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-xl md:rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
              >
                {/* Gradient top bar */}
                <div className={`h-1 md:h-1.5 bg-gradient-to-r ${course.gradient}`} />
                
                <div className="p-4 md:p-6">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
                    <course.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>

                  <h3 className="text-base md:text-xl font-bold text-white mb-1.5 md:mb-2 group-hover:text-cyan-300 transition-colors leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-white/60 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                    {course.description}
                  </p>

                  {/* Course Type Badge */}
                  <div className="mb-2 md:mb-3">
                    <span className="inline-block px-2 py-0.5 md:py-1 text-[9px] md:text-[10px] font-semibold bg-cyan-500/20 text-cyan-300 rounded-full">
                      {course.type}
                    </span>
                  </div>

                  {/* Course Info */}
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    <div className="flex items-center gap-1">
                      <Monitor className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-[10px] md:text-xs text-white/70 whitespace-nowrap">{course.modality}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-[10px] md:text-xs text-white/70 whitespace-nowrap">{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 md:w-4 md:h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-[10px] md:text-xs text-white/70 whitespace-nowrap">{course.duration}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-3 md:mb-4">
                    <span className="text-white/50 text-xs md:text-sm">{course.installments}</span>
                    <span className="text-xl md:text-3xl font-bold text-white">{course.price}</span>
                    <span className="text-white/50 text-xs md:text-sm">/mês</span>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-90 text-white font-bold rounded-full py-4 md:py-5 text-xs md:text-sm transition-all`}
                    asChild
                  >
                    <a href={course.url} target="_blank" rel="noopener noreferrer">
                      SAIBA MAIS <ArrowRight className="ml-1.5 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Areas */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white text-center mb-4 sm:mb-10">
            ÁREAS DE <span className="gradient-text">ATUAÇÃO</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white/[0.03] backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-5 text-center hover:bg-white/[0.06] transition-all duration-300 border border-white/5 hover:border-cyan-500/20"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg group-hover:scale-110 transition-transform">
                  <area.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-[10px] sm:text-sm mb-0.5 sm:mb-1">{area.title}</h4>
                <p className="text-white/50 text-[9px] sm:text-xs leading-tight">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-4 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(225, 50%, 8%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Courses;
