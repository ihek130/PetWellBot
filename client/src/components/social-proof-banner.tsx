import { memo } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface SocialProofBannerProps {
  className?: string;
}

const SocialProofBanner = memo(({ className = "" }: SocialProofBannerProps) => {
  // Simulate real-time data (would come from API in production)
  const stats = {
    petsHelped: 1247,
    activeSessions: Math.floor(Math.random() * 8) + 3,
    avgResponseTime: "10s"
  };

  return (
    <div className={`w-full bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100 ${className}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="text-emerald-700 font-medium">
              {stats.activeSessions} pet owners getting help right now
            </span>
          </div>
          
          <div className="hidden md:block w-px h-4 bg-emerald-200"></div>
          
          <div className="text-emerald-600">
            <span className="font-semibold">{stats.petsHelped}+</span> pets helped this month
          </div>
          
          <div className="hidden md:block w-px h-4 bg-emerald-200"></div>
          
          <div className="text-emerald-600">
            Average response: <span className="font-semibold">{stats.avgResponseTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

SocialProofBanner.displayName = 'SocialProofBanner';

export { SocialProofBanner };