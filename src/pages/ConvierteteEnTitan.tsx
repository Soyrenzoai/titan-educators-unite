
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { ArrowRight, CheckCircle, XCircle, Clock, BookOpen, Users, Lightbulb, Trophy, FileText } from "lucide-react";

const ConvierteteEnTitan = () => {
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
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Conviértete en el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]">Titán</span> que tu aula necesita
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transforma tu práctica docente con IA, ahorra horas semanales y lidera la innovación educativa.
          </p>
          
          <div className="max-w-md mx-auto mb-16">
            <ConvertKitForm 
              title="Comienza tu transformación"
              description="Descarga tu guía gratuita y únete a miles de docentes que ya son Titanes"
              buttonText="Quiero convertirme en Titán"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué convertirte en Titán?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automatiza correcciones</h3>
              <p className="text-gray-600">Gana 2+ horas semanales con herramientas de IA que corrigen por ti</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clases dinámicas con IA</h3>
              <p className="text-gray-600">Diseña experiencias únicas usando herramientas gratuitas de inteligencia artificial</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Red de innovadores</h3>
              <p className="text-gray-600">Conecta con docentes que están transformando la educación en Latinoamérica</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tu camino para convertirte en Titán
            </h2>
            <p className="text-xl text-gray-600">
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
            <h3 className="text-2xl font-bold text-center mb-8">Del dolor al beneficio</h3>
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
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Recursos para Titanes
            </h2>
            <p className="text-xl text-gray-600">
              Herramientas prácticas y plantillas listas para transformar tu práctica docente hoy mismo.
            </p>
          </div>

          {/* Featured Resource */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <FileText className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Plantilla: Clase con IA en 15 minutos</h3>
                <p className="text-gray-600 mb-6">
                  La guía definitiva para preparar clases innovadoras usando herramientas de IA gratuitas. 
                  Incluye ejemplos reales y pasos detallados.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-green-500 mr-3" />
                    <span>Ahorra 2+ horas de preparación</span>
                  </li>
                  <li className="flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-3" />
                    <span>10 prompts listos para usar</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-blue-500 mr-3" />
                    <span>Adaptable a cualquier materia</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="w-5 h-5 text-purple-500 mr-3" />
                    <span>Plantillas descargables en PDF</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl">
                <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
                  <div className="h-2 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded mb-3"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Form */}
          <div className="max-w-md mx-auto">
            <ConvertKitForm 
              title="Descarga tu plantilla"
              description="Acceso inmediato a la guía completa + bonus exclusivos"
              buttonText="Descargar plantilla gratis"
              placeholder="profesor@escuela.edu"
            />
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
            <h4 className="font-semibold text-lg mb-2">¿Qué incluye tu descarga?</h4>
            <p className="text-gray-600 mb-4">
              📄 Plantilla PDF editable • 🎯 10 prompts probados • 📋 Checklist paso a paso • 🎁 Bonus: Video tutorial
            </p>
            <p className="text-sm text-gray-500">
              Más de 500 docentes ya transformaron sus clases con esta plantilla
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConvierteteEnTitan;
