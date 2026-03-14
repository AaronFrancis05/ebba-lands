import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight, 
  Coffee, 
  Pizza, 
  Leaf, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-zinc-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-orange-600">
            <Utensils className="h-6 w-6" />
            <span>Ebba Lands</span>
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-orange-600 transition-colors">About</Link>
            <Link href="#menu" className="text-sm font-medium hover:text-orange-600 transition-colors">Menu</Link>
            <Link href="#reviews" className="text-sm font-medium hover:text-orange-600 transition-colors">Reviews</Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-600 transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden sm:flex border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700">
              Sign In
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-200">
              Book a Table
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-zinc-50 py-20 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-8">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-none px-4 py-1 text-sm font-semibold">
                  New Spring Menu is Here!
                </Badge>
                <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                  Taste the <span className="text-orange-600">Extraordinary</span> in Every Bite
                </h1>
                <p className="max-w-[600px] text-lg text-zinc-600 md:text-xl">
                  Experience a culinary journey at Ebba Lands, where farm-fresh ingredients meet innovative techniques to create unforgettable memories.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white h-12 px-8 text-base">
                    View Full Menu <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="h-12 px-8 text-base border-zinc-300">
                    Our Story
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[10px] font-bold overflow-hidden">
                        <Image src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-orange-500">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                    </div>
                    <p className="text-zinc-600"><span className="font-bold text-zinc-900">2,500+</span> happy diners</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop" 
                  alt="Delicious gourmet dish" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl hidden sm:block">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-orange-600">Featured Dish</p>
                      <h3 className="text-lg font-bold">Herb-Crusted Sea Bass</h3>
                    </div>
                    <p className="text-xl font-bold">$34.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-50 blur-3xl" />
        </section>

        {/* Features Section */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6 text-center mb-16">
            <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">Why Ebba Lands?</Badge>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">The Secret of Our Success</h2>
            <p className="mt-4 mx-auto max-w-[700px] text-zinc-600 text-lg">
              We believe that great food starts with great ingredients and ends with a passionate service.
            </p>
          </div>
          <div className="container mx-auto px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Leaf className="h-8 w-8 text-green-600" />, title: "Fresh Ingredients", desc: "Sourced daily from local organic farms to ensure the highest quality and taste." },
              { icon: <Utensils className="h-8 w-8 text-orange-600" />, title: "Master Chefs", desc: "Our culinary experts blend tradition with innovation in every dish they prepare." },
              { icon: <Clock className="h-8 w-8 text-blue-600" />, title: "Perfect Ambiance", desc: "Designed to provide a relaxing and sophisticated dining experience for any occasion." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl border border-zinc-100 bg-zinc-50 hover:border-orange-200 transition-colors group">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white shadow-sm group-hover:shadow-md transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Menu Highlights Section */}
        <section id="menu" className="py-24 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-[600px]">
              <Badge variant="outline" className="mb-4 text-orange-600 border-orange-200">Our Favorites</Badge>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">Popular From the Menu</h2>
            </div>
            <Button variant="link" className="text-orange-600 p-0 h-auto text-base font-bold">
              Explore All Dishes <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="container mx-auto px-4 md:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Truffle Mushroom Pasta", price: "$24", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=500&auto=format&fit=crop", tag: "Vegetarian" },
              { name: "Grilled Salmon Steak", price: "$29", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=500&auto=format&fit=crop", tag: "Seafood" },
              { name: "Wagyu Beef Burger", price: "$22", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop", tag: "Popular" },
              { name: "Berry Cheesecake", price: "$12", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop", tag: "Dessert" },
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-zinc-900 border-none backdrop-blur-sm">{item.tag}</Badge>
                  </div>
                </div>
                <CardHeader className="p-5 pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <span className="font-bold text-orange-600">{item.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <CardDescription className="text-zinc-500 text-xs">Exquisite blend of seasonal flavors</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative rounded-[3rem] bg-zinc-900 overflow-hidden px-8 py-20 text-center">
              <div className="relative z-10 mx-auto max-w-[800px]">
                <h2 className="font-serif text-4xl font-bold text-white sm:text-5xl mb-6">Ready to Experience Ebba Lands?</h2>
                <p className="text-zinc-400 text-lg mb-10">
                  Join us for lunch or dinner and discover why we are the city's favorite dining destination.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white h-14 px-10 rounded-full text-base">
                    Book a Table Now
                  </Button>
                  <Button variant="outline" size="lg" className="h-14 px-10 rounded-full text-base border-zinc-700 text-white hover:bg-zinc-800">
                    Contact Us
                  </Button>
                </div>
              </div>
              {/* Background abstract shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-20 -mt-20 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/10 rounded-full -ml-20 -mb-20 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Contact/Location Section */}
        <section id="contact" className="py-24 border-t border-zinc-100">
          <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold sm:text-4xl mb-8">Visit Us</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Our Location</h4>
                    <p className="text-zinc-600">123 Culinary Avenue, Foodie District<br />Springfield, ST 56789</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-zinc-600">Tue - Fri: 11:30 AM - 10:00 PM<br />Sat - Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-6 pt-4">
                  {[Facebook, Twitter, Instagram].map((Icon, i) => (
                    <Link key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-orange-600 hover:text-white transition-all">
                      <Icon className="h-5 w-5" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-zinc-100 h-[400px] flex items-center justify-center relative overflow-hidden group">
              <Image 
                src="https://images.unsplash.com/photo-1526232761682-d26e43ac148e?q=80&w=800&auto=format&fit=crop" 
                alt="Restaurant Interior" 
                fill 
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20" />
              <Button className="relative z-10 bg-white text-zinc-900 hover:bg-zinc-50 rounded-full">
                Get Directions
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-orange-600">
              <Utensils className="h-6 w-6" />
              <span>Ebba Lands</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-500">
              <Link href="#" className="hover:text-orange-600">Menu</Link>
              <Link href="#" className="hover:text-orange-600">Reservations</Link>
              <Link href="#" className="hover:text-orange-600">Privacy Policy</Link>
              <Link href="#" className="hover:text-orange-600">Terms of Service</Link>
            </div>
            <p className="text-sm text-zinc-500">
              © 2026 Ebba Lands. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
