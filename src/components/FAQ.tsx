import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração das Pós-Graduações em NoCode?",
    answer:
      "As especializações variam de 10 a 12 meses, com carga horária entre 360 e 420 horas. É possível concluir em menos tempo através do aproveitamento de disciplinas, caso você já tenha cursado outra Pós-Graduação.",
  },
  {
    question: "O certificado de Pós-Graduação é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. O certificado de Pós-Graduação tem a mesma validade de cursos presenciais e é reconhecido em todo o território nacional.",
  },
  {
    question: "Preciso saber programar para fazer a Pós em NoCode?",
    answer:
      "Não! O NoCode foi criado justamente para quem não sabe programar. Você aprenderá a usar ferramentas visuais como Bubble, Webflow, Make e Zapier para criar aplicações completas sem escrever uma linha de código.",
  },
  {
    question: "Quais são as principais áreas de atuação para quem se especializa em NoCode?",
    answer:
      "O profissional NoCode pode atuar como desenvolvedor de apps, especialista em automação, product builder, consultor de transformação digital, UI/UX designer, growth hacker, entre outras áreas em alta demanda no mercado.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "As mensalidades variam de R$ 169,00 a R$ 189,00 com valor fixo até o final do curso. Oferecemos diversas formas de pagamento: boleto, cartão de crédito com parcelamento e PIX.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 pb-10 md:pt-8 md:pb-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-10 md:mb-12 text-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              PERGUNTAS <span className="gradient-text">FREQUENTES</span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-base md:text-lg px-2">
              Tire suas dúvidas sobre as Pós-Graduações em NoCode da FASUL
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 sm:px-5 md:px-6 data-[state=open]:border-cyan-500 data-[state=open]:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 font-medium text-sm sm:text-base md:text-lg hover:no-underline py-4 sm:py-5 md:py-6 hover:text-cyan-600 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base pb-4 sm:pb-5 md:pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
