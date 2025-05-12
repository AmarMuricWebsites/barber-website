import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PRIME CUTS</h3>
            <p className="text-zinc-400 mb-4">
              Premium barbershop providing quality haircuts and grooming services since 2010.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-zinc-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Haircuts
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Beard Trims
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Hot Towel Shaves
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white">
                  Hair Styling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-zinc-400">
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">Downtown, City 12345</p>
              <p className="mb-2">(555) 123-4567</p>
              <p className="mb-2">info@primecuts.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Prime Cuts Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
