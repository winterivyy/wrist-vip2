import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([1000]);

  const brands = ['Rolex', 'Omega', 'Seiko', 'Tudor', 'Breitling', 'TAG Heuer', 'Cartier'];
  const conditions = ['New', 'Pre-Owned'];
  const movements = ['Automatic', 'Quartz', 'Manual'];
  const styles = ['Diver', 'Chronograph', 'Dress', 'GMT', 'Pilot'];

  return (
    <div className="w-full space-y-6">
      {/* Brand Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Brand</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox id={brand} />
              <Label htmlFor={brand} className="text-sm font-normal">
                {brand}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Condition Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Condition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {conditions.map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox id={condition} />
              <Label htmlFor={condition} className="text-sm font-normal">
                {condition}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={50000}
              min={500}
              step={500}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>$500</span>
              <span>${priceRange[0].toLocaleString()}</span>
              <span>$50,000+</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Size */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Case Size</CardTitle>
        </CardHeader>
        <CardContent>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Under 36mm</SelectItem>
              <SelectItem value="medium">36-40mm</SelectItem>
              <SelectItem value="large">40-44mm</SelectItem>
              <SelectItem value="xlarge">Over 44mm</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Movement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Movement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {movements.map((movement) => (
            <div key={movement} className="flex items-center space-x-2">
              <Checkbox id={movement} />
              <Label htmlFor={movement} className="text-sm font-normal">
                {movement}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Style */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Style</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {styles.map((style) => (
            <div key={style} className="flex items-center space-x-2">
              <Checkbox id={style} />
              <Label htmlFor={style} className="text-sm font-normal">
                {style}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" className="w-full">
        Clear All Filters
      </Button>
    </div>
  );
}