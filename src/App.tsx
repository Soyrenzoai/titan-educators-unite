
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Bio from "./pages/Bio";
import Newsletter from "./pages/Newsletter";
import ConvierteteEnTitan from "./pages/ConvierteteEnTitan";
import Comunidad from "./pages/Comunidad";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/conviertete-en-titan" element={<ConvierteteEnTitan />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
