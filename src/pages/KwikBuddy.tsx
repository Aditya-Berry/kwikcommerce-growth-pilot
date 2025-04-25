
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Layout, Search, CreditCard, Upload, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KwikBuddy = () => {
  const features = [
    {
      icon: <Layout className="w-12 h-12 text-yale" />,
      title: "AI-Powered Store Setup",
      description: "Get your online store up and running quickly with our AI-assisted setup process.",
      link: "/dashboard/kwikbuddy",
    },
    {
      icon: <Search className="w-12 h-12 text-yale" />,
      title: "SEO Optimization",
      description: "Boost your store's visibility with automated SEO tools and recommendations.",
      link: "/dashboard/kwikbuddy",
    },
    {
      icon: <CreditCard className="w-12 h-12 text-yale" />,
      title: "Payment Integration",
      description: "Seamlessly integrate payment gateways with just a few clicks.",
      link: "/dashboard/kwikbuddy",
    },
    {
      icon: <Upload className="w-12 h-12 text-yale" />,
      title: "App Recommendations",
      description: "Get personalized app recommendations to enhance your store's functionality.",
      link: "/dashboard/kwikbuddy",
    },
    {
      icon: <Package className="w-12 h-12 text-yale" />,
      title: "Product Optimization",
      description: "Optimize your product pages for better conversion rates.",
      link: "/dashboard/kwikbuddy",
    },
  ];

  const testimonials = [
    {
      quote: "KwikBuddy helped me set up my store in just a few hours. The AI-powered recommendations were spot on!",
      name: "Sarah Johnson",
      role: "Owner",
      company: "Fashion Boutique",
      rating: 5
    },
    {
      quote: "The SEO optimization tools have significantly improved our store's visibility. Our traffic has increased by 40%!",
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Tech Accessories",
      rating: 5
    },
    {
      quote: "Setting up payment gateways was always a nightmare until I found KwikBuddy. Now it's just a few clicks!",
      name: "David Smith",
      role: "CEO",
      company: "Organic Foods",
      rating: 4
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Connect Your Store",
      description: "Link your existing store or create a new one from scratch."
    },
    {
      number: 2,
      title: "Set Up Your Brand",
      description: "Upload your logo, select colors, and define your brand identity."
    },
    {
      number: 3,
      title: "Optimize Your Store",
      description: "Follow our guided steps to optimize your store for success."
    },
    {
      number: 4,
      title: "Launch and Grow",
      description: "Go live with your optimized store and start growing your business."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-oxford mb-4">
                Build Your Online Store with KwikBuddy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Set up, optimize, and launch your ecommerce store in record time with our AI-powered assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yale text-white hover:bg-yale/90" asChild>
                  <Link to="/dashboard/kwikbuddy">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#how-it-works">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img 
                  src="/placeholder.svg" 
                  alt="KwikBuddy Dashboard Preview" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4" id="features">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">Powerful Features</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Everything you need to set up a successful online store, all in one place.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gray-50 py-16 px-4" id="how-it-works">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">How It Works</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our simple four-step process will get your store up and running in no time.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-yale flex items-center justify-center text-white font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-oxford">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Join thousands of satisfied merchants who have transformed their online business with KwikBuddy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-yale py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Dream Store?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of merchants who have already transformed their online business with KwikBuddy.
            </p>
            <Button size="lg" className="bg-white text-yale hover:bg-gray-100" asChild>
              <Link to="/dashboard/kwikbuddy">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Pricing Preview */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-oxford mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your needs and budget.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold mb-2">KwikBuddy Pro</h3>
              <p className="text-4xl font-bold mb-2">$599</p>
              <p className="text-gray-600 mb-6">One-time payment</p>
              
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Complete store setup and optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>AI-powered product descriptions and SEO</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Payment and shipping integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>3 months of priority support</span>
                </li>
              </ul>
              
              <Button className="w-full bg-yale text-white hover:bg-yale/90" size="lg" asChild>
                <Link to="/onboarding">Get Started</Link>
              </Button>
            </div>
            
            <Link to="/pricing" className="text-yale hover:underline font-medium">
              View All Pricing Options
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KwikBuddy;
