"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Camera, Upload, User, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

const EventPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageCapture = () => {
    // This would integrate with device camera in a real implementation
    // For now, we'll trigger the file input
    document.getElementById("image-input")?.click();
  };

  const handleJoinEvent = () => {
    if (username.trim() && gender && image) {
      // Navigate to the guest page for this event
      router.push(
        `/${eventId}/guest?username=${encodeURIComponent(
          username
        )}&gender=${encodeURIComponent(gender)}`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader className="text-center">
            <Link
              href="/"
              className="absolute top-4 left-4 text-white/70 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <CardTitle className="text-2xl font-bold">Join Event</CardTitle>
            <CardDescription className="text-gray-300">
              Event ID: {eventId}
            </CardDescription>
            <CardDescription className="text-gray-300">
              Add your photo and details to join
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload Section */}
            <div className="space-y-3">
              <Label className="text-white text-center block">
                Profile Photo
              </Label>
              <div className="flex justify-center">
                <div className="relative">
                  {imagePreview ? (
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/30">
                      <Image
                        src={imagePreview}
                        alt="Profile preview"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-dashed border-white/30 flex items-center justify-center">
                      <User className="w-8 h-8 text-white/50" />
                    </div>
                  )}
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center">
                <Button
                  onClick={handleImageCapture}
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <Camera className="w-4 h-4 mr-1" />
                  Camera
                </Button>
                <Button
                  onClick={() =>
                    document.getElementById("image-input")?.click()
                  }
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <Upload className="w-4 h-4 mr-1" />
                  Upload
                </Button>
              </div>
              <input
                id="image-input"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            {/* Username Input */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                onKeyDown={(e) => e.key === "Enter" && handleJoinEvent()}
              />
            </div>

            {/* Gender Selection */}
            <div className="space-y-2">
              <Label className="text-white">Gender</Label>
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant={gender === "male" ? "default" : "outline"}
                  onClick={() => setGender("male")}
                  className={`flex-1 ${
                    gender === "male"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  Male
                </Button>
                <Button
                  type="button"
                  variant={gender === "female" ? "default" : "outline"}
                  onClick={() => setGender("female")}
                  className={`flex-1 ${
                    gender === "female"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  Female
                </Button>
                <Button
                  type="button"
                  variant={gender === "other" ? "default" : "outline"}
                  onClick={() => setGender("other")}
                  className={`flex-1 ${
                    gender === "other"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-white/10 border-white/30 text-white hover:bg-white/20"
                  }`}
                >
                  Other
                </Button>
              </div>
            </div>

            {/* Join Event Button */}
            <Button
              onClick={handleJoinEvent}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              disabled={!username.trim() || !gender || !image}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Event
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EventPage;
