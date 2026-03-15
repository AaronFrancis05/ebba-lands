"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  ArrowLeft,
  MapPin,
  Truck,
  Store,
  CreditCard,
  Smartphone,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [orderType, setOrderType] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("mobile_money");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Go to success
  };

  if (step === 3) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-none shadow-xl text-center p-8 rounded-3xl">
          <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-serif font-bold mb-2">Order Confirmed!</h1>
          <p className="text-stone-500 mb-8">
            Thank you for your order. We've sent a confirmation to your email and phone.
          </p>
          <div className="bg-stone-50 rounded-2xl p-6 mb-8 text-left">
            <div className="flex justify-between mb-2 text-sm">
              <span className="text-stone-500">Order Number</span>
              <span className="font-bold">#EB-84920</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone-500">Estimated Time</span>
              <span className="font-bold text-orange-600">30-45 mins</span>
            </div>
          </div>
          <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-12">
            <Link href="/">Back to Home</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
       <nav className="bg-white border-b p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-serif font-bold">EBBA LANDS</span>
            </Link>
            <Link href="/cart" className="text-sm font-medium text-stone-600 hover:text-orange-600 flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>
          </div>
        </nav>

        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3 space-y-6">
              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Truck className="h-5 w-5 text-orange-600" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <RadioGroup defaultValue="delivery" onValueChange={setOrderType} className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <RadioGroupItem value="delivery" id="delivery" className="peer sr-only" />
                      <Label
                        htmlFor="delivery"
                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-600 [&:has([data-state=checked])]:border-orange-600 cursor-pointer"
                      >
                        <Truck className="mb-3 h-6 w-6" />
                        Delivery
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="pickup" id="pickup" className="peer sr-only" />
                      <Label
                        htmlFor="pickup"
                        className="flex flex-col items-center justify-between rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-orange-600 [&:has([data-state=checked])]:border-orange-600 cursor-pointer"
                      >
                        <Store className="mb-3 h-6 w-6" />
                        Pickup
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+256..." required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address (Optional)</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>

                  {orderType === "delivery" && (
                    <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                      <Label htmlFor="address">Delivery Address</Label>
                      <Input id="address" placeholder="Street, City, Area" required />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm overflow-hidden">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-orange-600" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <RadioGroup defaultValue="mobile_money" onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="mobile_money" id="mm" />
                      <Label htmlFor="mm" className="flex-1 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                            <Smartphone className="h-5 w-5 text-yellow-600" />
                          </div>
                          <div>
                            <p className="font-bold">Mobile Money</p>
                            <p className="text-xs text-stone-500">MTN or Airtel Money</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 space-y-0">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 flex items-center justify-between cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Truck className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-bold">Cash on Delivery</p>
                            <p className="text-xs text-stone-500">Pay when you receive</p>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "mobile_money" && (
                    <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-100 animate-in fade-in duration-500">
                      <p className="text-xs text-yellow-800 mb-2 font-medium uppercase tracking-wider">Payment Instructions</p>
                      <p className="text-sm text-yellow-900">
                        You will receive a prompt on your phone to authorize the payment after clicking "Place Order".
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="border-none shadow-sm sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">1x Ebba Special Burger</span>
                      <span>35,000</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-stone-500">2x Fresh Hibiscus Cooler</span>
                      <span>16,000</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-stone-500">
                      <span>Subtotal</span>
                      <span>UGX 51,000</span>
                    </div>
                    <div className="flex justify-between text-stone-500">
                      <span>Delivery</span>
                      <span>UGX 5,000</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-orange-600">UGX 56,000</span>
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-14 mt-6 text-lg shadow-lg shadow-orange-600/20">
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </form>
        </main>
    </div>
  );
}
