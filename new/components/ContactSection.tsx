"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
  Send,
  Lock,
} from "lucide-react";


export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('description', formData.description);
      
      if (selectedFile) {
        data.append('file', selectedFile);
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar mensagem');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', description: '' });
      setSelectedFile(null);
      setFileName('');
    } catch (error) {
      console.error(error);
      alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

    const handleCopyEmail = () => {
      navigator.clipboard.writeText("jvsoftdev15@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    };

  return (
    <section id="contato" className="py-20 border-t border-[#161a26] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400">
            [ VAMOS CONSTRUIR JUNTOS ]
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Tem um projeto em mente ou uma vaga em aberto?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Preencha o formulário abaixo ou envie uma mensagem direta. Respondo normalmente em menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl border border-[#1d2232] bg-[#0c0e14] p-6 shadow-xl space-y-4">
              <h3 className="text-sm font-bold font-mono uppercase tracking-wider text-zinc-300">
                Contato Direto
              </h3>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#11141e] border border-[#1b202e]">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sky-400" />
                  <span className="font-mono text-xs sm:text-sm text-zinc-200">
                    jvsoftdev15@gmail.com
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-[#1b202e] transition-colors"
                  title="Copiar e-mail"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#11141e] border border-[#1b202e]">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span className="font-mono text-xs sm:text-sm text-zinc-200">
                    +55 (21) 96475-7806
                  </span>
                </div>
                <a
                  href="https://wa.me/5521964757806"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300"
                >
                  <span>Abrir Chat</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#11141e] border border-[#1b202e]">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="font-mono text-xs text-zinc-400 leading-relaxed">
                  Rio de Janeiro, Brasil • UTC-3 (Disponível mundialmente)
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#1f2637] bg-[#0c0e15] p-6 sm:p-8 lg:p-9 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h4>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto">
                    Obrigado pelo contato, entrarei em retorno no seu e-mail em até 24 horas.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 text-xs font-mono bg-[#141824] border border-[#232a3c] rounded-xl text-sky-400 hover:bg-[#1b2030]"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Rodrigo Andrade"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#1b202e] bg-[#10131b] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                        Seu E-mail Corporativo ou Pessoal *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: rodrigo@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-[#1b202e] bg-[#10131b] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5 font-medium">
                      Descrição do Projeto, Demanda ou Vaga *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Conte brevemente sobre o escopo, cronograma esperado, tecnologias preferenciais ou os principais desafios..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full rounded-xl border border-[#1b202e] bg-[#10131b] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans resize-none"
                    />
                  </div>

                  <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Anexo de Especificação ou Briefing (Opcional)
                  </label>
                  <label className="relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-[#1e2536] hover:border-sky-500/50 rounded-xl bg-[#0e1118] cursor-pointer transition-colors group">
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.zip,.png,.jpg"
                    />
                    <FileText className="h-6 w-6 text-zinc-500 group-hover:text-sky-400 mb-2 transition-colors" />
                    {fileName ? (
                      <span className="font-mono text-xs text-sky-400 font-medium">
                        Arquivo: {fileName}
                      </span>
                    ) : (
                      <>
                        <span className="font-mono text-xs text-zinc-300 group-hover:text-white">
                          Clique para selecionar ou arraste o arquivo
                        </span>
                        <span className="font-mono text-[11px] text-zinc-500 mt-1">
                          Formatos suportados: PDF, DOCX, ZIP até 10MB
                        </span>
                      </>
                    )}
                  </label>
                </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-white hover:bg-zinc-200 py-3.5 px-6 text-sm font-bold text-zinc-950 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Proposta / Iniciar Contato'}</span>
                    <Send className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-center text-[11px] font-mono text-zinc-500">
                    <Lock className="h-3 w-3 text-zinc-500" />
                    <span>Seus dados estão protegidos. Respeito total à LGPD e sigilo absoluto de informações.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
