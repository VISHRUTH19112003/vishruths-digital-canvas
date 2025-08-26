import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities, whether it's a full-time position, 
                freelance work, or just a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* 
                UPDATE SECTION: Update your contact information below
              */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-github-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:vishruth@example.com" // Update with your email
                    className="text-muted-foreground hover:text-github-green transition-smooth"
                  >
                    vishruth@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-github-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+919876543210" // Update with your phone
                    className="text-muted-foreground hover:text-github-green transition-smooth"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-github-green" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Bangalore, India</p> {/* Update with your location */}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {/* 
                  UPDATE SECTION: Update your social media links below
                */}
                <a
                  href="https://github.com/vishruth" // Update with your GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a
                  href="https://linkedin.com/in/vishruth" // Update with your LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                
                <a
                  href="https://twitter.com/vishruth" // Update with your Twitter
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-github-surface rounded-lg border border-github-border flex items-center justify-center hover:bg-github-green-muted hover:border-github-green transition-smooth"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-github-border shadow-card">
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-github-surface border-github-border focus:ring-github-green focus:border-github-green"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-github-surface border-github-border focus:ring-github-green focus:border-github-green"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-github-surface border-github-border focus:ring-github-green focus:border-github-green"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="bg-github-surface border-github-border focus:ring-github-green focus:border-github-green resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;