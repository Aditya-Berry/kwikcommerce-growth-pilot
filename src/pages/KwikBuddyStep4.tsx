
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Package,
  ShoppingCart,
  Star,
  ExternalLink,
  Download,
  RotateCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import DashboardShell from '@/components/DashboardShell';

interface AppCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  installed: boolean;
  onInstall: () => void;
  appUrl: string;
}

const AppCard = ({ name, description, icon, installed, onInstall, appUrl }: AppCardProps) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              {icon}
            </div>
            <div>
              <div className="flex items-center mb-1">
                <h3 className="font-bold text-lg">{name}</h3>
                {installed && (
                  <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                    Installed
                  </Badge>
                )}
              </div>
              <p className="text-gray-600 mb-4">{description}</p>
              
              {!installed ? (
                <Button className="bg-yale text-white hover:bg-yale/90" onClick={onInstall}>
                  Install Now
                </Button>
              ) : (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Successfully Installed</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-3 border-t flex justify-between items-center">
          <div className="flex items-center">
            <Star className="text-yellow-400 w-4 h-4" />
            <Star className="text-yellow-400 w-4 h-4" />
            <Star className="text-yellow-400 w-4 h-4" />
            <Star className="text-yellow-400 w-4 h-4" />
            <Star className="text-yellow-400 w-4 h-4" />
            <span className="text-sm text-gray-500 ml-2">5.0 (120+ reviews)</span>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-500" asChild>
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
              Details <ExternalLink className="ml-1 w-3 h-3" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const KwikBuddyStep4 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(20);
  const [requiredAppsInstalled, setRequiredAppsInstalled] = useState<Record<string, boolean>>({
    kwikpass: false,
    kwikcart: false
  });
  const [recommendedAppsInstalled, setRecommendedAppsInstalled] = useState<Record<string, boolean>>({
    reviewapp: false,
    upsell: false,
    analytics: false
  });
  const [isScanning, setIsScanning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleInstallApp = (appKey: string, isRequired: boolean) => {
    // Simulate installation
    setTimeout(() => {
      if (isRequired) {
        setRequiredAppsInstalled(prev => ({
          ...prev,
          [appKey]: true
        }));
        
        // If both required apps are installed, update progress significantly
        if (appKey === 'kwikpass' && requiredAppsInstalled.kwikcart || 
            appKey === 'kwikcart' && requiredAppsInstalled.kwikpass) {
          setProgress(80);
        } else {
          setProgress(prev => prev + 30);
        }
      } else {
        setRecommendedAppsInstalled(prev => ({
          ...prev,
          [appKey]: true
        }));
        setProgress(prev => Math.min(prev + 10, 100));
      }
      
      toast.success(`${appKey === 'kwikpass' ? 'KwikPass' : 
                      appKey === 'kwikcart' ? 'KwikCart' : 
                      appKey === 'reviewapp' ? 'Review Booster' :
                      appKey === 'upsell' ? 'Smart Upsell' : 
                      'Analytics Pro'} app installed successfully!`);
    }, 1500);
    
    toast.loading(`Installing ${appKey === 'kwikpass' ? 'KwikPass' : 
                    appKey === 'kwikcart' ? 'KwikCart' : 
                    appKey === 'reviewapp' ? 'Review Booster' :
                    appKey === 'upsell' ? 'Smart Upsell' : 
                    'Analytics Pro'}...`);
  };
  
  const handleScanStore = () => {
    setIsScanning(true);
    toast.loading("Scanning your store for app recommendations...");
    
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      toast.success("Scan complete! We've updated your recommended apps.");
    }, 3000);
  };

  const handleNext = () => {
    // If both required apps are installed, allow proceeding to next step
    if (requiredAppsInstalled.kwikpass && requiredAppsInstalled.kwikcart) {
      navigate('/dashboard/kwikbuddy/step5');
    } else {
      toast.warning("Please install both KwikPass and KwikCart before proceeding");
    }
  };

  const handleBack = () => {
    navigate('/dashboard/kwikbuddy/step3');
  };

  const filteredRecommendedApps = [
    {
      key: 'reviewapp',
      name: 'Review Booster',
      description: 'Automatically collect and display product reviews from customers.',
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      installed: recommendedAppsInstalled.reviewapp,
      appUrl: "#"
    },
    {
      key: 'upsell',
      name: 'Smart Upsell',
      description: 'Increase order value with intelligent product recommendations.',
      icon: <Package className="w-6 h-6 text-purple-500" />,
      installed: recommendedAppsInstalled.upsell,
      appUrl: "#"
    },
    {
      key: 'analytics',
      name: 'Analytics Pro',
      description: 'Detailed analytics and reporting for your store performance.',
      icon: <RotateCw className="w-6 h-6 text-blue-500" />,
      installed: recommendedAppsInstalled.analytics,
      appUrl: "#"
    }
  ].filter(app => 
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-2xl font-bold text-oxford">Step 4: Enable Required Apps for Performance</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-grow mr-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Step 4 Progress</span>
              <span className="text-sm font-medium text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {requiredAppsInstalled.kwikpass && requiredAppsInstalled.kwikcart && (
            <Button className="bg-yale text-white hover:bg-yale/90 mt-4 md:mt-0" onClick={handleNext}>
              Go to Page Optimization <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Required Apps</h2>
          <p className="text-gray-600 mb-6">
            These essential apps will significantly improve your store's performance and customer experience.
          </p>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <AppCard 
              name="KwikPass" 
              description="One-click checkout solution that boosts conversion rates by up to 35% with passwordless login and saved payment details."
              icon={<ShoppingCart className="w-6 h-6 text-yale" />}
              installed={requiredAppsInstalled.kwikpass}
              onInstall={() => handleInstallApp('kwikpass', true)}
              appUrl="#"
            />
            
            <AppCard 
              name="KwikCart" 
              description="Advanced cart functionality with abandoned cart recovery, dynamic discounts, and cross-sell recommendations."
              icon={<Package className="w-6 h-6 text-yale" />}
              installed={requiredAppsInstalled.kwikcart}
              onInstall={() => handleInstallApp('kwikcart', true)}
              appUrl="#"
            />
          </div>
          
          <h2 className="text-xl font-bold mb-2">Recommended Apps</h2>
          <p className="text-gray-600 mb-4">
            Enhance your store with these additional apps based on your business category.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="w-full md:w-3/4">
              <Input
                placeholder="Search apps..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button
              variant="outline"
              onClick={handleScanStore}
              disabled={isScanning}
              className="whitespace-nowrap"
            >
              {isScanning ? (
                <>
                  <RotateCw className="w-4 h-4 mr-2 animate-spin" /> Scanning...
                </>
              ) : (
                <>
                  <RotateCw className="w-4 h-4 mr-2" /> Scan Store for Recommendations
                </>
              )}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRecommendedApps.map(app => (
              <AppCard 
                key={app.key}
                name={app.name}
                description={app.description}
                icon={app.icon}
                installed={app.installed}
                onInstall={() => handleInstallApp(app.key, false)}
                appUrl={app.appUrl}
              />
            ))}
          </div>
          
          {filteredRecommendedApps.length === 0 && (
            <div className="text-center p-12 border rounded-lg">
              <p className="text-gray-500">No matching apps found. Try a different search term.</p>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">App Marketplace</h2>
          <p className="text-gray-600 mb-6">
            Browse our complete collection of apps to add more functionality to your store.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Marketing</h3>
              <p className="text-sm text-gray-600">Email marketing, popups, SEO tools</p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Sales & Conversion</h3>
              <p className="text-sm text-gray-600">Upsells, discounts, loyalty programs</p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Customer Support</h3>
              <p className="text-sm text-gray-600">Live chat, help desk, FAQ systems</p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Store Design</h3>
              <p className="text-sm text-gray-600">Page builders, themes, customization</p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Inventory Management</h3>
              <p className="text-sm text-gray-600">Stock tracking, fulfillment, dropshipping</p>
            </div>
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-medium mb-1">Analytics & Reporting</h3>
              <p className="text-sm text-gray-600">Advanced reports, customer insights</p>
            </div>
          </div>
          
          <Button variant="outline" className="w-full" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Browse All Apps <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Custom App Development</h2>
          <p className="text-gray-600 mb-4">
            Need a custom app for your specific business requirements? Our team can help.
          </p>
          <Button variant="outline" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Request Custom Development <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Payments & Shipping
          </Button>
          
          <Button
            className="bg-yale text-white hover:bg-yale/90"
            onClick={handleNext}
            disabled={!requiredAppsInstalled.kwikpass || !requiredAppsInstalled.kwikcart}
          >
            {requiredAppsInstalled.kwikpass && requiredAppsInstalled.kwikcart ? 
              'Go to Page Optimization' : 
              'Install Required Apps First'} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep4;
