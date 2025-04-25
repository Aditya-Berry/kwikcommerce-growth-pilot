
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);
  const toggleLanguages = () => setShowLanguages(!showLanguages);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-yale flex items-center justify-center text-white font-bold">K</div>
            <span className="font-gilroy font-bold text-xl text-oxford">kwikcommerce.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-oxford hover:text-yale transition-colors">Home</Link>
            <Link to="/kwikbuddy" className="text-oxford hover:text-yale transition-colors">KwikBuddy</Link>
            <Link to="/kwikgrowth" className="text-oxford hover:text-yale transition-colors">KwikGrowth</Link>
            <Link to="/pricing" className="text-oxford hover:text-yale transition-colors">Pricing</Link>

            <div className="relative">
              <button 
                onClick={toggleLanguages} 
                className="flex items-center gap-1 text-oxford hover:text-yale transition-colors"
              >
                {languages.find(lang => lang.code === language)?.name}
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {showLanguages && (
                <div className="absolute top-full right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          toggleLanguages();
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        role="menuitem"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-yale text-white hover:bg-yale/90" asChild>
              <Link to="/onboarding">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={toggleNav}>
            {isOpen ? (
              <X className="h-6 w-6 text-oxford" />
            ) : (
              <Menu className="h-6 w-6 text-oxford" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col gap-4 py-4">
              <Link to="/" className="text-oxford hover:text-yale transition-colors px-2 py-1" onClick={toggleNav}>Home</Link>
              <Link to="/kwikbuddy" className="text-oxford hover:text-yale transition-colors px-2 py-1" onClick={toggleNav}>KwikBuddy</Link>
              <Link to="/kwikgrowth" className="text-oxford hover:text-yale transition-colors px-2 py-1" onClick={toggleNav}>KwikGrowth</Link>
              <Link to="/pricing" className="text-oxford hover:text-yale transition-colors px-2 py-1" onClick={toggleNav}>Pricing</Link>
              
              <div className="border-t border-gray-200 pt-4 mt-2">
                <button 
                  onClick={toggleLanguages}
                  className="flex items-center gap-1 text-oxford hover:text-yale transition-colors px-2 py-1"
                >
                  {languages.find(lang => lang.code === language)?.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {showLanguages && (
                  <div className="pl-4 mt-2 flex flex-col gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          toggleLanguages();
                        }}
                        className="text-sm text-gray-700 hover:text-yale w-full text-left px-2 py-1"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" onClick={toggleNav} asChild>
                  <Link to="/login">Log In</Link>
                </Button>
                <Button className="bg-yale text-white hover:bg-yale/90" onClick={toggleNav} asChild>
                  <Link to="/onboarding">Get Started Free</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
