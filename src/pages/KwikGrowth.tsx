
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Target, Globe, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KwikGrowth = () => {
  const features = [
    {
      icon: <BarChart2 className="w-12 h-12 text-yale" />,
      title: "AI-Powered Ad Campaigns",
      description: "Create, optimize, and manage ad campaigns across multiple platforms with AI assistance.",
      link: "/dashboard/kwikgrowth/ads/create",
    },
    {
      icon: <Target className="w-12 h-12 text-yale" />,
      title: "SEO Optimizer",
      description: "Boost your store's visibility with automated SEO tools and recommendations.",
      link: "/dashboard/kwikgrowth",
    },
    {
      icon: <Globe className="w-12 h-12 text-yale" />,
      title: "Landing Page Generator",
      description: "Create high-converting landing pages in minutes with our AI-powered generator.",
      link: "/dashboard/kwikgrowth",
    },
    {
      icon: <Users className="w-12 h-12 text-yale" />,
      title: "CRM Co-Pilot",
      description: "Automate customer engagement and nurture leads with personalized messaging.",
      link: "/dashboard/kwikgrowth",
    },
    {
      icon: <FileText className="w-12 h-12 text-yale" />,
      title: "Analytics Dashboard",
      description: "Get actionable insights from your store data to make informed decisions.",
      link: "/dashboard/kwikgrowth",
    },
  ];

  const testimonials = [
    {
      quote: "KwikGrowth has transformed our marketing strategy. The AI-powered ad campaigns have increased our ROAS by 35%!",
      name: "Emily Rodriguez",
      role: "Marketing Manager",
      company: "Lifestyle Brands Inc.",
      rating: 5
    },
    {
      quote: "The landing page generator is a game-changer. We've seen a 25% increase in conversion rates since we started using it.",
      name: "James Wilson",
      role: "E-commerce Director",
      company: "Urban Apparel",
      rating: 5
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. Now we can make data-driven decisions that actually work.",
      name: "Sophia Chen",
      role: "Growth Specialist",
      company: "Eco Products",
      rating: 4
    },
  ];

  const caseStudyData = {
    company: "Fashion Forward",
    results: [
      { metric: "Ad Spend Efficiency", increase: "+42%" },
      { metric: "Conversion Rate", increase: "+28%" },
      { metric: "Customer Retention", increase: "+35%" },
      { metric: "Overall Revenue", increase: "+53%" },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-oxford mb-4">
                Grow Your E-commerce Business with KwikGrowth
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                AI-powered marketing tools to boost your sales, engage customers, and scale your online business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yale text-white hover:bg-yale/90" asChild>
                  <Link to="/dashboard/kwikgrowth">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img 
                  src="/placeholder.svg" 
                  alt="KwikGrowth Dashboard Preview" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-4" id="features">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">Growth Tools & Features</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Everything you need to scale your online business, powered by AI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Study Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">Success Story</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              See how our clients are transforming their businesses with KwikGrowth.
            </p>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{caseStudyData.company}</h3>
                  <p className="text-gray-600 mb-6">
                    A fashion retailer that increased their revenue by 53% in just 3 months using KwikGrowth's suite of tools.
                  </p>
                  
                  <h4 className="font-bold mb-4">Key Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudyData.results.map((result, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600 text-sm">{result.metric}</p>
                        <p className="text-2xl font-bold text-green-600">{result.increase}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="mt-6" variant="outline" asChild>
                    <Link to="#full-case-study">Read Full Case Study</Link>
                  </Button>
                </div>
                <div className="bg-gray-200 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Case Study Visual" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Join thousands of satisfied merchants who have grown their business with KwikGrowth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-2 text-center">How KwikGrowth Works</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              A simple three-step process to boost your store's growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-yale flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2 text-oxford">Connect Your Store</h3>
                <p className="text-gray-600">
                  Link your e-commerce store and marketing channels to centralize your data.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-yale flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2 text-oxford">Get AI Recommendations</h3>
                <p className="text-gray-600">
                  Receive personalized strategies based on your store's performance data.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-yale flex items-center justify-center text-white font-bold mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2 text-oxford">Implement & Scale</h3>
                <p className="text-gray-600">
                  Apply the recommendations and watch your store grow with ongoing optimization.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-yale py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your E-commerce Business?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of merchants who have already transformed their online business with KwikGrowth.
            </p>
            <Button size="lg" className="bg-white text-yale hover:bg-gray-100" asChild>
              <Link to="/dashboard/kwikgrowth">
                Start Growing Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
        
        {/* Pricing Preview */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-oxford mb-4">Affordable Growth Solutions</h2>
            <p className="text-xl text-gray-600 mb-8">
              Invest in your business growth with our transparent pricing.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
              <h3 className="text-2xl font-bold mb-2">KwikGrowth</h3>
              <p className="text-4xl font-bold mb-2">$349<span className="text-lg text-gray-600">/month</span></p>
              <p className="text-gray-600 mb-6">Cancel anytime</p>
              
              <ul className="space-y-2 mb-8 text-left">
                <li className="flex items-start">
                  <ArrowRight className="text-yale mr-2 mt-1 flex-shrink-0" />
                  <span>AI-Powered Ad Campaign Management</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-yale mr-2 mt-1 flex-shrink-0" />
                  <span>SEO Optimization Tools</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-yale mr-2 mt-1 flex-shrink-0" />
                  <span>Landing Page Generator</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-yale mr-2 mt-1 flex-shrink-0" />
                  <span>Unlimited Support & Strategy Calls</span>
                </li>
              </ul>
              
              <Button className="w-full bg-yale text-white hover:bg-yale/90" size="lg" asChild>
                <Link to="/onboarding">Subscribe Now</Link>
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

export default KwikGrowth;
