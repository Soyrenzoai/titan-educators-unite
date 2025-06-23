
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Clock, BookOpen, Users, Star } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              ⚡ Para docentes que quieren liderar el cambio
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sé el <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]">Titán</span> que tu aula necesita
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ahorra horas, enamora a tus estudiantes y lidera la innovación con IA sin ser experto en tecnología.
            </p>
          </div>

          <div className="max-w-md mx-auto mb-16">
            <ConvertKitForm />
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Automatiza correcciones</h3>
              <p className="text-gray-600">Gana 2+ horas semanales con herramientas de IA que corrigen por ti</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Clases dinámicas con IA</h3>
              <p className="text-gray-600">Diseña experiencias únicas usando herramientas gratuitas de inteligencia artificial</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Red de innovadores</h3>
              <p className="text-gray-600">Conecta con docentes que están transformando la educación en Latinoamérica</p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-700 mb-4 italic">
              "En la primera semana ahorré 3 horas corrigiendo exámenes. Ahora tengo más tiempo para innovar en mis clases de Historia."
            </blockquote>
            <cite className="font-semibold text-[#005cf0]">— María T., Profesora de Historia</cite>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
