import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FileText, Scale, AlertTriangle, Users, Shield, Gavel } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Agreement to Terms",
          text: "By accessing and using ChainFund, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
        },
        {
          subtitle: "Modifications",
          text: "ChainFund reserves the right to modify these terms at any time. We will notify users of any material changes through our platform or via email. Continued use of the service after modifications constitutes acceptance of the updated terms."
        }
      ]
    },
    {
      title: "Platform Description",
      icon: Users,
      content: [
        {
          subtitle: "Service Overview",
          text: "ChainFund is a decentralized platform that facilitates collective asset ownership, DAO governance, crowdfunding campaigns, and asset trading through blockchain technology."
        },
        {
          subtitle: "Blockchain Integration",
          text: "Our platform integrates with various blockchain networks. Users interact with smart contracts that are immutable and operate according to their programmed logic."
        },
        {
          subtitle: "Beta Status",
          text: "The platform may be in beta or testing phases. Features may change, and services may be temporarily unavailable during updates or maintenance."
        }
      ]
    },
    {
      title: "User Responsibilities",
      icon: Shield,
      content: [
        {
          subtitle: "Account Security",
          text: "Users are responsible for maintaining the security of their accounts, wallet private keys, and any credentials used to access the platform. ChainFund cannot recover lost private keys."
        },
        {
          subtitle: "Compliance",
          text: "Users must comply with all applicable laws and regulations in their jurisdiction when using our platform, including but not limited to financial regulations and tax obligations."
        },
        {
          subtitle: "Prohibited Activities",
          text: "Users may not use the platform for illegal activities, market manipulation, money laundering, or any activities that violate applicable laws or regulations."
        }
      ]
    },
    {
      title: "Financial Risks and Disclaimers",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Investment Risks",
          text: "Cryptocurrency and DeFi investments carry significant risks including total loss of capital. Users should only invest what they can afford to lose and conduct their own research before making investment decisions."
        },
        {
          subtitle: "No Financial Advice",
          text: "ChainFund does not provide investment, financial, trading, or legal advice. All content is for informational purposes only and should not be considered as professional advice."
        },
        {
          subtitle: "Blockchain Risks",
          text: "Blockchain transactions are irreversible. Smart contract bugs, network congestion, or other technical issues may result in loss of funds. Users acknowledge these risks when using the platform."
        }
      ]
    },
    {
      title: "DAO Governance and Operations",
      icon: Gavel,
      content: [
        {
          subtitle: "DAO Participation",
          text: "Users participating in DAOs agree to abide by the governance rules and decisions made by the DAO community. Voting rights and responsibilities are determined by the specific DAO's governance structure."
        },
        {
          subtitle: "Proposal System",
          text: "Users may create and vote on proposals within DAOs. All participants should understand the implications of their votes and the binding nature of passed proposals."
        },
        {
          subtitle: "Treasury Management",
          text: "DAO treasuries are managed collectively according to governance decisions. Individual members may not have direct access to treasury funds outside of approved proposals."
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: Scale,
      content: [
        {
          subtitle: "Platform Rights",
          text: "ChainFund retains all rights to the platform's design, code, trademarks, and proprietary technology. Users are granted a limited, non-exclusive license to use the platform for its intended purposes."
        },
        {
          subtitle: "User Content",
          text: "Users retain rights to content they create but grant ChainFund a license to use such content as necessary to operate the platform and provide services."
        },
        {
          subtitle: "Respect for Others",
          text: "Users must respect the intellectual property rights of others and may not use the platform to infringe on copyrights, trademarks, or other proprietary rights."
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
          <Badge variant="outline" className="mb-4">Terms of Service</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Please read these terms carefully before using ChainFund. These terms govern your use of our 
            platform and services and constitute a binding agreement between you and ChainFund.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 15, 2025
          </div>
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

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Additional Terms and Conditions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                  <p className="text-muted-foreground">
                    ChainFund's liability is limited to the maximum extent permitted by law. We are not liable 
                    for any indirect, incidental, special, or consequential damages arising from your use of 
                    the platform.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Indemnification</h3>
                  <p className="text-muted-foreground">
                    Users agree to indemnify and hold ChainFund harmless from any claims, damages, or expenses 
                    arising from their use of the platform or violation of these terms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Governing Law</h3>
                  <p className="text-muted-foreground">
                    These terms are governed by the laws of [Jurisdiction], without regard to conflict of law 
                    principles. Any disputes will be resolved through binding arbitration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Severability</h3>
                  <p className="text-muted-foreground">
                    If any provision of these terms is found to be unenforceable, the remaining provisions 
                    will remain in full force and effect.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Termination</h3>
                  <p className="text-muted-foreground">
                    ChainFund may terminate or suspend access to the platform at any time, with or without 
                    cause, with or without notice. Users may also terminate their account at any time.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Force Majeure</h3>
                  <p className="text-muted-foreground">
                    ChainFund is not liable for any failure to perform due to circumstances beyond our reasonable 
                    control, including natural disasters, government actions, or network failures.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
              <p className="text-white/90 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="mailto:legal@chainfund.io"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  legal@chainfund.io
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