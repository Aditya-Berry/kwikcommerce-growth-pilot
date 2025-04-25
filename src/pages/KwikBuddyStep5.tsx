
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  FilePieChart,
  Layers,
  FileText,
  MessageSquare,
  Settings,
  Download,
  AlertCircle,
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import DashboardShell from '@/components/DashboardShell';

interface OptimizationItemProps {
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  fixed: boolean;
  onFix: () => void;
}

const OptimizationItem = ({ title, description, impact, fixed, onFix }: OptimizationItemProps) => {
  const impactColors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-amber-600 bg-amber-50',
    low: 'text-green-600 bg-green-50'
  };
  
  const impactText = {
    high: 'High Impact',
    medium: 'Medium Impact',
    low: 'Low Impact'
  };
  
  return (
    <div className="border rounded-lg p-4 mb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <h3 className="font-bold">{title}</h3>
            <Badge className={`ml-2 ${impactColors[impact]} hover:${impactColors[impact]}`}>
              {impactText[impact]}
            </Badge>
            {fixed && (
              <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">
                Fixed
              </Badge>
            )}
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
        <div>
          {fixed ? (
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">Optimized</span>
            </div>
          ) : (
            <Button className="bg-yale text-white hover:bg-yale/90" onClick={onFix}>
              Apply Fix
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const KwikBuddyStep5 = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(20);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTab, setActiveTab] = useState('product');
  
  const [optimizationStatus, setOptimizationStatus] = useState({
    product: {
      images: false,
      titles: false,
      descriptions: false,
      variants: false
    },
    homepage: {
      hero: false,
      featuredProducts: false,
      testimonials: false
    },
    checkout: {
      abandonment: false,
      upsells: false
    }
  });
  
  const handleOptimize = (section: string, item: string) => {
    // Simulate optimization
    setTimeout(() => {
      setOptimizationStatus(prev => ({
        ...prev,
        [section]: {
          ...prev[section as keyof typeof prev],
          [item]: true
        }
      }));
      
      setProgress(prev => {
        // Calculate new progress based on total fixed items
        const totalItems = Object.values(optimizationStatus).reduce(
          (sum, section) => sum + Object.keys(section).length, 0
        );
        
        // Count fixed items
        let fixedItems = 0;
        Object.entries(optimizationStatus).forEach(([sectionKey, sectionValue]) => {
          if (sectionKey === section) {
            // For the current section, count previous fixed items plus the new one
            Object.entries(sectionValue).forEach(([itemKey, itemValue]) => {
              if (itemKey === item || itemValue === true) {
                fixedItems++;
              }
            });
          } else {
            // For other sections, count all fixed items
            Object.values(sectionValue).forEach(value => {
              if (value === true) fixedItems++;
            });
          }
        });
        
        // Calculate percentage
        return Math.min(Math.floor((fixedItems / totalItems) * 100), 100);
      });
      
      toast.success(`${item.charAt(0).toUpperCase() + item.slice(1)} optimization applied successfully!`);
    }, 1500);
    
    toast.loading(`Applying ${item} optimization...`);
  };
  
  const handleScanPages = () => {
    setIsScanning(true);
    toast.loading("Scanning your store pages for optimization opportunities...");
    
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      toast.success("Scan complete! We've identified optimization opportunities.");
    }, 3000);
  };

  const handleDownloadReport = () => {
    toast.success("Optimization report downloaded successfully!");
  };

  const handleCompleteSetup = () => {
    navigate('/dashboard/kwikbuddy');
    toast.success("Congratulations! You've completed the KwikBuddy setup process.");
  };

  const handleBack = () => {
    navigate('/dashboard/kwikbuddy/step4');
  };

  // Calculate if all required optimizations are complete
  const allRequiredOptimizationsComplete = 
    optimizationStatus.product.images && 
    optimizationStatus.product.titles && 
    optimizationStatus.homepage.hero;
  
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
          <h1 className="text-2xl font-bold text-oxford">Step 5: Page Optimization</h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-grow mr-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Step 5 Progress</span>
              <span className="text-sm font-medium text-gray-500">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
            <Button variant="outline" onClick={handleDownloadReport}>
              <Download className="w-4 h-4 mr-2" /> Download Report
            </Button>
            
            {allRequiredOptimizationsComplete && (
              <Button className="bg-yale text-white hover:bg-yale/90" onClick={handleCompleteSetup}>
                Finish Setup <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Store Optimization</h2>
              <p className="text-gray-600">
                Optimize your store pages to improve user experience and conversion rates.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={handleScanPages}
              disabled={isScanning}
            >
              {isScanning ? (
                <>Scanning Pages...</>
              ) : (
                <>Scan Pages for Issues</>
              )}
            </Button>
          </div>
          
          {!allRequiredOptimizationsComplete && (
            <Alert className="mb-6 bg-amber-50 border-amber-200">
              <AlertDescription className="text-amber-800 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Important: Fix at least product images, product titles, and homepage hero optimizations to complete this step.
              </AlertDescription>
            </Alert>
          )}
          
          <Tabs 
            defaultValue="product" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-6"
          >
            <TabsList className="mb-6">
              <TabsTrigger value="product">
                <Layers className="w-4 h-4 mr-2" />
                Product Pages
              </TabsTrigger>
              <TabsTrigger value="homepage">
                <FileText className="w-4 h-4 mr-2" />
                Homepage
              </TabsTrigger>
              <TabsTrigger value="checkout">
                <MessageSquare className="w-4 h-4 mr-2" />
                Checkout
              </TabsTrigger>
              <TabsTrigger value="performance">
                <Settings className="w-4 h-4 mr-2" />
                Performance
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="product">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">Product Page Optimization</h3>
                
                <OptimizationItem 
                  title="Optimize Product Images"
                  description="Your product images are too large, causing slow page loads. We recommend compressing them without losing quality."
                  impact="high"
                  fixed={optimizationStatus.product.images}
                  onFix={() => handleOptimize('product', 'images')}
                />
                
                <OptimizationItem 
                  title="Improve Product Titles"
                  description="Product titles are missing key information. Add more descriptive details to improve SEO and customer understanding."
                  impact="high"
                  fixed={optimizationStatus.product.titles}
                  onFix={() => handleOptimize('product', 'titles')}
                />
                
                <OptimizationItem 
                  title="Enhance Product Descriptions"
                  description="Product descriptions are too short. Add more details about features, benefits, and specifications."
                  impact="medium"
                  fixed={optimizationStatus.product.descriptions}
                  onFix={() => handleOptimize('product', 'descriptions')}
                />
                
                <OptimizationItem 
                  title="Create Product Variants"
                  description="Add more product variants (sizes, colors) to give customers more options and improve conversion rates."
                  impact="low"
                  fixed={optimizationStatus.product.variants}
                  onFix={() => handleOptimize('product', 'variants')}
                />
              </div>
              
              <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                <h4 className="font-medium mb-2">AI-Powered Suggestions</h4>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Product Description Improvements</AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-white rounded-md border">
                        <p className="mb-4">Our AI suggests the following improvements to your product descriptions:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Add more technical specifications</li>
                          <li>Include social proof or customer testimonials</li>
                          <li>Highlight key benefits in bullet points</li>
                          <li>Address common customer questions</li>
                          <li>Add information about materials, care instructions, and warranty</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Image Optimization Tips</AccordionTrigger>
                    <AccordionContent>
                      <div className="p-4 bg-white rounded-md border">
                        <p className="mb-4">For better product images:</p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600">
                          <li>Use white backgrounds for main product images</li>
                          <li>Include lifestyle images showing the product in use</li>
                          <li>Add close-up shots of important details</li>
                          <li>Show all color/variant options</li>
                          <li>Include size/scale reference images where relevant</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="homepage">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">Homepage Optimization</h3>
                
                <OptimizationItem 
                  title="Optimize Hero Section"
                  description="Your hero section lacks a strong call to action. Update the design and copy to drive more conversions."
                  impact="high"
                  fixed={optimizationStatus.homepage.hero}
                  onFix={() => handleOptimize('homepage', 'hero')}
                />
                
                <OptimizationItem 
                  title="Featured Products Section"
                  description="Your featured products section isn't highlighting your best sellers. Reorganize to showcase your top performers."
                  impact="medium"
                  fixed={optimizationStatus.homepage.featuredProducts}
                  onFix={() => handleOptimize('homepage', 'featuredProducts')}
                />
                
                <OptimizationItem 
                  title="Add Customer Testimonials"
                  description="Add a testimonials section to build trust with new visitors and improve conversions."
                  impact="medium"
                  fixed={optimizationStatus.homepage.testimonials}
                  onFix={() => handleOptimize('homepage', 'testimonials')}
                />
              </div>
              
              <div className="mt-6 border rounded-lg overflow-hidden">
                <div className="p-4 bg-blue-50 border-b border-blue-100 text-blue-800">
                  <h4 className="font-medium flex items-center">
                    <ArrowUpRight className="w-4 h-4 mr-2" />
                    AI-Generated Homepage Layout Suggestion
                  </h4>
                </div>
                <div className="p-4">
                  <div className="border rounded-md p-4 bg-gray-50 mb-4">
                    <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
                      Hero Banner Preview
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="h-24 bg-gray-200"></div>
                      <div className="h-24 bg-gray-200"></div>
                      <div className="h-24 bg-gray-200"></div>
                      <div className="h-24 bg-gray-200"></div>
                    </div>
                    <div className="h-20 bg-gray-200 mb-4"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-gray-200"></div>
                      <div className="h-16 bg-gray-200"></div>
                      <div className="h-16 bg-gray-200"></div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="mr-2">Preview Layout</Button>
                    <Button size="sm" className="bg-yale text-white hover:bg-yale/90">Apply Layout</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="checkout">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">Checkout Optimization</h3>
                
                <OptimizationItem 
                  title="Cart Abandonment Recovery"
                  description="Set up automated cart abandonment recovery emails to recapture lost sales."
                  impact="high"
                  fixed={optimizationStatus.checkout.abandonment}
                  onFix={() => handleOptimize('checkout', 'abandonment')}
                />
                
                <OptimizationItem 
                  title="Checkout Page Upsells"
                  description="Add strategic upsell offers on the checkout page to increase average order value."
                  impact="medium"
                  fixed={optimizationStatus.checkout.upsells}
                  onFix={() => handleOptimize('checkout', 'upsells')}
                />
              </div>
              
              <Alert className="mt-6 bg-green-50 border-green-200">
                <AlertDescription className="text-green-800">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <p>With KwikPass installed, your checkout experience is already optimized for high conversion rates.</p>
                  </div>
                </AlertDescription>
              </Alert>
            </TabsContent>
            
            <TabsContent value="performance">
              <div className="space-y-4">
                <h3 className="font-bold text-lg mb-2">Site Performance</h3>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-medium mb-4">Performance Metrics</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Page Load Speed</span>
                              <span className="text-sm font-medium text-amber-600">3.8s</span>
                            </div>
                            <Progress value={62} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Mobile Responsiveness</span>
                              <span className="text-sm font-medium text-green-600">95%</span>
                            </div>
                            <Progress value={95} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Core Web Vitals</span>
                              <span className="text-sm font-medium text-amber-600">76%</span>
                            </div>
                            <Progress value={76} className="h-2" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6">
                        <h4 className="text-lg font-medium mb-4">Recommendations</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                            <span>Enable browser caching to improve load times</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                            <span>Optimize JavaScript execution to improve responsiveness</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-5 h-5 text-amber-500 mr-2 mt-0.5" />
                            <span>Implement lazy loading for below-the-fold images</span>
                          </li>
                        </ul>
                        <Button variant="outline" className="mt-4">
                          Run Full Performance Audit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Required Apps
          </Button>
          
          <Button
            className="bg-yale text-white hover:bg-yale/90"
            onClick={handleCompleteSetup}
            disabled={!allRequiredOptimizationsComplete}
          >
            {allRequiredOptimizationsComplete ? 
              'Complete Setup' : 
              'Complete Required Optimizations First'} <CheckCircle className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyStep5;
