"use client";

import Link from "next/link";
import { 
  Building2, 
  ShoppingCart, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
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
            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link href="/contact" className="text-orange-600 font-bold">Contact</Link>
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
        {/* Header Section */}
        <section className="bg-stone-900 text-white py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Get in Touch</h1>
            <p className="text-stone-400 max-w-2xl mx-auto">
              Have questions about our menu, delivery, or want to host an event? We're here to help.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-2">Send us a Message</h2>
                  <p className="text-stone-500">Fill out the form below and our team will get back to you shortly.</p>
                </div>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="John" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Doe" className="bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-white" />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Info & Map */}
              <div className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-8">
                  <Card className="border-none shadow-sm bg-white">
                    <CardContent className="p-6">
                      <MapPin className="h-8 w-8 text-orange-600 mb-4" />
                      <h3 className="font-bold mb-2">Our Address</h3>
                      <p className="text-sm text-stone-500">
                        Plot 123, Ebba Avenue<br />
                        Kampala, Uganda
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm bg-white">
                    <CardContent className="p-6">
                      <Phone className="h-8 w-8 text-orange-600 mb-4" />
                      <h3 className="font-bold mb-2">Phone Number</h3>
                      <p className="text-sm text-stone-500">
                        Main: +256 700 000 000<br />
                        Events: +256 701 111 111
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm bg-white">
                    <CardContent className="p-6">
                      <Mail className="h-8 w-8 text-orange-600 mb-4" />
                      <h3 className="font-bold mb-2">Email Address</h3>
                      <p className="text-sm text-stone-500">
                        hello@ebbalands.com<br />
                        support@ebbalands.com
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm bg-white">
                    <CardContent className="p-6">
                      <Clock className="h-8 w-8 text-orange-600 mb-4" />
                      <h3 className="font-bold mb-2">Opening Hours</h3>
                      <p className="text-sm text-stone-500">
                        Mon - Sat: 10am - 10pm<br />
                        Sun: 11am - 9pm
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="h-80 bg-stone-200 rounded-3xl overflow-hidden grayscale">
                   <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" 
                    alt="Map Location" 
                    className="w-full h-full object-cover"
                   />
                </div>

                <div className="flex items-center gap-6 justify-center lg:justify-start">
                  <p className="text-stone-500 font-medium">Follow us:</p>
                  <Link href="#" className="p-3 bg-white rounded-full text-stone-400 hover:text-orange-600 shadow-sm hover:shadow-md transition-all">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-3 bg-white rounded-full text-stone-400 hover:text-orange-600 shadow-sm hover:shadow-md transition-all">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-3 bg-white rounded-full text-stone-400 hover:text-orange-600 shadow-sm hover:shadow-md transition-all">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </div>
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
