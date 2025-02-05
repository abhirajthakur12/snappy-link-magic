
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import { useToast } from "@/components/ui/use-toast";

// Define backend base URL
const BACKEND_URL = "http://localhost:8080"; // Adjust this to match your Golang backend URL

const RedirectComponent = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/shorten/${shortCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch original URL');
        }
        const data = await response.json();
        // Using replace instead of href to prevent navigation history issues
        window.location.replace(data.originalUrl);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to redirect to original URL",
          variant: "destructive",
        });
        navigate('/');
      }
    };

    if (shortCode && shortCode !== 'undefined') {
      fetchOriginalUrl();
    } else {
      navigate('/');
    }
  }, [shortCode, navigate, toast]);

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
