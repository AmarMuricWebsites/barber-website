import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const barbers = [
    {
      name: "James Wilson",
      position: "Master Barber & Founder",
      bio: "With over 15 years of experience, James founded Prime Cuts with a vision to provide exceptional grooming services in a relaxed environment.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Rodriguez",
      position: "Senior Barber",
      bio: "Michael specializes in modern cuts and classic styles. His attention to detail and precision makes him a favorite among our regular clients.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "David Thompson",
      position: "Barber & Stylist",
      bio: "David brings creativity and flair to his work. He's known for his innovative approaches to traditional barbering techniques.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Robert Chen",
      position: "Barber",
      bio: "Robert is our newest team member with a passion for precision fades and beard styling. His modern approach keeps clients coming back.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const timeline = [
    { year: "2010", event: "Prime Cuts founded by James Wilson with just two chairs" },
    { year: "2012", event: "Expanded to a team of four barbers and moved to our current location" },
    { year: "2015", event: "Introduced premium grooming products and expanded service offerings" },
    { year: "2018", event: "Renovated the shop with a modern yet classic aesthetic" },
    { year: "2020", event: "Survived the pandemic and implemented enhanced safety protocols" },
    { year: "2023", event: "Celebrated serving over 10,000 unique clients" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Prime Cuts</h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
          More than just a barbershop, we're a community dedicated to helping men look and feel their best.
        </p>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-zinc-600">
            <p>
              Founded in 2010 by master barber James Wilson, Prime Cuts began as a small two-chair shop with a big
              vision: to revive the traditional barbershop experience while incorporating modern techniques and styles.
            </p>
            <p>
              What started as a passion project quickly grew into a beloved local institution. We've expanded our team,
              services, and space, but our commitment to quality and customer satisfaction remains unchanged.
            </p>
            <p>
              Today, Prime Cuts is known for exceptional haircuts, relaxed atmosphere, and a team of skilled
              professionals who take pride in their craft. We've built a community where clients become friends, and
              every visit is an experience to look forward to.
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=600&width=800"
            alt="Barbershop interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-zinc-100 p-8 rounded-lg mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-zinc-600">
              We never compromise on quality. From our techniques to our products, we ensure everything meets our high
              standards.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-zinc-600">
              We believe in building relationships. Our shop is a place where clients become friends and everyone feels
              welcome.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-zinc-600">
              Our team continuously learns and improves. We combine traditional techniques with modern trends to deliver
              the best results.
            </p>
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {barbers.map((barber, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={barber.image || "/placeholder.svg"}
                  alt={barber.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{barber.name}</h3>
                <p className="text-muted-foreground mb-3">{barber.position}</p>
                <p className="text-zinc-600">{barber.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Our Journey */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="mr-4 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {item.year}
                </div>
                {index < timeline.length - 1 && <div className="w-0.5 bg-zinc-300 h-full mt-2"></div>}
              </div>
              <div className="bg-zinc-100 rounded-lg p-4 flex-1">
                <p className="text-zinc-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "I've been coming to Prime Cuts for years. The quality is consistent, and the atmosphere is always welcoming.",
              author: "Thomas R.",
            },
            {
              quote:
                "Best haircut I've ever had. The attention to detail and the overall experience is worth every penny.",
              author: "Marcus J.",
            },
            {
              quote: "Not just a haircut, but an experience. The hot towel treatment alone is worth the visit.",
              author: "Alex K.",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-zinc-100 border-none">
              <CardContent className="p-6">
                <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-zinc-600 mb-4 italic">{testimonial.quote}</p>
                <p className="font-semibold">— {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
