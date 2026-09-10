import Image from "next/image";
import { Zap, ArrowDown, FileText, MapPin, Sparkles } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { value: "+3 Anos", label: "EXPERIÊNCIA" },
    { value: "+40", label: "PROJETOS PROD" },
    { value: "99.9%", label: "UPTIME SLA" },
    { value: "Top-tier", label: "CODE QUALITY" },
  ];

  return (
    <section id="sobre" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="flex flex-col lg:col-span-7 pt-2">
            
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3.5 py-1.5 text-xs font-mono text-emerald-400 mb-6 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Aberto a novos desafios • Remoto ou Híbrido (CLT / PJ / Contratos Globais)</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.12]">
              Transformando ideias complexas em software{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-cyan-300 to-sky-500">
                rápido, escalável
              </span>{" "}
              e{" "}
              <span className="text-white">resiliente.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-sans">
              Engenheiro Fullstack especializado em arquitetura web de alta performance, microsserviços e interfaces de usuário impecáveis. Criando soluções digitais que geram impacto real de negócio para startups e grandes corporações.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#1a1e2a]">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase mt-1 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.98] shadow-lg shadow-white/5"
              >
                <Zap className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                <span>Solicitar Orçamento / Bate-Papo</span>
              </a>

              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#23293a] bg-[#11141e]/80 hover:bg-[#181d2c] px-6 py-3.5 text-sm font-medium text-zinc-300 hover:text-white transition-all active:scale-[0.98]"
              >
                <span>Ver Projetos Selecionados</span>
                <ArrowDown className="h-4 w-4 text-zinc-400" />
              </a>
            </div>

            <div className="mt-5">
              <a
                href="/file/Curriculo.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <FileText className="h-3.5 w-3.5 text-zinc-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-115 rounded-2xl border border-[#1e2435] bg-[#0d0f16] p-4 sm:p-5 shadow-2xl relative">

              <div className="flex items-center justify-between border-b border-[#1b2030] pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                  <span>myst1_dev_profile.tsx</span>
                </div>
                <MapPin className="h-3.5 w-3.5 text-zinc-500" />
              </div>

              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-[#1f2538] bg-zinc-900 group">
                <Image
                  src="/about-img.jpg"
                  alt="Lucas Silva - Fullstack Developer"
                  fill
                  priority
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                />
              </div>

              <div className="mt-3.5 flex items-center justify-between rounded-lg bg-[#11141e] border border-[#1c2234] px-3.5 py-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Status: <strong className="text-white font-medium">Disponível</strong></span>
                </div>
                <span className="text-zinc-500 text-[11px] font-mono">LATAM/US/EU</span>
              </div>

              <div className="mt-3 rounded-xl border border-[#1c2234] bg-[#11141e]/90 p-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                    ACTIVE STACK KERNEL
                  </span>
                  {/* <span className="font-mono text-xs font-bold text-emerald-400">
                    v2025.2
                  </span> */}
                </div>
                <p className="font-mono text-xs text-zinc-200">
                  Next.js 15 • TypeScript • Node • Nestjs
                </p>
              </div>

              <div className="mt-3 rounded-xl border border-[#191d2b] bg-[#090b10] p-3.5 font-mono text-xs text-zinc-400 space-y-1">
                <div className="text-zinc-300">
                  <span className="text-sky-400">~</span> myst1.initArchitecture()
                </div>
                <div className="text-zinc-400 pl-3">
                  └ <span className="text-amber-300 font-medium">[READY]</span> 0 vulnerabilities, 100/100 Lighthouse score.
                </div>
                <div className="text-emerald-400 pl-3 flex items-start gap-1.5">
                  <span>✓</span>
                  <span>Systems operational &amp; distributed clusters synced.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
