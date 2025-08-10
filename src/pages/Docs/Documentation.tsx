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
  Book,
  ArrowRight,
  Code,
  Users,
  Zap,
  Shield,
  Settings,
  Globe,
  HelpCircle,
  FileText
} from "lucide-react";

export default function Documentation() {
  const [searchTerm, setSearchTerm] = useState("");

  const docSections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Learn the basics of ChainFund platform",
      articles: [
        { title: "Platform Overview", slug: "overview" },
        { title: "Creating Your Account", slug: "account-setup" },
        { title: "Connecting Your Wallet", slug: "wallet-connection" },
        { title: "First Steps Tutorial", slug: "first-steps" }
      ]
    },
    {
      title: "DAO Management",
      icon: Users,
      description: "Everything about creating and managing DAOs",
      articles: [
        { title: "Creating a DAO", slug: "create-dao" },
        { title: "DAO Governance", slug: "dao-governance" },
        { title: "Treasury Management", slug: "treasury" },
        { title: "Proposal System", slug: "proposals" }
      ]
    },
    {
      title: "Asset Trading",
      icon: Zap,
      description: "Buy, sell, and trade digital assets",
      articles: [
        { title: "Asset Marketplace", slug: "marketplace" },
        { title: "Listing Assets", slug: "list-assets" },
        { title: "Bidding System", slug: "bidding" },
        { title: "Asset Ownership", slug: "ownership" }
      ]
    },
    {
      title: "Smart Contracts",
      icon: Code,
      description: "Technical documentation for developers",
      articles: [
        { title: "Contract Architecture", slug: "architecture" },
        { title: "API Reference", slug: "api-reference" },
        { title: "Integration Guide", slug: "integration" },
        { title: "Security Audits", slug: "audits" }
      ]
    }
  ];

  const filteredSections = docSections.map(section => ({
    ...section,
    articles: section.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.articles.length > 0 || searchTerm === "");

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
          <Badge variant="outline" className="mb-4">Documentation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            ChainFund Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to know about using ChainFund platform, from basic setup 
            to advanced DAO management and smart contract integration.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { title: "Quick Start", icon: Zap, href: "/docs/quick-start" },
            { title: "API Reference", icon: Code, href: "/docs/api" },
            { title: "Security", icon: Shield, href: "/docs/security" },
            { title: "Support", icon: HelpCircle, href: "/help" }
          ].map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="crypto-card cursor-pointer hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <link.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold">{link.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Documentation Sections */}
        <div className="space-y-8">
          {filteredSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="crypto-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-crypto rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.articles.map((article) => (
                      <a
                        key={article.slug}
                        href={`/docs/${article.slug}`}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/20 transition-colors group"
                      >
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-3 text-muted-foreground" />
                          <span className="group-hover:text-primary transition-colors">
                            {article.title}
                          </span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8">
              <HelpCircle className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Need More Help?
              </h2>
              <p className="text-white/90 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Join Community
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