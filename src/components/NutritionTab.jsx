import { Pill } from 'lucide-react';
import { localFoods } from '../data';

const NutritionTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-2">Nutrition Guide</h2>
        <p className="text-green-100">Local foods that are perfect for your pregnancy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {localFoods.map((food, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Pill className="text-green-600" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{food.name}</h3>
                <p className="text-gray-600 mb-3">{food.benefit}</p>
                <div className="bg-green-50 rounded-lg px-3 py-2 inline-block">
                  <p className="text-sm text-green-700 font-semibold">
                    📊 {food.servings}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Daily Meal Plan */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sample Daily Meal Plan</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-4 py-2">
            <p className="font-semibold text-gray-900">Breakfast (7:00 AM)</p>
            <p className="text-gray-600">2 eggs + Whole wheat chapati + Camel milk</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-semibold text-gray-900">Mid-Morning Snack (10:00 AM)</p>
            <p className="text-gray-600">Orange + Handful of dates</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold text-gray-900">Lunch (1:00 PM)</p>
            <p className="text-gray-600">Rice + Lentil stew + Cooked spinach</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="font-semibold text-gray-900">Afternoon Snack (4:00 PM)</p>
            <p className="text-gray-600">Yogurt + Banana</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-4 py-2">
            <p className="font-semibold text-gray-900">Dinner (7:00 PM)</p>
            <p className="text-gray-600">Grilled chicken + Vegetables + Ugali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionTab;