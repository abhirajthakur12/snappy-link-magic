import { UrlShortenerForm } from "@/components/UrlShortenerForm";
import { Link2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
      <div className="text-center mb-12 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="p-2 bg-white/50 rounded-lg backdrop-blur-sm shadow-lg">
            <Link2 className="w-8 h-8 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            LinkCrush
          </h1>
        </div>
        <p className="text-gray-600 text-lg mt-4 font-medium">
          Shorten your long URLs into memorable links
        </p>
      </div>
      
      <div className="w-full max-w-md relative">
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-white/50 rounded-full backdrop-blur-sm shadow-lg" />
        <div className="absolute top-[calc(100%+1.5rem)] right-6 w-12 h-12 bg-white/50 rounded-full backdrop-blur-sm shadow-lg" />
        <UrlShortenerForm />
      </div>
    </div>
  );
};

export default Index;