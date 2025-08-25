"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

const UserProfileView = (props: {
  guest: {
    id: number;
    username: string;
    image: string;
    gender: string;
  };
  onChat: () => void;
  onClose: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 space-y-8">
      {/* User Image */}
      <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
        <User className="w-24 h-24 text-white" />
      </div>

      {/* User Info */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">
          {props.guest.username}
        </h2>
        <p className="text-gray-300 capitalize">{props.guest.gender}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Button
          onClick={props.onChat}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg"
        >
          Chat
        </Button>
        <Button
          onClick={props.onClose}
          className="w-full border-white/30 text-white bg-white/20 py-3 text-lg"
        >
          Close
        </Button>
      </div>
    </div>
  );
};

export default UserProfileView;
