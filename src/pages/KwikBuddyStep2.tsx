
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Search,
  BarChart3,
  Code,
  Pin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import DashboardShell from '@/components/DashboardShell';
import { toast } from '@/components/ui/sonner';

const KwikBuddyStep2 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(20);
  const [ga4Connected, setGa4Connected] = useState(false);
  const [metaPixelConnected, setMetaPixelConnected] = useState(false);
  const [tiktokPixelConnected, setTiktokPixelConnected] = useState(false);
  const [snapPixelConnected, setSnapPixelConnected] = useState(false);
  const [ga4Id, setGa4Id] = useState('');
  const [metaPixelId, setMetaPixelId] = useState('');
  const [tiktokPixelId, setTiktokPixelId] = useState('');
  const [snapPixelId, setSnapPixelId] = useState('');
  
  // Calculate if all required trackers have been connected
  const essentialTrackersConnected = ga4Connected && metaPixelConnected;
  
  // Calculate progress based on connected trackers
  const updateProgress = () => {
    let newProgress = 20; // Base progress
    if (ga4Connected) newProgress += 20;
    if (metaPixelConnected) newProgress += 20;
    if (tiktokPixelConnected) newProgress += 20;
    if (snapPixelConnected) newProgress += 20;
    setProgress(newProgress);
  };

  const handleGa4Connect = () => {
    if (!ga4Id) {
      toast.error("Please enter a valid GA4 ID");
      return;
    }
    
    // Simulate GA4 connection
    setGa4Connected(true);
    toast.success("Google Analytics 4 connected successfully!");
    updateProgress();
  };

  const handleMetaPixelConnect = () => {
    if (!metaPixelId) {
      toast.error("Please enter a valid Meta Pixel ID");
      return;
    }
    
    // Simulate Meta Pixel connection
    setMetaPixelConnected(true);
    toast.success("Meta Pixel connected successfully!");
    updateProgress();
  };

  const handleTiktokPixelConnect = () => {
    if (!tiktokPixelId) {
      toast.error("Please enter a valid TikTok Pixel ID");
      return;
    }
    
    // Simulate TikTok Pixel connection
    setTiktokPixelConnected(true);
    toast.success("TikTok Pixel connected successfully!");
    updateProgress();
  };

  const handleSnapPixelConnect = () => {
    if (!snapPixelId) {
      toast.error("Please enter a valid Snap Pixel ID");
      return;
    }
    
    // Simulate Snap Pixel connection
    setSnapPixelConnected(true);
    toast.success("Snap Pixel connected successfully!");
    updateProgress();
  };

  const handleNext = () => {
    if (essentialTrackersConnected) {
      navigate('/dashboard/kwikbuddy/step3');
    } else {
      toast.warning("Please connect at least Google Analytics and Meta Pixel before proceeding");
    }
  };

  const handleBack = () => {
    navigate('/dashboard/kwikbuddy/step1');
  };

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
          <h1 className="text-2xl font-bold text-oxford">Step 2: SEO Setup</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-grow mr-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Step 2 Progress</span>
              <span className="text-sm font-medium text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          {progress >= 60 && (
            <Button className="bg-yale text-white hover:bg-yale/90 mt-4 md:mt-0" onClick={handleNext}>
              Continue to Payments & Shipping <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Connect Analytics & Tracking Pixels</h2>
          <p className="text-gray-600 mb-6">
            Connect your analytics and tracking pixels to monitor your store's performance and enable targeted advertising.
          </p>
          
          <Alert className="mb-6 bg-blue-50 border border-blue-200">
            <AlertDescription className="text-blue-800">
              <div className="flex items-start">
                <Search className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">SEO & Analytics are crucial for your store's success</p>
                  <p>Connecting Google Analytics 4 and Meta Pixel are required to proceed to the next step.</p>
                </div>
              </div>
            </AlertDescription>
          </Alert>
          
          <Tabs defaultValue="analytics" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="analytics">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
              <TabsTrigger value="pixels">
                <Pin className="w-4 h-4 mr-2" />
                Tracking Pixels
              </TabsTrigger>
              <TabsTrigger value="code">
                <Code className="w-4 h-4 mr-2" />
                Custom Code
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="analytics" className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2 text-yale" /> Google Analytics 4
                    </h3>
                    <p className="text-gray-600">Track website traffic, user behavior, and conversion data.</p>
                  </div>
                  <div className="flex items-center">
                    {ga4Connected ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Connected</span>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                          placeholder="Enter GA4 Measurement ID (G-XXXXXXX)" 
                          value={ga4Id} 
                          onChange={(e) => setGa4Id(e.target.value)}
                          className="w-full sm:w-64"
                        />
                        <Button onClick={handleGa4Connect} className="bg-yale text-white hover:bg-yale/90">
                          Connect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="pixels" className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg flex items-center">
                      <Pin className="w-5 h-5 mr-2 text-blue-600" /> Meta Pixel
                    </h3>
                    <p className="text-gray-600">Track conversions and optimize Facebook and Instagram ads.</p>
                  </div>
                  <div className="flex items-center">
                    {metaPixelConnected ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Connected</span>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                          placeholder="Enter Meta Pixel ID" 
                          value={metaPixelId} 
                          onChange={(e) => setMetaPixelId(e.target.value)} 
                          className="w-full sm:w-64"
                        />
                        <Button onClick={handleMetaPixelConnect} className="bg-yale text-white hover:bg-yale/90">
                          Connect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg flex items-center">
                      <Pin className="w-5 h-5 mr-2 text-black" /> TikTok Pixel
                    </h3>
                    <p className="text-gray-600">Track conversions and optimize TikTok ads.</p>
                  </div>
                  <div className="flex items-center">
                    {tiktokPixelConnected ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Connected</span>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                          placeholder="Enter TikTok Pixel ID" 
                          value={tiktokPixelId} 
                          onChange={(e) => setTiktokPixelId(e.target.value)} 
                          className="w-full sm:w-64"
                        />
                        <Button onClick={handleTiktokPixelConnect} className="bg-yale text-white hover:bg-yale/90">
                          Connect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg flex items-center">
                      <Pin className="w-5 h-5 mr-2 text-yellow-400" /> Snap Pixel
                    </h3>
                    <p className="text-gray-600">Track conversions and optimize Snapchat ads.</p>
                  </div>
                  <div className="flex items-center">
                    {snapPixelConnected ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-medium">Connected</span>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input 
                          placeholder="Enter Snap Pixel ID" 
                          value={snapPixelId} 
                          onChange={(e) => setSnapPixelId(e.target.value)} 
                          className="w-full sm:w-64"
                        />
                        <Button onClick={handleSnapPixelConnect} className="bg-yale text-white hover:bg-yale/90">
                          Connect
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Custom Code Injection</h3>
                <p className="text-gray-600 mb-4">
                  Add custom tracking scripts or meta tags to your store.
                </p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="header-scripts" className="mb-2 block">Header Scripts</Label>
                    <textarea 
                      id="header-scripts"
                      className="w-full h-24 border rounded-md px-3 py-2 resize-none"
                      placeholder="<!-- Add scripts for header here -->"
                    ></textarea>
                  </div>
                  <div>
                    <Label htmlFor="body-scripts" className="mb-2 block">Body Scripts</Label>
                    <textarea 
                      id="body-scripts"
                      className="w-full h-24 border rounded-md px-3 py-2 resize-none"
                      placeholder="<!-- Add scripts for body here -->"
                    ></textarea>
                  </div>
                  <Button className="bg-yale text-white hover:bg-yale/90">
                    Save Scripts
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="space-y-4 mt-8">
            <h3 className="font-bold text-lg">SEO Enhancement Settings</h3>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Auto-generate meta descriptions for products</p>
                <p className="text-gray-600 text-sm">Let KwikBuddy create optimized meta descriptions for your products</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Automatic structured data markup</p>
                <p className="text-gray-600 text-sm">Enable schema markup for rich results in search engines</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">SEO-friendly URL structure</p>
                <p className="text-gray-600 text-sm">Optimize your URLs for better search engine rankings</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <p className="font-medium">Image alt text automation</p>
                <p className="text-gray-600 text-sm">Automatically generate alt text for your product images</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">SEO Best Practices Guide</h2>
          <p className="text-gray-600 mb-6">
            Follow these guidelines to improve your store's search engine rankings and visibility.
          </p>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1">Use descriptive product titles</h3>
                <p className="text-gray-600">Include key features, brand names, and target keywords in your product titles.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1">Write unique product descriptions</h3>
                <p className="text-gray-600">Avoid using manufacturer descriptions. Create unique, detailed, and keyword-rich content.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1">Optimize product images</h3>
                <p className="text-gray-600">Use high-quality images with descriptive filenames and alt text.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold mb-1">Create a logical site structure</h3>
                <p className="text-gray-600">Organize products into categories and subcategories that make sense to users.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-bold mb-1">Build a responsive, mobile-friendly store</h3>
                <p className="text-gray-600">Ensure your store works well on all devices, especially mobile.</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="mt-6">
            Download Full SEO Guide
          </Button>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Store Setup
          </Button>
          
          <Button
            className="bg-yale text-white hover:bg-yale/90"
            onClick={handleNext}
            disabled={!essentialTrackersConnected}
          >
            {essentialTrackersConnected ? 'Continue to Payments & Shipping' : 'Connect Required Trackers First'} <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep2;
