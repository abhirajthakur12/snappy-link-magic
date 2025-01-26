import { UrlShortenerForm } from "@/components/UrlShortenerForm";
import { Heart, Link2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 p-6">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Link2 className="w-8 h-8 text-purple-500 animate-pulse" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            LinkCrush
          </h1>
        </div>
        <p className="text-gray-600 text-lg mt-4">
          Shorten your long URLs into memorable links
        </p>
      </div>
      
      <div className="w-full max-w-md relative">
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-purple-100 rounded-full animate-pulse opacity-70" />
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-pink-100 rounded-full animate-pulse opacity-70" />
        <UrlShortenerForm />
      </div>
      
      <footer className="fixed bottom-4 text-center text-sm text-gray-500 flex items-center gap-2 animate-fade-in">
        Made with <Heart className="w-4 h-4 text-pink-500" /> using Lovable
      </footer>
    </div>
  );
};

export default Index;