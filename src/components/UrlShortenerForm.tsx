import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link2, Copy } from "lucide-react";

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
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              "Shortening..."
            ) : (
              <>
                Shorten <Link2 className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </form>

      {shortUrl && (
        <div className="p-4 bg-white rounded-lg shadow-lg space-y-2 animate-fade-in">
          <div className="flex items-center justify-between">
            <p className="font-medium text-sm text-gray-600">Your shortened URL:</p>
            <Button variant="ghost" size="sm" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 break-all"
          >
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};