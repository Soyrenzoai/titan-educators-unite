
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConvertKitForm from "@/components/ConvertKitForm";
import { Users, Trophy, BookOpen, Star } from "lucide-react";

const Comunidad = () => {
  const benefits = [
    {
      icon: Users,
      title: "Soporte par-a-par",
      description: "Conecta con docentes que enfrentan los mismos desafíos. Resuelve dudas y comparte experiencias en tiempo real."
    },
    {
      icon: Trophy,
      title: "Retos gamificados",
      description: "Participa en desafíos mensuales que te impulsen a probar nuevas herramientas y técnicas de enseñanza."
    },
    {
      icon: BookOpen,
      title: "Recursos exclusivos",
      description: "Acceso prioritario a plantillas, webinars y contenido premium antes que nadie."
    },
    {
      icon: Star,
      title: "Visibilidad",
      description: "Comparte tus logros, obtén reconocimiento y construye tu reputación como docente innovador."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] to-white">
      <Navigation />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🚀 Acceso anticipado
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Únete a la comunidad
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005cf0] to-[#ff6f3c]"> Discord</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              El primer espacio en Latinoamérica donde docentes de secundaria comparten, aprenden y crecen juntos usando IA.
            </p>
          </div>

          {/* Community Preview */}
          <div className="bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-2xl p-8 mb-12 text-white text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">🎉 ¡Próximamente!</h2>
              <p className="text-blue-100 mb-6">
                Estamos preparando un espacio increíble donde los Titanes de la Educación se conectarán, 
                colaborarán y transformarán la educación juntos.
              </p>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="font-semibold mb-2">Fecha de lanzamiento: Marzo 2025</p>
                <p className="text-sm text-blue-200">Los primeros 100 miembros tendrán beneficios exclusivos de por vida</p>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Preview */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Lo que puedes esperar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#005cf0] mb-2">500+</div>
                <p className="text-gray-600">Docentes innovadores</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#ff6f3c] mb-2">15</div>
                <p className="text-gray-600">Países participantes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#005cf0] mb-2">24/7</div>
                <p className="text-gray-600">Soporte activo</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-md mx-auto">
            <ConvertKitForm 
              title="¡Reserva tu lugar!"
              description="Sé de los primeros en acceder cuando abramos las puertas"
              buttonText="Únete a la lista de espera"
            />
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>127 docentes</strong> ya están en lista de espera
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-xs">
                +122
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Comunidad;
