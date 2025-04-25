
import React from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { 
  ArrowUpRight, 
  BarChart3, 
  ExternalLink, 
  Link2, 
  Search, 
  Rocket, 
  MessageSquare, 
  Layout,
  PieChart,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardShell from '@/components/DashboardShell';

const KwikGrowthDashboard = () => {
  // Mock data for charts
  const salesData = [
    { name: 'Jan', value: 2400 },
    { name: 'Feb', value: 1398 },
    { name: 'Mar', value: 9800 },
    { name: 'Apr', value: 3908 },
    { name: 'May', value: 4800 },
    { name: 'Jun', value: 3800 },
    { name: 'Jul', value: 4300 },
  ];

  const conversionData = [
    { name: 'Mon', rate: 2.5 },
    { name: 'Tue', rate: 3.1 },
    { name: 'Wed', rate: 2.9 },
    { name: 'Thu', rate: 3.4 },
    { name: 'Fri', rate: 2.8 },
    { name: 'Sat', rate: 4.2 },
    { name: 'Sun', rate: 3.8 },
  ];

  const modules = [
    {
      id: 'connector',
      title: 'Store Connector',
      description: 'Connect your store to powerful analytics and growth tools.',
      icon: <Link2 className="w-5 h-5" />,
      path: '/dashboard/kwikgrowth/connector',
      status: 'incomplete'
    },
    {
      id: 'seo',
      title: 'SEO Optimizer',
      description: 'Boost your search rankings with AI-powered SEO tools.',
      icon: <Search className="w-5 h-5" />,
      path: '/dashboard/kwikgrowth/seo',
      status: 'incomplete'
    },
    {
      id: 'ads',
      title: 'KwikAds++',
      description: 'Create and manage high-converting ad campaigns.',
      icon: <Rocket className="w-5 h-5" />,
      path: '/dashboard/kwikgrowth/ads',
      status: 'incomplete'
    },
    {
      id: 'landingpage',
      title: 'AI Landing Page Generator',
      description: 'Create high-converting landing pages in minutes.',
      icon: <Layout className="w-5 h-5" />,
      path: '/dashboard/kwikgrowth/landingpage',
      status: 'incomplete'
    },
    {
      id: 'crm',
      title: 'CRM Co-Pilot',
      description: 'Engage your customers with personalized marketing campaigns.',
      icon: <MessageSquare className="w-5 h-5" />,
      path: '/dashboard/kwikgrowth/crm',
      status: 'incomplete'
    },
  ];

  return (
    <DashboardShell>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-oxford">KwikGrowth Dashboard</h1>
            <p className="text-gray-600">Optimize your store and boost your sales with our growth tools.</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-yale text-white hover:bg-yale/90" asChild>
            <Link to="/dashboard/kwikgrowth/ads/create">
              Create New Campaign <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$24,780</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" /> 12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2%</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" /> 0.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Visitors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,204</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" /> 18% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Order Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$86.42</div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" /> 3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Sales Overview</CardTitle>
              <CardDescription>Monthly sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={salesData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#0F4D92" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold">Conversion Rate</CardTitle>
              <CardDescription>Daily conversion performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={conversionData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#E49B0F" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Modules */}
        <h2 className="text-xl font-bold mb-4">Growth Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {modules.map((module) => (
            <Link key={module.id} to={module.path} className="block">
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 bg-yale bg-opacity-10 rounded-full flex items-center justify-center text-yale">
                      {module.icon}
                    </div>
                    {module.status === 'complete' && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Complete
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{module.description}</p>
                  <div className="flex items-center text-yale">
                    <span className="text-sm font-medium">
                      {module.status === 'complete' ? 'View Details' : 'Get Started'}
                    </span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start pb-3 border-b border-gray-100">
                <div className="w-9 h-9 mr-3 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-5 h-5 text-yale" />
                </div>
                <div>
                  <p className="font-medium">Analytics connected</p>
                  <p className="text-sm text-gray-500">Google Analytics 4 successfully connected</p>
                  <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start pb-3 border-b border-gray-100">
                <div className="w-9 h-9 mr-3 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium">SEO scan completed</p>
                  <p className="text-sm text-gray-500">15 issues found that need attention</p>
                  <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-9 h-9 mr-3 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <PieChart className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium">Monthly report generated</p>
                  <p className="text-sm text-gray-500">Your April performance report is ready</p>
                  <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Box */}
        <div className="mt-6 bg-oxford text-white p-6 rounded-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Need help with your growth strategy?</h3>
            <p className="text-white/80">Schedule a call with our experts to get personalized guidance.</p>
          </div>
          <Button className="bg-white text-oxford hover:bg-white/90 mt-4 md:mt-0" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Book a Consultation <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikGrowthDashboard;
