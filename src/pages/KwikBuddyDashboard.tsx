
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle, 
  CircleDashed, 
  ArrowRight,
  Upload,
  Search,
  CreditCard,
  Package,
  Layout
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import DashboardShell from '@/components/DashboardShell';

interface StepProps {
  number: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  onClick: () => void;
}

const Step = ({ number, title, description, status, onClick }: StepProps) => {
  return (
    <div 
      className={`flex items-start p-6 rounded-lg border ${
        status === 'completed' 
          ? 'border-green-500 bg-green-50' 
          : status === 'current' 
            ? 'border-yale shadow-md bg-white' 
            : 'border-gray-200 bg-white'
      } cursor-pointer hover:shadow-md transition-shadow`}
      onClick={onClick}
    >
      <div className="mr-4">
        {status === 'completed' ? (
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
            <CheckCircle className="w-5 h-5" />
          </div>
        ) : status === 'current' ? (
          <div className="w-8 h-8 rounded-full bg-yale flex items-center justify-center text-white">
            {number}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            {number}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className={`font-bold text-lg ${status === 'upcoming' ? 'text-gray-500' : 'text-oxford'}`}>
          {title}
        </h3>
        <p className={`${status === 'upcoming' ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <div>
        {status === 'completed' ? (
          <span className="text-green-500 font-medium">Completed</span>
        ) : status === 'current' ? (
          <Button size="sm" className="bg-yale text-white hover:bg-yale/90">
            Start <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        ) : (
          <CircleDashed className="w-6 h-6 text-gray-300" />
        )}
      </div>
    </div>
  );
};

const KwikBuddyDashboard = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Calculate progress
  const totalSteps = 5;
  const completedSteps = currentStep - 1;
  const progress = (completedSteps / totalSteps) * 100;
  
  const handleStepClick = (stepNumber: number) => {
    if (stepNumber <= currentStep) {
      navigate(`/dashboard/kwikbuddy/step${stepNumber}`);
    }
  };
  
  const steps = [
    {
      number: 1,
      title: 'Get Ready to Make Your Website Live',
      description: 'Connect your store or create a new one and set up your brand identity.',
      icon: <Layout className="w-8 h-8 text-yale" />,
    },
    {
      number: 2,
      title: 'SEO Setup',
      description: 'Connect analytics accounts and set up tracking pixels for better insights.',
      icon: <Search className="w-8 h-8 text-yale" />,
    },
    {
      number: 3,
      title: 'Payments & Shipping Integration',
      description: 'Set up payment gateways and shipping methods for your store.',
      icon: <CreditCard className="w-8 h-8 text-yale" />,
    },
    {
      number: 4,
      title: 'Enable Required Apps for Performance',
      description: 'Install essential apps to optimize your store performance.',
      icon: <Upload className="w-8 h-8 text-yale" />,
    },
    {
      number: 5,
      title: 'Page Optimization',
      description: 'Optimize your product pages for better conversion rates.',
      icon: <Package className="w-8 h-8 text-yale" />,
    },
  ];
  
  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < currentStep) return 'completed';
    if (stepNumber === currentStep) return 'current';
    return 'upcoming';
  };

  return (
    <DashboardShell>
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-oxford">KwikBuddy: Store Setup</h1>
            <p className="text-gray-600">Complete the following steps to set up your ecommerce store.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="mr-2">
              Save Progress
            </Button>
            <Button className="bg-yale text-white hover:bg-yale/90">
              View Your Store
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h2 className="text-xl font-bold text-oxford">Overall Progress</h2>
            <span className="text-sm font-medium text-gray-600">
              {completedSteps} of {totalSteps} steps completed
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="space-y-4">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              status={getStepStatus(step.number)}
              onClick={() => handleStepClick(step.number)}
            />
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-lg font-bold text-oxford mb-2">Need Help?</h2>
          <p className="text-gray-600 mb-4">
            Our team is available to assist you with any questions or issues you might have during the setup process.
          </p>
          <Button variant="outline" className="bg-white">
            Contact Support
          </Button>
        </div>
      </div>
    </DashboardShell>
  );
};

export default KwikBuddyDashboard;
