import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: string;
  brand: string;
  model: string;
  price: string;
  condition: 'New' | 'Pre-Owned';
  image: string;
  caseSize?: string;
  movement?: string;
}

export default function ProductCard({ 
  brand, 
  model, 
  price, 
  condition, 
  image, 
  caseSize, 
  movement 
}: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <div 
          className="h-64 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <Badge 
          className={`absolute top-4 left-4 ${
            condition === 'New' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {condition}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-bold text-lg text-gray-900">{brand}</h3>
          <p className="text-gray-600">{model}</p>
        </div>
        
        {(caseSize || movement) && (
          <div className="flex gap-4 text-sm text-gray-500 mb-4">
            {caseSize && <span>{caseSize}mm</span>}
            {movement && <span>{movement}</span>}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">{price}</span>
          <Button className="bg-amber-600 hover:bg-amber-700">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}