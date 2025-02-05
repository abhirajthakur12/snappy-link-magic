
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { UrlForm } from "./UrlForm";
import { ShortenedUrlDisplay } from "./ShortenedUrlDisplay";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const UrlShortenerForm = () => {
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BACKEND_URL}/shorten`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      const newShortUrl = `${window.location.origin}/${data.shortCode}`;
      setShortUrl(newShortUrl);
      toast({
        title: "Success!",
        description: "Your URL has been shortened",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to shorten URL",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 animate-fade-in">
      <UrlForm onSubmit={handleSubmit} isLoading={isLoading} />
      {shortUrl && <ShortenedUrlDisplay shortUrl={shortUrl} />}
    </div>
  );
};
