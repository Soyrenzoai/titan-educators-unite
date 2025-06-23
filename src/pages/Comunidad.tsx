
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Users, Calendar, BookOpen, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const Comunidad = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Load ConvertKit script for discord waitlist
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '411fb161db');
    script.src = 'https://soyrenzoai.kit.com/411fb161db/index.js';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-uid="411fb161db"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const benefits = [
    {
      icon: Zap,
      title: "Actualización constante en IA",
      description: "Mantente al día con las últimas herramientas y técnicas de IA educativa."
    },
    {
      icon: Calendar,
      title: "Webinars semanales",
      description: "Sesiones en vivo con expertos y casos de éxito reales."
    },
    {
      icon: BookOpen,
      title: "Trabajo colaborativo",
      description: "Proyectos conjuntos y intercambio de recursos entre miembros."
    },
    {
      icon: Users,
      title: "Ambiente motivador",
      description: "Una comunidad que te impulsa a seguir innovando y creciendo."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Banner */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Discord
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Comunidad Titanes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Aprende, comparte y crece con docentes que innovan cada día en Latinoamérica.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-[#0A0A0A]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* How to Join */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">Cómo unirte</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Deja tu correo y recibirás el enlace de invitación privado junto con la guía de bienvenida.
              </p>
            </div>

            {/* ConvertKit Form Embed */}
            <div className="max-w-md mx-auto">
              <div id="convertkit-discord-form" className="min-h-[200px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p>Cargando formulario...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preview/Stats */}
          <div className="bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg p-8 text-white text-center mb-16">
            <h3 className="text-2xl font-bold mb-8">La comunidad en números</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <p className="opacity-90">Docentes activos</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">12</div>
                <p className="opacity-90">Países representados</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="opacity-90">Soporte entre pares</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Únete ahora a la comunidad
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Acceso gratuito • Sin compromisos • Cancela cuando quieras
            </p>
          </div>
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
            <ConvertKitForm 
              title="¡Únete a los Titanes!"
              description="Recibe tu invitación exclusiva a Discord y recursos de bienvenida"
              buttonText="Quiero mi invitación"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Comunidad;
