
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface ConvertKitFormProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
}

const ConvertKitForm = ({
  title = "¡Únete a los Titanes!",
  description = "Recibe recursos exclusivos y consejos para transformar tu práctica docente",
  buttonText = "Quiero mi guía gratis",
  placeholder = "tu.email@ejemplo.com"
}: ConvertKitFormProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor ingresa tu email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simular envío a ConvertKit
    setTimeout(() => {
      toast({
        title: "¡Bienvenido/a Titán!",
        description: "Te hemos enviado tu guía gratuita. Revisa tu bandeja de entrada.",
      });
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-r from-[#005cf0] to-[#ff6f3c] p-6 rounded-2xl text-white">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 placeholder:text-blue-200 text-white focus:bg-white/20"
          required
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-[#005cf0] hover:bg-blue-50 font-semibold py-3"
        >
          {isLoading ? "Enviando..." : buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-blue-200 text-center mt-4">
        Al suscribirte, aceptas recibir emails de Titanes de la Educación. Sin spam, promesa de Titán.
      </p>
    </div>
  );
};

export default ConvertKitForm;
