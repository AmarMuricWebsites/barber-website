"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
          Have questions or want to book an appointment? Reach out to us using
          any of the methods below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <address className="not-italic text-zinc-600">
              <p>123 Main Street</p>
              <p>Downtown, City 12345</p>
            </address>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
            <div className="text-zinc-600">
              <p>Monday - Friday: 9am - 7pm</p>
              <p>Saturday: 10am - 6pm</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <div className="text-zinc-600">
              <p>Phone: (555) 123-4567</p>
              <p className="flex items-center justify-center gap-1">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:info@primecuts.com"
                  className="hover:text-amber-600"
                >
                  info@primecuts.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Find Us</h2>
          <div className="aspect-video bg-zinc-200 rounded-lg overflow-hidden">
            {/* Replace with actual map embed */}
            <div className="w-full h-full flex items-center justify-center bg-zinc-300">
              <p className="text-zinc-600">Map Embed Goes Here</p>
              {/* For a real implementation, you would use something like: */}
              {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-73.9876!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDQ1JzU1LjQiTiA3M8KwNTknMTUuNCJX!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </div>
          </div>
          <div className="mt-6 bg-zinc-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Parking Information</h3>
            <p className="text-zinc-600">
              Free parking is available in our dedicated lot behind the
              building. Street parking is also available on Main Street.
            </p>
          </div>
          <div className="mt-4 bg-zinc-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Public Transportation</h3>
            <p className="text-zinc-600">
              We're conveniently located two blocks from the Downtown Metro
              Station. Bus routes 10, 15, and 22 stop directly in front of our
              shop.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "Do I need an appointment?",
              answer:
                "While we accept walk-ins based on availability, we recommend booking an appointment to ensure you get your preferred time slot and barber.",
            },
            {
              question: "How long does a typical haircut take?",
              answer:
                "A standard haircut takes approximately 30-45 minutes. Services like hot towel shaves or complete packages may take longer.",
            },
            {
              question: "Do you offer gift cards?",
              answer:
                "Yes, we offer gift cards in any denomination. They can be purchased in-store or by phone.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards, cash, and mobile payment options like Apple Pay and Google Pay.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-zinc-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-zinc-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
