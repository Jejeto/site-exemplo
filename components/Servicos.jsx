import React from 'react';
import { LISTA_SERVICOS } from '../constants';

const CardServico = ({ titulo, descricao, imagem }) => (
  <div className="grupo bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20">
    <img src={imagem} alt={`Serviço de ${titulo}`} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"/>
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-3 text-white">{titulo}</h3>
      <p className="text-gray-400 leading-snug">{descricao}</p>
    </div>
  </div>
);

const Servicos = () => {
  return (
    <section id="servicos" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Oferecemos uma gama de serviços pensados para valorizar sua experiência e seu estilo.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LISTA_SERVICOS.map((servico, index) => (
            <CardServico key={index} {...servico} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicos;