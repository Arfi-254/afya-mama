import React, { useState } from 'react';
import { Calendar,MapPin, CheckCircle, Clock,  Plus} from 'lucide-react';


const AppointmentsTab = ({ appointments }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Your Appointments</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg"
        >
          <Plus size={20} />
          Add Appointment
        </button>
      </div>

      {/* Upcoming */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="text-blue-600" size={20} />
          Upcoming
        </h3>
        <div className="space-y-3">
          {appointments.filter(a => a.status === 'upcoming').map(apt => (
            <div key={apt.id} className="border-2 border-gray-200 rounded-xl p-5 hover:border-pink-400 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{apt.type}</h4>
                  <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                    <MapPin size={14} />
                    {apt.location}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  Upcoming
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-gray-700">
                  <Calendar size={16} className="text-pink-600" />
                  {apt.date}
                </span>
                <span className="flex items-center gap-1 text-gray-700">
                  <Clock size={16} className="text-pink-600" />
                  {apt.time}
                </span>
              </div>
              {apt.notes && (
                <p className="mt-3 text-sm text-gray-600 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                  📝 {apt.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Completed */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <CheckCircle className="text-green-600" size={20} />
          Completed
        </h3>
        <div className="space-y-3">
          {appointments.filter(a => a.status === 'completed').map(apt => (
            <div key={apt.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{apt.type}</h4>
                  <p className="text-sm text-gray-600">{apt.date} • {apt.location}</p>
                </div>
                <CheckCircle className="text-green-600" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsTab;