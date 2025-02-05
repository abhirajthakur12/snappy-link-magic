import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";

const RedirectComponent = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await fetch(`/shorten/${shortCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch original URL');
        }
        const data = await response.json();
        window.location.href = data.originalUrl;
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to redirect to original URL",
          variant: "destructive",
        });
        navigate('/');
      }
    };

    if (shortCode) {
      fetchOriginalUrl();
    }
  }, [shortCode, navigate]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:shortCode" element={<RedirectComponent />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;