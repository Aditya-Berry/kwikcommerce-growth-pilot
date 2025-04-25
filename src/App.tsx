
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OnboardingFlow from "./pages/OnboardingFlow";
import KwikBuddyDashboard from "./pages/KwikBuddyDashboard";
import KwikBuddyStep1 from "./pages/KwikBuddyStep1";
import KwikBuddyStep2 from "./pages/KwikBuddyStep2";
import KwikBuddyStep3 from "./pages/KwikBuddyStep3";
import KwikBuddyStep4 from "./pages/KwikBuddyStep4";
import KwikBuddyStep5 from "./pages/KwikBuddyStep5";
import KwikGrowthDashboard from "./pages/KwikGrowthDashboard";
import KwikAdsCreate from "./pages/KwikAdsCreate";
import KwikBuddy from "./pages/KwikBuddy";
import KwikGrowth from "./pages/KwikGrowth";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<OnboardingFlow />} />
          <Route path="/kwikbuddy" element={<KwikBuddy />} />
          <Route path="/kwikgrowth" element={<KwikGrowth />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/kwikbuddy" element={<KwikBuddyDashboard />} />
          <Route path="/dashboard/kwikbuddy/step1" element={<KwikBuddyStep1 />} />
          <Route path="/dashboard/kwikbuddy/step2" element={<KwikBuddyStep2 />} />
          <Route path="/dashboard/kwikbuddy/step3" element={<KwikBuddyStep3 />} />
          <Route path="/dashboard/kwikbuddy/step4" element={<KwikBuddyStep4 />} />
          <Route path="/dashboard/kwikbuddy/step5" element={<KwikBuddyStep5 />} />
          <Route path="/dashboard/kwikgrowth" element={<KwikGrowthDashboard />} />
          <Route path="/dashboard/kwikgrowth/ads/create" element={<KwikAdsCreate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
