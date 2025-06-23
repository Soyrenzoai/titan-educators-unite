
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Mail, Users, BookOpen, Star } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IMPULSA TU 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> VIDA</span>
            </h1>
            <div className="inline-block bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] text-white px-6 py-3 rounded-full text-lg font-semibold mb-8">
              CONSEJOS PRÁCTICOS PARA SER MEJOR
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Únete a +90,000 personas que reciben semanalmente consejos prácticos para construir una gran vida.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-12">
            <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#005cf0] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Empieza tu semana con impulso</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#ff6f3c] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Ideas y reflexiones que te inspirarán a vivir una gran vida</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#005cf0] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>Aprende de estrategias que realmente funcionan</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-[#ff6f3c] rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span>3 consejos semanales para vivir una gran vida</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto mb-16">
            <ConvertKitForm 
              title="Impulsa tu Vida"
              description="Cada lunes recibirás consejos prácticos para construir una gran vida. Al suscribirte te regalo mi Habit Tracker para ayudarte a construir hábitos poderosos."
              buttonText="Suscribirme"
              placeholder="Escribe tu correo electrónico..."
            />
          </div>

          {/* Additional Info */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">¿Quieres conectar con una audiencia que realmente importa?</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Si tu marca busca llegar a miles de personas dedicadas al crecimiento personal y profesional, este newsletter es la 
              plataforma ideal para ti. Nuestra comunidad está compuesta por líderes comprometidos, activos y en constante búsqueda 
              de nuevas ideas, herramientas y soluciones.
            </p>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Hablemos sobre cómo podemos potenciar tu marca y llevar tu mensaje directamente a una audiencia que ya está lista para 
              escucharte.
            </p>
            <button className="bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
              Descubre más sobre nuestras oportunidades de patrocinio
            </button>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#005cf0] mb-2">+90,000</div>
                <p className="text-gray-600">Suscriptores activos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#ff6f3c] mb-2">40%</div>
                <p className="text-gray-600">Tasa de apertura</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#005cf0] mb-2">5+</div>
                <p className="text-gray-600">Años enviando valor</p>
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
