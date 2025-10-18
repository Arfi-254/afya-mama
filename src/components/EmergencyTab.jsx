import { Phone, MapPin, AlertTriangle, MessageCircle} from 'lucide-react';
import { emergencyContacts } from '../data';

const EmergencyTab = () => {
  const warningSigns = [
    'Severe abdominal pain',
    'Heavy bleeding',
    'Severe headache with vision changes',
    'High fever (above 38°C)',
    'Decreased baby movement',
    'Sudden swelling of face, hands or feet',
    'Fluid leaking from vagina',
    'Persistent vomiting'
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Alert Banner */}
      <div className="bg-red-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-start gap-4">
          <AlertTriangle className="flex-shrink-0 animate-pulse" size={40} />
          <div>
            <h2 className="text-2xl font-bold mb-2">Emergency Contacts</h2>
            <p className="text-red-100">If you experience any warning signs, contact these numbers immediately</p>
          </div>
        </div>
      </div>

      {/* Quick Dial Contacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emergencyContacts.map((contact, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-red-400 transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.type}</p>
                </div>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                {contact.available}
              </span>
            </div>
            <a 
              href={`tel:${contact.phone}`}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone size={20} />
              {contact.phone}
            </a>
          </div>
        ))}
      </div>

      {/* Warning Signs */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="text-orange-600" size={24} />
          Warning Signs - Seek Help Immediately
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {warningSigns.map((sign, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
              <p className="text-gray-900 font-medium">{sign}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Nearest Hospital Map */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="text-blue-600" size={24} />
          Nearest Health Facilities
        </h3>
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-3 text-gray-400" size={48} />
            <p className="text-gray-600 mb-2">Map integration coming soon</p>
            <p className="text-sm text-gray-500">View directions to nearby hospitals and clinics</p>
          </div>
        </div>
      </div>

      {/* SMS Alert Feature */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-start gap-4">
          <div className="bg-white/30 p-4 rounded-full">
            <MessageCircle size={28} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Emergency SMS Alert</h3>
            <p className="text-blue-100 mb-4">Send instant SMS with your location to trusted contacts in case of emergency</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
              Set Up Trusted Contacts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyTab