import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Preciso saber programar para começar?",
    answer:
      "Não! O NoCode foi feito exatamente para quem não sabe programar. Nossos cursos começam do absoluto zero e te ensinam passo a passo como usar cada ferramenta. Você só precisa de um computador e vontade de aprender.",
  },
  {
    question: "Quanto tempo leva para criar meu primeiro projeto?",
    answer:
      "Com dedicação, você consegue criar seu primeiro projeto funcional em 2-4 semanas. Nossos alunos mais dedicados lançam produtos completos em 1-2 meses. A velocidade é uma das maiores vantagens do NoCode!",
  },
  {
    question: "Quais ferramentas vou aprender?",
    answer:
      "Você terá acesso a cursos de Bubble.io, Webflow, Framer, Make (Integromat), Airtable, Zapier, Shopify e muito mais. Cobrimos as ferramentas mais demandadas pelo mercado e atualizamos constantemente.",
  },
  {
    question: "Consigo monetizar minhas habilidades NoCode?",
    answer:
      "Sim! Existem várias formas: criar seus próprios produtos SaaS, oferecer serviços como freelancer, abrir uma agência NoCode, ou usar internamente na sua empresa. Freelancers NoCode cobram de R$ 5.000 a R$ 30.000 por projeto.",
  },
  {
    question: "Qual o valor do investimento?",
    answer:
      "Oferecemos planos acessíveis a partir de R$ 97/mês com acesso a todos os cursos, projetos práticos, comunidade exclusiva e suporte. Também temos opção de pagamento anual com desconto de 40%.",
  },
];

const FAQ = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block bg-gradient-to-r from-violet-100 to-pink-100 rounded-full px-4 py-2 mb-4">
              <span className="text-violet-600 font-semibold text-xs md:text-sm">TIRE SUAS DÚVIDAS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              PERGUNTAS{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">
                FREQUENTES
              </span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Tudo que você precisa saber antes de começar sua jornada NoCode
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-4 md:px-6 data-[state=open]:border-violet-500 data-[state=open]:shadow-lg transition-all"
              >
                <AccordionTrigger className="text-left text-gray-900 font-semibold text-sm sm:text-base md:text-lg hover:no-underline py-4 md:py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base pb-4 md:pb-5 leading-relaxed">
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
