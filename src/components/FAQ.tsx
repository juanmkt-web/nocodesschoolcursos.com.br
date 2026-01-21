import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração do curso de Análise e Desenvolvimento de Sistemas?",
    answer:
      "O curso de Tecnólogo em ADS tem duração de 5 semestres (2 anos e meio), com carga horária total de 2.400 horas. É possível concluir em menos tempo através do aproveitamento de disciplinas, caso você já tenha cursado outra graduação.",
  },
  {
    question: "O diploma de ADS EaD é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. O diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas tem a mesma validade de cursos presenciais e é reconhecido em todo o território nacional.",
  },
  {
    question: "Preciso saber programar para começar o curso?",
    answer:
      "Não! O curso foi desenvolvido para ensinar programação do zero. Você aprenderá desde lógica de programação até linguagens avançadas como Python, Java, JavaScript e SQL, mesmo sem nenhum conhecimento prévio.",
  },
  {
    question: "Quais são as principais áreas de atuação para quem forma em ADS?",
    answer:
      "O profissional de ADS pode atuar como desenvolvedor web, desenvolvedor mobile, analista de sistemas, DBA (administrador de banco de dados), DevOps, analista de segurança da informação, cientista de dados, entre outras áreas muito demandadas no mercado.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "A mensalidade é de apenas R$ 139,00 com valor fixo até o final do curso. Oferecemos diversas formas de pagamento: boleto, cartão de crédito com parcelamento e PIX.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-2 pb-6 md:pt-6 md:pb-16 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-4 sm:mb-8 md:mb-10 text-center">
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a0a2e] mb-2 sm:mb-4">PERGUNTAS FREQUENTES</h2>
            <p className="text-gray-600 text-xs sm:text-base md:text-lg px-2">Tire suas dúvidas sobre o curso de ADS da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-3 sm:px-4 md:px-6 data-[state=open]:border-violet-500"
              >
                <AccordionTrigger className="text-left text-[#1a0a2e] font-medium text-sm sm:text-base md:text-lg hover:no-underline py-3 sm:py-4 md:py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base pb-3 sm:pb-4 md:pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
