"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Gift,
  MessageCircle,
  Music,
  Wine,
  Bell,
} from "lucide-react";

type ActivityType = "drink_offer" | "staff_notification" | "dj_poll";
type Priority = "high" | "medium" | "low";

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  message: string;
  timestamp: string;
  priority?: Priority;
  price?: string;
  discount?: string;
  options?: string[];
  expiresIn?: string;
}

const ActivityPage = () => {
  // Mock data for demo
  const mockActivities: Activity[] = [
    {
      id: 1,
      type: "staff_notification",
      title: "Welcome to Summer Party 2024!",
      message:
        "The party is officially starting! Get ready for an amazing night filled with music, drinks, and unforgettable memories.",
      timestamp: "8:00 PM",
      priority: "high",
    },
    {
      id: 2,
      type: "drink_offer",
      title: "Premium Drink Package",
      message:
        "Unlimited premium drinks for the night. Includes cocktails, spirits, and champagne.",
      timestamp: "8:15 PM",
      price: "$25",
      discount: "20% off",
    },
    {
      id: 3,
      type: "dj_poll",
      title: "What's Your Vibe Tonight?",
      message:
        "Vote for the next song! Choose between House, Hip-Hop, or Latin beats.",
      timestamp: "8:30 PM",
      options: ["House", "Hip-Hop", "Latin"],
      expiresIn: "5 min",
    },
    {
      id: 4,
      type: "drink_offer",
      title: "VIP Table Service",
      message:
        "Dedicated table with bottle service and priority access to all areas.",
      timestamp: "8:45 PM",
      price: "$50",
      discount: "Limited time",
    },
    {
      id: 5,
      type: "staff_notification",
      title: "Photo Contest",
      message:
        "Share your best party moments! Tag us on social media for a chance to win exclusive prizes.",
      timestamp: "9:00 PM",
      priority: "medium",
    },
    {
      id: 6,
      type: "dj_poll",
      title: "Crowd Energy Check",
      message:
        "How's the energy level? Should we keep the tempo high or slow it down?",
      timestamp: "9:15 PM",
      options: ["Keep it High", "Slow it Down", "Mix it Up"],
      expiresIn: "3 min",
    },
  ];

  const getTypeIcon = (type: ActivityType) => {
    switch (type) {
      case "staff_notification":
        return <Bell className="w-5 h-5 text-white" />;
      case "drink_offer":
        return <Wine className="w-5 h-5 text-white" />;
      case "dj_poll":
        return <Music className="w-5 h-5 text-white" />;
      default:
        return <MessageCircle className="w-5 h-5 text-white" />;
    }
  };

  const getTypeColor = (type: ActivityType) => {
    switch (type) {
      case "staff_notification":
        return "bg-blue-500";
      case "drink_offer":
        return "bg-green-500";
      case "dj_poll":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  const renderDrinkOffer = (activity: Activity) => (
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
        <div
          className={`w-10 h-10 ${getTypeColor(
            activity.type
          )}/20 rounded-full flex items-center justify-center`}
        >
          {getTypeIcon(activity.type)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">{activity.title}</p>
          <p className="text-gray-300 text-sm">{activity.message}</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-green-400">
            {activity.price}
          </div>
          {activity.discount && (
            <div className="text-xs text-green-300">{activity.discount}</div>
          )}
        </div>
      </div>

      {/* Buy buttons always visible */}
      <div className="flex gap-2">
        <Button className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
          <CreditCard className="w-4 h-4 mr-2" />
          Buy Now
        </Button>
        <Button
          variant="outline"
          className="bg-white/10 border-white/30 text-white hover:bg-white/20"
        >
          <Gift className="w-4 h-4 mr-2" />
          Gift
        </Button>
      </div>
    </div>
  );

  const renderStaffNotification = (activity: Activity) => (
    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
      <div
        className={`w-10 h-10 ${getTypeColor(
          activity.type
        )}/20 rounded-full flex items-center justify-center`}
      >
        {getTypeIcon(activity.type)}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-semibold">{activity.title}</p>
          {activity.priority === "high" && (
            <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">
              URGENT
            </span>
          )}
        </div>
        <p className="text-gray-300 text-sm">{activity.message}</p>
      </div>
    </div>
  );

  const renderDJPoll = (activity: Activity) => (
    <div className="space-y-3">
      <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg text-white">
        <div
          className={`w-10 h-10 ${getTypeColor(
            activity.type
          )}/20 rounded-full flex items-center justify-center`}
        >
          {getTypeIcon(activity.type)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold">{activity.title}</p>
          <p className="text-gray-300 text-sm">{activity.message}</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
            {activity.expiresIn}
          </div>
        </div>
      </div>

      {/* Voting options always visible */}
      <div className="space-y-2">
        {activity.options?.map((option: string, index: number) => (
          <Button
            key={index}
            variant="outline"
            className="w-full justify-start bg-white/5 border-white/20 text-white hover:bg-white/20"
          >
            <Music className="w-4 h-4 mr-2" />
            {option}
          </Button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Activity Feed</h2>
        <p className="text-gray-300">
          Stay updated with drink offers, staff announcements, and DJ polls!
        </p>
      </div>

      <div className="space-y-3">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="space-y-2">
            {/* Activity Content */}
            {activity.type === "drink_offer" && renderDrinkOffer(activity)}
            {activity.type === "staff_notification" &&
              renderStaffNotification(activity)}
            {activity.type === "dj_poll" && renderDJPoll(activity)}

            {/* Timestamp */}
            <div className="px-3">
              <p className="text-xs text-gray-400">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPage;
