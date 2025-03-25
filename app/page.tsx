"use client";

import Particles from './components/Particles';
import OrbitalSystem from './components/OrbitalSystem';
import ExamplesGrid from './components/ExamplesGrid';
import { Coins, Sparkles, Timer, Trophy, TrendingUp, Users, Github, Linkedin, Instagram, Mail, ChevronDown } from 'lucide-react';
import TypedHeadline from './components/TypedHeadline';
import WhatsAppDialog from './components/WhatsAppDialog';
import FloatingNavbar from './components/FloatingNavbar';
import { useState } from 'react';

export default function Home() {
  const [isWhatsAppDialogOpen, setIsWhatsAppDialogOpen] = useState(false);

  const scrollToContact = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CtaClick');
    }
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openChat = () => {
    // Track CTA click
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'CtaClick');
    }
    
    // @ts-ignore
    window.neurolead.open();
  }

  return (
    <main className="relative overflow-hidden bg-[#131313] text-[#f1f1f1]">
      <FloatingNavbar onContactClick={openChat} />
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
          <nav className="py-6 flex justify-between items-center">
            <div className="font-roboto text-xl font-medium">orbitta digital</div>
          </nav>
          
          <div className="min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center py-20">
            <p className="font-roboto text-lg text-[#eeeeee] mb-4 font-thin">
              the era of ecosystems
            </p>
            
            <TypedHeadline />
            
            <div className="max-w-2xl mx-auto space-y-2 mb-8">
              <p className="font-roboto text-xl text-[#c7c7c7] font-extralight">
                seus alunos com mais resultados.
              </p>
              <p className="font-roboto text-xl text-[#c7c7c7] font-extralight">
                seu negócio com uma nova receita recorrente.
              </p>
            </div>

            <button 
              onClick={scrollToContact}
              className="cta-button text-lg font-medium font-roboto mb-16"
            >
              <span>começar meu projeto</span>
            </button>

            {/* Scroll Indicator */}
            <div className="scroll-indicator flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <ChevronDown className="w-8 h-8 absolute group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-4" />
        <div className="floating-sphere sphere-5" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-4 sm:p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-6">
                seus alunos travam em certas etapas do seu infoproduto?
              </h2>
              <p className="font-roboto text-lg text-gray-300 font-light">
                Infoprodutores frequentemente enfrentam um desafio comum,<br />
                eles se deparam com seus alunos seguindo esta jornada:
              </p>
            </div>

            <div className="max-w-full md:max-w-3xl lg:max-w-2xl xl:max-w-2xl mx-auto px-0 sm:px-4">
              <img 
                src="https://i.imgur.com/TBwh4DX.png"
                alt="Jornada do aluno mostrando os desafios enfrentados"
                className="w-full h-auto"
              />
            </div>

            <div className="text-center max-w-3xl mx-auto mb-16 mt-16">
              <p className="font-roboto text-lg text-gray-300 font-light">
                Ao ver as dificuldades dos alunos, o infoprodutor começa a pensar em <span className="font-bold">formas de aprimorar sua metodologia</span> de ensino e em calendários para <span className="font-bold">regravar aulas</span>. Porém, muitas vezes, passa despercebido que o <span className="font-bold">problema</span> é que o <span className="font-bold">aluno não possui acesso a uma plataforma</span> que vai:
              </p>
            </div>

            <div className="flex justify-center">
              <img 
                src="https://i.imgur.com/eyO0kfo.png"
                alt="Jornada do aluno mostrando os desafios enfrentados"
                className="w-96 h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-6" />
        <div className="floating-sphere sphere-7" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-thin leading-tight mb-8">
              Por que você deve ter uma <span className="font-semibold">plataforma própria</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Coins className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Monetização de Base Atual
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Aproveite sua base de alunos existente para gerar receita recorrente com produtos de software de alto valor.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Sparkles className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Oferta Mais Atraente
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Eleve o status de suas ofertas adicionando soluções SaaS, tornando-as irresistíveis e aumentando significativamente o valor percebido pelo cliente.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Timer className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Extensão do LTV
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Mantenha seus clientes engajados muito além da conclusão do curso, criando uma relação duradoura e lucrativa.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Trophy className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Diferenciação no Mercado
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Destaque-se da concorrência com um ecossistema de produtos único, criando uma vantagem competitiva inigualável.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <TrendingUp className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Previsibilidade Financeira
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Estabeleça uma nova fonte de receita mensal recorrente, trazendo estabilidade e crescimento sustentável para seu negócio.
                </p>
              </div>
            </div>

            {/* Card 6 - Retention Card */}
            <div className="benefit-card group">
              <div className="benefit-card-content">
                <div className="icon-wrapper">
                  <Users className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">
                  Aumento da Retenção de Alunos
                </h3>
                <p className="font-roboto font-light text-gray-300">
                  Reduza a taxa de desistência oferecendo ferramentas que facilitam a aplicação prática do conteúdo e mantêm os alunos engajados.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <button 
              onClick={scrollToContact}
              className="cta-button text-lg font-medium font-roboto"
            >
              <span>quero iniciar meu projeto</span>
            </button>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-8" />
        <div className="floating-sphere sphere-9" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-thin leading-tight mb-8">
              Transforme <span className="font-semibold">problemas</span> de alunos em <span className="font-semibold">soluções</span>
            </h2>
            <p className="font-roboto text-lg text-gray-300 font-light">
              Não sabe como começar? Estes são apenas alguns exemplos do que é possível oferecer dentro do seu ecossistema digital.
            </p>
          </div>

          <ExamplesGrid />
        </div>
      </section>

      {/* Why Orbitta Section */}
      <section className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-4" />
        <div className="floating-sphere sphere-5" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 lg:pr-12">
              <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-thin leading-tight">
                Por que a <span className="font-semibold">orbitta digital</span>?
              </h2>
              
              <p className="font-roboto text-lg text-gray-300 font-light">
                Na orbitta, o cliente é o centro do nosso universo. Criamos soluções únicas que orbitam em torno de suas necessidades, carregando o sentido do nosso nome: cercamos, suportamos, e impulsionamos nossos parceiros em direção à inovação sustentável e ao sucesso dos seus projetos.
              </p>

              <button 
                onClick={openChat}
                className="cta-button text-lg font-medium font-roboto"
              >
                <span>Falar com especialista</span>
              </button>
            </div>

            {/* OrbitalSystem */}
            <div className="relative lg:absolute lg:right-0 lg:w-[800px] lg:h-[800px] lg:-mr-32">
              <OrbitalSystem />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-6" />
        <div className="floating-sphere sphere-7" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-inter text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-8">
              Como funciona o nosso processo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Estratégia e descoberta",
                description: "Mergulhamos fundo no seu negócio para identificar oportunidades únicas de crescimento através da tecnologia.",
                gradient: "from-[#5A379F] to-[#37AFFF]"
              },
              {
                number: "02",
                title: "Escopo e planejamento",
                description: "Definimos juntos o escopo ideal do projeto, estabelecendo metas claras e um cronograma realista.",
                gradient: "from-[#37AFFF] to-[#EC5781]"
              },
              {
                number: "03",
                title: "Design e prototipagem",
                description: "Criamos protótipos interativos que permitem visualizar e refinar a experiência do usuário.",
                gradient: "from-[#EC5781] to-[#5A379F]"
              },
              {
                number: "04",
                title: "Desenvolvimento ágil",
                description: "Implementamos sua solução em ciclos curtos, permitindo ajustes e melhorias contínuas.",
                gradient: "from-[#5A379F] to-[#37AFFF]"
              },
              {
                number: "05",
                title: "Testes e refinamento",
                description: "Realizamos testes rigorosos para garantir uma experiência perfeita para seus usuários.",
                gradient: "from-[#37AFFF] to-[#EC5781]"
              },
              {
                number: "06",
                title: "Lançamento e suporte",
                description: "Acompanhamos o lançamento e oferecemos suporte contínuo para o sucesso do seu projeto.",
                gradient: "from-[#EC5781] to-[#5A379F]"
              }
            ].map((step, index) => (
              <div key={index} className="process-card group">
                <div className="process-card-content">
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500`}>
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-inter font-bold text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="font-roboto font-light text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        {/* Background Spheres */}
        <div className="floating-sphere sphere-8" />
        <div className="floating-sphere sphere-9" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-inter text-3xl sm:text-3xl md:text-4xl font-thin leading-tight mb-8">
              Apenas mais um passo para o seu <span className="font-semibold">projeto nascer</span>
            </h2>
            <p className="font-roboto text-lg text-gray-300 font-light mb-12">
              Toque no botão abaixo para falar diretamente com um de nossos especialistas e entenda como a orbitta pode ajudar você e seus alunos desenvolvendo aplicativos e plataformas personalizadas.
            </p>

            <button 
              onClick={openChat}
              className="cta-button text-xl font-medium font-roboto"
            >
              <span>Falar com especialista</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-[#f1f1f1]/10">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="font-roboto text-xl font-medium">orbitta digital</div>
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
                  <a href="#" className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#" className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors">
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
                  <a href="mailto:contato@orbittadigital.com" className="font-roboto text-sm text-gray-400 hover:text-[#f1f1f1] transition-colors flex items-center gap-2">
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
              © {new Date().getFullYear()} Orbitta Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}