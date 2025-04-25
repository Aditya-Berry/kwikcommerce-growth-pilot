
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oxford text-whitesmoke">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-yale font-bold">K</div>
              <span className="font-gilroy font-bold text-xl text-white">kwikcommerce.ai</span>
            </Link>
            <p className="mt-4 text-sm">Empowering ecommerce merchants with AI-driven tools for growth and success.</p>
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gamboge transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gamboge transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gamboge transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gamboge transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link to="/kwikbuddy" className="hover:text-gamboge transition-colors">KwikBuddy</Link></li>
              <li><Link to="/kwikgrowth" className="hover:text-gamboge transition-colors">KwikGrowth</Link></li>
              <li><Link to="/kwikads" className="hover:text-gamboge transition-colors">KwikAds++</Link></li>
              <li><Link to="/kwikstore" className="hover:text-gamboge transition-colors">KwikStore</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-gamboge transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="hover:text-gamboge transition-colors">Case Studies</Link></li>
              <li><Link to="/documentation" className="hover:text-gamboge transition-colors">Documentation</Link></li>
              <li><Link to="/help" className="hover:text-gamboge transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-gamboge transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-gamboge transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-gamboge transition-colors">Contact</Link></li>
              <li><Link to="/legal" className="hover:text-gamboge transition-colors">Legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getFullYear()} KwikCommerce.ai. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm hover:text-gamboge transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="text-sm hover:text-gamboge transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="text-sm hover:text-gamboge transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
