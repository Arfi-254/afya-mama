import { CheckCircle } from 'lucide-react';
import { milestones } from '../data';

const MilestonesTab = ({ currentWeek }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Pregnancy Journey</h2>
        
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200">
            <div 
              className="bg-gradient-to-b from-pink-600 to-pink-400 w-full transition-all duration-500"
              style={{ height: `${(currentWeek / 40) * 100}%` }}
            />
          </div>

          {/* Milestones */}
          <div className="space-y-8 relative">
            {milestones.map(milestone => (
              <div key={milestone.week} className="flex items-start gap-6 relative">
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm z-10
                  ${milestone.week <= currentWeek 
                    ? 'bg-pink-600 text-white ring-4 ring-pink-100' 
                    : 'bg-gray-300 text-gray-600'
                  }
                `}>
                  {milestone.week}
                </div>
                <div className={`
                  flex-1 p-5 rounded-xl border-2 transition-all
                  ${milestone.week <= currentWeek 
                    ? 'bg-pink-50 border-pink-300' 
                    : 'bg-gray-50 border-gray-300'
                  }
                `}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{milestone.title}</h3>
                    {milestone.week <= currentWeek && (
                      <CheckCircle className="text-pink-600 flex-shrink-0" size={20} />
                    )}
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                  {milestone.week === currentWeek && (
                    <div className="mt-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold inline-block">
                      You are here! 🎉
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesTab;