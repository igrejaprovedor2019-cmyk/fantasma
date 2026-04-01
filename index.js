import React from 'react';

// Estilização rápida com Tailwind CSS
const FantasmaSite = () => {
  const discordLink = "https://discord.gg/SEU-LINK-AQUI"; // Substitua pelo link real

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* BACKGROUND: Logo Gigante com tratamento visual */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-center bg-no-repeat bg-cover scale-110"
        style={{ 
          backgroundImage: `url('/fnt.webp')`, 
          filter: 'blur(8px) saturate(1.5)' 
        }}
      ></div>

      {/* OVERLAY DE GRADIENTE para profundidade */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950"></div>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        {/* LOGO MENOR FLUTUANTE */}
        <div className="mb-8 animate-bounce-slow">
          <img 
            src="/fnt.webp" 
            alt="Logo Fantasma" 
            className="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          />
        </div>

        {/* HERO SECTION */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
          Bem-vindo à <span className="text-cyan-500">ORG FANTASMA E-SPORT / SALAS</span>
        </h1>

        <div className="max-w-2xl bg-slate-900/50 p-6 rounded-2xl backdrop-blur-md border border-white/10 mb-8">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            A maior organização de <span className="text-white font-bold">Free Fire Max</span> para quem busca 
            competitividade de verdade. Nossas salas são focadas em alto nível, garantindo uma experiência 
            profissional para todos os jogadores.
          </p>
        </div>

        {/* CTA SECTION */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold text-green-400">
            Comece apostando e ganhando dinheiro a partir de <span className="underline italic">10 centavos!</span>
          </h2>

          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-green-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-green-500 shadow-lg shadow-green-900/20"
          >
            <span className="mr-2">Ir para o Servidor</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="text-xs text-slate-500 uppercase tracking-widest mt-4">
            mais de 9.514 Membros já estão lucrando
          </p>
        </div>

      </main>

      {/* ESTILO CSS ADICIONAL (Global ou via Style Tag) */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FantasmaSite;
