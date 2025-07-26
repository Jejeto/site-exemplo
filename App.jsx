import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Unidades from './components/Unidades';
import Footer from './components/Footer';
import WhatsAppFlutuante from './components/WhatsAppFlutuante';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Unidades />
      </main>
      <Footer />
      <WhatsAppFlutuante />
    </div>
  );
}

export default App;