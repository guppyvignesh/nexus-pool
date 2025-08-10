import { useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { DAOCard } from "@/components/Cards/DAOCard";
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
  Users,
  TrendingUp,
  DollarSign,
  Building2
} from "lucide-react";
import { mockDAOs } from "@/data/mockData";

export default function Groups() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [activeTab, setActiveTab] = useState("all");

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "oldest", label: "Oldest First" },
    { value: "members_high", label: "Most Members" },
    { value: "members_low", label: "Fewest Members" },
    { value: "treasury_high", label: "Highest Treasury" },
    { value: "treasury_low", label: "Lowest Treasury" },
  ];

  // Filter and sort DAOs
  let filteredDAOs = mockDAOs.filter(dao => {
    const matchesSearch = dao.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dao.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Sort DAOs
  filteredDAOs.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      case "oldest":
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      case "members_high":
        return b.member_count - a.member_count;
      case "members_low":
        return a.member_count - b.member_count;
      case "treasury_high":
        return b.treasury_balance - a.treasury_balance;
      case "treasury_low":
        return a.treasury_balance - b.treasury_balance;
      default:
        return 0;
    }
  });

  const stats = [
    {
      title: "Total DAOs",
      value: mockDAOs.length.toString(),
      icon: Building2,
      color: "text-blue-500"
    },
    {
      title: "Total Treasury",
      value: `$${mockDAOs.reduce((sum, dao) => sum + dao.treasury_balance, 0).toLocaleString()}`,
      icon: DollarSign,
      color: "text-green-500"
    },
    {
      title: "Total Members",
      value: mockDAOs.reduce((sum, dao) => sum + dao.member_count, 0).toString(),
      icon: Users,
      color: "text-purple-500"
    },
    {
      title: "Active DAOs",
      value: mockDAOs.length.toString(),
      icon: TrendingUp,
      color: "text-orange-500"
    }
  ];

  // Mock user membership data
  const userDAOs = mockDAOs.slice(0, 1); // User is member of first DAO
  const availableDAOs = mockDAOs.slice(1); // Available to join

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
              <h1 className="text-3xl font-bold mb-2">Decentralized Autonomous Organizations</h1>
              <p className="text-muted-foreground">
                Join DAOs to participate in collective decision-making and asset management
              </p>
            </div>
            <Button variant="crypto">
              <Plus className="h-4 w-4 mr-2" />
              Create DAO
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
                      placeholder="Search DAOs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

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
              <TabsTrigger value="all">All DAOs ({filteredDAOs.length})</TabsTrigger>
              <TabsTrigger value="member">My DAOs ({userDAOs.length})</TabsTrigger>
              <TabsTrigger value="available">Available ({availableDAOs.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              {filteredDAOs.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDAOs.map((dao, index) => (
                    <motion.div
                      key={dao.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <DAOCard 
                        dao={dao} 
                        showActions={true}
                        userIsMember={userDAOs.some(userDao => userDao.id === dao.id)}
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Card className="crypto-card">
                  <CardContent className="p-12 text-center">
                    <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No DAOs Found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search criteria or create a new DAO.
                    </p>
                    <Button variant="outline" onClick={() => setSearchTerm("")}>
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="member" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userDAOs.map((dao, index) => (
                  <motion.div
                    key={dao.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <DAOCard 
                      dao={dao} 
                      showActions={true}
                      userIsMember={true}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="available" className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableDAOs.map((dao, index) => (
                  <motion.div
                    key={dao.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <DAOCard 
                      dao={dao} 
                      showActions={true}
                      userIsMember={false}
                    />
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