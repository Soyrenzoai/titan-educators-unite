
import { Link } from "react-router-dom";
import { Zap, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Titanes de la Educación</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos docentes en Titanes de la innovación educativa con IA.
            </p>
            <p className="text-gray-400 text-sm">
              Contacto: <a href="mailto:hola@soyrenzoai.com" className="text-white hover:underline">hola@soyrenzoai.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link to="/bio" className="text-gray-400 hover:text-white transition-colors">Bio</Link></li>
              <li><Link to="/newsletter" className="text-gray-400 hover:text-white transition-colors">Newsletter</Link></li>
              <li><Link to="/conviertete-en-titan" className="text-gray-400 hover:text-white transition-colors">Conviértete en Titán</Link></li>
              <li><Link to="/comunidad" className="text-gray-400 hover:text-white transition-colors">Comunidad</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/soyrenzoai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@soyrenzoai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-6 h-6 font-bold text-sm flex items-center justify-center">TT</div>
              </a>
              <a 
                href="https://www.youtube.com/@rlvigiani" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Renzo Vigiani – San Miguel de Tucumán, Argentina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
