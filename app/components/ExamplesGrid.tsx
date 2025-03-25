"use client";

import { Users, LayoutGrid, FileSpreadsheet, Folder } from "lucide-react";

const examples = [
  {
    title: "Mercado de Trabalho",
    description: "Você é um infoprodutor que ensina algum tipo de serviço? Conecte seus alunos a clientes potenciais, criando um marketplace exclusivo para sua comunidade.",
    icon: Users,
    image: "https://i.imgur.com/363JrdV.png"
  },
  {
    title: "Comunidade Personalizada",
    description: "Tenha um espaço digital único para seus alunos interagirem, compartilharem conquistas e se apoiarem mutuamente.",
    icon: LayoutGrid,
    image: "https://i.imgur.com/vwG4nme.png"
  },
  {
    title: "Planilhas em Plataformas",
    description: "Ainda deixa seus alunos trabalharem com planilhas? Transforme em plataformas intuitivas que simplificam a jornada do aluno.",
    icon: FileSpreadsheet,
    image: "https://i.imgur.com/1J4xLfj.png"
  },
  {
    title: "Área de Membros Própria",
    description: "Crie uma experiência imersiva e personalizada para seus alunos acessarem conteúdos e recursos.",
    icon: Folder,
    image: "https://i.imgur.com/fVnrALS.png"
  }
];

export default function ExamplesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {examples.map((example, index) => {
        const Icon = example.icon;
        return (
          <div 
            key={index} 
            className="h-full rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-[10px] border border-white/10 p-8 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white/[0.05] hover:to-white/[0.02]"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(90,55,159,0.2)] to-[rgba(55,175,255,0.2)] mb-6">
              <Icon className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-inter font-bold text-xl mb-3">
              {example.title}
            </h3>
            <p className="font-roboto font-light text-gray-300 mb-6 min-h-[72px]">
              {example.description}
            </p>
            {example.image && (
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}