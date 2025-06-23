
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const ConvierteteEnTitan = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '161f005bed');
    script.src = 'https://soyrenzoai.kit.com/161f005bed/index.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[data-uid="161f005bed"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation />
      
      {/* Hero Section with Gradient */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0055FF] to-[#FF8800]"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-fade-in">
            Estoy en un reto personal para transformar cómo enseñamos en Latinoamérica.
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Quiero ayudarte a dominar la IA, ahorrar tiempo y volver a disfrutar de enseñar.
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Sumate al camino de los Titanes: docentes que usan IA con propósito, sin complicarse la vida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-[#0055FF] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Quiero mi guía gratis
            </button>
            <a 
              href="#recursos"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Ver cómo arranco
            </a>
          </div>
        </div>
      </section>

      {/* Así te puedo ayudar */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#0A0A0A]">
            Esto no es magia, es IA bien usada
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#F7F9FC] rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0055FF] to-[#FF8800] rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-2xl">build</span>
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">🔧 Automatizá lo repetitivo</h3>
              <p className="text-gray-600">Liberá tiempo de tareas manuales para enfocarte en lo que realmente importa: enseñar.</p>
            </div>

            <div className="text-center p-8 bg-[#F7F9FC] rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0055FF] to-[#FF8800] rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-2xl">casino</span>
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">🎲 Enseñá con impacto</h3>
              <p className="text-gray-600">Creá clases dinámicas que mantengan a tus estudiantes comprometidos y motivados.</p>
            </div>

            <div className="text-center p-8 bg-[#F7F9FC] rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-[#0055FF] to-[#FF8800] rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-white text-2xl">handshake</span>
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">🤝 Conectá con otros docentes como vos</h3>
              <p className="text-gray-600">Formá parte de una comunidad de educadores innovadores que comparten experiencias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter / Recursos para Titán */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0A0A0A]">Recursos para Titanes</h2>
          <p className="text-xl text-gray-600 mb-12">
            Accedé a herramientas exclusivas y contenido que te ayudará a transformar tus clases.
          </p>
          
          {/* ConvertKit Form Embed Area */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div id="convertkit-form" className="min-h-[300px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="material-symbols-outlined text-4xl mb-4">mail</span>
                  <p>Cargando recursos...</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Sin spam. Cancelá cuando quieras.
            </p>
          </div>

          {/* Video Tutorial */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-16">
            <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">Mini Tutorial</h3>
            <p className="text-gray-600 mb-6">
              Mirá cómo empezar con IA en el aula paso a paso.
            </p>
            <a 
              href="https://youtube.com/playlist?list=PLdYvxcbu-A2j5spdPQe7QDpeg12Hsywa3&si=SVjDCDxLJCEnBq5E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-[#0055FF] to-[#FF8800] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span className="material-symbols-outlined mr-2">play_arrow</span>
              Ver playlist completa
            </a>
          </div>
        </div>
      </section>

      {/* Comunidad Discord */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0A0A0A]">
            Ningún docente debería recorrer esto solo
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Sumate a nuestro Discord y conectá con otros docentes que están transformando la educación.
          </p>
          
          <div className="bg-gradient-to-r from-[#0055FF] to-[#FF8800] rounded-lg p-8 text-white mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-3">💡 Actualización constante en IA</h4>
                <p className="opacity-90">Mantente al día con las últimas herramientas y técnicas.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">🎥 Webinars semanales</h4>
                <p className="opacity-90">Sesiones en vivo para resolver dudas y compartir experiencias.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">🤝 Trabajo colaborativo</h4>
                <p className="opacity-90">Proyectos conjuntos y apoyo entre colegas.</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-3">⚡ Ambiente motivador</h4>
                <p className="opacity-90">Una comunidad que te impulsa a seguir creciendo.</p>
              </div>
            </div>
          </div>

          <a 
            href="https://discord.gg/g8gw9eQk2Y"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#5865F2] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#4752C4] transition-all duration-300 transform hover:scale-105"
          >
            <span className="material-symbols-outlined mr-2">forum</span>
            Únete ahora a la comunidad
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A]">¿Tenés alguna pregunta?</h3>
          <p className="text-gray-600 mb-6">
            Escribime directamente y te ayudo a arrancar tu camino como Titán.
          </p>
          <a 
            href="mailto:hola@soyrenzoai.com"
            className="inline-flex items-center text-[#0055FF] font-semibold hover:underline"
          >
            <span className="material-symbols-outlined mr-2">mail</span>
            hola@soyrenzoai.com
          </a>
        </div>
      </section>

      {/* Modal for ConvertKit Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#0A0A0A]">¡Descarga tu guía gratuita!</h3>
              <p className="text-gray-600 mb-6">Accedé a recursos exclusivos para convertirte en un Titán</p>
              <div id="modal-convertkit-form" className="min-h-[200px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <span className="material-symbols-outlined text-4xl mb-4">download</span>
                  <p>Cargando formulario...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ConvierteteEnTitan;
