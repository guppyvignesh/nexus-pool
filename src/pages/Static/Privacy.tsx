import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, Database, Globe } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, connect your wallet, or contact us for support. This may include your username, email address, wallet addresses, and any other information you choose to provide."
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect certain information about your use of our platform, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed."
        },
        {
          subtitle: "Blockchain Data",
          text: "As a blockchain-based platform, transaction data is publicly available on the blockchain. We may collect and use this publicly available information to provide our services."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Service Provision",
          text: "To provide, maintain, and improve our platform, process transactions, facilitate DAO operations, and enable asset trading and bidding functionality."
        },
        {
          subtitle: "Communication",
          text: "To send you technical notices, updates, security alerts, and support messages. We may also send you information about new features or services."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "To understand how users interact with our platform, identify trends, and improve our services and user experience."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Users,
      content: [
        {
          subtitle: "Blockchain Transparency",
          text: "Certain information, such as wallet addresses and transaction data, is publicly available on the blockchain and cannot be made private."
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with third-party service providers who help us operate our platform, such as hosting providers, analytics services, and customer support tools."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information if required by law or if we believe disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to government requests."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Encryption",
          text: "We use industry-standard encryption to protect sensitive data both in transit and at rest. All communications with our servers are secured using SSL/TLS encryption."
        },
        {
          subtitle: "Access Controls",
          text: "We maintain strict access controls and only authorized personnel have access to personal information, and only when necessary for business purposes."
        }
      ]
    },
    {
      title: "Your Rights and Choices",
      icon: Shield,
      content: [
        {
          subtitle: "Account Information",
          text: "You may update, correct, or delete your account information at any time by logging into your account settings or contacting us directly."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format."
        },
        {
          subtitle: "Deletion",
          text: "You may request deletion of your personal information, subject to certain exceptions such as legal requirements or legitimate business interests."
        }
      ]
    },
    {
      title: "International Transfers",
      icon: Globe,
      content: [
        {
          subtitle: "Global Operations",
          text: "Our platform operates globally, and your information may be transferred to and processed in countries other than your country of residence."
        },
        {
          subtitle: "Safeguards",
          text: "When we transfer personal information internationally, we implement appropriate safeguards to ensure your data remains protected in accordance with this privacy policy."
        }
      ]
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
          <Badge variant="outline" className="mb-4">Privacy Policy</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 15, 2025
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-crypto rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ChainFund ("we," "our," or "us") operates a decentralized platform that enables users to participate 
                    in collective asset ownership, DAO governance, and blockchain-based financial activities. This Privacy 
                    Policy describes how we collect, use, disclose, and safeguard your information when you use our platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By using our platform, you agree to the collection and use of information in accordance with this policy. 
                    We will not use or share your information with anyone except as described in this Privacy Policy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="crypto-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-crypto rounded-lg flex items-center justify-center mr-4">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold mb-2">{item.subtitle}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Policies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Additional Important Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Children's Privacy</h3>
                  <p className="text-muted-foreground">
                    Our platform is not intended for use by children under the age of 18. We do not knowingly 
                    collect personal information from children under 18. If you become aware that a child has 
                    provided us with personal information, please contact us immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Changes to This Policy</h3>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by 
                    posting the new Privacy Policy on this page and updating the "Last updated" date at the top 
                    of this policy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Information</h3>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact 
                    us at privacy@chainfund.io or through our contact form.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Data Retention</h3>
                  <p className="text-muted-foreground">
                    We retain personal information for as long as necessary to provide our services, comply with 
                    legal obligations, resolve disputes, and enforce our agreements. Blockchain data remains 
                    permanently on the public ledger.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
              <p className="text-white/90 mb-6">
                We're here to help. Contact our privacy team if you have any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:privacy@chainfund.io"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  privacy@chainfund.io
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}