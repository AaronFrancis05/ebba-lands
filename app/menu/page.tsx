"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  ShoppingCart, 
  User, 
  Plus, 
  Minus, 
  Search,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = [
  { id: "all", name: "All Items" },
  { id: "appetizers", name: "Appetizers" },
  { id: "main", name: "Main Course" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
];

const menuItems = [
  {
    id: "1",
    name: "Golden Truffle Fries",
    description: "Crispy hand-cut fries tossed in white truffle oil and 24-month aged parmesan.",
    price: "12,000",
    category: "appetizers",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "2",
    name: "Wild Mushroom Risotto",
    description: "Creamy Arborio rice with foraged mushrooms, fresh thyme, and truffle essence.",
    price: "28,000",
    category: "main",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "3",
    name: "Ebba Special Burger",
    description: "Double Wagyu beef patty, caramelized onions, smoked cheddar, and our secret sauce.",
    price: "35,000",
    category: "main",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Fresh Hibiscus Cooler",
    description: "Chilled hibiscus tea with ginger, honey, and fresh mint leaves.",
    price: "8,000",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "5",
    name: "Dark Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean gelato.",
    price: "15,000",
    category: "desserts",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "6",
    name: "Grilled Tilapia",
    description: "Fresh lake tilapia grilled with lemon-butter sauce and seasonal vegetables.",
    price: "32,000",
    category: "main",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=400",
  }
];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-800">EBBA LANDS</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <Link href="/menu" className="text-orange-600 font-bold">Menu</Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-in zoom-in">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/auth/sign-in" className="p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8">
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-2">Our Menu</h1>
              <p className="text-stone-500">Discover our carefully curated selection of local and global flavors.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
              <Input 
                placeholder="Search dishes..." 
                className="pl-10 bg-white border-stone-200 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="h-auto p-1 bg-stone-100 rounded-full w-full justify-start overflow-x-auto">
              {categories.map((cat) => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white"
                >
                  {cat.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-stone-100 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-stone-800 backdrop-blur-sm hover:bg-white border-none">
                    UGX {item.price}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold group-hover:text-orange-600 transition-colors">{item.name}</h3>
                  </div>
                  <p className="text-stone-500 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1">
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-stone-200">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">1</span>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full border-stone-200">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button 
                      onClick={() => setCartCount(prev => prev + 1)}
                      className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-stone-100 h-20 w-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-stone-300" />
              </div>
              <h3 className="text-xl font-bold mb-1">No items found</h3>
              <p className="text-stone-500">Try adjusting your search or category filter.</p>
              <Button 
                variant="link" 
                onClick={() => {setSelectedCategory("all"); setSearchQuery("");}}
                className="text-orange-600"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-stone-400 text-sm italic">
            * Prices are inclusive of all taxes. Special instructions can be added during checkout.
          </p>
          <div className="mt-8 pt-8 border-t border-stone-100">
             <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Ebba Lands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
