import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FilterSidebar from '@/components/FilterSidebar';
import ProductCard from '@/components/ProductCard';
import { Search, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function ProductsPage() {
  const [showFilters, setShowFilters] = useState(false);

  // Sample product data
  const products = [
    {
      id: '1',
      brand: 'Rolex',
      model: 'Submariner Date',
      price: '$12,500',
      condition: 'Pre-Owned' as const,
      image: '/images/luxurywatch.jpg',
      caseSize: '40',
      movement: 'Automatic'
    },
    {
      id: '2',
      brand: 'Omega',
      model: 'Speedmaster Professional',
      price: '$6,200',
      condition: 'New' as const,
      image: 'https://images.unsplash.com/photo-1594534475808-b18fc33b045e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caseSize: '42',
      movement: 'Manual'
    },
    {
      id: '3',
      brand: 'Tudor',
      model: 'Black Bay 58',
      price: '$3,800',
      condition: 'New' as const,
      image: 'https://images.unsplash.com/photo-1548068534-1d69f2463d3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caseSize: '39',
      movement: 'Automatic'
    },
    {
      id: '4',
      brand: 'Breitling',
      model: 'Navitimer 01',
      price: '$4,900',
      condition: 'Pre-Owned' as const,
      image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caseSize: '43',
      movement: 'Automatic'
    },
    {
      id: '5',
      brand: 'Cartier',
      model: 'Santos de Cartier',
      price: '$7,800',
      condition: 'New' as const,
      image: 'https://images.unsplash.com/photo-1509048191080-d2cc204349fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caseSize: '40',
      movement: 'Automatic'
    },
    {
      id: '6',
      brand: 'TAG Heuer',
      model: 'Monaco Chronograph',
      price: '$5,200',
      condition: 'Pre-Owned' as const,
      image: 'https://images.unsplash.com/photo-1606390291777-0b8b5d8a7e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caseSize: '39',
      movement: 'Automatic'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Wrist VIP Collection</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Welcome to the Wrist VIP Collection. Each timepiece featured here has been meticulously selected 
            for its craftsmanship, heritage, and condition. Whether you seek a brand-new model or a certified 
            pre-owned classic, every watch is guaranteed authentic and ready to become a treasured part of your journey.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort */}
            <div className="flex justify-between items-center mb-6">
              <Sheet open={showFilters} onOpenChange={setShowFilters}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <FilterSidebar />
                </SheetContent>
              </Sheet>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="brand">Brand A-Z</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Source a Watch Section */}
            <Card className="bg-gradient-to-r from-amber-50 to-amber-100 border-amber-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Searching for a Specific Timepiece?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  If your desired watch is not in our current collection, our dedicated team will leverage 
                  our global network to source it for you. Experience the full VIP service from start to finish.
                </p>
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Submit a Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}