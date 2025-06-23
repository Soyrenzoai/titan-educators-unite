
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Lightbulb } from "lucide-react";

const Bio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Quieres ser mejor, vivir una gran vida y cambiar
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> al mundo?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Yo quiero ayudarte
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#005cf0] to-[#ff6f3c] p-1 rounded-2xl">
                <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl text-white font-bold">RV</span>
                    </div>
                    <p className="text-sm">Foto de Renzo Vigiani</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  ¿Qué he hablado? Soy Renzo Vigiani
                </h2>
                <p className="text-gray-600 mb-4">
                  Llevo 7 años de experiencia en el área del desarrollo personal.
                </p>
                <p className="text-gray-600 mb-4">
                  He realizado +500 conferencias y he contenido llegando a +500 millones de personas.
                </p>
                <p className="text-gray-600">
                  Mi misión es ayudar a que tengas sesión, que vivas una gran vida, y que puedas establecer mentes 
                  sobre la sociedad.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Target className="w-6 h-6 text-[#005cf0] mr-3" />
                  Pero eso también hizo mi conocer
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Por adentro a Dios.</li>
                  <li>• Fui a terapia.</li>
                  <li>• pedí consejo.</li>
                  <li>• mejoré mi salud.</li>
                  <li>• luché por mis metas.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  En 2016 mi vida dio un vivo memorable; me volví viral perdiendo a un hermano y comencé a crear contenido positivo en redes sociales.
                </p>
                <p className="text-gray-600 mt-4">
                  Años después, me convertí de volver viral y cambié mi vida por completo.
                </p>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-xl border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-[#ff6f3c] mr-3" />
                  Y quiero hacer lo mismo contigo y con todas las personas que pueda.
                </h2>
                <p className="text-gray-600 mb-4">
                  No quiero que seas una persona más del montón, que no cumple sus sueños, que se deja llevar por el mundo y que no vive con propósito.
                </p>
                <p className="text-gray-600 mb-4">
                  Creo que tú también quieres vivir.
                </p>
                <p className="text-gray-600 mb-4">
                  Al contrario, quieres ser mejor persona
                </p>
                <p className="text-gray-600 mb-4">
                  Quieres cumplir tus sueños.
                </p>
                <p className="text-gray-600 mb-4">
                  Quieres cambiar el mundo.
                </p>
                <p className="text-gray-600">
                  Y sin conocerte, sé que tienes el potencial para ser esa persona por el simple hecho de estar vivo.
                </p>
                <p className="text-gray-600 mt-4">
                  No puedo hacer que tu problema desaparezcan, pero puedo darte las herramientas para superarlo.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">¿Hablamos?</h3>
            <p className="mb-6">
              Si tienes preguntas, ideas o simplemente quieres compartir tu experiencia como docente, 
              me encantaría conocerte.
            </p>
            <p className="text-blue-100">
              📧 renzo@titaneseducacion.com | 📍 San Miguel de Tucumán, Argentina
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bio;
