import React from 'react';
import { TEXTO_SOBRE } from '../constants';

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/sobre/600/500" 
              alt="Interior da loja Estilo Urbano"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-blue-400">Nossa História</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {TEXTO_SOBRE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;