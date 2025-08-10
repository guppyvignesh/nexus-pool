import { useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { BidCard } from "@/components/Cards/BidCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  SortAsc, 
  Plus,
  Gavel,
  TrendingUp,
  DollarSign,
  Clock
} from "lucide-react";
import { mockBids } from "@/data/mockData";

export default function Bids() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTab, setActiveTab] = useState("all");

  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "active", label: "Active" },
    { value: "ended", label: "Ended" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "price_high", label: "Highest Bid" },
    { value: "price_low", label: "Lowest Bid" },
    { value: "ending_soon", label: "Ending Soon" },
  ];

  // Filter and sort bids
  let filteredBids = mockBids.filter(bid => {
    const matchesSearch = bid.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bid.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "all" || bid.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Sort bids
  filteredBids.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case "oldest":
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      case "price_high":
        return b.current_price - a.current_price;
      case "price_low":
        return a.current_price - b.current_price;
      case "ending_soon":
        return new Date(a.end_date).getTime() - new Date(b.end_date).getTime();
      default:
        return 0;
    }
  });

  const stats = [
    {
      title: "Total Bids",
      value: mockBids.length.toString(),
      icon: Gavel,
      color: "text-blue-500"
    },
    {
      title: "Total Value",
      value: `$${mockBids.reduce((sum, bid) => sum + bid.current_price, 0).toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Active Bids",
      value: mockBids.filter(bid => bid.status === 'active').length.toString(),
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Ending Soon",
      value: mockBids.filter(bid => {
        const endDate = new Date(bid.end_date);
        const now = new Date();
        const timeDiff = endDate.getTime() - now.getTime();
        return timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000; // Less than 24 hours
      }).length.toString(),
      icon: Clock,
      color: "text-orange-500"
    }
  ];

  // Mock user bid data
  const userBids = mockBids.slice(0, 1); // User is participating in first bid
  const availableBids = mockBids.slice(1); // Available to bid on

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Asset Auctions & Bids</h1>
              <p className="text-muted-foreground">
                Participate in asset auctions and place competitive bids
              </p>
            </div>
            <Button variant="crypto">
              <Plus className="h-4 w-4 mr-2" />
              Create Auction
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="crypto-card">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-muted/50 ${stat.color}`}>
                      <stat.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                      <p className="text-lg font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <Card className="crypto-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search auctions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Status Filter */}
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map(status => (
                      <SelectItem key={status.value} value={status.value}>
                        {status.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48">
                    <SortAsc className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All Auctions ({filteredBids.length})</TabsTrigger>
              <TabsTrigger value="participating">My Bids ({userBids.length})</TabsTrigger>
              <TabsTrigger value="available">Available ({availableBids.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredBids.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBids.map((bid, index) => (
                    <motion.div
                      key={bid.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <BidCard bid={bid} showActions={true} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Card className="crypto-card">
                  <CardContent className="p-12 text-center">
                    <Gavel className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No Auctions Found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search criteria or create a new auction.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedStatus("all");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="participating" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userBids.map((bid, index) => (
                  <motion.div
                    key={bid.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BidCard bid={bid} showActions={true} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="available" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableBids.map((bid, index) => (
                  <motion.div
                    key={bid.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <BidCard bid={bid} showActions={true} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}