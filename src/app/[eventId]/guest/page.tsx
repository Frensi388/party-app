"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import DashboardPage from "./dashboard/page";

const GuestPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const usernameParam = searchParams.get("username");
    const genderParam = searchParams.get("gender");

    if (usernameParam) {
      setUsername(usernameParam);
    }
    if (genderParam) {
      setGender(genderParam);
    }
  }, [searchParams]);

  if (!username) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Invalid Access</h1>
          <p className="text-gray-300 mb-4">
            Please join the event first to access the guest page.
          </p>
          <a
            href={`/${eventId}`}
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium"
          >
            Back to Event
          </a>
        </div>
      </div>
    );
  }

  // Show dashboard by default
  return <DashboardPage />;
};

export default GuestPage;
