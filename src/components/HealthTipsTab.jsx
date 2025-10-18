import React, { useState } from 'react';
import { Volume2 } from 'lucide-react';
import { healthTips } from '../data';

const HealthTipsTab = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'General', 'Nutrition', 'Exercise', 'Medication'];

  const filteredTips = selectedCategory === 'All' 
    ? healthTips 
    : healthTips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Health Tips & Advice</h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTips.map(tip => (
            <div key={tip.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-pink-400 transition-all bg-gradient-to-br from-white to-pink-50">
              <div className="flex items-start gap-4">
                <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                  <tip.icon className="text-pink-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{tip.title}</h3>
                    <span className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {tip.category}
                    </span>
                  </div>
                  <p className="text-gray-600">{tip.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Voice Notes Feature */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-start gap-4">
          <div className="bg-white/30 p-4 rounded-full">
            <Volume2 size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Listen to Tips in Somali</h3>
            <p className="text-purple-100 mb-4">Prefer listening? We have audio versions of all health tips in Somali language.</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors">
              Play Audio Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthTipsTab;