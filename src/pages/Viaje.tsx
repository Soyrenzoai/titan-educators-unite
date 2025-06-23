
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const Viaje = () => {
  const levels = [
    {
      name: "Explorador",
      description: "Descubres el potencial de la IA",
      pain: "Corriges manualmente, preparas clases desde cero",
      benefit: "Automatizas tareas básicas, ganas 2h/semana"
    },
    {
      name: "Innovador", 
      description: "Integras IA en tu práctica diaria",
      pain: "Clases repetitivas, estudiantes desconectados",
      benefit: "Clases dinámicas, estudiantes más participativos"
    },
    {
      name: "Mentor",
      description: "Compartes tu conocimiento con otros",
      pain: "Trabajas aislado, sin feedback",
      benefit: "Red de colegas, crecimiento colaborativo"
    },
    {
      name: "Titán",
      description: "Lideras la transformación educativa",
      pain: "Burnout, rutina sin propósito",
      benefit: "Impacto masivo, legado educativo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tu camino para convertirte en 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> Titán</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada docente tiene un viaje único. Descubre en qué nivel estás y cómo avanzar al siguiente.
            </p>
          </div>

          {/* Progress Path */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12">
              {levels.map((level, index) => (
                <div key={level.name} className="flex flex-col items-center mb-8 md:mb-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 ${
                    index === 0 ? 'bg-red-500' : 
                    index === 1 ? 'bg-yellow-500' : 
                    index === 2 ? 'bg-blue-500' : 'bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]'
                  }`}>
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{level.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{level.description}</p>
                  {index < levels.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-400 mt-4 hidden md:block transform rotate-90 md:rotate-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Del dolor al beneficio</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-100">
                    <th className="text-left py-4 font-semibold">Nivel</th>
                    <th className="text-left py-4 font-semibold text-red-600">😰 Dolor actual</th>
                    <th className="text-left py-4 font-semibold text-green-600">✨ Beneficio</th>
                  </tr>
                </thead>
                <tbody>
                  {levels.map((level, index) => (
                    <tr key={level.name} className="border-b border-gray-50">
                      <td className="py-4 font-semibold">{level.name}</td>
                      <td className="py-4 text-gray-600">
                        <div className="flex items-start">
                          <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {level.pain}
                        </div>
                      </td>
                      <td className="py-4 text-gray-600">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {level.benefit}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-md mx-auto">
            <ConvertKitForm 
              title="Descarga tu checklist"
              description="Guía paso a paso para avanzar al siguiente nivel"
              buttonText="Descargar checklist gratis"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Viaje;
