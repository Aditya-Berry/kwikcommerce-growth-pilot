
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  CreditCard,
  Truck,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';
import DashboardShell from '@/components/DashboardShell';

const KwikBuddyStep3 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(30);
  const [paymentInstalled, setPaymentInstalled] = useState(false);
  const [shippingConnected, setShippingConnected] = useState(false);
  const [shippingApiKey, setShippingApiKey] = useState('');
  const [selectedShipping, setSelectedShipping] = useState<string | null>(null);

  const handleGoKwikInstall = () => {
    // Simulate installation
    setTimeout(() => {
      setPaymentInstalled(true);
      setProgress((prev) => Math.min(prev + 35, 100));
      toast.success("GoKwik Payment App installed successfully!");
    }, 1500);
    
    toast.loading("Installing GoKwik Payment App...");
  };

  const handleShippingConnect = () => {
    if (!selectedShipping) {
      toast.error("Please select a shipping provider");
      return;
    }
    
    if (!shippingApiKey) {
      toast.error("Please enter API key for shipping integration");
      return;
    }
    
    // Simulate connection
    setTimeout(() => {
      setShippingConnected(true);
      setProgress((prev) => Math.min(prev + 35, 100));
      toast.success(`${selectedShipping} connected successfully!`);
    }, 1500);
    
    toast.loading("Connecting shipping provider...");
  };

  const handleNext = () => {
    if (progress >= 60) {
      navigate('/dashboard/kwikbuddy/step4');
    } else {
      toast.warning("Please complete both payment and shipping setup before proceeding");
    }
  };

  const handleBack = () => {
    navigate('/dashboard/kwikbuddy/step2');
  };

  const shippingProviders = [
    { 
      id: 'shiprocket', 
      name: 'Shiprocket', 
      logo: '/placeholder.svg', 
      description: 'India\'s largest ecommerce shipping solution'
    },
    { 
      id: 'delhivery', 
      name: 'Delhivery', 
      logo: '/placeholder.svg', 
      description: 'Tech-enabled logistics and supply chain services'
    },
    { 
      id: 'easypost', 
      name: 'EasyPost', 
      logo: '/placeholder.svg', 
      description: 'Modern shipping API for ecommerce'
    },
    { 
      id: 'shippo', 
      name: 'Shippo', 
      logo: '/placeholder.svg', 
      description: 'The shipping solution for growing businesses'
    }
  ];

  return (
    <DashboardShell>
      <div>
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/dashboard/kwikbuddy')}
            className="mr-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Overview
          </Button>
          <h1 className="text-2xl font-bold text-oxford">Step 3: Payments & Shipping Integration</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-grow mr-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Step 3 Progress</span>
              <span className="text-sm font-medium text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {progress >= 60 && (
            <Button className="bg-yale text-white hover:bg-yale/90 mt-4 md:mt-0" onClick={handleNext}>
              Proceed to Required Apps <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
        
        <Tabs defaultValue="payment" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="payment">
              <CreditCard className="w-4 h-4 mr-2" />
              Payment Integration
            </TabsTrigger>
            <TabsTrigger value="shipping">
              <Truck className="w-4 h-4 mr-2" />
              Shipping Setup
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="payment">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Payment Gateway Setup</h2>
              <p className="text-gray-600 mb-6">
                Install the GoKwik payment app to provide a seamless checkout experience for your customers.
              </p>
              
              <div className="border rounded-lg overflow-hidden">
                <div className="flex flex-col md:flex-row p-6 border-b">
                  <div className="md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <ShoppingBag className="w-12 h-12 text-yale" />
                    </div>
                  </div>
                  <div className="md:w-3/4 md:pl-6">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold">GoKwik Payment Gateway</h3>
                      <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Recommended</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">
                      GoKwik's payment gateway increases your conversion rates with intelligent preloading, dynamic payment options, and secure transactions.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0 w-5 h-5" />
                        <span>Intelligent checkout that adapts to customer behavior</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0 w-5 h-5" />
                        <span>Multiple payment options (Credit/Debit Cards, UPI, Wallets, EMI)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0 w-5 h-5" />
                        <span>Seamless integration with your existing store</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0 w-5 h-5" />
                        <span>Real-time analytics and reporting dashboard</span>
                      </li>
                    </ul>
                    {paymentInstalled ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">GoKwik Payment App Installed</span>
                      </div>
                    ) : (
                      <Button className="bg-yale text-white hover:bg-yale/90" onClick={handleGoKwikInstall}>
                        Install GoKwik Payment App
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">More information</span>
                    <Button variant="link" size="sm" asChild>
                      <a href="https://gokwik.co" target="_blank" rel="noopener noreferrer">
                        Visit GoKwik <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Additional Payment Settings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Enable Cash on Delivery</p>
                      <p className="text-sm text-gray-600">Allow customers to pay when they receive their order</p>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="cod" className="rounded border-gray-300 text-yale focus:ring-yale" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Enable International Payments</p>
                      <p className="text-sm text-gray-600">Accept payments from customers worldwide</p>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="international" className="rounded border-gray-300 text-yale focus:ring-yale" />
                    </div>
                  </div>
                  
                  <div className="flex justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">Enable EMI Options</p>
                      <p className="text-sm text-gray-600">Allow customers to pay in installments</p>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="emi" className="rounded border-gray-300 text-yale focus:ring-yale" checked />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-4">Shipping Integration</h2>
              <p className="text-gray-600 mb-6">
                Connect with shipping providers to offer reliable delivery options to your customers.
              </p>
              
              {shippingConnected ? (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <AlertDescription className="text-green-800 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Shipping provider successfully connected and configured!
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="mb-6 bg-blue-50 border-blue-200">
                  <AlertDescription className="text-blue-800">
                    <p>Select your preferred shipping provider to set up integration.</p>
                  </AlertDescription>
                </Alert>
              )}
              
              <h3 className="font-bold text-lg mb-4">Select Shipping Provider</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {shippingProviders.map(provider => (
                  <Card 
                    key={provider.id} 
                    className={`cursor-pointer transition-all ${
                      selectedShipping === provider.id ? 'ring-2 ring-yale' : 'hover:shadow-md'
                    }`}
                    onClick={() => setSelectedShipping(provider.id)}
                  >
                    <CardContent className="p-4 flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center mr-4">
                        <img 
                          src={provider.logo} 
                          alt={provider.name} 
                          className="w-8 h-8 object-contain" 
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{provider.name}</h4>
                        <p className="text-sm text-gray-600">{provider.description}</p>
                      </div>
                      {selectedShipping === provider.id && (
                        <CheckCircle className="ml-auto text-yale w-5 h-5" />
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {selectedShipping && !shippingConnected && (
                <div className="border rounded-lg p-4 mb-6">
                  <h4 className="font-medium mb-2">Connect {shippingProviders.find(p => p.id === selectedShipping)?.name}</h4>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="api-key">API Key</Label>
                      <Input 
                        id="api-key" 
                        placeholder="Enter your API key" 
                        value={shippingApiKey} 
                        onChange={(e) => setShippingApiKey(e.target.value)} 
                      />
                    </div>
                    <Button className="bg-yale text-white hover:bg-yale/90" onClick={handleShippingConnect}>
                      Connect Shipping Provider
                    </Button>
                  </div>
                </div>
              )}
              
              {shippingConnected && (
                <>
                  <h3 className="font-bold text-lg mb-4 mt-8">Shipping Zones</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Domestic - Standard</h4>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Delivery in 3-5 business days</p>
                      <div className="flex justify-between text-sm">
                        <span>₹80 for orders under ₹499</span>
                        <span className="text-green-600 font-medium">FREE for orders over ₹499</span>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">Domestic - Express</h4>
                        <Badge>Active</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Delivery in 1-2 business days</p>
                      <div className="flex justify-between text-sm">
                        <span>₹150 flat rate</span>
                      </div>
                    </div>
                    
                    <div className="border border-dashed rounded-lg p-4 flex justify-center items-center text-gray-500">
                      <Button variant="outline" size="sm">
                        Add Shipping Zone
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to SEO Setup
          </Button>
          
          <Button
            className="bg-yale text-white hover:bg-yale/90"
            onClick={handleNext}
            disabled={progress < 60}
          >
            {progress >= 60 ? 'Proceed to Required Apps' : 'Complete Setup First'} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep3;
