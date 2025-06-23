
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Clock, BookOpen, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const Inicio = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with classroom and blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#005CF0]/60 to-[#005CF0]/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
            Sé el Titán que tu aula necesita
          </h1>
          <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Domina la IA, enamora a tus estudiantes y libera horas de tu semana
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-[#FF6F3C] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6F3C]/90 transition-all duration-300 transform hover:scale-105"
            >
              Quiero mi guía gratis
            </button>
            <a 
              href="#talleres"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Ver próximos talleres
            </a>
          </div>
        </div>
      </section>

      {/* 3-Line Mini Resumen */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 text-lg text-[#0A0A0A]">
            <p>• Hola, soy Renzo Vigiani: marketer EdTech y formador de docentes.</p>
            <p>• Trabajo en NotDini potenciando clases con IA y gamificación.</p>
            <p>• Llevo +18 meses ayudando a +300 profes de Latinoamérica a ahorrar tiempo y motivar a sus alumnos.</p>
          </div>
        </div>
      </section>

      {/* How I Can Help */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#0A0A0A]">Así te puedo ayudar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Automatiza correcciones</h3>
              <p className="text-gray-600">Gana 2 h/semana con herramientas que trabajan por ti</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Clases dinámicas en 15 min</h3>
              <p className="text-gray-600">Con IA gratuita que transforma tu metodología</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Comunidad innovadora</h3>
              <p className="text-gray-600">Conecta con docentes que ya están transformando la educación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Logos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-500 mb-8">He colaborado con:</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="text-xs font-semibold text-gray-500">NotDini</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="text-xs font-semibold text-gray-500">UTN Tucumán</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="text-xs font-semibold text-gray-500">Coop Fénix</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center mb-2">
                <span className="text-xs font-semibold text-gray-500">Podcast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dolor → Visión */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Miles de docentes repiten tareas manuales cada día
          </h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            Tu vocación merece tiempo para inspirar, no para corregir sin fin. Hagamos de la IA tu super-poder.
          </p>
        </div>
      </section>

      {/* Testimonio Flash */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#F7F9FC] p-8 rounded-lg">
            <blockquote className="text-xl italic text-[#0A0A0A] mb-4">
              "En una semana ahorré 3 h de correcciones y mis alumnos estaban fascinados."
            </blockquote>
            <p className="font-semibold text-[#005CF0]">— María T., Historia</p>
          </div>
        </div>
      </section>

      {/* Talleres Section */}
      <section id="talleres" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#0A0A0A]">Próximos Talleres</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-6">
              Mantente al día con nuestros próximos talleres y eventos exclusivos para Titanes.
            </p>
            <button 
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Notificarme de próximos talleres
            </button>
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
              title="¡Descarga tu guía gratuita!"
              description="Accede a recursos exclusivos y únete a la comunidad de Titanes"
              buttonText="Quiero mi guía gratis"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Inicio;
