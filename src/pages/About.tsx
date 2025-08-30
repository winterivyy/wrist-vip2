import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Award, Heart, Clock } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">More Than Watches. A Legacy of Passion.</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the story behind Wrist VIP and our unwavering commitment to horological excellence.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    It began with a single watch – a vintage Omega Speedmaster passed down from my grandfather. 
                    As I held that timepiece for the first time, I felt the weight of its history, the precision 
                    of its movement, and the artistry of its design. That moment ignited a passion that would 
                    define my life's work.
                  </p>
                  <p>
                    What started as a personal fascination with horology evolved into years of study, collecting, 
                    and learning from master watchmakers around the world. I discovered that behind every great 
                    watch lies not just mechanical excellence, but stories of innovation, craftsmanship, and 
                    human achievement spanning generations.
                  </p>
                  <p>
                    However, as my knowledge grew, so did my frustration with the watch buying experience. 
                    Too often, I encountered dealers who prioritized profit over passion, authenticity concerns, 
                    and a lack of genuine expertise. I realized that fellow enthusiasts deserved better – 
                    they deserved the VIP treatment.
                  </p>
                  <p>
                    Wrist VIP was founded on a simple but powerful mission: to create the watch buying experience 
                    I always wished existed. Every timepiece we offer is personally selected, rigorously authenticated, 
                    and backed by the kind of expertise and service that honors both the watch and its future owner.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The VIP Promise */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The VIP Promise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is built on three fundamental pillars that guide every aspect of our service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Uncompromising Authenticity</h3>
                <p className="text-gray-600">
                  Every watch we sell undergoes a multi-point inspection by expert horologists to certify its 
                  authenticity and condition. We stand behind every timepiece with an ironclad guarantee, 
                  ensuring your complete confidence in every purchase.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Curated Excellence</h3>
                <p className="text-gray-600">
                  Our collection is not an inventory; it's a curation. We only select watches that meet our 
                  high standards for quality, significance, and value. Each piece tells a story and represents 
                  the pinnacle of horological achievement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">A Relationship, Not a Transaction</h3>
                <p className="text-gray-600">
                  To us, you are a client for life. We are here to offer expert advice, answer your questions, 
                  and assist you long after your purchase. This is the VIP standard of care – personal, 
                  dedicated, and enduring.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="h-96 bg-cover bg-center rounded-lg shadow-xl"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"
                }}
              ></div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet the Founder</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-gray-900">Michael Richardson</strong> brings over 15 years of experience 
                    in luxury timepieces to Wrist VIP. A certified horologist and former apprentice at prestigious 
                    Swiss manufactures, Michael combines technical expertise with an unwavering passion for the 
                    art of watchmaking.
                  </p>
                  <p>
                    His journey has taken him from the workshops of Geneva to the auction houses of London, 
                    building relationships with collectors, dealers, and craftsmen worldwide. This global network 
                    enables Wrist VIP to source exceptional timepieces and provide unparalleled service to our clients.
                  </p>
                  <p className="italic border-l-4 border-amber-500 pl-4">
                    "Every watch has a story, and every collector deserves to be part of that legacy. 
                    At Wrist VIP, we don't just sell timepieces – we connect people with their perfect 
                    horological companion."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <Clock className="h-16 w-16 text-amber-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Begin Your Horological Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover your next timepiece in our carefully curated collection, where every watch meets 
            the highest standards of authenticity, quality, and significance.
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link to="/products">Explore The Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}