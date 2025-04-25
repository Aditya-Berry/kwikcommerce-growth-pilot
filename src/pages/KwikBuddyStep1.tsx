
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShoppingBag, 
  Upload, 
  Plus,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import DashboardShell from '@/components/DashboardShell';

const KwikBuddyStep1 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(30);
  const [hasStore, setHasStore] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<number | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
      setProgress((prev) => Math.min(prev + 10, 100));
    }
  };

  const handleThemeSelect = (themeId: number) => {
    setSelectedTheme(themeId);
    setProgress((prev) => Math.min(prev + 20, 100));
  };

  const handleStoreSelection = (value: string) => {
    setHasStore(value);
    setProgress((prev) => Math.min(prev + 10, 100));
  };

  const handleConnectStore = () => {
    // Simulate store connection
    setProgress((prev) => Math.min(prev + 20, 100));
    // Show success message
    setTimeout(() => {
      alert('Store connected successfully!');
    }, 1000);
  };

  const handleNext = () => {
    navigate('/dashboard/kwikbuddy/step2');
  };

  const themes = [
    { id: 1, name: 'Modern Minimal', image: '/placeholder.svg' },
    { id: 2, name: 'Bold & Vibrant', image: '/placeholder.svg' },
    { id: 3, name: 'Classic Elegance', image: '/placeholder.svg' },
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
          <h1 className="text-2xl font-bold text-oxford">Step 1: Get Ready to Make Your Website Live</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-grow mr-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Step 1 Progress</span>
              <span className="text-sm font-medium text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {progress === 100 && (
            <Button className="bg-yale text-white hover:bg-yale/90 mt-4 md:mt-0" onClick={handleNext}>
              Proceed to SEO Setup <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Connect Your Store</h2>
          
          <div className="mb-6">
            <p className="mb-4">Do you already have a Shopify or WooCommerce store?</p>
            
            <RadioGroup value={hasStore || ""} onValueChange={handleStoreSelection}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`border rounded-lg p-4 ${hasStore === 'yes' ? 'border-yale bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-start">
                    <RadioGroupItem value="yes" id="has-store-yes" />
                    <div className="ml-3">
                      <Label htmlFor="has-store-yes" className="font-bold text-lg cursor-pointer">Yes, I have a store</Label>
                      <p className="text-gray-600">Connect your existing Shopify or WooCommerce store.</p>
                    </div>
                  </div>
                </div>
                
                <div className={`border rounded-lg p-4 ${hasStore === 'no' ? 'border-yale bg-blue-50' : 'border-gray-200'}`}>
                  <div className="flex items-start">
                    <RadioGroupItem value="no" id="has-store-no" />
                    <div className="ml-3">
                      <Label htmlFor="has-store-no" className="font-bold text-lg cursor-pointer">No, I need to create one</Label>
                      <p className="text-gray-600">We'll help you set up a new Shopify store.</p>
                    </div>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
          
          {hasStore === 'yes' && (
            <div className="animate-fade-in">
              <Tabs defaultValue="shopify">
                <TabsList className="mb-4">
                  <TabsTrigger value="shopify">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Shopify
                  </TabsTrigger>
                  <TabsTrigger value="woocommerce">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    WooCommerce
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="shopify" className="space-y-4">
                  <div>
                    <Label htmlFor="shopify-store">Shopify Store URL</Label>
                    <Input id="shopify-store" placeholder="yourstore.myshopify.com" />
                  </div>
                  <Button className="bg-yale text-white hover:bg-yale/90" onClick={handleConnectStore}>
                    Connect My Store
                  </Button>
                </TabsContent>
                
                <TabsContent value="woocommerce" className="space-y-4">
                  <div>
                    <Label htmlFor="woo-store">WooCommerce Store URL</Label>
                    <Input id="woo-store" placeholder="yourstore.com" />
                  </div>
                  <div>
                    <Label htmlFor="woo-key">API Key</Label>
                    <Input id="woo-key" placeholder="Enter your WooCommerce API key" />
                  </div>
                  <Button className="bg-yale text-white hover:bg-yale/90" onClick={handleConnectStore}>
                    Connect My Store
                  </Button>
                </TabsContent>
              </Tabs>
            </div>
          )}
          
          {hasStore === 'no' && (
            <div className="animate-fade-in">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
                <p className="text-blue-800">
                  We recommend Shopify for its ease of use and powerful features. Click below to create your Shopify store, then come back to connect it.
                </p>
              </div>
              
              <Button className="bg-green-600 text-white hover:bg-green-700" asChild>
                <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer">
                  Create Shopify Store <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          )}
        </div>

        {(hasStore === 'yes' || hasStore === 'no') && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">Upload Brand Logo</h2>
            
            <div className="mb-6">
              {logoPreview ? (
                <div className="flex flex-col items-center">
                  <img 
                    src={logoPreview} 
                    alt="Your logo" 
                    className="max-h-40 max-w-full mb-4 border rounded-lg p-2" 
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => {
                      setLogoFile(null);
                      setLogoPreview(null);
                      setProgress((prev) => Math.max(prev - 10, 0));
                    }}>
                      Remove
                    </Button>
                    <Label htmlFor="logo-upload" className="cursor-pointer">
                      <span className="inline-flex items-center justify-center px-3 py-1 text-sm border border-yale text-yale rounded-md hover:bg-yale/10">
                        Change Logo
                      </span>
                      <Input 
                        id="logo-upload" 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleLogoChange}
                      />
                    </Label>
                  </div>
                  <div className="mt-4 flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" /> Logo uploaded successfully
                  </div>
                </div>
              ) : (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center">
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-gray-600 mb-4 text-center">
                    Drag and drop your logo here or click to browse
                  </p>
                  <Label htmlFor="logo-upload" className="cursor-pointer">
                    <span className="inline-flex items-center justify-center px-4 py-2 border border-yale bg-white text-yale rounded-md hover:bg-yale/10">
                      <Plus className="w-4 h-4 mr-1" /> Select File
                    </span>
                    <Input 
                      id="logo-upload" 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={handleLogoChange}
                    />
                  </Label>
                  <p className="text-xs text-gray-500 mt-2">Supported formats: PNG, JPG, SVG. Max size: 5MB</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        {logoPreview && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 animate-fade-in">
            <h2 className="text-xl font-bold mb-4">AI-Assisted Theme Generator</h2>
            <p className="text-gray-600 mb-6">
              Based on your logo and industry, we've generated these theme suggestions for your store:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {themes.map((theme) => (
                <div 
                  key={theme.id}
                  className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedTheme === theme.id ? 'ring-2 ring-yale scale-[1.02]' : 'hover:shadow-md'
                  }`}
                  onClick={() => handleThemeSelect(theme.id)}
                >
                  <img 
                    src={theme.image} 
                    alt={theme.name} 
                    className="w-full h-40 object-cover border-b" 
                  />
                  <div className="p-4 flex justify-between items-center">
                    <h3 className="font-medium">{theme.name}</h3>
                    {selectedTheme === theme.id && (
                      <CheckCircle className="w-5 h-5 text-yale" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {selectedTheme && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-yale text-white hover:bg-yale/90">
                  Download Theme ZIP
                </Button>
                <Button variant="outline">
                  Apply to Store
                </Button>
              </div>
            )}
          </div>
        )}
        
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => navigate('/dashboard/kwikbuddy')}
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Back
          </Button>
          
          <Button
            className="bg-yale text-white hover:bg-yale/90"
            onClick={handleNext}
            disabled={progress < 100}
          >
            {progress < 100 ? 'Complete All Steps First' : 'Proceed to SEO Setup'} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep1;
