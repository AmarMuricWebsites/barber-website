import Link from "next/link"
import { Clock, MapPin, Phone, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">PRIME CUTS</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
            Premium barbershop experience with skilled professionals and exceptional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-zinc-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Classic Haircut", price: "$25", icon: Scissors },
              { name: "Beard Trim", price: "$15", icon: Scissors },
              { name: "Hot Towel Shave", price: "$30", icon: Scissors },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-zinc-500 mb-4">Starting at {service.price}</p>
                  <Button variant="outline" asChild className="mt-auto">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="default" className="bg-zinc-900 hover:bg-zinc-800">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="rounded-lg overflow-hidden h-[400px] bg-zinc-200">
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Barbershop interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">About Prime Cuts</h2>
              <p className="text-zinc-600 mb-6">
                Founded in 2010, Prime Cuts has been providing premium grooming services to gentlemen who appreciate
                quality and style. Our team of skilled barbers combines traditional techniques with modern trends to
                deliver exceptional results.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-zinc-300">123 Main Street, Downtown, City</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-zinc-300">Mon-Fri: 9am - 7pm</p>
              <p className="text-zinc-300">Sat: 10am - 6pm</p>
              <p className="text-zinc-300">Sun: Closed</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p className="text-zinc-300">(555) 123-4567</p>
              <p className="text-zinc-300">info@primecuts.com</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="default">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready for a Fresh Look?</h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-zinc-100">
            <Link href="/appointment">Book Your Appointment Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
