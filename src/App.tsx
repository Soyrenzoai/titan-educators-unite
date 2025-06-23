
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Viaje from "./pages/Viaje";
import Recursos from "./pages/Recursos";
import Comunidad from "./pages/Comunidad";
import SobreMi from "./pages/SobreMi";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/viaje" element={<Viaje />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
