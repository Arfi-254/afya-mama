import React, { useState } from 'react';
import { Heart, Calendar, Home, Baby, Phone} from 'lucide-react';
import { initialAppointments } from './data';
import Header from './components/Header';
import Navigation from './components/Navigation';
import HomeTab from './components/HomeTab';
import AppointmentsTab from './components/AppointmentsTab';
import MilestonesTab from './components/MilestonesTab';
import NutritionTab from './components/NutritionTab';
import HealthTipsTab from './components/HealthTipsTab';
import EmergencyTab from './components/EmergencyTab';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentWeek, setCurrentWeek] = useState(16);
  const [appointments, setAppointments] = useState(initialAppointments);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} currentWeek={currentWeek} />
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {activeTab === 'home' && (
          <HomeTab currentWeek={currentWeek} appointments={appointments} />
        )}
        {activeTab === 'appointments' && (
          <AppointmentsTab appointments={appointments} />
        )}
        {activeTab === 'milestones' && (
          <MilestonesTab currentWeek={currentWeek} />
        )}
        {activeTab === 'nutrition' && (
          <NutritionTab />
        )}
        {activeTab === 'tips' && (
          <HealthTipsTab />
        )}
        {activeTab === 'emergency' && (
          <EmergencyTab />
        )}
      </main>

      {/* Bottom Navigation for Mobile */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-30 shadow-lg">
        <div className="flex items-center justify-around">
          {[
            { id: 'home', icon: Home },
            { id: 'appointments', icon: Calendar },
            { id: 'milestones', icon: Baby },
            { id: 'emergency', icon: Phone }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-3 rounded-xl transition-all ${
                activeTab === item.id
                  ? 'bg-pink-100 text-pink-600'
                  : 'text-gray-600'
              }`}
            >
              <item.icon size={24} />
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="text-pink-600" size={20} />
            <p className="text-gray-600 font-medium">Made with love for mothers in Garissa</p>
          </div>
          <p className="text-sm text-gray-500">Afya Mama © 2025 - Your health, our priority</p>
        </div>
      </footer>
    </div>
  );
};

export default App;