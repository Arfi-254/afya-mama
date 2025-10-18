import { Heart, Bell, Menu } from 'lucide-react';

const Header = ({ setIsMobileMenuOpen, currentWeek }) => {
  return (
    <header className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 text-white px-6 py-4 sticky top-0 z-30 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-white hover:bg-white/20 p-2 rounded-lg"
          >
            <Menu size={24} />
          </button>
          <Heart className="animate-pulse" size={32} />
          <div>
            <h1 className="text-2xl font-bold">Afya Mama</h1>
            <p className="text-sm text-pink-100">Your pregnancy companion</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
            <p className="text-xs text-pink-100">You are at</p>
            <p className="text-lg font-bold">Week {currentWeek}</p>
          </div>
          <button className="relative p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header