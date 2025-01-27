import { UrlShortenerForm } from "@/components/UrlShortenerForm";
import { Heart, Link2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E8F5E9] via-[#C8E6C9] to-[#A5D6A7] p-6">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 bg-white/30 rounded-lg backdrop-blur-sm">
            <Link2 className="w-8 h-8 text-[#2E7D32]" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-transparent bg-clip-text">
            LinkCrush
          </h1>
        </div>
        <p className="text-gray-700 text-lg mt-4 font-medium">
          Shorten your long URLs into memorable links
        </p>
      </div>
      
      <div className="w-full max-w-md relative">
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm" />
        <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm" />
        <UrlShortenerForm />
      </div>
      
      <footer className="fixed bottom-4 text-center text-sm text-gray-600 flex items-center gap-2 animate-fade-in bg-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
        Made with <Heart className="w-4 h-4 text-[#2E7D32]" /> using Lovable
      </footer>
    </div>
  );
};

export default Index;