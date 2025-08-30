import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Newsletter from '@/components/Newsletter';
import { Shield, Truck, Award, Clock, CheckCircle, Star, Crown, Gem, Users, TrendingUp, ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: "url('/images/MountainLandscape.jpg')"
          }}
        ></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300/40 rounded-full animate-float stagger-2"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-amber-500/20 rounded-full animate-float stagger-4"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="animate-fadeInUp">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 luxury-gradient leading-tight">
              Wrist VIP
            </h1>
          </div>
          
          <div className="animate-fadeInUp stagger-2">
            <p className="font-elegant text-2xl md:text-3xl lg:text-4xl mb-4 text-amber-100 font-semibold">
              Where Time Becomes Art
            </p>
          </div>
          
          <div className="animate-fadeInUp stagger-3">
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the world's most coveted timepieces, each one a masterpiece of craftsmanship, 
              heritage, and horological excellence. Your journey into luxury begins here.
            </p>
          </div>
          
          <div className="animate-fadeInUp stagger-4 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-lg px-10 py-6 rounded-full shadow-2xl hover-lift group">
              <Link to="/products" className="flex items-center gap-3">
                Explore The Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="glass text-white border-white/30 hover:bg-white/10 text-lg px-10 py-6 rounded-full group">
              <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Watch Our Story
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4 group animate-fadeInUp stagger-1">
              <div className="p-3 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 text-lg">Authenticity Guaranteed</span>
                <p className="text-sm text-gray-600">Certified by experts</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 group animate-fadeInUp stagger-2">
              <div className="p-3 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                <Truck className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 text-lg">Insured Global Shipping</span>
                <p className="text-sm text-gray-600">Worldwide delivery</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 group animate-fadeInUp stagger-3">
              <div className="p-3 bg-amber-100 rounded-full group-hover:bg-amber-200 transition-colors">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <span className="font-semibold text-gray-800 text-lg">Expert VIP Service</span>
                <p className="text-sm text-gray-600">Personalized experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Watch Enthusiasts Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our commitment to excellence has earned the trust of collectors across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scaleIn stagger-1">
              <div className="text-4xl md:text-5xl font-display font-bold luxury-gradient mb-2">500+</div>
              <p className="text-gray-600 font-medium">Curated Timepieces</p>
            </div>
            <div className="text-center animate-scaleIn stagger-2">
              <div className="text-4xl md:text-5xl font-display font-bold luxury-gradient mb-2">50+</div>
              <p className="text-gray-600 font-medium">Luxury Brands</p>
            </div>
            <div className="text-center animate-scaleIn stagger-3">
              <div className="text-4xl md:text-5xl font-display font-bold luxury-gradient mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Happy Collectors</p>
            </div>
            <div className="text-center animate-scaleIn stagger-4">
              <div className="text-4xl md:text-5xl font-display font-bold luxury-gradient mb-2">25+</div>
              <p className="text-gray-600 font-medium">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Curated Collections
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Each timepiece in our collection is personally selected for its exceptional quality, heritage, and craftsmanship. 
              Discover watches that tell stories of innovation, artistry, and timeless elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover-lift animate-fadeInUp stagger-1 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-green-500 text-white border-0 shadow-lg">
                  New Arrivals
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
                  Latest Additions
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  The newest additions to our VIP collection, featuring contemporary masterpieces 
                  and modern classics that define today's horological landscape.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift animate-fadeInUp stagger-2 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('/images/Nature.jpg')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-blue-500 text-white border-0 shadow-lg">
                  Pre-Owned
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
                  The Vintage Vault
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Impeccably maintained vintage and pre-owned icons from legendary watchmakers, 
                  each with its own unique history and character.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                  View Collection
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-lift animate-fadeInUp stagger-3 overflow-hidden border-0 shadow-lg">
              <div className="relative">
                <div 
                  className="h-80 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Badge className="absolute top-4 left-4 bg-purple-500 text-white border-0 shadow-lg">
                  Icons
                </Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-amber-600 transition-colors">
                  Horological Icons
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Discover legendary timepieces from the most revered names in horology, 
                  representing centuries of innovation and craftsmanship.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                  View Collection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The VIP Difference */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 luxury-gradient">
              The VIP Difference
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
              What sets Wrist VIP apart in the world of luxury timepieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fadeInUp stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-amber-400">Uncompromising Curation</h3>
              <p className="text-gray-300 leading-relaxed">
                Every watch in our collection is hand-selected, not just stocked. We prioritize quality over quantity, 
                ensuring each timepiece meets our exacting standards for craftsmanship, heritage, and condition. 
                Our curated approach means you'll discover exceptional pieces you won't find elsewhere.
              </p>
            </div>

            <div className="text-center animate-fadeInUp stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-amber-400">Guaranteed Authenticity</h3>
              <p className="text-gray-300 leading-relaxed">
                Every watch undergoes a rigorous multi-point inspection by certified horologists to verify its authenticity 
                and condition. We provide detailed documentation and stand behind every timepiece with an ironclad guarantee. 
                Your confidence in your purchase is our highest priority.
              </p>
            </div>

            <div className="text-center animate-fadeInUp stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-amber-400">Personalized VIP Service</h3>
              <p className="text-gray-300 leading-relaxed">
                We treat each client with dedicated, personalized attention that extends far beyond the sale. 
                Our expert team provides tailored recommendations, answers your questions, and offers ongoing support. 
                This is the VIP standard – a relationship, not just a transaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Prestigious Brands We Carry
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From Swiss legends to innovative newcomers, we represent the finest names in horology
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Rolex', 'Patek Philippe', 'Omega', 'Cartier', 'Breitling', 'TAG Heuer'].map((brand, index) => (
              <div key={brand} className={`text-center animate-fadeInUp stagger-${index + 1} group`}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover-lift">
                  <div className="font-display text-xl font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">
                    {brand}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
            <div className="mb-8">
              <Clock className="h-20 w-20 text-amber-500 mx-auto mb-6 animate-float" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              A Passion for <span className="luxury-gradient">Time</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Founded by a lifelong watch enthusiast, Wrist VIP was born from a simple belief: 
              that acquiring a fine timepiece should be as exceptional as the watch itself. 
              Our mission is to provide fellow collectors and newcomers alike with unparalleled 
              access to the world's finest watches, backed by expertise you can trust.
            </p>
            <Button asChild variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white text-lg px-8 py-4 rounded-full hover-lift">
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}