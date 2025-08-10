import { useState } from "react";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { 
  Search, 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "defi", name: "DeFi", count: 5 },
    { id: "dao", name: "DAO", count: 4 },
    { id: "blockchain", name: "Blockchain", count: 3 },
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of Decentralized Autonomous Organizations",
    excerpt: "Exploring how DAOs are revolutionizing organizational structures and collective decision-making in the digital age.",
    content: "DAOs represent a fundamental shift in how organizations can operate...",
    category: "dao",
    author: "Alex Chen",
    date: "2025-01-10",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Building Secure Smart Contracts for Asset Management",
      excerpt: "Best practices and security considerations when developing smart contracts for decentralized asset management.",
      category: "blockchain",
      author: "Sarah Kim",
      date: "2025-01-08",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "DeFi Yield Farming: Risks and Rewards",
      excerpt: "Understanding the opportunities and potential pitfalls of yield farming in the current DeFi landscape.",
      category: "defi",
      author: "David Rodriguez",
      date: "2025-01-05",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Collective Asset Ownership in the Digital Age",
      excerpt: "How blockchain technology is enabling new forms of shared ownership and investment strategies.",
      category: "blockchain",
      author: "Emily Johnson",
      date: "2025-01-03",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Governance Tokens: Democratizing Decision-Making",
      excerpt: "The role of governance tokens in creating more democratic and transparent organizational structures.",
      category: "dao",
      author: "Michael Chen",
      date: "2025-01-01",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "NFT Marketplaces: Beyond Digital Art",
      excerpt: "Exploring the expanding use cases of NFTs in asset tokenization and ownership verification.",
      category: "blockchain",
      author: "Lisa Wang",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=400&h=250&fit=crop"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">ChainFund Blog</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Insights & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up to date with the latest in DeFi, DAO governance, and blockchain technology. 
            Expert insights and analysis from the ChainFund team.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name} ({category.count})
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Card className="crypto-card overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge variant="outline" className="mb-3">Featured</Badge>
                <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{featuredPost.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{formatDate(featuredPost.date)}</span>
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <Button variant="default">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              Latest Articles ({filteredPosts.length})
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="crypto-card h-full overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 capitalize"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <BookOpen className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="crypto-card">
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Articles Found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or browse all categories.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="flex space-x-2">
                  <TrendingUp className="h-8 w-8 text-white" />
                  <Users className="h-8 w-8 text-white" />
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Stay Updated with ChainFund
              </h2>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Get the latest insights on DeFi, DAO governance, and blockchain innovation 
                delivered straight to your inbox. Join thousands of subscribers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="secondary">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}