import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PartyPopper, Users, QrCode, Calendar } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <PartyPopper className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Party App
            </CardTitle>
            <CardDescription className="text-gray-300">
              Make your party interactive and unforgettable
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/host" className="block">
              <Button
                variant="outline"
                className="w-full h-14 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-white/10"
                size="lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Host
              </Button>
            </Link>

            <Link href="/demo-event" className="block">
              <Button
                variant="outline"
                className="w-full h-14 text-lg font-semibold border-white/30 text-white hover:bg-white/10 hover:border-white/50 bg-white/10"
                size="lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Join Demo Event
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
