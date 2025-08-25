"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, User } from "lucide-react";
import ChatConversationView from "./ChatConversationView";
import UserProfileView from "./UserProfileView";

const GuestsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chats, setChats] = useState<
    {
      id: number;
      guestId: number;
      guestName: string;
      lastMessage: string;
      timestamp: string;
      unreadCount: number;
    }[]
  >([]);
  const [selectedChat, setSelectedChat] = useState<{
    id: number;
    guestId: number;
    guestName: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
  } | null>(null);
  const [selectedGuest, setSelectedGuest] = useState<{
    id: number;
    username: string;
    image: string;
    gender: string;
  } | null>(null);

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

  const filteredGuests = mockGuests.filter((guest) =>
    guest.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGuestSelect = (guest: {
    id: number;
    username: string;
    image: string;
    gender: string;
  }) => {
    setSelectedGuest(guest);
  };

  const handleStartChat = () => {
    if (!selectedGuest) return;

    // Check if chat already exists
    const existingChat = chats.find(
      (chat) => chat.guestId === selectedGuest.id
    );
    if (existingChat) {
      // If chat exists, open it
      setSelectedChat(existingChat);
      setSelectedGuest(null);
      return;
    }

    // Create new chat
    const newChat = {
      id: Date.now(),
      guestId: selectedGuest.id,
      guestName: selectedGuest.username,
      lastMessage: "Chat started",
      timestamp: "Now",
      unreadCount: 0,
    };

    setChats((prev) => [newChat, ...prev]);
    // Open the new chat immediately
    setSelectedChat(newChat);
    setSelectedGuest(null);
  };

  const handleCloseProfile = () => {
    setSelectedGuest(null);
  };

  const handleChatSelect = (chat: {
    id: number;
    guestId: number;
    guestName: string;
    lastMessage: string;
    timestamp: string;
    unreadCount: number;
  }) => {
    setSelectedChat(chat);
  };

  const handleBackToChats = () => {
    setSelectedChat(null);
  };

  // If a chat is selected, show the chat conversation
  if (selectedChat) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <ChatConversationView chat={selectedChat} onBack={handleBackToChats} />
      </div>
    );
  }

  // If a guest is selected, show the user profile view
  if (selectedGuest) {
    return (
      <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <UserProfileView
          guest={selectedGuest}
          onChat={handleStartChat}
          onClose={handleCloseProfile}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Active Chats Section */}
      {chats.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white mb-4">
            Active Chats
          </h3>
          <div className="space-y-3">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className="bg-white/5 rounded-lg text-white cursor-pointer hover:bg-white/20 transition-colors p-3"
                onClick={() => handleChatSelect(chat)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-semibold truncate">{chat.guestName}</p>
                      <span className="text-xs text-gray-300">
                        {chat.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  {chat.unreadCount > 0 && (
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 pt-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              All Guests
            </h3>
          </div>
        </div>
      )}

      {/* Search and Guest List */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search guests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/30 text-white placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuests.map((guest) => {
          const hasActiveChat = chats.some((chat) => chat.guestId === guest.id);

          return (
            <div
              key={guest.id}
              className={`bg-white/5 rounded-lg text-white cursor-pointer hover:bg-white/20 transition-colors p-3 ${
                hasActiveChat ? "ring-2 ring-blue-400" : ""
              }`}
              onClick={() => handleGuestSelect(guest)}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{guest.username}</p>
                  <p className="text-sm text-gray-300 capitalize">
                    {guest.gender}
                  </p>
                  {hasActiveChat && (
                    <p className="text-xs text-blue-400 mt-1">Active chat</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuestsPage;
