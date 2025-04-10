
import { Sprout, Cloud, BarChart, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Crop Management',
    description: 'Track your crop growth, schedule planting and harvesting, and monitor the health of your plants.',
    icon: Sprout,
    color: 'text-agri-green'
  },
  {
    title: 'Weather Forecasts',
    description: 'Stay updated with accurate weather predictions to plan your farming activities better.',
    icon: Cloud,
    color: 'text-agri-blue'
  },
  {
    title: 'Analytics Dashboard',
    description: "Access comprehensive data about your farm's performance and make informed decisions.",
    icon: BarChart,
    color: 'text-agri-brown'
  },
  {
    title: 'Educational Resources',
    description: 'Learn about modern farming techniques, pest control, and sustainable agricultural practices.',
    icon: BookOpen,
    color: 'text-agri-green-dark'
  }
];

const FeatureSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="agri-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-agri-green-dark mb-4">Features for Modern Farming</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Our platform provides the tools farmers need to optimize their agricultural operations and increase productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-grow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4`}>
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
