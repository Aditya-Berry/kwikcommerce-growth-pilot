
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  FacebookIcon, 
  InstagramIcon, 
  Globe, 
  Target, 
  Users, 
  Image, 
  FileText, 
  Check, 
  AlertCircle,
  BarChart2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import DashboardShell from '@/components/DashboardShell';

const KwikAdsCreate = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Form state
  const [campaign, setCampaign] = useState({
    name: '',
    objective: 'awareness',
    description: '',
    budget: 500,
    duration: 30,
    platforms: ['facebook', 'instagram'],
    targetAudience: {
      age: {
        min: 18,
        max: 65
      },
      gender: 'all',
      interests: [],
      locations: []
    },
    creative: {
      headline: '',
      description: '',
      cta: 'Shop Now'
    },
    landingPage: '',
    enableABTest: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCampaign({ ...campaign, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setCampaign({ ...campaign, [name]: value });
  };

  const handlePlatformToggle = (platform: string) => {
    const currentPlatforms = [...campaign.platforms];
    
    if (currentPlatforms.includes(platform)) {
      setCampaign({
        ...campaign,
        platforms: currentPlatforms.filter(p => p !== platform)
      });
    } else {
      setCampaign({
        ...campaign,
        platforms: [...currentPlatforms, platform]
      });
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setLoading(true);
      // Simulate AI processing
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setLoading(false);
        window.scrollTo(0, 0);
      }, 1500);
    } else {
      // Campaign creation completed
      navigate('/dashboard/kwikgrowth/ads');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/dashboard/kwikgrowth/ads');
    }
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return campaign.name && campaign.objective && campaign.budget > 0;
      case 2:
        return campaign.platforms.length > 0;
      case 3:
        return campaign.creative.headline && campaign.creative.description;
      case 4:
        return true;
      default:
        return false;
    }
  };

  // Mock data for predicted metrics
  const predictedMetrics = {
    impressions: '80,000 - 120,000',
    clicks: '2,400 - 3,800',
    ctr: '2.8% - 3.5%',
    cpc: '$0.40 - $0.65',
    conversions: '180 - 320',
    conversionRate: '6.2% - 8.5%',
    roas: '2.4x - 3.2x'
  };

  return (
    <DashboardShell>
      <div>
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/dashboard/kwikgrowth/ads')}
            className="mr-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Campaigns
          </Button>
          <h1 className="text-2xl font-bold text-oxford">Create New Ad Campaign</h1>
        </div>

        {/* Step Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {['Campaign Info', 'Platform Strategy', 'Creative & Audience', 'Review & Launch'].map((label, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep > idx + 1 ? 'bg-green-500 text-white' : 
                    currentStep === idx + 1 ? 'bg-yale text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep > idx + 1 ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
                <span className={`text-sm mt-1 hidden sm:block ${currentStep === idx + 1 ? 'text-yale font-medium' : 'text-gray-500'}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div 
              className="absolute left-0 top-0 h-2 bg-yale rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-6">Campaign Information</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Campaign Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={campaign.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Summer Collection 2024"
                    className="mt-1"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="objective">Campaign Objective</Label>
                  <Select 
                    value={campaign.objective} 
                    onValueChange={(value) => handleSelectChange('objective', value)}
                  >
                    <SelectTrigger id="objective" className="mt-1">
                      <SelectValue placeholder="Select an objective" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="awareness">Brand Awareness</SelectItem>
                        <SelectItem value="traffic">Website Traffic</SelectItem>
                        <SelectItem value="conversions">Conversions</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="description">Campaign Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={campaign.description}
                    onChange={handleInputChange}
                    placeholder="Brief description of your campaign goals and target audience"
                    className="mt-1"
                    rows={4}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="budget">Budget (USD)</Label>
                    <Input
                      id="budget"
                      name="budget"
                      type="number"
                      value={campaign.budget}
                      onChange={handleInputChange}
                      min={1}
                      className="mt-1"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Total budget for the campaign</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Duration (Days)</Label>
                    <Input
                      id="duration"
                      name="duration"
                      type="number"
                      value={campaign.duration}
                      onChange={handleInputChange}
                      min={1}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-6">Platform Strategy & Predictions</h2>
              
              <div className="mb-8">
                <Label className="mb-2 block">Select Platforms</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer ${
                      campaign.platforms.includes('facebook') 
                        ? 'border-yale bg-blue-50' 
                        : 'border-gray-200'
                    }`}
                    onClick={() => handlePlatformToggle('facebook')}
                  >
                    <div className="flex items-center">
                      <FacebookIcon className="w-5 h-5 mr-2 text-blue-600" />
                      <span className="font-medium">Facebook</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Excellent for detailed targeting and high reach.
                    </p>
                    {campaign.platforms.includes('facebook') && (
                      <div className="mt-2 flex items-center text-yale text-sm">
                        <Check className="w-4 h-4 mr-1" /> Selected
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer ${
                      campaign.platforms.includes('instagram') 
                        ? 'border-yale bg-blue-50' 
                        : 'border-gray-200'
                    }`}
                    onClick={() => handlePlatformToggle('instagram')}
                  >
                    <div className="flex items-center">
                      <InstagramIcon className="w-5 h-5 mr-2 text-pink-600" />
                      <span className="font-medium">Instagram</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Visual platform with high engagement for product showcase.
                    </p>
                    {campaign.platforms.includes('instagram') && (
                      <div className="mt-2 flex items-center text-yale text-sm">
                        <Check className="w-4 h-4 mr-1" /> Selected
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className={`border rounded-lg p-4 cursor-pointer ${
                      campaign.platforms.includes('google') 
                        ? 'border-yale bg-blue-50' 
                        : 'border-gray-200'
                    }`}
                    onClick={() => handlePlatformToggle('google')}
                  >
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-green-600" />
                      <span className="font-medium">Google Ads</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      High intent search traffic and display network.
                    </p>
                    {campaign.platforms.includes('google') && (
                      <div className="mt-2 flex items-center text-yale text-sm">
                        <Check className="w-4 h-4 mr-1" /> Selected
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {campaign.platforms.length > 0 && (
                <div className="mt-8 animate-fade-in">
                  <h3 className="font-bold text-lg mb-3">AI-Predicted Performance</h3>
                  <p className="text-gray-600 mb-4">
                    Based on your budget, industry benchmarks, and historical data, here's the predicted performance of your campaign:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Estimated Impressions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">{predictedMetrics.impressions}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Estimated Clicks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">{predictedMetrics.clicks}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Predicted CTR</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">{predictedMetrics.ctr}</div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Estimated ROAS</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-xl font-bold">{predictedMetrics.roas}</div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="mr-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <BarChart2 className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800">AI Recommendation</h4>
                        <p className="text-green-800">
                          Based on your objectives and budget, we recommend focusing on {campaign.platforms.includes('facebook') ? 'Facebook' : 'Instagram'} ads with a bid strategy optimized for conversions. This approach has shown a 24% better ROAS for similar campaigns in your industry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-6">Creative & Audience</h2>
              
              <Tabs defaultValue="creative">
                <TabsList className="mb-6">
                  <TabsTrigger value="creative">
                    <FileText className="w-4 h-4 mr-2" />
                    Ad Creative
                  </TabsTrigger>
                  <TabsTrigger value="audience">
                    <Users className="w-4 h-4 mr-2" />
                    Target Audience
                  </TabsTrigger>
                  <TabsTrigger value="landing">
                    <Globe className="w-4 h-4 mr-2" />
                    Landing Page
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="creative" className="space-y-6">
                  <div>
                    <Label htmlFor="headline">Ad Headline</Label>
                    <Input
                      id="headline"
                      name="headline"
                      value={campaign.creative.headline}
                      onChange={(e) => setCampaign({
                        ...campaign,
                        creative: { ...campaign.creative, headline: e.target.value }
                      })}
                      placeholder="e.g. 'Summer Sale: Up to 50% Off'"
                      className="mt-1"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="adDescription">Ad Description</Label>
                    <Textarea
                      id="adDescription"
                      name="adDescription"
                      value={campaign.creative.description}
                      onChange={(e) => setCampaign({
                        ...campaign,
                        creative: { ...campaign.creative, description: e.target.value }
                      })}
                      placeholder="Compelling ad copy that speaks to your audience"
                      className="mt-1"
                      rows={3}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cta">Call to Action</Label>
                    <Select 
                      value={campaign.creative.cta} 
                      onValueChange={(value) => setCampaign({
                        ...campaign,
                        creative: { ...campaign.creative, cta: value }
                      })}
                    >
                      <SelectTrigger id="cta" className="mt-1">
                        <SelectValue placeholder="Select a CTA" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Shop Now">Shop Now</SelectItem>
                          <SelectItem value="Learn More">Learn More</SelectItem>
                          <SelectItem value="Sign Up">Sign Up</SelectItem>
                          <SelectItem value="Contact Us">Contact Us</SelectItem>
                          <SelectItem value="Book Now">Book Now</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="mb-1 block">Ad Images</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                      <Image className="w-12 h-12 text-gray-400 mb-4" />
                      <p className="text-gray-600 mb-4">Drag and drop images here or click to browse</p>
                      <Button variant="outline">
                        Upload Images
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">Recommended size: 1080x1080px. Max file size: 5MB</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="abtest"
                      checked={campaign.enableABTest}
                      onCheckedChange={(checked) => setCampaign({
                        ...campaign,
                        enableABTest: checked
                      })}
                    />
                    <Label htmlFor="abtest">Enable A/B Testing for Ad Creative</Label>
                  </div>
                  
                  {campaign.enableABTest && (
                    <div className="pl-4 border-l-2 border-yale animate-fade-in">
                      <p className="text-sm text-yale mb-2">
                        With A/B testing enabled, we'll automatically create variations of your ad to test which performs better.
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        <li>Different headlines</li>
                        <li>Image variations</li>
                        <li>CTA button options</li>
                      </ul>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="audience" className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Age Range</Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        type="number"
                        min={13}
                        max={65}
                        value={campaign.targetAudience.age.min}
                        onChange={(e) => setCampaign({
                          ...campaign,
                          targetAudience: {
                            ...campaign.targetAudience,
                            age: {
                              ...campaign.targetAudience.age,
                              min: parseInt(e.target.value)
                            }
                          }
                        })}
                        className="w-24"
                      />
                      <span>to</span>
                      <Input
                        type="number"
                        min={13}
                        max={65}
                        value={campaign.targetAudience.age.max}
                        onChange={(e) => setCampaign({
                          ...campaign,
                          targetAudience: {
                            ...campaign.targetAudience,
                            age: {
                              ...campaign.targetAudience.age,
                              max: parseInt(e.target.value)
                            }
                          }
                        })}
                        className="w-24"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select 
                      value={campaign.targetAudience.gender} 
                      onValueChange={(value) => setCampaign({
                        ...campaign,
                        targetAudience: {
                          ...campaign.targetAudience,
                          gender: value
                        }
                      })}
                    >
                      <SelectTrigger id="gender" className="mt-1">
                        <SelectValue placeholder="Select gender targeting" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="all">All Genders</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="interests">Interests & Behaviors</Label>
                    <Input
                      id="interests"
                      placeholder="e.g. Fashion, Sports, Technology (comma separated)"
                      className="mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">These will be used to target users with similar interests</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="locations">Target Locations</Label>
                    <Input
                      id="locations"
                      placeholder="e.g. New York, California, United States (comma separated)"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="mr-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <Target className="w-5 h-5 text-yale" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-yale">AI Audience Recommendation</h4>
                        <p className="text-gray-700">
                          Based on your store data and campaign objective, we recommend targeting women aged 25-45 interested in fashion, beauty, and wellness. This demographic has shown the highest engagement rate with similar products.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="landing" className="space-y-6">
                  <div>
                    <Label htmlFor="landingPage">Landing Page URL</Label>
                    <Input
                      id="landingPage"
                      name="landingPage"
                      value={campaign.landingPage}
                      onChange={handleInputChange}
                      placeholder="e.g. https://yourdomain.com/special-offer"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="bg-oxford/5 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2">AI Landing Page Recommendations</h3>
                    <p className="mb-4 text-gray-600">
                      Based on your campaign objective and target audience, here are some recommended landing pages:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                        <div>
                          <p className="font-medium">New Collection Page</p>
                          <p className="text-sm text-gray-500">https://yourdomain.com/new-collection</p>
                        </div>
                        <Button size="sm" variant="outline">Select</Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                        <div>
                          <p className="font-medium">Special Offer Landing Page</p>
                          <p className="text-sm text-gray-500">https://yourdomain.com/special-offer</p>
                        </div>
                        <Button size="sm" variant="outline">Select</Button>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
                        <div>
                          <p className="font-medium">Product Category Page</p>
                          <p className="text-sm text-gray-500">https://yourdomain.com/category/bestsellers</p>
                        </div>
                        <Button size="sm" variant="outline">Select</Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        Create New Landing Page with AI
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fade-in">
              <h2 className="text-xl font-bold mb-6">Review & Launch</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-green-800">Campaign Ready to Launch</h4>
                    <p className="text-green-700">
                      Your campaign has been set up successfully and is ready to launch. Review the details below before proceeding.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Campaign Name:</dt>
                        <dd>{campaign.name}</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Objective:</dt>
                        <dd className="capitalize">{campaign.objective}</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Budget:</dt>
                        <dd>${campaign.budget}</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Duration:</dt>
                        <dd>{campaign.duration} days</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Platforms:</dt>
                        <dd>{campaign.platforms.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ')}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-600">A/B Testing:</dt>
                        <dd>{campaign.enableABTest ? 'Enabled' : 'Disabled'}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Creative & Audience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <dl className="space-y-2">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Headline:</dt>
                        <dd>{campaign.creative.headline || '(Not set)'}</dd>
                      </div>
                      <div className="pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600 mb-1">Description:</dt>
                        <dd className="text-sm">{campaign.creative.description || '(Not set)'}</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Call to Action:</dt>
                        <dd>{campaign.creative.cta}</dd>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <dt className="font-medium text-gray-600">Age Range:</dt>
                        <dd>{campaign.targetAudience.age.min} - {campaign.targetAudience.age.max}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-medium text-gray-600">Gender:</dt>
                        <dd className="capitalize">{campaign.targetAudience.gender}</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Estimated Performance</CardTitle>
                    <CardDescription>Predicted metrics based on your campaign settings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Impressions</p>
                        <p className="text-lg font-bold">{predictedMetrics.impressions}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Clicks</p>
                        <p className="text-lg font-bold">{predictedMetrics.clicks}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                        <p className="text-lg font-bold">{predictedMetrics.conversionRate}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">ROAS</p>
                        <p className="text-lg font-bold">{predictedMetrics.roas}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-yellow-800">Before You Launch</h4>
                    <p className="text-yellow-700 text-sm">
                      You'll need to have active payment methods set up in your connected ad accounts. To avoid any interruptions, ensure you have sufficient funds available for the duration of this campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="animate-fade-in fixed inset-0 flex items-center justify-center bg-white/80 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
                <div className="mb-4">
                  <svg className="animate-spin h-10 w-10 text-yale mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">AI Processing</h3>
                <p className="text-gray-600 mb-4">
                  {currentStep === 1 
                    ? "Analyzing campaign settings and generating recommendations..." 
                    : currentStep === 2 
                      ? "Predicting campaign performance based on historical data..." 
                      : "Optimizing audience and creative elements..."}
                </p>
                <Progress value={60} className="h-2" />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button 
              variant="ghost" 
              onClick={prevStep}
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              {currentStep === 1 ? 'Cancel' : 'Back'}
            </Button>
            
            <Button 
              onClick={nextStep} 
              disabled={!validateCurrentStep() || loading}
              className={`bg-yale text-white hover:bg-yale/90 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {currentStep === 4 ? 'Launch Campaign' : 'Next Step'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikAdsCreate;
