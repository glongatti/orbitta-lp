"use client";

import { TypeAnimation } from 'react-type-animation';

export default function TypedHeadline() {
  return (
    <h1 className="font-inter text-4xl sm:text-6xl md:text-7xl font-semibold max-w-5xl leading-tight mb-8">
      <span className="block whitespace-nowrap">
        criamos{" "}
        <TypeAnimation
          sequence={[
            'aplicativos',
            2000,
            'plataformas',
            2000,
            'saas',
            2000,
            'ferramentas',
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="bg-gradient-to-r from-[#5A379F] via-[#37AFFF] to-[#EC5781] bg-clip-text text-transparent inline-block"
        />
      </span>
      <span className="block mt-2">
        a partir do seu infoproduto
      </span>
    </h1>
  );
}