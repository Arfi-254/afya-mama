import { Activity, AlertTriangle, Clock, Pill } from 'lucide-react';

const initialAppointments = [
  { id: 1, type: 'Antenatal Checkup', date: '2025-10-15', time: '10:00 AM', location: 'Garissa County Hospital', status: 'upcoming', notes: 'Bring previous lab results' },
  { id: 2, type: 'Ultrasound Scan', date: '2025-10-22', time: '2:00 PM', location: 'Wajir Medical Center', status: 'upcoming', notes: 'Drink water before scan' },
  { id: 3, type: 'Blood Test', date: '2025-10-08', time: '9:00 AM', location: 'Garissa County Hospital', status: 'completed', notes: 'Fasting required' },
  { id: 4, type: 'Nutrition Counseling', date: '2025-11-01', time: '11:00 AM', location: 'Community Health Center', status: 'upcoming', notes: 'Discuss diet plan' },
];

const milestones = [
  { week: 4, title: 'Conception', description: 'Baby is the size of a poppy seed', completed: true },
  { week: 8, title: 'First Heartbeat', description: 'Baby is the size of a raspberry', completed: true },
  { week: 12, title: 'First Trimester Complete', description: 'Baby is the size of a lime', completed: true },
  { week: 16, title: 'Gender May Be Visible', description: 'Baby is the size of an avocado', completed: true },
  { week: 20, title: 'Halfway There!', description: 'Baby is the size of a banana', completed: false },
  { week: 24, title: 'Baby Can Hear', description: 'Baby is the size of a corn', completed: false },
  { week: 28, title: 'Third Trimester', description: 'Baby is the size of an eggplant', completed: false },
  { week: 32, title: 'Baby Practicing Breathing', description: 'Baby is the size of a squash', completed: false },
  { week: 36, title: 'Almost Ready', description: 'Baby is the size of a papaya', completed: false },
  { week: 40, title: 'Full Term', description: 'Baby is the size of a watermelon', completed: false },
];

const healthTips = [
  { id: 1, title: 'Stay Hydrated', content: 'Drink 8-10 glasses of water daily. It helps prevent constipation and reduces swelling.', icon: Activity, category: 'General' },
  { id: 2, title: 'Rest Well', content: 'Get 7-9 hours of sleep. Sleep on your left side to improve blood flow to your baby.', icon: Clock, category: 'General' },
  { id: 3, title: 'Eat Iron-Rich Foods', content: 'Include spinach, beans, red meat, and fortified cereals to prevent anemia.', icon: Pill, category: 'Nutrition' },
  { id: 4, title: 'Take Folic Acid', content: 'Essential for baby\'s development. Take 400mcg daily as prescribed by your doctor.', icon: Pill, category: 'Medication' },
  { id: 5, title: 'Light Exercise', content: 'Walking 30 minutes daily helps maintain healthy weight and reduces pregnancy discomfort.', icon: Activity, category: 'Exercise' },
  { id: 6, title: 'Avoid These Foods', content: 'Stay away from raw fish, unpasteurized milk, and undercooked meat.', icon: AlertTriangle, category: 'Nutrition' },
];

const localFoods = [
  { name: 'Camel Milk', benefit: 'Rich in vitamin C and iron', servings: '2-3 glasses daily' },
  { name: 'Dates', benefit: 'Natural energy and fiber', servings: '3-5 dates daily' },
  { name: 'Lentils & Beans', benefit: 'High in protein and folate', servings: '1 cup daily' },
  { name: 'Spinach (Sukuma)', benefit: 'Rich in iron and calcium', servings: '1 cup cooked daily' },
  { name: 'Oranges', benefit: 'Vitamin C for iron absorption', servings: '1-2 fruits daily' },
  { name: 'Eggs', benefit: 'Complete protein source', servings: '1-2 eggs daily' },
];

const emergencyContacts = [
  { name: 'Garissa County Hospital', phone: '0712345678', type: 'Hospital', available: '24/7' },
  { name: 'Emergency Ambulance', phone: '911', type: 'Emergency', available: '24/7' },
  { name: 'Community Health Worker - Amina', phone: '0723456789', type: 'CHW', available: '8AM-6PM' },
  { name: 'Midwife - Halima', phone: '0734567890', type: 'Midwife', available: '24/7' },
];

export {initialAppointments, milestones, healthTips, localFoods, emergencyContacts}