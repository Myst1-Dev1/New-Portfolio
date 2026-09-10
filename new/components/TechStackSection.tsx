import React from "react";
import { Layout, Server, Database, Cloud, ArrowRight } from "lucide-react";

export default function TechStackSection() {
  const stackCards = [
    {
      id: "frontend",
      title: "Frontend Architecture",
      icon: Layout,
      badge: "Tier 1 • Core",
      badgeColor: "text-sky-400 bg-sky-950/40 border-sky-800/40",
      description:
        "Aplicações web ultra responsivas, renderização híbrida inteligente (SSR/SSG/ISR), componentização limpa e otimizações de runtime.",
      skills: [
        { name: "React 19 & Next.js", highlighted: true },
        { name: "TypeScript Estrito", highlighted: true },
        { name: "Tailwind CSS", highlighted: false },
        { name: "Wordpress", highlighted: false },
        { name: "Angular", highlighted: false },
        { name: "Gerenciamento de estado global (redux/context/Zustand)", highlighted: false },
        { name: "WebSockets & SSE", highlighted: false },
        { name: "Core Web Vitals 100/100", highlighted: false },
      ],
      focus: "Foco: Zero Layout Shift & First Input Delay",
    },
    {
      id: "backend",
      title: "Backend & Distributed APIs",
      icon: Server,
      badge: "Tier 1 • High Load",
      badgeColor: "text-indigo-400 bg-indigo-950/40 border-indigo-800/40",
      description:
        "Engenharia orientada a domínio (DDD), isolamento de microsserviços, mensageria assíncrona para fluxos de dados massivos e gRPC de baixa latência.",
      skills: [
        { name: "Node.js & NestJS", highlighted: true },
        { name: "RabbitMQ", highlighted: true },
        { name: "GraphQL & RESTful", highlighted: false },
      ],
      focus: "Foco: Idempotência, Resiliência e Concorrência",
    },
    {
      id: "database",
      title: "Database & Caching Strategies",
      icon: Database,
      badge: "Data Integrity",
      badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
      description:
        "Modelagem relacional e vetorial, particionamento de tabelas, estratégias multi-tier de cache e consistência eventual.",
      skills: [
        { name: "PostgreSQL", highlighted: true },
        { name: "Redis Cluster", highlighted: true },
        { name: "MongoDB", highlighted: false },
        { name: "Supabase", highlighted: false },
        { name: "Prisma & Drizzle ORM", highlighted: false },
        { name: "PgVector", highlighted: false },
      ],
      focus: "Foco: Query tuning, locks control e sub-10ms reads",
    },
    {
      id: "cloud",
      title: "Cloud Native & Observability",
      icon: Cloud,
      badge: "DevOps / SRE",
      badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
      description:
        "Infraestrutura declarativa (IaC), pipelines com rollbacks automáticos de segregação canária e telemetria profunda com tracing distribuído.",
      skills: [
        { name: "AWS (ECS, Lambda, S3, CloudFront)", highlighted: true },
        { name: "Docker", highlighted: true },
        { name: "GitHub Actions CI/CD", highlighted: false },
        { name: "Prometheus / Grafana", highlighted: false },
      ],
      focus: "Foco: Automated rollback & Zero manual intervention",
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-[#161a26] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
              [ STACK TÉCNICA ]
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Tecnologias dominadas na prática, não apenas no papel.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
              Construção de ecossistemas com foco obsessivo em tipagem estrita, performance milimétrica no browser e tolerância a falhas na infraestrutura backend.
            </p>
          </div>

        </div>

        {/* 2x2 Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#1b202e] bg-[#0c0e14]/90 p-6 sm:p-7 transition-all duration-300 hover:border-sky-500/30 hover:bg-[#0f121a] hover:shadow-xl hover:shadow-sky-500/5"
              >
                <div>
                  {/* Card Header: Icon + Title + Badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#141824] border border-[#212739] text-sky-400 group-hover:text-sky-300 group-hover:scale-105 transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-mono font-medium whitespace-nowrap ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Badges / Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-colors ${
                          skill.highlighted
                            ? "bg-[#141926] border border-sky-500/30 text-sky-200 font-medium"
                            : "bg-[#10131b] border border-[#1c2232] text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {skill.highlighted && (
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                        )}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Focus note and details arrow */}
                <div className="pt-4 border-t border-[#171b26] flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-500 text-[11px] sm:text-xs">
                    {card.focus}
                  </span>
                  <a
                    href="#projetos"
                    className="inline-flex items-center gap-1 text-zinc-400 group-hover:text-sky-400 transition-colors"
                  >
                    <span>detalhes</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
