"use client";

import { useSearchParams, useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, BarChart3 } from "lucide-react";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const params = useParams();
  const pathname = usePathname();

  const username = searchParams.get("username") || "";
  const gender = searchParams.get("gender") || "";
  const eventId = params.eventId;

  // Determine current tab based on pathname
  const pathSegments = pathname.split("/");

  const currentTab = pathSegments[pathSegments.length - 1];

  // Debug logging

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="p-4">
        <div className="max-w-6xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 rounded-lg p-1">
              <Link
                href={`/${eventId}/guest?username=${username}&gender=${gender}`}
              >
                <Button
                  variant="ghost"
                  className={`transition-all duration-200 ease-in-out ${
                    currentTab === "guest"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Party
                </Button>
              </Link>
              <Link
                href={`/${eventId}/guest/guests?username=${username}&gender=${gender}`}
              >
                <Button
                  variant="ghost"
                  className={`transition-all duration-200 ease-in-out ${
                    currentTab === "guests"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Guests
                </Button>
              </Link>
              <Link
                href={`/${eventId}/guest/activity?username=${username}&gender=${gender}`}
              >
                <Button
                  variant="ghost"
                  className={`transition-all duration-200 ease-in-out ${
                    currentTab === "activity"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:from-blue-600 hover:to-purple-600"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Activity
                </Button>
              </Link>
            </div>
          </div>

          {/* Content Area */}
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
