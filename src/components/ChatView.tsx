"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, ArrowLeft, Users, ShoppingBag, Music } from "lucide-react";
import Link from "next/link";

interface Message {
  id: number;
  username: string;
  text: string;
  timestamp: Date;
  isOwn: boolean;
}

interface ChatViewProps {
  username: string;
}

const ChatView = (props: ChatViewProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      username: "DJ_Mike",
      text: "Welcome everyone to the party! 🎉",
      timestamp: new Date(Date.now() - 300000),
      isOwn: false,
    },
    {
      id: 2,
      username: "Sarah",
      text: "This is going to be amazing! 🎊",
      timestamp: new Date(Date.now() - 240000),
      isOwn: false,
    },
    {
      id: 3,
      username: "Alex",
      text: "Can't wait for the music! 🎵",
      timestamp: new Date(Date.now() - 180000),
      isOwn: false,
    },
    {
      id: 4,
      username: "Emma",
      text: "The drinks are fantastic! 🍹",
      timestamp: new Date(Date.now() - 120000),
      isOwn: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        username: props.username,
        text: newMessage,
        timestamp: new Date(),
        isOwn: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 p-4">
        <div className="flex items-center justify-between">
          <Link href="/guest" className="text-white/70 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-white">Party Chat</h1>
            <p className="text-sm text-gray-300">Welcome, {props.username}!</p>
          </div>
          <div className="w-5"></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="p-4 space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
          >
            <Users className="w-4 h-4 mr-2" />
            View Guests
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Buy Drinks
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 whitespace-nowrap"
          >
            <Music className="w-4 h-4 mr-2" />
            Vote Music
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isOwn ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isOwn
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white/10 backdrop-blur-lg text-white"
              }`}
            >
              {!message.isOwn && (
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/20 text-white border-0"
                  >
                    {message.username}
                  </Badge>
                  <span className="text-xs text-gray-300">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              )}
              <p className="text-sm">{message.text}</p>
              {message.isOwn && (
                <div className="text-right mt-1">
                  <span className="text-xs text-white/70">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white/5 backdrop-blur-lg border-t border-white/20">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
