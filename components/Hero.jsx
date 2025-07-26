import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: `url('https://picsum.photos/seed/loja/1920/1080')` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Onde o Estilo Encontra a Atitude
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          Descubra coleções que definem tendências e expressam sua identidade.
        </p>
        <a 
          href="#servicos"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Explore Nossos Serviços
        </a>
      </div>
    </section>
  );
};

export default Hero;