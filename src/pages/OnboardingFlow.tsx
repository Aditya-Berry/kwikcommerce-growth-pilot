
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PlanOption {
  id: string;
  name: string;
  price: string;
  description: string;
  popular?: boolean;
}

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPlan = queryParams.get('plan') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    storeName: '',
    businessCategory: '',
    annualRevenue: '',
    averageOrderValue: '',
    salesChannels: [],
    selectedPlan: initialPlan,
  });

  const businessCategories = [
    'Fashion & Apparel',
    'Electronics',
    'Home & Furniture',
    'Beauty & Personal Care',
    'Food & Beverage',
    'Health & Wellness',
    'Sports & Outdoors',
    'Toys & Games',
    'Books & Media',
    'Other'
  ];

  const revenueRanges = [
    'Pre-revenue',
    '$1 - $10,000',
    '$10,001 - $50,000',
    '$50,001 - $100,000',
    '$100,001 - $500,000',
    '$500,001 - $1,000,000',
    '$1,000,001+'
  ];

  const aovRanges = [
    'Under $25',
    '$25 - $50',
    '$51 - $100',
    '$101 - $200',
    '$201 - $500',
    '$501+'
  ];

  const salesChannelOptions = [
    'Shopify',
    'WooCommerce',
    'Magento',
    'BigCommerce',
    'Amazon',
    'eBay',
    'Etsy',
    'Social Media',
    'Other'
  ];

  const planOptions: PlanOption[] = [
    {
      id: 'kwikbuddy',
      name: 'KwikBuddy',
      price: '$599',
      description: 'One-time payment for complete store setup'
    },
    {
      id: 'kwikgrowth',
      name: 'KwikGrowth',
      price: '$349/month',
      description: 'Ongoing growth tools and optimization',
      popular: true
    },
    {
      id: 'kwiksuite',
      name: 'KwikSuite',
      price: '$799/month',
      description: 'Complete solution with setup and growth tools'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSalesChannelToggle = (channel: string) => {
    const currentChannels = formData.salesChannels as string[];
    
    if (currentChannels.includes(channel)) {
      setFormData({
        ...formData,
        salesChannels: currentChannels.filter(c => c !== channel)
      });
    } else {
      setFormData({
        ...formData,
        salesChannels: [...currentChannels, channel]
      });
    }
  };

  const handlePlanSelect = (planId: string) => {
    setFormData({ ...formData, selectedPlan: planId });
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      // Onboarding completed - redirect to the appropriate dashboard
      if (formData.selectedPlan === 'kwikbuddy') {
        navigate('/dashboard/kwikbuddy');
      } else {
        navigate('/dashboard/kwikgrowth');
      }
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        return formData.email && formData.password && formData.password === formData.confirmPassword && formData.password.length >= 8;
      case 2:
        return formData.storeName && formData.businessCategory;
      case 3:
        return true; // Optional fields
      case 4:
        return !!formData.selectedPlan;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-whitesmoke py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              {['Account Setup', 'Store Info', 'Business Details', 'Select Plan'].map((label, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step > idx + 1 ? 'bg-green-500 text-white' : 
                      step === idx + 1 ? 'bg-yale text-white' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > idx + 1 ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                  </div>
                  <span className={`text-sm mt-1 hidden sm:block ${step === idx + 1 ? 'text-yale font-medium' : 'text-gray-500'}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative h-2 bg-gray-200 rounded-full">
              <div 
                className="absolute left-0 top-0 h-2 bg-yale rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-oxford">Create Your Account</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Create a strong password"
                      className="mt-1"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long.</p>
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Confirm your password"
                      className="mt-1"
                      required
                    />
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1">Passwords do not match.</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-oxford">Store Information</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input
                      id="storeName"
                      name="storeName"
                      value={formData.storeName}
                      onChange={handleInputChange}
                      placeholder="Enter your store name"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessCategory">Business Category</Label>
                    <select
                      id="businessCategory"
                      name="businessCategory"
                      value={formData.businessCategory}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yale"
                      required
                    >
                      <option value="" disabled>Select a category</option>
                      {businessCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-oxford">Business Details</h2>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="annualRevenue">Annual Revenue (ARR)</Label>
                    <select
                      id="annualRevenue"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yale"
                    >
                      <option value="" disabled>Select a range</option>
                      {revenueRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="averageOrderValue">Average Order Value (AOV)</Label>
                    <select
                      id="averageOrderValue"
                      name="averageOrderValue"
                      value={formData.averageOrderValue}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yale"
                    >
                      <option value="" disabled>Select a range</option>
                      {aovRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Sales Channels</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-1">
                      {salesChannelOptions.map((channel) => (
                        <div key={channel} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`channel-${channel}`}
                            checked={(formData.salesChannels as string[]).includes(channel)}
                            onChange={() => handleSalesChannelToggle(channel)}
                            className="mr-2"
                          />
                          <label htmlFor={`channel-${channel}`} className="text-sm">{channel}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-oxford">Choose Your Plan</h2>
                <p className="text-gray-600 mb-6">Select the plan that best fits your business needs.</p>
                
                <RadioGroup 
                  value={formData.selectedPlan} 
                  onValueChange={handlePlanSelect}
                  className="space-y-4"
                >
                  {planOptions.map((plan) => (
                    <div 
                      key={plan.id}
                      className={`border rounded-lg p-4 relative ${
                        formData.selectedPlan === plan.id ? 'border-yale bg-blue-50' : 'border-gray-200'
                      } ${plan.popular ? 'ring-2 ring-yale' : ''}`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-yale text-white text-xs py-1 px-2 rounded-bl-lg rounded-tr-lg">
                          Most Popular
                        </div>
                      )}
                      <div className="flex items-start">
                        <RadioGroupItem value={plan.id} id={plan.id} className="mt-1" />
                        <div className="ml-3">
                          <Label htmlFor={plan.id} className="font-bold text-lg cursor-pointer">{plan.name}</Label>
                          <p className="font-bold text-xl">{plan.price}</p>
                          <p className="text-gray-600 text-sm">{plan.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="ghost" 
                onClick={prevStep} 
                disabled={step === 1}
                className={step === 1 ? 'invisible' : ''}
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back
              </Button>
              
              <Button 
                onClick={nextStep} 
                disabled={!validateCurrentStep()}
                className="bg-yale text-white hover:bg-yale/90"
              >
                {step === 4 ? 'Proceed to Dashboard' : 'Continue'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
