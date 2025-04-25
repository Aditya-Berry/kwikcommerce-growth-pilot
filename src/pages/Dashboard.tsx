
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import DashboardShell from '@/components/DashboardShell';

const Dashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // This is a basic redirect. In a real app, you would check user auth status
    // and redirect to the most appropriate dashboard based on their subscription
  }, [navigate]);

  return (
    <DashboardShell>
      <div>
        <h1 className="text-2xl font-bold text-oxford mb-6">Choose Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-oxford">KwikBuddy Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Set up and optimize your ecommerce store with our guided process. Perfect for new stores or stores needing optimization.
            </p>
            <Button className="bg-yale text-white hover:bg-yale/90" onClick={() => navigate('/dashboard/kwikbuddy')}>
              Go to KwikBuddy Dashboard
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-oxford">KwikGrowth Dashboard</h2>
            <p className="text-gray-600 mb-6">
              Access our suite of growth tools to boost your sales, engage customers, and scale your online business.
            </p>
            <Button className="bg-yale text-white hover:bg-yale/90" onClick={() => navigate('/dashboard/kwikgrowth')}>
              Go to KwikGrowth Dashboard
            </Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default Dashboard;
