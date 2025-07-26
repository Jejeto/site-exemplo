import React from 'react';
import { LISTA_UNIDADES } from '../constants';

const CardUnidade = ({ nome, endereco, horario, imagem }) => (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
        <img src={imagem} alt={`Fachada da ${nome}`} className="w-full md:w-1/3 h-64 md:h-auto object-cover" />
        <div className="p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2 text-blue-400">{nome}</h3>
            <p className="text-gray-300 mb-2 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                {endereco}
            </p>
            <p className="text-gray-400 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd"></path></svg>
                {horario}
            </p>
        </div>
    </div>
);


const Unidades = () => {
  return (
    <section id="unidades" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Nossas Unidades</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Encontre a loja Estilo Urbano mais perto de você e venha nos visitar.</p>
        <div className="space-y-10">
          {LISTA_UNIDADES.map((unidade, index) => (
            <CardUnidade key={index} {...unidade} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Unidades;