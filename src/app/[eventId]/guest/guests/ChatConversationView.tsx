"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

const ChatConversationView = (props: {
  chat: {
    id: number;
    guestId: number;
    guestName: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
  };
  onBack: () => void;
}) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!message.trim()) return;
    // In a real app, this would send the message
    console.log(`Sending message to ${props.chat.guestName}: ${message}`);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <Button
          variant="ghost"
          onClick={props.onBack}
          className="text-white hover:bg-white/20"
        >
          ← Back
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{props.chat.guestName}</h3>
            <p className="text-sm text-gray-300">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 bg-white/5 rounded-lg p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Sample messages - in a real app these would come from state/API */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs">
              <p>Hey! How&apos;s the party going?</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white/20 text-white px-4 py-2 rounded-lg max-w-xs">
              <p>
                It&apos;s amazing! The music is great and everyone is having
                fun!
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg max-w-xs">
              <p>That&apos;s awesome! Want to meet up at the bar?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="p-4 border-t border-white/20">
        <div className="flex gap-2">
          <Input
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
          />
          <Button
            onClick={handleSendMessage}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatConversationView;
