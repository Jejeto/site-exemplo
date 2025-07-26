import React from 'react';
import { NUMERO_WHATSAPP, MENSAGEM_WHATSAPP } from '../constants';

const WhatsAppFlutuante = () => {
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`;

  return (
    <a
      id="botao-whatsapp"
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contatar via WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 duration-300 z-50 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8"
        fill="currentColor"
      >
        <path d="M16.003 4.155A11.854 11.854 0 0 0 4.148 16.01c0 2.823 1.002 5.435 2.68 7.475L4.5 27.5l4.205-2.316a11.82 11.82 0 0 0 7.298 2.664c6.545 0 11.858-5.312 11.858-11.849S22.548 4.155 16.003 4.155zm6.438 15.397c-.316.592-1.354 1.139-1.923 1.227-.57.09-1.252.12-1.895-.06-.643-.18-1.42-.41-2.617-1.042-1.748-.92-3.15-2.228-4.148-3.72-.998-1.493-1.616-3.09-1.616-3.09s-.08-.13-.08-.26c0-.13.43-.538.58-.698.15-.16.31-.38.44-.5.13-.12.26-.26.38-.43.19-.28.1-.55-.06-.75-.16-.2-.35-.31-.5-.43-.15-.12-1.28-1.543-1.75-2.05-.46-.5-1-.75-.75-.75-.25 0-1.002-.12-1.502.13-1.002.5-1.502 1.502-1.502 2.503 0 1 .5 2.122 1.13 3.122.62 1 1.75 2.75 3.75 4.5 2.5 2.12 4.12 2.87 5.37 3.24 1.25.38 2 .5 2.5.38.5-.13.88-.62.88-1.12s0-.63-.12-1.13z"></path>
      </svg>
    </a>
  );
};

export default WhatsAppFlutuante;