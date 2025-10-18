import { Calendar, Activity, Baby, CheckCircle, BookOpen, Star, TrendingUp} from 'lucide-react';
import { milestones } from '../data';

const HomeTab = ({ currentWeek, appointments }) => {
  const currentMilestone = milestones.find(m => m.week === currentWeek) || milestones[3];
  const upcomingAppointments = appointments.filter(a => a.status === 'upcoming').slice(0, 2);
  const daysUntilDue = (40 - currentWeek) * 7;

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl p-8 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-2">Habari, Mama! 👋</h2>
        <p className="text-pink-100 mb-6">You're doing amazing. Here's your pregnancy at a glance.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-pink-100 text-sm mb-1">Current Week</p>
            <p className="text-3xl font-bold">{currentWeek}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-pink-100 text-sm mb-1">Days Until Due</p>
            <p className="text-3xl font-bold">{daysUntilDue}</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <p className="text-pink-100 text-sm mb-1">Trimester</p>
            <p className="text-3xl font-bold">{currentWeek <= 12 ? '1st' : currentWeek <= 27 ? '2nd' : '3rd'}</p>
          </div>
        </div>
      </div>

      {/* Current Milestone */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-pink-200">
        <div className="flex items-start gap-4">
          <div className="bg-pink-100 p-4 rounded-full">
            <Baby className="text-pink-600" size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{currentMilestone.title}</h3>
            <p className="text-gray-600 mb-3">{currentMilestone.description}</p>
            <div className="flex items-center gap-2 text-pink-600 font-semibold">
              <Star size={18} />
              <span>Week {currentMilestone.week}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <Calendar className="mb-2" size={24} />
          <p className="text-sm text-purple-100">Appointments</p>
          <p className="text-2xl font-bold">{upcomingAppointments.length}</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <CheckCircle className="mb-2" size={24} />
          <p className="text-sm text-blue-100">Checkups Done</p>
          <p className="text-2xl font-bold">{appointments.filter(a => a.status === 'completed').length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <Activity className="mb-2" size={24} />
          <p className="text-sm text-green-100">Health Score</p>
          <p className="text-2xl font-bold">92%</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
          <TrendingUp className="mb-2" size={24} />
          <p className="text-sm text-orange-100">Weight Gain</p>
          <p className="text-2xl font-bold">8 kg</p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="text-pink-600" size={24} />
          Upcoming Appointments
        </h3>
        <div className="space-y-3">
          {upcomingAppointments.map(apt => (
            <div key={apt.id} className="flex items-center justify-between p-4 bg-pink-50 rounded-xl border border-pink-200">
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{apt.type}</p>
                <p className="text-sm text-gray-600">{apt.location}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-pink-600">{apt.date}</p>
                <p className="text-sm text-gray-600">{apt.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Today's Tip */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-start gap-3">
          <div className="bg-white/30 p-3 rounded-full">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">💡 Daily Tip</h3>
            <p className="text-white/90">Drink camel milk! It's rich in vitamin C and iron, perfect for your pregnancy journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
