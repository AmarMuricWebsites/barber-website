import Link from "next/link";
import { Check, Clock, Scissors, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import NormalHaircutImage from "../../../public/normal-haircut-image.jpg";
import KidsImage from "../../../public/kids.jpg";
import FadeImage from "../../../public/fade-image.jpg";
import HeadShaveImage from "../../../public/head-shave.jpg";
import Beard1 from "../../../public/beard-1.jpg";
import Beard2 from "../../../public/beard-2.jpg";
import Beard3 from "../../../public/beard-3.jpg";
import Beard4 from "../../../public/beard-4.jpg";
import Image from "next/image";

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "haircuts",
      name: "Haircuts",
      icon: Scissors,
      description:
        "Professional haircuts tailored to your style and preferences",
    },
    {
      id: "beard",
      name: "Beard & Shaving",
      icon: Scissors,
      description: "Expert beard grooming and traditional hot towel shaves",
    },
    {
      id: "premium",
      name: "Premium Packages",
      icon: Star,
      description: "Complete grooming experiences for the discerning gentleman",
    },
  ];

  const services = {
    haircuts: [
      {
        name: "Classic Haircut",
        price: "$25",
        description:
          "Traditional haircut with clippers and scissors, includes wash and style",
        duration: "30 min",
        image: NormalHaircutImage,
        popular: true,
      },
      {
        name: "Fade",
        price: "$30",
        description:
          "Precision fade haircut with gradual blend from skin to desired length",
        duration: "45 min",
        image: FadeImage,
        popular: true,
      },
      {
        name: "Kids Haircut",
        price: "$18",
        description: "Haircut service for children under 12 years old",
        duration: "30 min",
        image: KidsImage,
      },
      {
        name: "Head Shave",
        price: "$25",
        description: "Complete head shave with straight razor finish",
        duration: "30 min",
        image: HeadShaveImage,
      },
    ],
    beard: [
      {
        name: "Beard Trim",
        price: "$15",
        description:
          "Shape and maintain your beard with precision trimming and styling",
        duration: "15 min",
        image: Beard1,
        popular: true,
      },
      {
        name: "Hot Towel Shave",
        price: "$30",
        description:
          "Traditional straight razor shave with hot towel treatment",
        duration: "30 min",
        image: Beard3,
        popular: true,
      },
      {
        name: "Beard Design",
        price: "$25",
        description: "Custom beard styling and shaping for a distinctive look",
        duration: "25 min",
        image: Beard2,
      },
      {
        name: "Beard Color",
        price: "$35",
        description: "Natural-looking color application for beards",
        duration: "45 min",
        image: Beard4,
      },
    ],
    premium: [
      {
        name: "Essential Package",
        price: "$40",
        description:
          "Classic haircut, hot towel refresher, and styling with premium products",
        duration: "45 min",
        features: [
          "Classic Haircut",
          "Hot Towel Refresher",
          "Premium Styling",
          "Complimentary Beverage",
        ],
      },
      {
        name: "Gentleman's Choice",
        price: "$65",
        description: "Our most popular complete grooming experience",
        duration: "75 min",
        popular: true,
        features: [
          "Premium Haircut",
          "Beard Trim",
          "Hot Towel Treatment",
          "Facial Massage",
          "Premium Styling",
          "Complimentary Beverage",
        ],
      },
      {
        name: "Executive Experience",
        price: "$90",
        description:
          "The ultimate grooming experience for the distinguished gentleman",
        duration: "90 min",
        features: [
          "Premium Haircut",
          "Hot Towel Shave",
          "Facial Treatment",
          "Head & Shoulder Massage",
          "Premium Styling",
          "Complimentary Beverage & Snack",
          "Grooming Product Sample",
        ],
      },
    ],
  };

  return (
    <div className="bg-white">
      <div className="relative bg-zinc-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
          }}
        />
        <div className="relative z-20 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Premium grooming services tailored to enhance your style and
            confidence
          </p>
          <Button asChild size="lg" className="px-8">
            <Link href="/appointment">Book Now</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="haircuts" className="w-full">
          <div className="text-center mb-12">
            <TabsList className="inline-flex h-auto p-1 bg-zinc-100 rounded-lg">
              {serviceCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white rounded-md text-base"
                >
                  <category.icon className="h-5 w-5 mr-2 inline-block" />
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="haircuts" className="mt-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Haircut Services</h2>
              <p className="text-zinc-600 max-w-3xl mx-auto">
                Our skilled barbers provide precision haircuts tailored to your
                style preferences and hair type.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.haircuts.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />

                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={400}
                      className="absolute object-cover w-full h-full"
                    />
                    {service.popular && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <span className="text-primary font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center text-zinc-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/appointment">Book This Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beard" className="mt-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Beard & Shaving Services
              </h2>
              <p className="text-zinc-600 max-w-3xl mx-auto">
                Expert beard grooming and traditional hot towel shaves for the
                perfect facial hair styling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.beard.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                    {service.popular && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <span className="text-primary font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center text-zinc-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/appointment">Book This Service</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Premium Packages Tab */}
          <TabsContent value="premium" className="mt-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium Packages</h2>
              <p className="text-zinc-600 max-w-3xl mx-auto">
                Complete grooming experiences that combine multiple services for
                the ultimate barbershop visit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.premium.map((service, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="h-8 relative">
                    {service.popular && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        Most Popular
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <span className="text-primary font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center text-zinc-500 text-sm mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="bg-zinc-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Package Includes:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/appointment">Book This Package</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Services */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Additional Services</h2>
            <p className="text-zinc-600 max-w-3xl mx-auto">
              Enhance your grooming experience with these specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Hair Styling",
                price: "$15",
                description: "Professional styling with premium products",
                duration: "15 min",
              },
              {
                name: "Gray Coverage",
                price: "$35",
                description: "Natural-looking color for gray hair",
                duration: "45 min",
              },
              {
                name: "Facial Treatment",
                price: "$40",
                description: "Cleansing and rejuvenating facial treatment",
                duration: "30 min",
              },
              {
                name: "Head Massage",
                price: "$20",
                description: "Relaxing scalp massage with essential oils",
                duration: "20 min",
              },
              {
                name: "Eyebrow Trim",
                price: "$10",
                description: "Precise eyebrow shaping and maintenance",
                duration: "10 min",
              },
              {
                name: "Nose & Ear Wax",
                price: "$15",
                description: "Careful removal of unwanted hair",
                duration: "15 min",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-md transition-all">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{service.name}</CardTitle>
                    <span className="text-primary font-bold">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex items-center text-zinc-500 text-sm mt-1">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 bg-zinc-50 p-8 rounded-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600">
              Everything you need to know about our services
            </p>
          </div>
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
              {
                question: "What's your cancellation policy?",
                answer:
                  "We request at least 24 hours notice for cancellations. Late cancellations may incur a fee of 50% of the service price.",
              },
              {
                question: "Do you sell grooming products?",
                answer:
                  "Yes, we carry a curated selection of premium hair and beard care products that our barbers use and recommend.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience Prime Cuts?
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-8">
            Book your appointment today and discover why our clients keep coming
            back.
          </p>
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
