
import { useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const RedirectHandler = () => {
  const { shortCode } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchOriginalUrl = useCallback(async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/shorten/${shortCode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch original URL');
      }
      const data = await response.json();
      window.location.replace(data.originalUrl);
    } catch (error) {
      console.error('Redirect error:', error);
      toast({
        title: "Error",
        description: "Failed to redirect to original URL",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [shortCode, navigate, toast]);

  useEffect(() => {
    if (shortCode && shortCode !== 'undefined') {
      console.log('Fetching URL for shortCode:', shortCode);
      fetchOriginalUrl();
    } else {
      console.log('Invalid shortCode, navigating to home');
      navigate('/');
    }
  }, [shortCode, fetchOriginalUrl, navigate]);

  return null;
};
