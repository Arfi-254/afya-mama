import { Heart, Calendar, Baby, Phone, Pill, BookOpen, X, Home } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'milestones', label: 'Milestones', icon: Baby },
    { id: 'nutrition', label: 'Nutrition', icon: Pill },
    { id: 'tips', label: 'Health Tips', icon: BookOpen },
    { id: 'emergency', label: 'Emergency', icon: Phone },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed lg:hidden inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="text-pink-600" size={24} />
            <h2 className="font-bold text-lg">Menu</h2>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <X className="text-gray-600" size={24} />
          </button>
        </div>
        <nav className="p-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all ${
                activeTab === item.id
                  ? 'bg-pink-100 text-pink-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-white border-b border-gray-200 px-6 py-3 gap-2">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === item.id
                ? 'bg-pink-100 text-pink-700 font-semibold'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navigation