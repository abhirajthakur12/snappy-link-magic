import { UrlShortenerForm } from "@/components/UrlShortenerForm";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">URL Shortener</h1>
        <p className="text-gray-600">Shorten your long URLs into memorable links</p>
      </div>
      
      <UrlShortenerForm />
      
      <footer className="fixed bottom-4 text-center text-sm text-gray-500">
        Made with ❤️ using Lovable
      </footer>
    </div>
  );
};

export default Index;