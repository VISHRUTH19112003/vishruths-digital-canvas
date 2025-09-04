import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact-email', {
        body: data,
      });

      if (error) throw error;

      setSubmitStatus('success');
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
                <div className="w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-warm" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a 
                    href="mailto:vishruthhv@outlook.com"
                    className="text-muted-foreground hover:text-accent-warm transition-smooth"
                  >
                    vishruthhv@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-warm" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a 
                    href="tel:+918217896138"
                    className="text-muted-foreground hover:text-accent-warm transition-smooth"
                  >
                    +91-8217896138
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-warm" />
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
                  href="https://github.com/VISHRUTH19112003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center hover:bg-accent-warm/10 hover:border-accent-warm transition-smooth"
                >
                  <Github className="w-5 h-5" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/vishruth-h-v-86891b341/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-surface rounded-lg border border-border flex items-center justify-center hover:bg-accent-warm/10 hover:border-accent-warm transition-smooth"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-card">
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
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="bg-surface border-border focus:ring-accent-warm focus:border-accent-warm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-surface border-border focus:ring-accent-warm focus:border-accent-warm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-surface border-border focus:ring-accent-warm focus:border-accent-warm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="bg-surface border-border focus:ring-accent-warm focus:border-accent-warm resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent-warm hover:bg-accent-warm/90 text-background disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <div className="text-center text-sm text-green-600 bg-green-50 border border-green-200 rounded-md p-3">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="text-center text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;