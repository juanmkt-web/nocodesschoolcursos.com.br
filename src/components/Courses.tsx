import {
  GraduationCap,
  Monitor,
  Clock,
  Calendar,
  Code2,
  Database,
  Globe,
  Smartphone,
  Shield,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import cursoADS from "@/assets/curso-analise-sistemas.jpg";

const courseDetails = {
  title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  modality: "EAD",
  hours: "2.120 HORAS",
  semesters: "5 SEMESTRES",
  promoPrice: "R$ 139,00",
  regularPrice: "R$ 329,00",
  image: cursoADS,
  url: "https://www.fasuleducacional.edu.br/graduacao/analise-e-desenvolvimento-de-sistemas",
  description:
    "O curso de Tecnólogo em Análise e Desenvolvimento de Sistemas da FASUL prepara profissionais para atuar no desenvolvimento de software, aplicações web e mobile, bancos de dados, e gestão de projetos de TI.",
};

const careerAreas = [
  { icon: Code2, title: "Desenvolvedor Full-Stack", description: "Crie aplicações web completas do front ao back-end" },
  { icon: Smartphone, title: "Desenvolvedor Mobile", description: "Desenvolva apps para iOS e Android" },
  { icon: Database, title: "Analista de Dados", description: "Trabalhe com Big Data e Business Intelligence" },
  { icon: Shield, title: "Segurança da Informação", description: "Proteja sistemas e dados corporativos" },
  { icon: Cloud, title: "DevOps / Cloud", description: "Gerencie infraestrutura e deploys em nuvem" },
  { icon: Globe, title: "Desenvolvedor Web", description: "Crie sites e sistemas para a internet" },
];

const Courses = () => {
  return (
    <section id="cursos" className="pb-10 md:pb-24 tech-gradient relative">
      <div className="absolute top-0 left-0 right-0 h-6 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-6 sm:pt-16">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-12 text-white animate-fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4">CONHEÇA O CURSO</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed px-2">
            O Tecnólogo em ADS é uma das formações mais valorizadas do mercado de tecnologia, com alta empregabilidade e
            salários competitivos.
          </p>
        </div>

        {/* Main Course Card */}
        <div className="max-w-6xl mx-auto mb-6 md:mb-16">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-40 md:h-64 lg:h-auto min-h-[160px] md:min-h-[300px]">
                <img
                  src={courseDetails.image}
                  alt={courseDetails.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.4)_0%,transparent_30%)] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.4)_0%,transparent_30%)]" />
              </div>

              {/* Content Side */}
              <div className="p-3 sm:p-6 lg:p-10">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">{courseDetails.title}</h3>
                <p className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-6 leading-relaxed">{courseDetails.description}</p>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-2 sm:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">Tecnólogo</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Monitor className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{courseDetails.modality}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{courseDetails.hours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{courseDetails.semesters}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-xl p-2 sm:p-4 mb-2 sm:mb-6">
                  <div className="flex flex-wrap items-baseline gap-1 sm:gap-2 mb-1">
                    <span className="text-xl sm:text-3xl font-bold text-gray-900">{courseDetails.promoPrice}</span>
                    <span className="text-sm sm:text-lg text-gray-900">/mês</span>
                    <span className="text-gray-400 line-through ml-1 sm:ml-2 text-xs sm:text-base">{courseDetails.regularPrice}</span>
                  </div>
                  <span className="inline-block text-[10px] sm:text-xs bg-gradient-to-r from-violet-500 to-blue-500 text-white px-2 sm:px-3 py-1 rounded-full font-semibold">
                    VALOR FIXO ATÉ O FINAL DO CURSO
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-2 sm:gap-3">
                  <Button
                    className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white font-bold rounded-full text-[10px] sm:text-base py-2 sm:py-6 flex-1 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    asChild
                  >
                    <a href={courseDetails.url} target="_blank" rel="noopener noreferrer">
                      MATRICULE-SE <ArrowRight className="ml-1 h-3 w-3 sm:ml-2 sm:h-5 sm:w-5" />
                    </a>
                  </Button>
                  <a
                    href={courseDetails.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 font-bold text-[10px] sm:text-base border-2 border-violet-600 rounded-full py-2 sm:py-3 px-3 sm:px-6 hover:bg-violet-600/10 transition-colors text-center flex items-center"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Areas */}
        <div className="max-w-6xl mx-auto mb-4 md:mb-16">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center mb-3 sm:mb-8">ÁREAS DE ATUAÇÃO</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
            {careerAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-4 lg:p-6 text-center hover:bg-white/20 transition-colors border border-violet-500/20"
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-3">
                  <area.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-[10px] sm:text-sm lg:text-base mb-0.5">{area.title}</h4>
                <p className="text-white/70 text-[9px] sm:text-xs lg:text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-6 md:h-16 lg:h-20">
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
