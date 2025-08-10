import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Key, 
  AlertTriangle,
  CheckCircle,
  Zap,
  Users,
  Eye,
  Globe,
  Server
} from "lucide-react";

export default function Security() {
  const securityMeasures = [
    {
      title: "Blockchain Security",
      icon: Shield,
      description: "Built on secure blockchain infrastructure with immutable smart contracts",
      features: [
        "Ethereum mainnet deployment",
        "Audited smart contracts",
        "Multi-signature wallets",
        "Decentralized validation"
      ]
    },
    {
      title: "Data Encryption",
      icon: Lock,
      description: "End-to-end encryption for all sensitive data and communications",
      features: [
        "AES-256 encryption at rest",
        "TLS 1.3 for data in transit",
        "Zero-knowledge architecture",
        "Encrypted database storage"
      ]
    },
    {
      title: "Access Control",
      icon: Key,
      description: "Multi-layered authentication and authorization systems",
      features: [
        "Multi-factor authentication",
        "Hardware wallet integration",
        "Role-based permissions",
        "Session management"
      ]
    },
    {
      title: "Infrastructure Security",
      icon: Server,
      description: "Enterprise-grade hosting with 99.9% uptime guarantee",
      features: [
        "DDoS protection",
        "Load balancing",
        "Automated backups",
        "Disaster recovery"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Secure Your Wallet",
      icon: Lock,
      tips: [
        "Use hardware wallets for large amounts",
        "Keep your private keys offline",
        "Enable all available security features",
        "Regularly update your wallet software"
      ]
    },
    {
      title: "Protect Your Account",
      icon: Shield,
      tips: [
        "Use strong, unique passwords",
        "Enable two-factor authentication",
        "Keep your email secure",
        "Log out from shared devices"
      ]
    },
    {
      title: "Stay Vigilant",
      icon: Eye,
      tips: [
        "Verify all transaction details",
        "Watch for phishing attempts",
        "Double-check website URLs",
        "Report suspicious activity"
      ]
    }
  ];

  const threatProtection = [
    {
      threat: "Phishing Attacks",
      protection: "Email verification, domain validation, user education",
      status: "Protected"
    },
    {
      threat: "Smart Contract Exploits",
      protection: "Code audits, formal verification, bug bounty program",
      status: "Protected"
    },
    {
      threat: "DDoS Attacks",
      protection: "CDN protection, rate limiting, traffic filtering",
      status: "Protected"
    },
    {
      threat: "Social Engineering",
      protection: "Security awareness, verification procedures, admin controls",
      status: "Protected"
    }
  ];

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
          <Badge variant="outline" className="mb-4">Security</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Security First Approach
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            ChainFund implements industry-leading security measures to protect your assets, 
            data, and transactions. Your security is our top priority.
          </p>
        </motion.div>

        {/* Security Overview */}
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
                    <Shield className="h-8 w-8 text-primary mr-3" />
                    <h2 className="text-3xl font-bold">Enterprise-Grade Security</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6">
                    Our platform is built with security at its core, utilizing the latest in 
                    blockchain technology, encryption standards, and cybersecurity best practices 
                    to ensure your assets and data remain safe.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">SOC 2 Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">ISO 27001 Certified</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-crypto rounded-full flex items-center justify-center">
                    <Lock className="h-24 w-24 text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Measures */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Security Measures</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive protection across all layers of our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-crypto rounded-lg flex items-center justify-center mr-4">
                        <measure.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{measure.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{measure.description}</p>
                    <ul className="space-y-2">
                      {measure.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Threat Protection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Threat Protection</h2>
            <p className="text-muted-foreground text-lg">
              How we protect against common crypto and DeFi threats
            </p>
          </div>
          <Card className="crypto-card">
            <CardContent className="p-8">
              <div className="space-y-4">
                {threatProtection.map((item, index) => (
                  <motion.div
                    key={item.threat}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/20 border"
                  >
                    <div className="flex items-center space-x-4">
                      <AlertTriangle className="h-5 w-5 text-orange-500" />
                      <div>
                        <h4 className="font-semibold">{item.threat}</h4>
                        <p className="text-sm text-muted-foreground">{item.protection}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {item.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security Best Practices</h2>
            <p className="text-muted-foreground text-lg">
              Follow these guidelines to keep your account and assets secure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-crypto rounded-lg flex items-center justify-center">
                        <practice.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold">{practice.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {practice.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security Incident Response */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Zap className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Incident Response</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">24/7 Monitoring</h3>
                  <p className="text-muted-foreground mb-4">
                    Our security team monitors the platform around the clock for any suspicious 
                    activity or potential threats. Automated systems alert us to any anomalies 
                    in real-time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Rapid Response</h3>
                  <p className="text-muted-foreground mb-4">
                    In the event of a security incident, our response team follows established 
                    protocols to contain, investigate, and resolve issues quickly while keeping 
                    users informed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Bug Bounty Program</h3>
                  <p className="text-muted-foreground mb-4">
                    We work with security researchers through our bug bounty program to 
                    identify and fix vulnerabilities before they can be exploited.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Transparency</h3>
                  <p className="text-muted-foreground mb-4">
                    We believe in transparency and will communicate any security-related issues 
                    to our users promptly and provide regular updates on our security status.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Security Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8">
              <Shield className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Report a Security Issue
              </h2>
              <p className="text-white/90 mb-6">
                Found a security vulnerability? Help us keep ChainFund secure by reporting it to our security team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  Report Vulnerability
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  security@chainfund.io
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