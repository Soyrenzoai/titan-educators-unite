
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Newsletter = () => {
  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', '411fb161db');
    script.src = 'https://soyrenzoai.kit.com/411fb161db/index.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[data-uid="411fb161db"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter semanal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
              Tip de IA cada lunes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Únete a +300 docentes que reciben un prompt listo para usar y recursos exclusivos.
            </p>
          </div>

          {/* ConvertKit Form Embed Area */}
          <div className="max-w-md mx-auto mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div id="convertkit-form" className="min-h-[200px] flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Mail className="w-8 h-8 mx-auto mb-2" />
                  <p>Cargando formulario...</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              Libres de spam. Baja en un clic.
            </p>
          </div>

          {/* Preview Last Issue */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-16">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="inline-block bg-[#FF6F3C]/10 text-[#FF6F3C] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Última edición
                </div>
                <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4">
                  5 prompts para corregir exámenes al instante
                </h3>
                <p className="text-gray-600 mb-6">
                  Descubre cómo reducir horas de corrección con estas plantillas de IA probadas por +300 docentes...
                </p>
                <button className="inline-flex items-center text-[#005CF0] font-semibold hover:underline">
                  Leer edición completa
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="ml-8 hidden md:block">
                <div className="w-24 h-32 bg-gradient-to-br from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg mb-3 text-[#0A0A0A]">📧 Cada lunes en tu inbox</h4>
              <p className="text-gray-600">Un email semanal con el prompt de la semana, listo para copiar y pegar.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg mb-3 text-[#0A0A0A]">🎯 Casos reales</h4>
              <p className="text-gray-600">Ejemplos prácticos de docentes que ya están ahorrando tiempo con IA.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg mb-3 text-[#0A0A0A]">🔧 Herramientas gratuitas</h4>
              <p className="text-gray-600">Acceso prioritario a plantillas y recursos antes que el resto.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-lg mb-3 text-[#0A0A0A]">⏱️ Lectura de 3 minutos</h4>
              <p className="text-gray-600">Contenido directo y accionable que puedes implementar el mismo día.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg p-8 text-white text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">+300</div>
                <p className="opacity-90">Docentes suscritos</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">45%</div>
                <p className="opacity-90">Tasa de apertura</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">18+</div>
                <p className="opacity-90">Meses enviando valor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
