
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Rocket, BarChart3, Layout, Zap, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingCard from '@/components/PricingCard';

const HomePage = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-whitesmoke py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-oxford leading-tight mb-6">
                Unlock the Future of E-Commerce with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering your store with predictive analytics, growth tools, and seamless integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yale text-white hover:bg-yale/90 px-8 py-6 text-lg" asChild>
                  <Link to="/onboarding">Get Started</Link>
                </Button>
                <Button variant="outline" className="px-8 py-6 text-lg" onClick={scrollToFeatures}>
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="AI-powered ecommerce dashboard" 
                className="rounded-lg shadow-2xl max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford mb-4">Powerful Features to Grow Your Business</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive suite of tools helps you build, optimize, and scale your ecommerce business with AI-powered insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingBag className="w-6 h-6" />}
              title="KwikStore Buddy"
              description="Set up your store in minutes with our AI-powered assistant that handles everything from design to product catalog."
              link="/kwikbuddy"
            />
            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              title="KwikGrowth Suite"
              description="Accelerate your store's growth with our comprehensive toolkit for marketing, SEO, and customer engagement."
              link="/kwikgrowth"
            />
            <FeatureCard
              icon={<Layout className="w-6 h-6" />}
              title="AI Landing Page Generator"
              description="Create high-converting landing pages with our AI-powered generator that optimizes for your specific audience."
              link="/kwikgrowth/landingpage"
            />
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Analytics Dashboard"
              description="Get actionable insights with our comprehensive analytics dashboard that tracks all your key metrics."
              link="/analytics"
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="KwikAds++"
              description="Create, manage, and optimize your ad campaigns across multiple platforms with our AI-powered ad manager."
              link="/kwikgrowth/ads"
            />
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6" />}
              title="CRM Co-pilot"
              description="Engage with your customers more effectively with our AI-powered CRM assistant that helps you create personalized campaigns."
              link="/kwikgrowth/crm"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-oxford text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose KwikCommerce</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join hundreds of successful ecommerce merchants who have transformed their businesses with our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-oxford/30 p-6 rounded-lg border border-white/10">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gamboge/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-gamboge" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">10x Growth</h3>
              <p className="text-center text-white/80">
                Our merchants see an average of 10x growth within the first six months of using our platform.
              </p>
            </div>
            <div className="bg-oxford/30 p-6 rounded-lg border border-white/10">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gamboge/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-gamboge" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Easy Setup</h3>
              <p className="text-center text-white/80">
                Get your store up and running in minutes with our intuitive onboarding process.
              </p>
            </div>
            <div className="bg-oxford/30 p-6 rounded-lg border border-white/10">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gamboge/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-gamboge" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">AI-Powered</h3>
              <p className="text-center text-white/80">
                Leverage the power of AI to make data-driven decisions that boost your sales and engagement.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-2">What Our Customers Say</h3>
              <p className="text-white/80">Real stories from real merchants who have transformed their businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="KwikCommerce has completely transformed our ecommerce business. The AI-powered tools have helped us increase our sales by 300% in just 3 months."
                name="Sarah Johnson"
                role="Founder"
                company="Sleek Styles"
                rating={5}
              />
              <TestimonialCard
                quote="The KwikGrowth suite has been a game-changer for our marketing efforts. We've been able to reach new customers and increase our conversion rate significantly."
                name="Michael Rodriguez"
                role="Marketing Director"
                company="TechGadgets"
                rating={5}
              />
              <TestimonialCard
                quote="Setting up our store with KwikBuddy was so easy. The AI-powered assistant guided us through every step and we were up and running in no time."
                name="Emma Thompson"
                role="CEO"
                company="Organic Essentials"
                rating={4}
              />
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/case-studies">View Case Studies <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24" ref={pricingRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for your business and start growing today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              plan="KwikBuddy"
              price="$599"
              description="One-time payment for store setup and optimization"
              features={[
                { feature: "Store Setup Wizard", included: true },
                { feature: "SEO Setup", included: true },
                { feature: "Payment & Shipping Integration", included: true },
                { feature: "Required Apps Installation", included: true },
                { feature: "Page Optimization", included: true },
                { feature: "30-day support", included: true },
                { feature: "Growth tools", included: false },
              ]}
              ctaText="Buy Now"
              ctaLink="/onboarding?plan=kwikbuddy"
            />
            <PricingCard
              plan="KwikGrowth"
              price="$349"
              description="Monthly subscription for ongoing growth and optimization"
              features={[
                { feature: "Store Connector", included: true },
                { feature: "SEO Optimizer", included: true },
                { feature: "KwikAds++", included: true },
                { feature: "AI Landing Page Generator", included: true },
                { feature: "CRM Co-Pilot", included: true },
                { feature: "Analytics Dashboard", included: true },
                { feature: "Priority Support", included: true },
              ]}
              ctaText="Subscribe Now"
              ctaLink="/onboarding?plan=kwikgrowth"
              popular={true}
            />
            <PricingCard
              plan="KwikSuite"
              price="$799"
              description="Complete solution for store setup and ongoing growth"
              features={[
                { feature: "All KwikBuddy Features", included: true },
                { feature: "All KwikGrowth Features", included: true },
                { feature: "Advanced Analytics", included: true },
                { feature: "Custom Integrations", included: true },
                { feature: "Dedicated Account Manager", included: true },
                { feature: "White-label Reports", included: true },
                { feature: "Enterprise-grade Support", included: true },
              ]}
              ctaText="Get Complete Suite"
              ctaLink="/onboarding?plan=kwiksuite"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution for your business?</p>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yale text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your E-Commerce Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of merchants who have already unlocked their growth potential with KwikCommerce.
          </p>
          <Button className="bg-white text-yale hover:bg-white/90 px-8 py-6 text-lg" asChild>
            <Link to="/onboarding">Get Started Free</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
