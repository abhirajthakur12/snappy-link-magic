import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link2, Copy, ExternalLink } from "lucide-react";

export const UrlShortenerForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setShortUrl("https://short.url/" + Math.random().toString(36).substr(2, 6));
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "Your URL has been shortened",
      });
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast({
      title: "Copied!",
      description: "URL copied to clipboard",
    });
  };

  return (
    <div className="w-full max-w-md space-y-8 animate-fade-in">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <Input
            type="url"
            placeholder="Enter your long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-white/80 backdrop-blur-sm border-[#2E7D32]/30 focus:border-[#2E7D32] transition-all shadow-sm"
          />
          <Button 
            type="submit" 
            disabled={isLoading}
            className="bg-[#2E7D32] hover:bg-[#1B5E20] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              {isLoading ? (
                "Shortening..."
              ) : (
                <>
                  Shorten
                  <Link2 className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </>
              )}
            </span>
          </Button>
        </div>
      </form>

      {shortUrl && (
        <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg space-y-4 animate-fade-in border border-[#2E7D32]/10">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm text-gray-700">Your shortened URL:</p>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={copyToClipboard}
                className="hover:bg-[#2E7D32]/10"
              >
                <Copy className="h-4 w-4 text-[#2E7D32] transition-colors" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.open(shortUrl, '_blank')}
                className="hover:bg-[#2E7D32]/10"
              >
                <ExternalLink className="h-4 w-4 text-[#2E7D32] transition-colors" />
              </Button>
            </div>
          </div>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors break-all story-link block font-medium"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};