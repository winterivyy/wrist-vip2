import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your inquiry! We will be in touch shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <MessageCircle className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">Connect With Your Watch Concierge</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you have a question about a specific timepiece, need assistance with a purchase, 
            or wish to sell a watch from your own collection, we are here to provide dedicated support. 
            Please reach out through your preferred method below, and a member of the Wrist VIP team 
            will be in touch shortly.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span>Email Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">For inquiries:</p>
                <a 
                  href="mailto:sales@wristvip.com" 
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  sales@wristvip.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span>Call Us</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Speak with us:</p>
                <a 
                  href="tel:+15551234567" 
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  +1 (555) 123-4567
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9 AM - 6 PM EST</p>
                  <p>Saturday: 10 AM - 4 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  New York, NY<br />
                  By appointment only
                </p>
              </CardContent>
            </Card>

            {/* FAQ Link */}
            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Need Quick Answers?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  You may find an immediate answer to your question in our FAQ section.
                </p>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white">
                  View FAQ
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Select onValueChange={(value) => handleChange('subject', value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales Question</SelectItem>
                        <SelectItem value="selling">Selling My Watch</SelectItem>
                        <SelectItem value="service">Service/Support</SelectItem>
                        <SelectItem value="authentication">Authentication Service</SelectItem>
                        <SelectItem value="sourcing">Watch Sourcing Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={6}
                      className="mt-1"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-amber-600 hover:bg-amber-700"
                    size="lg"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="mt-8 bg-gray-900 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Why Choose Wrist VIP?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-medium mb-2 text-amber-400">Expert Consultation</h4>
                    <p className="text-gray-300">
                      Our certified horologists provide personalized guidance for every inquiry.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-amber-400">Rapid Response</h4>
                    <p className="text-gray-300">
                      We typically respond to all inquiries within 2-4 hours during business hours.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-amber-400">Global Network</h4>
                    <p className="text-gray-300">
                      Access to exclusive timepieces through our worldwide dealer relationships.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-amber-400">Lifetime Support</h4>
                    <p className="text-gray-300">
                      Ongoing assistance and advice for all Wrist VIP clients.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}