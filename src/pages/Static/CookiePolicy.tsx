import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Cookie, Settings, Shield, Eye, Globe, RefreshCw } from "lucide-react";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "Required for the website to function properly",
      examples: [
        "Authentication cookies to keep you logged in",
        "Security cookies to prevent CSRF attacks",
        "Session cookies to maintain your browsing session"
      ],
      canDisable: false
    },
    {
      title: "Analytics Cookies",
      icon: Eye,
      description: "Help us understand how visitors use our website",
      examples: [
        "Google Analytics tracking",
        "Page view statistics",
        "User interaction patterns"
      ],
      canDisable: true
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      description: "Enable enhanced functionality and personalization",
      examples: [
        "Language preferences",
        "Theme settings (dark/light mode)",
        "User interface customizations"
      ],
      canDisable: true
    },
    {
      title: "Third-Party Cookies",
      icon: Globe,
      description: "Set by external services we use",
      examples: [
        "Social media widgets",
        "Embedded content",
        "External analytics services"
      ],
      canDisable: true
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
          <Badge variant="outline" className="mb-4">Cookie Policy</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-crypto bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            This policy explains how ChainFund uses cookies and similar tracking technologies 
            to provide and improve our services, analyze website usage, and personalize your experience.
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
                  <Cookie className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences, 
                    keeping you logged in, and analyzing how you use our platform.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Most web browsers automatically accept cookies, but you can usually modify your browser 
                    settings to decline cookies if you prefer. However, this may prevent you from taking 
                    full advantage of our website's features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cookie Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Types of Cookies We Use</h2>
            <p className="text-muted-foreground text-lg">
              We use different types of cookies for various purposes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="crypto-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-crypto rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold">{type.title}</h3>
                        <Badge 
                          variant={type.canDisable ? "outline" : "secondary"}
                          className="mt-1"
                        >
                          {type.canDisable ? "Optional" : "Required"}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Examples:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cookie Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Settings className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Managing Your Cookie Preferences</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                  <p className="text-muted-foreground mb-4">
                    You can control and delete cookies through your browser settings. Here's how:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Cookie Preferences</h3>
                  <p className="text-muted-foreground mb-4">
                    You can also manage your cookie preferences directly on our platform:
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Cookie Preferences
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Reset All Cookies
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="crypto-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Important Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cookie Consent</h3>
                  <p className="text-muted-foreground mb-4">
                    By continuing to use our website, you consent to our use of cookies as described 
                    in this policy. You can withdraw your consent at any time by adjusting your 
                    browser settings or using our cookie preference center.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Updates to This Policy</h3>
                  <p className="text-muted-foreground mb-4">
                    We may update this Cookie Policy from time to time to reflect changes in 
                    our practices or for other operational, legal, or regulatory reasons.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Third-Party Services</h3>
                  <p className="text-muted-foreground mb-4">
                    Some cookies are set by third-party services that appear on our pages. 
                    We don't control these cookies, and you should check the relevant 
                    third-party's website for more information.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                  <p className="text-muted-foreground mb-4">
                    If you have any questions about our use of cookies, please contact us 
                    at privacy@chainfund.io or through our contact form.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Card className="crypto-card bg-gradient-crypto">
            <CardContent className="p-8">
              <Cookie className="h-16 w-16 text-white mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Manage Your Cookie Preferences
              </h2>
              <p className="text-white/90 mb-6">
                Take control of your privacy. Customize which cookies we can use to improve your experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary">
                  <Settings className="h-4 w-4 mr-2" />
                  Cookie Settings
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
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