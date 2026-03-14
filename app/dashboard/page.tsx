"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Clock,
  Star,
  Utensils,
  CreditCard,
  MessageSquare,
  History,
  LayoutDashboard,
  LogOut,
  Plus,
  Minus,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogoutButton } from "@/components/auth/logout-button";

// Mock Data
const categories = ["All", "Main Course", "Appetizers", "Desserts", "Drinks"];

const menuItems = [
  {
    id: 1,
    name: "Truffle Mushroom Pasta",
    price: 24,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=500&auto=format&fit=crop",
    description: "Creamy pasta with wild mushrooms and truffle oil.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Grilled Salmon Steak",
    price: 29,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=500&auto=format&fit=crop",
    description: "Fresh Atlantic salmon served with seasonal vegetables.",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Wagyu Beef Burger",
    price: 22,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop",
    description: "Premium wagyu beef with caramelized onions and brie.",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Berry Cheesecake",
    price: 12,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop",
    description: "Rich New York style cheesecake with fresh berries.",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Crispy Calamari",
    price: 16,
    category: "Appetizers",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500&auto=format&fit=crop",
    description: "Lightly battered squid with spicy aioli.",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Iced Caramel Macchiato",
    price: 6,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=500&auto=format&fit=crop",
    description: "Rich espresso with velvety milk and caramel drizzle.",
    rating: 4.8,
  },
];

const previousOrders = [
  {
    id: "ORD-7392",
    date: "2026-03-10",
    items: "Wagyu Beef Burger, Berry Cheesecake",
    total: 34.0,
    status: "Delivered",
  },
  {
    id: "ORD-6215",
    date: "2026-03-05",
    items: "Truffle Mushroom Pasta",
    total: 24.0,
    status: "Delivered",
  },
  {
    id: "ORD-5102",
    date: "2026-02-28",
    items: "Grilled Salmon Steak, Iced Caramel Macchiato",
    total: 35.0,
    status: "Delivered",
  },
];

const currentOrders = [
  {
    id: "ORD-8421",
    date: "2026-03-15",
    items: "Grilled Salmon Steak, Crispy Calamari",
    total: 45.0,
    status: "Preparing",
    estimatedArrival: "25 mins",
  },
];

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [isPaying, setIsPaying] = useState(false);

  const filteredItems = menuItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing?.quantity === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const cartTotal = cart.reduce((acc, item) => {
    const menuItem = menuItems.find((m) => m.id === item.id);
    return acc + (menuItem?.price || 0) * item.quantity;
  }, 0);

  const handlePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setCart([]);
      alert("Payment successful! Your order is being prepared.");
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="h-16 border-b bg-white/80 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-20">
        <h1 className="text-lg font-semibold">Welcome back, Diner!</h1>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your favorite food..."
              className="pl-8 w-[300px] h-9 bg-zinc-50"
            />
          </div>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            )}
          </Button>
        </div>
      </header>

      <div className="p-6 space-y-6">
        <Tabs defaultValue="menu" className="space-y-6">
          <TabsList className="bg-zinc-100 p-1">
            <TabsTrigger value="menu">Master Menu</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="contact">Contact Us</TabsTrigger>
          </TabsList>

          {/* Menu Tab */}
          <TabsContent value="menu" className="space-y-8 mt-0 outline-none">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold font-serif">Master Menu</h2>
                <p className="text-muted-foreground text-sm">Select from our delicious range of dishes.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className={activeCategory === cat ? "bg-orange-600 hover:bg-orange-700" : ""}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Menu Items Grid */}
              <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden group flex flex-col border-zinc-200">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardHeader className="p-4 flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary" className="text-[10px] bg-orange-50 text-orange-700 border-none">
                          {item.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs font-bold text-orange-500">
                          <Star className="h-3 w-3 fill-current" />
                          {item.rating}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                      <span className="text-lg font-bold text-orange-600">${item.price}</span>
                      <Button
                        size="sm"
                        onClick={() => addToCart(item.id)}
                        className="bg-zinc-900 hover:bg-zinc-800 text-white"
                      >
                        <Plus className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Cart/Checkout Section */}
              <div className="xl:col-span-1">
                <Card className="sticky top-24 border-orange-100 shadow-xl overflow-hidden">
                  <CardHeader className="bg-orange-600 text-white py-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <ShoppingCart className="h-5 w-5" />
                      Your Order
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    {cart.length === 0 ? (
                      <div className="text-center py-8">
                        <p className="text-muted-foreground italic">Your cart is empty.</p>
                        <p className="text-xs text-muted-foreground mt-2">Add some delicious food to get started!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="max-h-[300px] overflow-auto pr-2 space-y-4">
                          {cart.map((item) => {
                            const menuItem = menuItems.find((m) => m.id === item.id);
                            return (
                              <div key={item.id} className="flex items-center justify-between py-2 border-b last:border-0 border-zinc-100">
                                <div className="space-y-1">
                                  <p className="text-sm font-medium">{menuItem?.name}</p>
                                  <p className="text-xs text-orange-600 font-bold">${menuItem?.price}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6 rounded-full"
                                    onClick={() => removeFromCart(item.id)}
                                  >
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-6 w-6 rounded-full"
                                    onClick={() => addToCart(item.id)}
                                  >
                                    <Plus className="h-3 w-3" />
                                  </Button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <div className="pt-4 space-y-2 border-t border-zinc-100">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Subtotal</span>
                            <span className="font-medium">${cartTotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Delivery Fee</span>
                            <span className="font-medium">$5.00</span>
                          </div>
                          <div className="flex justify-between text-lg font-bold text-orange-600 pt-2 border-t border-zinc-100">
                            <span>Total</span>
                            <span>${(cartTotal + 5).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95"
                      disabled={cart.length === 0 || isPaying}
                      onClick={handlePayment}
                    >
                      {isPaying ? "Processing..." : (
                        <>
                          <CreditCard className="h-4 w-4 mr-2" /> Pay Now
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-8 mt-0 outline-none">
            <div>
              <h2 className="text-2xl font-bold font-serif">Current Orders</h2>
              <div className="mt-4 grid gap-6">
                {currentOrders.map((order) => (
                  <Card key={order.id} className="border-l-4 border-l-orange-500 shadow-sm border-zinc-200">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg">{order.id}</span>
                            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-none">
                              {order.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{order.items}</p>
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" /> {order.date}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-orange-600 font-bold">
                              Estimated: {order.estimatedArrival}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-orange-600">${order.total.toFixed(2)}</p>
                          <Button variant="outline" size="sm" className="mt-2 border-orange-200 text-orange-600 hover:bg-orange-50">
                            Track Order
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-serif">Order History</h2>
              <Card className="mt-4 overflow-hidden border-zinc-200 shadow-sm">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-zinc-50">
                      <TableRow>
                        <TableHead className="w-[120px]">Order ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {previousOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell className="font-medium">{order.id}</TableCell>
                          <TableCell className="text-muted-foreground">{order.date}</TableCell>
                          <TableCell className="max-w-[300px] truncate">{order.items}</TableCell>
                          <TableCell className="font-bold">${order.total.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge variant="secondary" className="bg-green-50 text-green-700 border-none">
                              <CheckCircle2 className="h-3 w-3 mr-1" /> {order.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 font-medium">Reorder</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8 mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-zinc-200 shadow-sm">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>We'd love to hear your feedback or help with any issues.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="What's this about?" className="border-zinc-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full md:w-auto">Send Message</Button>
                </CardFooter>
              </Card>

              <div className="space-y-6">
                <Card className="bg-zinc-900 text-white border-none overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <CardHeader>
                    <CardTitle className="text-white">Quick Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">Our Location</p>
                        <p className="text-zinc-400 text-sm">123 Culinary Avenue, Springfield</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center shrink-0">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-bold">Chat with us</p>
                        <p className="text-zinc-400 text-sm">Available 10:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-zinc-200 shadow-sm">
                  <CardHeader>
                    <CardTitle>Restaurant Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between py-1 border-b border-zinc-50">
                      <span className="text-muted-foreground">Manager</span>
                      <span className="font-medium">Ebba Lands Support Team</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-50">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">hello@ebbalands.com</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-muted-foreground">Phone</span>
                      <span className="font-medium">+1 (555) 123-4567</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
