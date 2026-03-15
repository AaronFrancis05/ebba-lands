

import Link from "next/link";
import { 
  Building2,
  Utensils, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter,
  Star,
  ChevronRight,
  Menu as MenuIcon,
  X,
  ShoppingCart,
  User
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-serif font-bold tracking-tight text-stone-800">EBBA LANDS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-orange-600 font-bold">Home</Link>
            <Link href="/menu" className="hover:text-orange-600 transition-colors">Menu</Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="/menu" 
              className="hidden sm:inline-flex bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-sm"
            >
              Order Online
            </Link>
            <Link href="/cart" className="relative p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
            </Link>
            <Link href="/auth/sign-in" className="p-2 text-stone-600 hover:text-orange-600 transition-colors">
              <User className="h-6 w-6" />
            </Link>
            <button className="md:hidden p-2">
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="container relative mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Fresh Flavors, <span className="text-orange-500">Delivered</span> to Your Door.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-stone-200 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              Experience the best of Ebba Lands. Order your favorite dishes online and enjoy fast, reliable delivery or convenient pickup.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <Link 
                href="/menu" 
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-orange-900/20"
              >
                View Menu & Order
              </Link>
              <Link 
                href="/about" 
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-bold text-lg transition-all"
              >
                Our Story
              </Link>
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Freshly Prepared</h3>
                <p className="text-stone-600 leading-relaxed">
                  Every order is prepared fresh on demand using high-quality seasonal ingredients from local sources.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Swift Delivery</h3>
                <p className="text-stone-600 leading-relaxed">
                  Fast and reliable delivery service to your doorstep, or quick pickup from our restaurant.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Payments</h3>
                <p className="text-stone-600 leading-relaxed">
                  Pay securely via Mobile Money (MTN & Airtel) or opt for Cash on Delivery for maximum convenience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Menu Section */}
        <section id="menu" className="py-24 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">The Seasonal Menu</h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Wild Mushroom Risotto",
                  price: "$28",
                  desc: "Arborio rice, porcini mushrooms, truffle oil, and 24-month aged parmesan.",
                  image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800"
                },
                {
                  name: "Pan-Seared Sea Bass",
                  price: "$34",
                  desc: "Mediterranean sea bass with roasted fennel, citrus emulsion, and herb oil.",
                  image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800"
                },
                {
                  name: "Dry-Aged Ribeye",
                  price: "$45",
                  desc: "Grass-fed beef, bone marrow butter, roasted garlic, and vine tomatoes.",
                  image: "https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800"
                }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <span className="text-amber-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-stone-600 mb-6 text-sm">{item.desc}</p>
                    <button className="flex items-center text-sm font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                      View Details <ChevronRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link 
                href="/menu" 
                className="inline-flex items-center gap-2 px-10 py-4 border-2 border-orange-600 text-orange-600 rounded-full font-bold hover:bg-orange-600 hover:text-white transition-all"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </section>

        {/* About/Quote Section */}
        <section id="about" className="py-24 bg-stone-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Building2 className="h-12 w-12 text-orange-500 mx-auto mb-8 opacity-50" />
              <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
                "Ebba Lands is a celebration of local flavors, community, and the joy of good food shared with loved ones."
              </h2>
              <div className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">Our Philosophy</div>
              <Link href="/about" className="text-lg font-serif hover:text-orange-500 transition-colors underline decoration-orange-500 underline-offset-8">Learn more about our journey</Link>
            </div>
          </div>
        </section>

        {/* Location & Hours */}
        <section id="contact" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-8">Find Us</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Our Location</h4>
                      <p className="text-stone-600">Plot 123, Ebba Avenue, Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Business Hours</h4>
                      <p className="text-stone-600">
                        Mon - Sat: 10:00 AM - 10:00 PM<br />
                        Sunday: 11:00 AM - 09:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-6 w-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Get in Touch</h4>
                      <p className="text-stone-600">+256 700 000 000<br />Email: hello@ebbalands.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-96 bg-stone-200 rounded-3xl overflow-hidden relative shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800" 
                  alt="Restaurant Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-orange-600" />
              <span className="text-xl font-serif font-bold tracking-tight text-stone-800">EBBA LANDS</span>
            </div>
            
            <div className="flex gap-6">
              <Link href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Instagram /></Link>
              <Link href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Facebook /></Link>
              <Link href="#" className="text-stone-400 hover:text-orange-600 transition-colors"><Twitter /></Link>
            </div>
          </div>
          
          <div className="text-center text-sm text-stone-500">
            <p>© {new Date().getFullYear()} Ebba Lands Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
