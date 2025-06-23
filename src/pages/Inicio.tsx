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
            Domina la IA, motivá a tus alumnos y ganá horas cada semana
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-[#005CF0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#005CF0]/90 transition-all duration-300 transform hover:scale-105"
            >
              Descargar mi guía gratis
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
            <p>• Trabajo en Notnini potenciando clases con IA y gamificación.</p>
            <p>• Llevo +18 meses ayudando a más de 300 docentes en LATAM a ahorrar tiempo, ganar confianza y transformar sus clases.</p>
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
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Corregí más rápido con IA</h3>
              <p className="text-gray-600">Ganá 2 h por semana</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Prepará clases dinámicas en 15 minutos</h3>
              <p className="text-gray-600">IA lista para usar en tus clases</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-[#005CF0] to-[#FF6F3C] rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-4 text-[#0A0A0A]">Unite a una comunidad que innova con IA</h3>
              <p className="text-gray-600">Compartí recursos y experiencias reales</p>
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
                <span className="text-xs font-semibold text-gray-500">Notnini</span>
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
