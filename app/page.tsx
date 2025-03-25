"use client";

import Particles from "./components/Particles";
import OrbitalSystem from "./components/OrbitalSystem";
import ExamplesGrid from "./components/ExamplesGrid";
import {
  Coins,
  Sparkles,
  Timer,
  Trophy,
  TrendingUp,
  Users,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
} from "lucide-react";
import WhatsAppDialog from "./components/WhatsAppDialog";
import FloatingNavbar from "./components/FloatingNavbar";
import { useState } from "react";

export default function Home() {
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);

  const openWhatsApp = () => {
    // Track CTA click
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "CtaClick");
    }

    window.open(
      "https://api.whatsapp.com/send/?phone=5511971683453&text=Oi%2C+quero+lan%C3%A7ar+o+meu+SaaS%21&type=phone_number&app_absent=0https://wa.me/5511971683453?text=Oi, quero lançar o meu SaaS!",
      "_blank"
    );
  };

  return (
    <main className="relative overflow-hidden bg-[#131313] text-[#f1f1f1]">
      <FloatingNavbar onContactClick={openWhatsApp} />
      <WhatsAppDialog
        isOpen={isWhatsAppDialogOpen}
        onClose={() => setIsWhatsAppDialogOpen(false)}
      />

      {/* Hero Section */}
      <section className="min-h-screen relative">
        <Particles />

        {/* Floating Spheres */}
        <div className="floating-sphere sphere-1" />
        <div className="floating-sphere sphere-2" />
        <div className="floating-sphere sphere-3" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="py-4 sm:py-6 flex justify-between items-center">
            <div className="font-roboto text-lg sm:text-xl font-medium">
              orbitta digital
            </div>
          </nav>

          <div className="min-h-[calc(100vh-72px)] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Text Content */}
            <div className="text-left relative z-10 space-y-6">
              <h1 className="font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Monetize sua Base de Alunos com um SaaS Personalizado e Gere
                Receita Recorrente
              </h1>

              <div>
                <p className="font-roboto text-lg sm:text-xl text-[#c7c7c7] font-light">
                  Vamos construir em semanas um software que ajudará seu aluno a
                  ter mais resultados, enquanto gera uma nova fonte de receita
                  para o seu negócio escalar ainda mais.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={openWhatsApp}
                  className="cta-button text-base sm:text-lg font-medium font-roboto w-full sm:w-auto"
                >
                  <span>Quero Monetizar Minha base de Alunos</span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative lg:block hidden">
              <img
                src="/images/notebook.png"
                alt="Notebook com software personalizado"
                className="w-full max-w-[600px] h-auto absolute lg:right-0 top-1/2 -translate-y-1/2 floating-notebook"
              />
            </div>

            {/* Mobile Image */}
            <div className="relative block lg:hidden -mt-8">
              <img
                src="/images/notebook.png"
                alt="Notebook com software personalizado"
                className="w-full h-auto floating-notebook"
              />
            </div>

            {/* Scroll Indicator - Hidden on mobile */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
              <div className="scroll-indicator flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <ChevronDown className="w-8 h-8 absolute group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-4" />
        <div className="floating-sphere sphere-5" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-4 sm:p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-roboto text-lg text-[#c7c7c7] font-light mb-6">
                -A grande onda da tecnologia-
              </p>
              <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                Os Maiores Infoprodutores Já Criaram Seus Próprios Softwares.
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <p className="font-roboto text-lg text-gray-300 font-light">
                Grandes nomes do mercado{" "}
                <span className="font-bold">
                  Ícaro de Carvalho, Pedro Sobral, Thiago Finch e Allan Nicolas
                </span>{" "}
                perceberam algo essencial:{" "}
                <span className="font-bold">
                  depender apenas de cursos gravados limita o crescimento do
                  negócio
                </span>
                .
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                <span className="font-bold">
                  A maioria dos alunos não conclui os cursos que compra.
                </span>{" "}
                Sem suporte prático e ferramentas que facilitem a aplicação do
                conhecimento,{" "}
                <span className="font-bold">o engajamento despenca</span> – e
                com ele, as taxas de renovação e recompras.
              </p>

              <div className="space-y-6">
                <h3 className="font-inter text-xl font-semibold">
                  O resultado?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p className="font-roboto text-lg text-gray-300 font-light">
                      <span className="font-bold">Baixo engajamento:</span>{" "}
                      alunos abandonam o curso antes de concluir.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p className="font-roboto text-lg text-gray-300 font-light">
                      <span className="font-bold">Poucas recompras:</span> sem
                      resultados, eles não voltam a comprar de você.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-red-500 text-xl">❌</span>
                    <p className="font-roboto text-lg text-gray-300 font-light">
                      <span className="font-bold">
                        Falta de previsibilidade:
                      </span>{" "}
                      depender apenas de lançamentos é estressante e instável.
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-roboto text-lg text-gray-300 font-light">
                Para resolver isso,{" "}
                <span className="font-bold">
                  eles adicionaram softwares próprios aos seus ecossistemas
                </span>
                . Ferramentas que{" "}
                <span className="font-bold">
                  guiam os alunos na jornada, automatizam processos e ajudam a
                  gerar resultados reais
                </span>
                .
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                E esse movimento não foi à toa.{" "}
                <span className="font-bold">
                  Ter um software próprio se tornou um dos maiores diferenciais
                  competitivos no mercado de infoprodutos.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-6" />
        <div className="floating-sphere sphere-7" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Por que Ter um Software Próprio em Seu Ecossistema?
            </h2>

            <div className="space-y-6 text-left">
              <p className="font-roboto text-lg text-gray-300 font-light">
                O mercado mudou. Não basta apenas ensinar,{" "}
                <span className="font-bold">
                  você precisa entregar ferramentas que ajudam seus alunos a
                  aplicarem o conhecimento na prática
                </span>
                .
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                Grandes infoprodutores já perceberam isso e criaram{" "}
                <span className="font-bold">softwares personalizados</span>, que
                não só aceleram os resultados dos alunos, como também criam um{" "}
                <span className="font-bold">
                  novo fluxo de receita recorrente
                </span>{" "}
                para seus negócios.
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                Aqui está o que um software próprio pode fazer pelo seu
                ecossistema:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Monetização */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Coins className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Monetização de Base Atual
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Sua audiência já confia em você. Em vez de depender apenas de
                  lançamentos,{" "}
                  <span className="font-bold">
                    você pode gerar receita recorrente
                  </span>{" "}
                  oferecendo um software que complementa sua metodologia.
                </p>
              </div>
            </div>

            {/* Card 2 - Oferta */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Sparkles className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Oferta Mais Atraente
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Softwares agregam{" "}
                  <span className="font-bold">valor percebido</span> ao seu
                  produto, tornando-o{" "}
                  <span className="font-bold">
                    mais premium, diferenciado e desejado
                  </span>
                  . Seu ticket médio pode aumentar significativamente.
                </p>
              </div>
            </div>

            {/* Card 3 - Retenção */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Timer className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Retenção e Extensão do LTV
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Quando seus alunos têm um software para{" "}
                  <span className="font-bold">
                    facilitar a aplicação do que aprenderam
                  </span>
                  ,{" "}
                  <span className="font-bold">
                    eles ficam mais tempo conectados ao seu ecossistema
                  </span>
                  , reduzindo cancelamentos e aumentando recompras.
                </p>
              </div>
            </div>

            {/* Card 4 - Diferenciação */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Trophy className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Diferenciação no Mercado
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  O mercado de infoprodutos está saturado de cursos online.{" "}
                  <span className="font-bold">
                    Criar um software exclusivo coloca você em outro nível
                  </span>
                  , tornando sua oferta única e mais difícil de ser copiada.
                </p>
              </div>
            </div>

            {/* Card 5 - Previsibilidade */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <TrendingUp className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Previsibilidade Financeira
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Diga adeus à incerteza entre lançamentos.{" "}
                  <span className="font-bold">
                    Com um SaaS integrado ao seu ecossistema, você constrói uma
                    receita previsível e escalável
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Card 6 - Engajamento */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Users className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Engajamento Real dos Alunos
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Seu curso não será apenas mais um que as pessoas compram e
                  esquecem.{" "}
                  <span className="font-bold">
                    Com um software, seus alunos têm ferramentas reais para
                    aplicar o conhecimento e ver resultados
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={openWhatsApp}
              className="cta-button text-lg font-medium font-roboto"
            >
              <span>Quero aumentar o meu LTV</span>
            </button>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="relative py-16 sm:py-24 md:py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-8" />
        <div className="floating-sphere sphere-9" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Transforme Problemas dos Seus Alunos em Soluções Práticas
            </h2>
            <div className="space-y-6 text-left">
              <p className="font-roboto text-lg text-gray-300 font-light">
                Seus alunos enfrentam desafios na aplicação do conhecimento?{" "}
                <span className="font-bold">
                  E se, além de ensinar, você pudesse entregar ferramentas que
                  realmente os ajudem a alcançar resultados?
                </span>
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                Com um software próprio,{" "}
                <span className="font-bold">
                  você pode transformar obstáculos em oportunidades
                </span>{" "}
                e criar soluções digitais que facilitam a jornada do aluno,
                tornando seu ecossistema ainda mais valioso.
              </p>

              <p className="font-roboto text-lg text-gray-300 font-light">
                Aqui estão algumas ideias de softwares que podem fazer toda a
                diferença:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Marketplace Card */}
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-8">
              <div className="flex flex-col space-y-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/images/marketplace.png"
                    alt="Marketplace de trabalho para alunos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-4">
                    Marketplace de Trabalho
                  </h3>
                  <p className="font-roboto text-lg text-gray-300 font-light mb-6">
                    Se você ensina um serviço (como copywriting, design ou
                    tráfego pago),{" "}
                    <span className="font-bold">
                      por que não conectar seus alunos a clientes reais?
                    </span>
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        Crie um{" "}
                        <span className="font-bold">marketplace exclusivo</span>
                        , onde seus alunos possam oferecer seus serviços e
                        conquistar novas oportunidades profissionais.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        <span className="font-bold">
                          Mais do que ensinar, você se torna um canal real de
                          transformação e empregabilidade.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metodologias Card */}
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-8">
              <div className="flex flex-col space-y-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/images/methodology.png"
                    alt="Metodologias em plataformas digitais"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-4">
                    Metodologias em Plataformas (Adeus, Planilhas!)
                  </h3>
                  <p className="font-roboto text-lg text-gray-300 font-light mb-6">
                    Se sua metodologia exige{" "}
                    <span className="font-bold">
                      planilhas, checklists ou processos manuais
                    </span>
                    , imagine{" "}
                    <span className="font-bold">
                      o impacto de transformar tudo isso em um software dinâmico
                      e automatizado!
                    </span>
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        Em vez de alunos se perdendo em arquivos soltos, você
                        entrega{" "}
                        <span className="font-bold">
                          uma plataforma prática e intuitiva
                        </span>
                        , onde eles podem aplicar sua metodologia com mais
                        eficiência.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        <span className="font-bold">
                          Mais organização, mais produtividade e um aprendizado
                          mais fluido.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comunidade Card */}
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-8">
              <div className="flex flex-col space-y-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/images/community.png"
                    alt="Comunidade exclusiva para alunos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-4">
                    Comunidade Exclusiva
                  </h3>
                  <p className="font-roboto text-lg text-gray-300 font-light mb-6">
                    Os alunos não aprendem só com o conteúdo –{" "}
                    <span className="font-bold">
                      o networking e o suporte da comunidade fazem toda a
                      diferença.
                    </span>
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        Com uma{" "}
                        <span className="font-bold">plataforma interativa</span>
                        , você cria um ambiente único para seus alunos trocarem
                        experiências, compartilharem conquistas e se ajudarem
                        mutuamente.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        Um espaço digital próprio{" "}
                        <span className="font-bold">
                          aumenta o engajamento, fortalece seu branding e mantém
                          seus alunos conectados por mais tempo.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Área de Membros Card */}
            <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-8">
              <div className="flex flex-col space-y-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <img
                    src="/images/members.png"
                    alt="Área de membros personalizada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-4">
                    Área de Membros Própria
                  </h3>
                  <p className="font-roboto text-lg text-gray-300 font-light mb-6">
                    Dependendo de plataformas de terceiros para hospedar seus
                    cursos?{" "}
                    <span className="font-bold">
                      Que tal ter seu próprio ambiente de aprendizado, 100%
                      personalizado para o seu método?
                    </span>
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        Com uma{" "}
                        <span className="font-bold">plataforma sob medida</span>
                        , você oferece uma experiência premium, sem distrações e
                        com todas as ferramentas que seus alunos realmente
                        precisam.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <p className="font-roboto text-lg text-gray-300 font-light">
                        <span className="font-bold">
                          Seu conteúdo, sua marca, seu ecossistema.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button
              onClick={openWhatsApp}
              className="cta-button text-lg font-medium font-roboto"
            >
              <span>Quero iniciar meu projeto</span>
            </button>
          </div>
        </div>
      </section>

      {/* Why Orbitta Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-4" />
        <div className="floating-sphere sphere-5" />

        {/* OrbitalSystem Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute right-0 w-[1200px] h-[1200px] -translate-y-1/2 top-1/2">
            <OrbitalSystem />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-roboto text-lg text-[#c7c7c7] font-medium">
                  Nossa Proposta
                </h3>
                <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                  Implementar seu Software em semanas, para você monetizar sua
                  base de alunos com lucro e previsibilidade.
                </h2>

                <div className="space-y-6">
                  <p className="font-roboto text-lg text-gray-300 font-light">
                    Criar um software do zero pode parecer algo complexo,{" "}
                    <span className="font-bold">
                      mas com a Orbitta, você não precisa se preocupar com nada
                    </span>
                    .
                  </p>

                  <p className="font-roboto text-lg text-gray-300 font-light">
                    Nosso time{" "}
                    <span className="font-bold">faz todo o trabalho</span>,
                    desde a concepção da ideia até a implementação final,
                    entregando um{" "}
                    <span className="font-bold">
                      produto 100% personalizado para o seu ecossistema digital
                    </span>
                    .
                  </p>

                  <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-[10px] border border-white/10 p-6 rounded-2xl">
                    <p className="font-roboto text-lg text-gray-200 font-medium">
                      <span className="text-blue-400 mr-2">💡</span>
                      Você só precisa focar no que faz de melhor: vender e
                      escalar seu negócio.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-inter text-xl font-bold">
                    Como Funciona na Prática?
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 rounded-2xl text-left">
                      <span className="text-blue-400 font-bold">01</span>
                      <div>
                        <h4 className="font-inter font-bold mb-2">
                          Estratégia & Planejamento
                        </h4>
                        <p className="font-roboto text-gray-300 font-light">
                          Mapeamos seu negócio e identificamos{" "}
                          <span className="font-bold">
                            a melhor solução para seu público e modelo de
                            receita
                          </span>
                          .
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 rounded-2xl text-left">
                      <span className="text-blue-400 font-bold">02</span>
                      <div>
                        <h4 className="font-inter font-bold mb-2">
                          Design & Prototipagem
                        </h4>
                        <p className="font-roboto text-gray-300 font-light">
                          Criamos um{" "}
                          <span className="font-bold">protótipo funcional</span>
                          , onde você poderá visualizar e validar a experiência
                          do usuário antes do desenvolvimento.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 rounded-2xl text-left">
                      <span className="text-blue-400 font-bold">03</span>
                      <div>
                        <h4 className="font-inter font-bold mb-2">
                          Desenvolvimento Ágil
                        </h4>
                        <p className="font-roboto text-gray-300 font-light">
                          Construímos seu software em{" "}
                          <span className="font-bold">
                            ciclos rápidos e eficientes
                          </span>
                          , garantindo uma implementação sem atrasos.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-6 rounded-2xl text-left">
                      <span className="text-blue-400 font-bold">04</span>
                      <div>
                        <h4 className="font-inter font-bold mb-2">
                          Lançamento & Suporte
                        </h4>
                        <p className="font-roboto text-gray-300 font-light">
                          Fazemos o{" "}
                          <span className="font-bold">
                            lançamento do seu software e acompanhamos sua
                            jornada
                          </span>{" "}
                          para garantir uma adoção bem-sucedida pelos seus
                          alunos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-[10px] border border-white/10 p-6 rounded-2xl">
                  <p className="font-roboto text-lg text-gray-200 font-medium">
                    <span className="text-blue-400 mr-2">🚀</span>
                    Em poucas semanas, seu software estará pronto para
                    transformar o seu infoproduto e gerar receita recorrente.
                  </p>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={openWhatsApp}
                    className="cta-button text-lg font-medium font-roboto"
                  >
                    <span>Falar com especialista</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-24 md:py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-8" />
        <div className="floating-sphere sphere-9" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-inter text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Pronto Para Criar Sua Nova Fonte de Receita Recorrente?
            </h2>
            <div className="space-y-6">
              <p className="font-roboto text-lg text-gray-300 font-light">
                Os maiores infoprodutores já entenderam o poder de um software
                próprio. <span className="font-bold">Agora é a sua vez.</span>
              </p>

              <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-[10px] border border-white/10 p-6 rounded-2xl">
                <p className="font-roboto text-lg text-gray-200 font-medium">
                  <span className="text-blue-400 mr-2">🚀</span>
                  Deixe a Orbitta criar, lançar em semanas e comece a monetizar
                  sua base de alunos.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button
                onClick={openWhatsApp}
                className="cta-button text-xl font-medium font-roboto"
              >
                <span>Falar com especialista</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-16 border-t border-[#f1f1f1]/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="font-roboto text-xl font-medium">
                orbitta digital
              </div>
              <p className="font-roboto text-sm text-gray-400 font-light">
                Transformando infoprodutos em soluções digitais inovadoras.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-inter text-sm font-semibold uppercase tracking-wider mb-4">
                Links Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-inter text-sm font-semibold uppercase tracking-wider mb-4">
                Contato
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contato@orbittadigital.com"
                    className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    contato@orbittadigital.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-inter text-sm font-semibold uppercase tracking-wider mb-4">
                Redes Sociais
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="cosmic-icon-button">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="cosmic-icon-button">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="cosmic-icon-button">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-[#f1f1f1]/10">
            <p className="font-roboto text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Orbitta Digital. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
