import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Shield, 
  Zap,
  Heart,
  Award,
  Globe,
  Rocket,
  ArrowRight
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "Built with blockchain security and transparency at its core"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Empowering DAOs and communities to make collective decisions"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge technology for the future of decentralized finance"
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Borderless platform accessible to users worldwide"
    }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Blockchain architect with 8+ years in DeFi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Sarah Kim",
      role: "CTO",
      bio: "Former Google engineer, smart contract specialist",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5fc?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Rodriguez",
      role: "Head of Product",
      bio: "Product leader in fintech and crypto for 6+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "ChainFund was born from the vision of democratizing investment"
    },
    {
      year: "2023",
      title: "First DAO Launch",
      description: "Successfully launched our first decentralized autonomous organization"
    },
    {
      year: "2024",
      title: "Platform Launch",
      description: "Public release of the ChainFund platform with full functionality"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding to serve users and DAOs worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">About ChainFund</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Revolutionizing Decentralized Finance
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            ChainFund is a next-generation platform that empowers individuals and DAOs to participate 
            in collective asset ownership, funding campaigns, and democratic decision-making through 
            blockchain technology.
          </p>
          <Button variant="crypto" size="lg">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    To democratize access to high-value assets and investment opportunities through 
                    decentralized autonomous organizations, enabling collective ownership and 
                    decision-making for a more inclusive financial future.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-crypto rounded-full flex items-center justify-center">
                    <Rocket className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-crypto rounded-lg flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground text-lg">
              Passionate innovators building the future of DeFi
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card">
                  <CardContent className="p-6 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our mission to democratize finance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card h-full">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-3">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-12">
              <Heart className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Join the Revolution?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Be part of the decentralized future. Join thousands of users who are already 
                participating in collective asset ownership and democratic decision-making.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Learn More
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