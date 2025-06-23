
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Target, Lightbulb } from "lucide-react";

const SobreMi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hola, soy 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> Renzo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El docente que se convirtió en Titán y ahora ayuda a otros a hacer lo mismo.
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
                  Mi historia
                </h2>
                <p className="text-gray-600 mb-4">
                  Hace 5 años era como tú: un docente apasionado pero agotado, pasando horas corrigiendo exámenes 
                  y preparando clases que a veces no conectaban con mis estudiantes.
                </p>
                <p className="text-gray-600 mb-4">
                  Todo cambió cuando descubrí el poder de la IA para la educación. No solo recuperé mi tiempo, 
                  sino que mis clases se transformaron en experiencias que mis estudiantes esperaban con ansias.
                </p>
                <p className="text-gray-600">
                  Desde San Miguel de Tucumán, Argentina, he ayudado a más de 1,000 docentes latinoamericanos 
                  a convertirse en los Titanes que sus aulas necesitan.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Target className="w-6 h-6 text-[#005cf0] mr-3" />
                  Mi misión
                </h2>
                <p className="text-gray-600">
                  Democratizar el acceso a herramientas de IA para docentes de secundaria en Latinoamérica, 
                  porque creo firmemente que la educación del futuro se construye hoy, en nuestras aulas, 
                  con docentes empoderados y estudiantes inspirados.
                </p>
              </div>

              {/* Story of Titanes */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-xl border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-[#ff6f3c] mr-3" />
                  El nacimiento de Titanes de la Educación
                </h2>
                <p className="text-gray-600 mb-4">
                  El nombre surgió una noche mientras preparaba clases hasta las 2 AM. Pensé: "Los docentes somos 
                  como titanes, cargamos el peso de formar las próximas generaciones, pero necesitamos herramientas 
                  que nos hagan verdaderamente poderosos."
                </p>
                <p className="text-gray-600">
                  Así nació esta comunidad: un espacio donde los docentes no solo sobreviven, sino que prosperan 
                  y se convierten en los héroes que sus estudiantes merecen.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-6">Lo que me impulsa cada día:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#005cf0] rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-600"><strong>Impacto real:</strong> Cada docente que ahorra tiempo es una victoria</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#ff6f3c] rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-600"><strong>Accesibilidad:</strong> La IA debe ser para todos, no solo para expertos</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#005cf0] rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-600"><strong>Comunidad:</strong> Juntos somos más fuertes que cada uno por separado</p>
                  </div>
                </div>
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

export default SobreMi;
