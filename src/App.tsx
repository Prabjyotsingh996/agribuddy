import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UserPreferencesProvider } from "@/context/UserPreferencesContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import MandiPrices from "./pages/MandiPrices";
import Schemes from "./pages/Schemes";
import Calendar from "./pages/Calendar";
import Chatbot from "./pages/Chatbot";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import PricePrediction from "./pages/PricePrediction";
import FarmFinance from "./pages/FarmFinance";
import Commite from "./pages/Commite";
import UserProfile from "./pages/UserProfile";
import './i18n';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <UserPreferencesProvider>
          <AuthProvider>
            <TooltipProvider>
              <BrowserRouter>
                <Toaster />
                <Sonner />
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" />} />
                  <Route path="/commite" element={<Commite />} />
                  <Route path="/profile/:userId" element={<UserProfile />} />
                  <Route path="/dashboard" element={<Index />} />
                  <Route path="/mandi-prices" element={<MandiPrices />} />
                  <Route path="/schemes" element={<Schemes />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/chatbot" element={<Chatbot />} />
                  <Route path="/agri-assistant" element={<Chatbot />} />
                  <Route path="/price-prediction" element={<PricePrediction />} />
                  <Route path="/farm-finance" element={<FarmFinance />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </AuthProvider>
        </UserPreferencesProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
