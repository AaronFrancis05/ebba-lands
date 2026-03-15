"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft,
  ShoppingCart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const initialCart = [
  {
    id: "3",
    name: "Ebba Special Burger",
    price: 35000,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: "4",
    name: "Fresh Hibiscus Cooler",
    price: 8000,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=400",
  }
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 5000;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <nav className="bg-white border-b p-4">
          <div className="container mx-auto">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-serif font-bold">EBBA LANDS</span>
            </Link>
          </div>
        </nav>
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-sm inline-block">
            <ShoppingCart className="h-20 w-20 text-stone-200 mx-auto mb-6" />
            <h1 className="text-3xl font-serif font-bold mb-4">Your cart is empty</h1>
            <p className="text-stone-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12">
              <Link href="/menu">Go to Menu</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
       <nav className="bg-white border-b p-4 sticky top-0 z-50">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-serif font-bold">EBBA LANDS</span>
            </Link>
            <Link href="/menu" className="text-sm font-medium text-stone-600 hover:text-orange-600 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Menu
            </Link>
          </div>
        </nav>

        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-serif font-bold mb-8">Shopping Cart</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-sm">
                  <CardContent className="p-4 flex gap-4">
                    <div className="h-24 w-24 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          <p className="text-orange-600 font-medium">UGX {item.price.toLocaleString()}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-stone-300 hover:text-red-500 transition-colors"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-stone-100 rounded-full p-1">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full hover:bg-white"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-4 text-center text-sm font-bold">{item.quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-full hover:bg-white"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="font-bold">UGX {(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="border-none shadow-sm sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between text-stone-500">
                      <span>Subtotal</span>
                      <span>UGX {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Delivery Fee</span>
                      <span>UGX {deliveryFee.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-orange-600">UGX {total.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12 mt-8 shadow-lg shadow-orange-600/20">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <p className="text-center text-xs text-stone-400 mt-4">
                    Secure checkout powered by Ebba Lands
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
    </div>
  );
}
