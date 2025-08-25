"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Music, MapPin, Clock } from "lucide-react";

const DashboardPage = () => {
  // Mock data for demo
  const mockGuests = [
    {
      id: 1,
      username: "John",
      image: "/api/placeholder/40/40",
      gender: "male",
    },
    {
      id: 2,
      username: "Sarah",
      image: "/api/placeholder/40/40",
      gender: "female",
    },
    {
      id: 3,
      username: "Mike",
      image: "/api/placeholder/40/40",
      gender: "male",
    },
    {
      id: 4,
      username: "Emma",
      image: "/api/placeholder/40/40",
      gender: "female",
    },
    {
      id: 5,
      username: "Alex",
      image: "/api/placeholder/40/40",
      gender: "other",
    },
  ];

  return (
    <div className="h-full flex flex-col justify-center items-center p-4">
      {/* Main Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Summer Party 2024
        </h1>
        <div className="flex items-center justify-center gap-2 text-gray-300">
          <span>Tonight 8PM-2AM</span>
        </div>
      </div>

      {/* Event Details Cards */}
      <div className="w-full max-w-sm space-y-4">
        {/* Guest Count */}

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <p className="font-semibold">{mockGuests.length} Guests</p>
            <p className="text-gray-300 text-sm">At the party</p>
          </div>
        </div>

        {/* Time */}

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <p className="font-semibold">Duration</p>
            <p className="text-gray-300 text-sm">8:00 PM - 2:00 AM</p>
          </div>
        </div>

        {/* Location */}

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
          <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <p className="font-semibold">Beach Club</p>
            <p className="text-gray-300 text-sm">123 Ocean Drive</p>
          </div>
        </div>

        {/* DJ */}

        <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
          <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
            <Music className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <p className="font-semibold">Live DJ</p>
            <p className="text-gray-300 text-sm">DJ Max</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
