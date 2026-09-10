import { Globe, Cpu, Smartphone, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "web",
      icon: Globe,
      title: "Criação de Sites & Web Apps de Alta Conversão",
      description:
        "Desenvolvimento de Landing Pages de alta conversão, painéis administrativos SaaS e portais e-commerce headless ultrarrápidos. Experiência de uso fluida com SEO de ponta e tempo de carregamento instantâneo.",
      features: [
        "Design Systems modulares e acessíveis",
        "Renderização SSR & SSG para indexação perfeita",
        "Otimização para Core Web Vitals (Mobile & Desktop)",
      ],
      tags: ["SSR/SSG", "Core Web Vitals", "Design Systems"],
    },
    {
      id: "apis",
      icon: Cpu,
      title: "APIs Reutilizáveis & Microsserviços Escaláveis",
      description:
        "Construção de backends resilientes sob Clean Architecture. Autenticação robusta (OAuth2, MFA, JWT), proteção contra sobrecargas, rate limiting dinâmico e integração sem atrito com gateways de pagamentos.",
      features: [
        "Stripe, Asaas, Mercado Pago & Open Finance",
        "Cache distribuído multi-tier com Redis",
        "Documentação interativa OpenAPI / Swagger",
      ],
      tags: ["REST / gRPC", "Cache Distribuído", "Zero Downtime"],
    },
    {
      id: "apps",
      icon: Smartphone,
      title: "Aplicativos & Plataformas Multiplataforma",
      description:
        "Desenvolvimento mobile e cross-platform em React Native/Expo e PWAs modernos com estratégia offline-first, push notifications segmentadas e sincronização de dados via SQLite/WatermelonDB.",
      features: [
        "Experiência nativa ultra fluida para iOS & Android",
        "Suporte a biometria, câmera e sensores locais",
        "Homologação e compliance para App Store / Google Play",
      ],
      tags: ["Cross-Platform", "Local-First Sync", "Biometria"],
    },
  ];

  return (
    <section id="servicos" className="py-20 border-t border-[#161a26] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
            [ O QUE EU FAÇO ]
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Serviços sob medida para elevar o seu produto digital
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Entregas ponta a ponta com mentalidade de squad sênior: da especificação arquitetural até a homologação e deploy contínuo em produção.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between rounded-2xl border border-[#1c2233] bg-[#0c0e15] p-6 sm:p-7 hover:border-sky-500/30 hover:bg-[#0f121d] transition-all duration-300 group"
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#141824] border border-[#232a3c] text-sky-400 mb-6 group-hover:scale-105 group-hover:text-sky-300 transition-all">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-sky-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <Check className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tags */}
                <div className="pt-4 border-t border-[#171b26] flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#11141f] border border-[#1b2133] text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Consulting / Legacy Refactoring Banner */}
        {/* <div className="rounded-2xl border border-[#1e2538] bg-[#0f121a] p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-xl bg-[#171c2b] border border-[#273046] text-sky-400 shrink-0">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Precisa de consultoria técnica ou refatoração de código legado?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Auditoria arquitetural, migração de monólitos, mitigação de gargalos e redução de custos em nuvem.
              </p>
            </div>
          </div>

          <a
            href="#contato"
            className="self-stretch md:self-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#171c2b] hover:bg-[#20273c] border border-[#2c3750] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all whitespace-nowrap"
          >
            <span>Vamos conversar</span>
            <ArrowRight className="h-4 w-4 text-sky-400" />
          </a>
        </div> */}

      </div>
    </section>
  );
}
