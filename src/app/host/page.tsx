"use client";

import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Users,
  ShoppingBag,
  TrendingUp,
  Plus,
  QrCode,
  DollarSign,
  Music,
} from "lucide-react";
import Link from "next/link";

const HostPage = () => {
  const [offers, setOffers] = useState([
    {
      id: 1,
      name: "Mojito Special",
      price: 8,
      description: "Fresh mint mojito with premium rum",
      sales: 12,
    },
    {
      id: 2,
      name: "Beer Bundle",
      price: 15,
      description: "3 craft beers of your choice",
      sales: 8,
    },
    {
      id: 3,
      name: "Wine Flight",
      price: 22,
      description: "3 premium wine tastings",
      sales: 5,
    },
  ]);
  const [showCreateOffer, setShowCreateOffer] = useState(false);
  const [newOffer, setNewOffer] = useState({
    name: "",
    price: "",
    description: "",
  });

  // Mock data for demo
  const stats = {
    totalGuests: 47,
    activeGuests: 32,
    totalPurchases: 25,
    totalRevenue: 342,
    qrScans: 47,
  };

  const handleCreateOffer = () => {
    if (newOffer.name && newOffer.price && newOffer.description) {
      const offer = {
        id: offers.length + 1,
        name: newOffer.name,
        price: parseFloat(newOffer.price),
        description: newOffer.description,
        sales: 0,
      };
      setOffers([...offers, offer]);
      setNewOffer({ name: "", price: "", description: "" });
      setShowCreateOffer(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-lg border-b border-white/20 p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white/70 hover:text-white">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">Host Dashboard</h1>
            <p className="text-sm text-gray-300">Manage your party</p>
          </div>
          <div className="w-5"></div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Total Guests</p>
                  <p className="text-2xl font-bold">{stats.totalGuests}</p>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">QR Scans</p>
                  <p className="text-2xl font-bold">{stats.qrScans}</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Purchases</p>
                  <p className="text-2xl font-bold">{stats.totalPurchases}</p>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-300">Revenue</p>
                  <p className="text-2xl font-bold">${stats.totalRevenue}</p>
                </div>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12"
              >
                <Music className="w-4 h-4 mr-2" />
                Create Poll
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-12"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Drink Offers */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Drink Offers</CardTitle>
              <CardDescription className="text-gray-300">
                Manage your drink specials and track sales
              </CardDescription>
            </div>
            <Dialog open={showCreateOffer} onOpenChange={setShowCreateOffer}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  New Offer
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white/95 text-black">
                <DialogHeader>
                  <DialogTitle>Create New Drink Offer</DialogTitle>
                  <DialogDescription>
                    Add a new drink special to boost sales
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Offer Name</Label>
                    <Input
                      id="name"
                      value={newOffer.name}
                      onChange={(e) =>
                        setNewOffer({ ...newOffer, name: e.target.value })
                      }
                      placeholder="e.g., Mojito Special"
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price ($)</Label>
                    <Input
                      id="price"
                      type="number"
                      value={newOffer.price}
                      onChange={(e) =>
                        setNewOffer({ ...newOffer, price: e.target.value })
                      }
                      placeholder="8.99"
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      value={newOffer.description}
                      onChange={(e) =>
                        setNewOffer({
                          ...newOffer,
                          description: e.target.value,
                        })
                      }
                      placeholder="Describe the drink offer"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleCreateOffer} className="flex-1">
                      Create Offer
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setShowCreateOffer(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-white">{offer.name}</h3>
                      <Badge
                        variant="secondary"
                        className="bg-green-500/20 text-green-400 border-green-500/30"
                      >
                        ${offer.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-300">{offer.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300">Sales</p>
                    <p className="text-lg font-bold text-green-400">
                      {offer.sales}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  New guest joined: Alex
                </span>
                <span className="text-xs text-gray-400 ml-auto">2 min ago</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Purchase: Mojito Special
                </span>
                <span className="text-xs text-gray-400 ml-auto">5 min ago</span>
              </div>
              <div className="flex items-center gap-3 p-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-300">
                  Music poll created
                </span>
                <span className="text-xs text-gray-400 ml-auto">8 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HostPage;
