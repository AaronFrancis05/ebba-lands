"use client";

import Link from "next/link";
import { 
  Building2, 
  ShoppingCart, 
  User, 
  ChefHat, 
  Users, 
  History,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
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
            <Link href="/menu" className="hover:text-orange-600 transition-colors">Menu</Link>
            <Link href="/about" className="text-orange-600 font-bold">About</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link href="/auth/sign-in" className="p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966842-2849a220276c?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="container relative mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Story</h1>
            <p className="text-stone-300 max-w-2xl mx-auto text-lg">
              Cultivating culinary excellence and community in the heart of the city.
            </p>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12 text-lg text-stone-600 leading-relaxed">
              <div className="text-center">
                <ChefHat className="h-12 w-12 text-orange-600 mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">A Journey of Flavor</h2>
              </div>
              <p>
                Founded in 2024, Ebba Lands began with a simple vision: to create a space where modern culinary techniques meet the rich, diverse flavors of our local heritage. What started as a small family kitchen has grown into a destination for food lovers who appreciate quality, freshness, and the art of dining.
              </p>
              <p>
                Our name, "Ebba Lands," reflects our commitment to the land. We believe that great food starts with great ingredients. That's why we work closely with local farmers and producers to source the finest seasonal offerings, ensuring that every dish we serve tells a story of authenticity and care.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 py-12">
                <div className="text-center">
                  <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">Passion</h3>
                  <p className="text-sm">We pour our hearts into every recipe and every guest's experience.</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">Community</h3>
                  <p className="text-sm">Ebba Lands is a place for gathering, celebration, and shared memories.</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                    <History className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">Tradition</h3>
                  <p className="text-sm">We honor the past while constantly innovating for the future.</p>
                </div>
              </div>

              <p>
                Whether you're joining us for a celebratory dinner, ordering a quick lunch for delivery, or simply stopping by for a drink, we invite you to be a part of our story. At Ebba Lands, you're not just a customer; you're a guest in our home.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-orange-600 py-20 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ready to taste the extraordinary?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-stone-100 rounded-full px-10 h-14 text-lg">
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-14 text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center gap-2 justify-center mb-6">
            <Building2 className="h-6 w-6 text-orange-600" />
            <span className="text-xl font-serif font-bold tracking-tight text-stone-800">EBBA LANDS</span>
          </div>
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Ebba Lands. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
