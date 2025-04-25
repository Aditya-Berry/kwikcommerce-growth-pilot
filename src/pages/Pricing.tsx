
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PricingCard from '../components/PricingCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  const pricingPlans = [
    {
      plan: "KwikBuddy Basic",
      price: "$299",
      description: "Everything you need to set up your ecommerce store quickly",
      features: [
        { feature: "Store Theme Setup", included: true },
        { feature: "Product Cataloging", included: true },
        { feature: "Basic SEO Setup", included: true },
        { feature: "Payment Integration", included: true },
        { feature: "1 Month Support", included: true },
        { feature: "Advanced Analytics", included: false },
        { feature: "AI Marketing Tools", included: false },
      ],
      ctaText: "Get Started",
      ctaLink: "/onboarding",
      popular: false,
    },
    {
      plan: "KwikBuddy Pro",
      price: "$599",
      description: "Complete store setup with advanced features and extended support",
      features: [
        { feature: "Everything in Basic", included: true },
        { feature: "Advanced SEO Setup", included: true },
        { feature: "Custom Theme Design", included: true },
        { feature: "3 Months Support", included: true },
        { feature: "Priority Assistance", included: true },
        { feature: "Performance Optimization", included: true },
        { feature: "Basic Growth Tools", included: false },
      ],
      ctaText: "Best Value",
      ctaLink: "/onboarding",
      popular: true,
    },
    {
      plan: "KwikGrowth",
      price: "$349",
      description: "Monthly subscription for ongoing growth and optimization",
      features: [
        { feature: "AI Ad Campaigns", included: true },
        { feature: "SEO Optimization", included: true },
        { feature: "Analytics Dashboard", included: true },
        { feature: "Landing Page Generator", included: true },
        { feature: "CRM Co-Pilot", included: true },
        { feature: "Unlimited Support", included: true },
        { feature: "Monthly Strategy Call", included: true },
      ],
      ctaText: "Subscribe",
      ctaLink: "/onboarding",
      popular: false,
    },
  ];

  const enterprisePlan = {
    plan: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large businesses with complex requirements",
    features: [
      { feature: "Custom Integrations", included: true },
      { feature: "Dedicated Account Manager", included: true },
      { feature: "White Label Options", included: true },
      { feature: "Advanced Security", included: true },
      { feature: "Custom Analytics", included: true },
      { feature: "API Access", included: true },
      { feature: "SLA Agreement", included: true },
    ],
    ctaText: "Contact Sales",
    ctaLink: "#contact",
    popular: false,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Pricing Header */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-oxford mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your ecommerce needs, with no hidden fees
            </p>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>
            
            {/* Enterprise Plan */}
            <div className="mt-12 max-w-lg mx-auto">
              <PricingCard {...enterprisePlan} />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Can I switch between plans?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">We offer a 14-day free trial for all KwikGrowth plans. No credit card required to start.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">How do the one-time and subscription plans differ?</h3>
                <p className="text-gray-600">KwikBuddy plans are one-time payments for setting up your store. KwikGrowth is a subscription for ongoing growth tools and optimization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-2">Can I cancel my subscription?</h3>
                <p className="text-gray-600">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-oxford mb-4">Ready to grow your ecommerce business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Start your journey with KwikCommerce today and see the difference our AI-powered tools can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-yale text-white hover:bg-yale/90" asChild>
                <Link to="/onboarding">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="#contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
