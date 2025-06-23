
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { FileText, Clock, Users, Lightbulb } from "lucide-react";

const Recursos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recursos para 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> Titanes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <h2 className="text-3xl font-bold mb-4">Plantilla: Clase con IA en 15 minutos</h2>
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
            <h3 className="font-semibold text-lg mb-2">¿Qué incluye tu descarga?</h3>
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

export default Recursos;
