import { memo } from 'react';
import { Shield, Clock, Heart, Stethoscope } from 'lucide-react';

const trustMetrics = [
  {
    icon: Stethoscope,
    value: "94%",
    label: "Accuracy Rate",
    description: "Symptom identification accuracy",
    color: "text-blue-600 bg-blue-50"
  },
  {
    icon: Clock,
    value: "< 10s",
    label: "Response Time", 
    description: "Average AI response speed",
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Privacy Protected",
    description: "No data stored or shared",
    color: "text-purple-600 bg-purple-50"
  },
  {
    icon: Heart,
    value: "24/7",
    label: "Always Available",
    description: "Never miss an emergency",
    color: "text-red-600 bg-red-50"
  }
];

const TrustIndicators = memo(() => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {trustMetrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <div 
            key={index} 
            className="text-center p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${metric.color} mb-3`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="font-bold text-lg text-gray-900 mb-1">
              {metric.value}
            </div>
            <div className="font-semibold text-sm text-gray-700 mb-1">
              {metric.label}
            </div>
            <div className="text-xs text-gray-500 leading-tight">
              {metric.description}
            </div>
          </div>
        );
      })}
    </div>
  );
});

TrustIndicators.displayName = 'TrustIndicators';

export { TrustIndicators };