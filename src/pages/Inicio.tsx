
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const Inicio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Tu gran vida comienza 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> aquí</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Cursos, experiencias y conferencias para vivir tus días al máximo, cumplir tus sueños y construir una vida extraordinaria.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <Link 
              to="/conviertete-en-titan"
              className="inline-flex items-center bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Conviértete en Titán
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Companies/Logos Section Placeholder */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-8">He colaborado con:</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-500">LOGO</span>
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-500">LOGO</span>
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-500">LOGO</span>
              </div>
              <div className="w-20 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-500">LOGO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Miles de personas parece que sólo existen.
          </h2>
          <div className="space-y-4 text-lg">
            <p>Frustradas y sin motivación.</p>
            <p>Con poca salud mental.</p>
            <p>Sin hábitos ni metas.</p>
            <p>Viviendo una vida a medias.</p>
            <p className="font-semibold">Con Herramientas que cada persona está llamada para más, para ser mejor y vivir una gran vida.</p>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Así te puedo ayudar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mentorias */}
            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Mentorías</h3>
              <p className="text-gray-600 mb-4">Consejos para darte una vida nueva como Titán de la educación.</p>
              <Link to="/conviertete-en-titan" className="inline-flex items-center text-[#005cf0] font-semibold hover:underline">
                Ver más <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Recursos */}
            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Recursos</h3>
              <p className="text-gray-600 mb-4">Plantillas y herramientas para revolucionar tu práctica docente.</p>
              <Link to="/conviertete-en-titan" className="inline-flex items-center text-[#005cf0] font-semibold hover:underline">
                Ver más <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Cursos */}
            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Cursos</h3>
              <p className="text-gray-600 mb-4">Formación completa para dominar la IA en educación.</p>
              <Link to="/conviertete-en-titan" className="inline-flex items-center text-[#005cf0] font-semibold hover:underline">
                Ver más <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Experiencias */}
            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3">Experiencias</h3>
              <p className="text-gray-600 mb-4">Eventos y conferencias para transformar tu práctica educativa.</p>
              <Link to="/comunidad" className="inline-flex items-center text-[#005cf0] font-semibold hover:underline">
                Ver más <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Inicio;
