
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
              De estudiante de ingeniería a 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> impulsor de Titanes</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Profile Photo */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#005cf0] to-[#ff6f3c] p-1 rounded-2xl">
                <img 
                  src="/lovable-uploads/fe903397-ea9b-4129-9806-2e877e176abd.png" 
                  alt="Renzo Vigiani - Foto de perfil"
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-3" />
                  Soy Renzo Vigiani
                </h2>
                <ul className="space-y-3 text-gray-600">
                  <li>• Ingeniero en formación y especialista en IA educativa.</li>
                  <li>• +18 meses formando escuelas públicas de Tucumán.</li>
                  <li>• Speaker en EdTech LATAM y anfitrión del podcast 'Compartiendo Caminos'.</li>
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Target className="w-6 h-6 text-[#005cf0] mr-3" />
                  Mi Trayectoria
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#005cf0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-[#005cf0]">2023:</span>
                      <span className="text-gray-600 ml-2">Me uno a NotDini como marketer y trainer.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#005cf0] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-[#005cf0]">2024:</span>
                      <span className="text-gray-600 ml-2">Formo +300 docentes en IA y gamificación.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-[#ff6f3c] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold text-[#ff6f3c]">2025:</span>
                      <span className="text-gray-600 ml-2">Lanzo Titanes de la Educación.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-4 h-4 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] bg-clip-text text-transparent">Futuro:</span>
                      <span className="text-gray-600 ml-2">Expandir la metodología Titán por toda Latinoamérica.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-xl border border-blue-100">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-[#ff6f3c] mr-3" />
                  Mi Misión
                </h2>
                <p className="text-gray-600 mb-4">
                  Ayudar a que tengas éxito, que vivas una gran vida educativa, y que puedas establecer un impacto positivo 
                  sobre la sociedad a través de la educación innovadora.
                </p>
                <p className="text-gray-600">
                  Creo que cada docente tiene el potencial para ser un Titán en su aula y transformar la vida de sus estudiantes.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">¿Hablamos?</h3>
            <p className="mb-6">
              Si tienes preguntas, ideas o simplemente quieres compartir tu experiencia como docente, 
              me encantaría conocerte.
            </p>
            <div className="space-y-2">
              <p className="text-blue-100">
                📧 renzo@titaneseducacion.com
              </p>
              <p className="text-blue-100">
                📍 San Miguel de Tucumán, Argentina
              </p>
            </div>
            <a 
              href="#" 
              className="inline-block mt-6 bg-white text-[#005cf0] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Descarga mi CV completo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bio;
