
import React, { useState, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Package2, 
  Rocket,
  BarChart2, 
  Settings,
  HelpCircle,
  Bell,
  ChevronDown,
  Menu,
  X,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardShellProps {
  children: ReactNode;
}

const DashboardShell = ({ children }: DashboardShellProps) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const [notificationCount] = useState(3);

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { 
      name: 'KwikBuddy', 
      path: '/dashboard/kwikbuddy', 
      icon: <Package2 className="w-5 h-5" />,
    },
    { 
      name: 'KwikGrowth', 
      path: '/dashboard/kwikgrowth', 
      icon: <Rocket className="w-5 h-5" />,
    },
    { name: 'Analytics', path: '/dashboard/analytics', icon: <BarChart2 className="w-5 h-5" /> },
    { name: 'Settings', path: '/dashboard/settings', icon: <Settings className="w-5 h-5" /> },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);
  const toggleHelpMenu = () => setIsHelpMenuOpen(!isHelpMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar for mobile */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
      
      {/* Sidebar */}
      <aside className={`fixed md:relative z-50 md:z-auto w-64 h-screen bg-white border-r border-gray-200 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-yale flex items-center justify-center text-white font-bold">K</div>
              <span className="font-gilroy font-bold text-xl text-oxford">kwikcommerce.ai</span>
            </Link>
            <button className="md:hidden" onClick={toggleSidebar}>
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4 px-2">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-md group ${
                      isActive(item.path)
                        ? 'bg-yale text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Sidebar footer */}
          <div className="p-4 border-t border-gray-200">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/support">
                <HelpCircle className="w-4 h-4 mr-2" />
                Get Support
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              {/* Left section */}
              <div className="flex items-center">
                {/* Mobile menu button */}
                <button
                  className="md:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
                  onClick={toggleSidebar}
                >
                  <Menu className="h-6 w-6" />
                </button>
                
                {/* Search */}
                <div className="hidden md:block ml-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-yale focus:border-yale"
                    />
                  </div>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center gap-3">
                {/* Notifications */}
                <div className="relative">
                  <button className="p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none">
                    <span className="sr-only">View notifications</span>
                    <Bell className="h-6 w-6" />
                    {notificationCount > 0 && (
                      <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                        {notificationCount}
                      </span>
                    )}
                  </button>
                </div>

                {/* Help menu */}
                <div className="relative">
                  <button
                    className="flex items-center gap-1 p-1 rounded-full text-gray-500 hover:text-gray-600 focus:outline-none"
                    onClick={toggleHelpMenu}
                  >
                    <HelpCircle className="h-6 w-6" />
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {isHelpMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <Link
                          to="/help/documentation"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsHelpMenuOpen(false)}
                        >
                          Documentation
                        </Link>
                        <Link
                          to="/help/tutorials"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsHelpMenuOpen(false)}
                        >
                          Tutorials
                        </Link>
                        <Link
                          to="/help/contact"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsHelpMenuOpen(false)}
                        >
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Profile dropdown */}
                <div className="relative">
                  <button
                    className="flex items-center gap-2"
                    onClick={toggleProfileMenu}
                  >
                    <div className="h-8 w-8 rounded-full bg-yale text-white flex items-center justify-center">
                      U
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <div className="px-4 py-2 text-sm text-gray-900 border-b border-gray-200">
                          <p className="font-medium">User Name</p>
                          <p className="text-xs text-gray-500">user@example.com</p>
                        </div>
                        <Link
                          to="/dashboard/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Your Profile
                        </Link>
                        <Link
                          to="/dashboard/settings"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Settings
                        </Link>
                        <Link
                          to="/logout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                          onClick={() => setIsProfileMenuOpen(false)}
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardShell;
