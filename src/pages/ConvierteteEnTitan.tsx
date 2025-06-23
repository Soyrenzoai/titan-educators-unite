
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Download, Play, CheckCircle } from "lucide-react";
import { useState } from "react";

const ConvierteteEnTitan = () => {
  const [showModal, setShowModal] = useState(false);

  const levels = [
    {
      name: "Explorador",
      dolor: "¿Por dónde empiezo?",
      beneficio: "Primer ahorro de tiempo"
    },
    {
      name: "Innovador", 
      dolor: "Pierdo tiempo corrigiendo",
      beneficio: "Clases dinámicas con IA"
    },
    {
      name: "Mentor",
      dolor: "Quiero ayudar a colegas",
      beneficio: "Liderazgo reconocido"
    },
    {
      name: "Titán",
      dolor: "Quiero escalar mi impacto",
      beneficio: "Influencia regional + equilibrio vida-trabajo"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation />
      
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
            Conviértete en un Titán
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recursos gratuitos y ruta clara de crecimiento para transformar tu práctica docente.
          </p>
        </div>
      </section>

      {/* Lead Magnets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plantilla Clase IA */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A0A0A]">Plantilla 'Clase IA 15 min'</h3>
              <p className="text-gray-600 mb-6">
                Genera actividades completas en tiempo récord con esta guía paso a paso.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-[#005CF0] text-white py-3 rounded-lg font-semibold hover:bg-[#005CF0]/90 transition-colors"
              >
                Descargar PDF
              </button>
            </div>

            {/* Mini Demo */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mb-6">
                <Play className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A0A0A]">Mini demo — Clase en 5 min</h3>
              <p className="text-gray-600 mb-6">
                Video paso a paso con NotDini para crear tu primera clase con IA.
              </p>
              <button className="w-full bg-[#FF6F3C] text-white py-3 rounded-lg font-semibold hover:bg-[#FF6F3C]/90 transition-colors">
                Ver demo
              </button>
            </div>

            {/* Checklist */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0A0A0A]">Checklist de nivel Titán</h3>
              <p className="text-gray-600 mb-6">
                Autoevalúa tu progreso y descubre cuáles son tus próximos pasos.
              </p>
              <button 
                onClick={() => setShowModal(true)}
                className="w-full bg-[#005CF0] text-white py-3 rounded-lg font-semibold hover:bg-[#005CF0]/90 transition-colors"
              >
                Descargar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabla Comparación */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0A0A0A] mb-6">
              Los 4 niveles del Titán
            </h2>
            <p className="text-xl text-gray-600">
              Identifica dónde estás y descubre cómo avanzar al siguiente nivel.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-100">
              <thead>
                <tr className="bg-[#F7F9FC] border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-bold text-[#0A0A0A]">Nivel</th>
                  <th className="py-4 px-6 text-left font-bold text-red-600">😰 Dolor actual</th>
                  <th className="py-4 px-6 text-left font-bold text-green-600">✨ Beneficio</th>
                </tr>
              </thead>
              <tbody>
                {levels.map((level, index) => (
                  <tr key={level.name} className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                        index === 0 ? 'bg-red-100 text-red-700' :
                        index === 1 ? 'bg-yellow-100 text-yellow-700' :
                        index === 2 ? 'bg-blue-100 text-blue-700' :
                        'bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] text-white'
                      }`}>
                        {level.name}
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{level.dolor}</td>
                    <td className="py-4 px-6 text-gray-600">{level.beneficio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-8">¿Listo para tu próxima misión?</h3>
          <p className="text-xl mb-8 opacity-90">
            Descarga la checklist completa y descubre exactamente qué hacer para convertirte en un Titán.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-[#005CF0] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
            Descarga la checklist
          </button>
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
              title="¡Descarga tu recurso!"
              description="Accede al contenido exclusivo para Titanes de la Educación"
              buttonText="Descargar ahora"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ConvierteteEnTitan;
