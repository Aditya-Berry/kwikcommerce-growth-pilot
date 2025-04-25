
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-gray-400">404</span>
          </div>
          <h1 className="text-3xl font-bold text-oxford mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            We're sorry, the page you requested could not be found. Please check the URL or navigate back to the home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="flex items-center gap-2" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </Button>
            <Button className="bg-yale text-white hover:bg-yale/90" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
