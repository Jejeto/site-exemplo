import React from 'react';
import { NOME_LOJA, INFO_CONTATO } from '../constants';

const Footer = () => {
  return (
    <footer id="contato" className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{NOME_LOJA}</h3>
            <p>Expressando individualidade através da moda desde 2010.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li><a href={`mailto:${INFO_CONTATO.email}`} className="hover:text-white transition-colors">{INFO_CONTATO.email}</a></li>
              <li><a href={`tel:${INFO_CONTATO.telefone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">{INFO_CONTATO.telefone}</a></li>
              <li>{INFO_CONTATO.endereco}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072z"></path><path d="M12 6.865c-2.841 0-5.135 2.294-5.135 5.135s2.294 5.135 5.135 5.135 5.135-2.294 5.135-5.135-2.294-5.135-5.135-5.135zm0 8.27c-1.732 0-3.135-1.403-3.135-3.135s1.403-3.135 3.135-3.135 3.135 1.403 3.135 3.135-1.403 3.135-3.135 3.135z"></path><path d="M16.949 6.27c-.524 0-.949.425-.949.949s.425.949.949.949.949-.425.949-.949-.425-.949-.949-.949z"></path></svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {NOME_LOJA}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;