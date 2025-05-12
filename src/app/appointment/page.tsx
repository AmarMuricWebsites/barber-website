"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  PersonStanding,
  Scissors,
  User,
} from "lucide-react";
import Link from "next/link";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>();
  const [bookingComplete, setBookingComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    barber: "",
    time: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.service) {
      toast.warning("Please select a service to continue.");
      return;
    }

    if (step === 2 && (!date || !formData.time)) {
      toast.warning("Please select both a date and time to continue.");
      return;
    }

    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast.warning("Please fill in all required fields.");
      return;
    }

    console.log("Appointment submitted:", { ...formData, date });

    setBookingComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      barber: "",
      time: "",
      notes: "",
    });
    setDate(undefined);
    setStep(1);
    setBookingComplete(false);
  };

  // Available time slots
  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
  ];

  const barbers = [
    { id: "james", name: "James Wilson", position: "Master Barber & Founder" },
    { id: "michael", name: "Michael Rodriguez", position: "Senior Barber" },
    { id: "david", name: "David Thompson", position: "Barber & Stylist" },
    { id: "robert", name: "Robert Chen", position: "Barber" },
  ];

  // If booking is complete, show thank you page
  if (bookingComplete) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-primary/10 p-12 rounded-2xl mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-6">
              Thank You for Your Booking!
            </h1>
            <p className="text-xl text-zinc-600 mb-8">
              {"We're"} excited to see you on{" "}
              {(date as Date)?.toLocaleDateString()} at {formData.time}.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-zinc-500 text-sm">Service</p>
                  <p className="font-medium">
                    {
                      {
                        haircut: "Classic Haircut",
                        "haircut-beard": "Haircut & Beard Trim",
                        "beard-trim": "Beard Trim",
                        "hot-towel-shave": "Hot Towel Shave",
                        "gentlemans-choice": "Gentleman's Choice",
                        executive: "Executive Package",
                      }[formData.service]
                    }
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Date & Time</p>
                  <p className="font-medium">
                    {(date as Date)?.toLocaleDateString()} at {formData.time}
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Barber</p>
                  <p className="font-medium">
                    {formData.barber === "any"
                      ? "No Preference"
                      : barbers.find((b) => b.id === formData.barber)?.name ||
                        "Not selected"}
                  </p>
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Name</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 p-6 rounded-xl mb-8">
              <h3 className="font-semibold mb-3">{"What's"} Next?</h3>
              <ul className="text-left space-y-2 text-zinc-600">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>
                    A confirmation email has been sent to {formData.email}
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>
                    {"You'll"} receive a reminder 24 hours before your
                    appointment
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>
                    Please arrive 5-10 minutes before your scheduled time
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8"
                onClick={resetForm}
              >
                Book Another Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Book Your Appointment</h1>
        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
          Schedule your next grooming session in just a few simple steps.
        </p>
      </div>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex justify-between">
          <div
            className={`flex flex-col items-center ${
              step >= 1 ? "text-primary" : "text-zinc-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step >= 1 ? "bg-primary text-white" : "bg-zinc-200"
              }`}
            >
              <Scissors className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Service</span>
          </div>
          <div
            className={`flex-1 border-t-2 self-start mt-6 ${
              step >= 2 ? "border-primary" : "border-zinc-200"
            }`}
          />
          <div
            className={`flex flex-col items-center ${
              step >= 2 ? "text-primary" : "text-zinc-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step >= 2 ? "bg-primary text-white" : "bg-zinc-200"
              }`}
            >
              <Clock className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Date & Time</span>
          </div>
          <div
            className={`flex-1 border-t-2 self-start mt-6 ${
              step >= 3 ? "border-primary" : "border-zinc-200"
            }`}
          />
          <div
            className={`flex flex-col items-center ${
              step >= 3 ? "text-primary" : "text-zinc-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step >= 3 ? "bg-primary text-white" : "bg-zinc-200"
              }`}
            >
              <User className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Barber</span>
          </div>
          <div
            className={`flex-1 border-t-2 self-start mt-6 ${
              step >= 4 ? "border-primary" : "border-zinc-200"
            }`}
          />
          <div
            className={`flex flex-col items-center ${
              step >= 4 ? "text-primary" : "text-zinc-400"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                step >= 4 ? "bg-primary text-white" : "bg-zinc-200"
              }`}
            >
              <Check className="h-6 w-6" />
            </div>
            <span className="text-sm font-medium">Confirm</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Select Your Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "haircut",
                  name: "Classic Haircut",
                  price: "$25",
                  description: "Traditional haircut with clippers and scissors",
                },
                {
                  id: "haircut-beard",
                  name: "Haircut & Beard Trim",
                  price: "$35",
                  description: "Complete grooming package for hair and beard",
                },
                {
                  id: "beard-trim",
                  name: "Beard Trim",
                  price: "$15",
                  description: "Shape and maintain your beard",
                },
                {
                  id: "hot-towel-shave",
                  name: "Hot Towel Shave",
                  price: "$30",
                  description:
                    "Traditional straight razor shave with hot towel",
                },
                {
                  id: "gentlemans-choice",
                  name: "Gentleman's Choice",
                  price: "$65",
                  description:
                    "Premium haircut, beard trim, hot towel, and styling",
                },
                {
                  id: "executive",
                  name: "Executive Package",
                  price: "$90",
                  description: "The complete experience with facial treatment",
                },
              ].map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    formData.service === service.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleSelectChange("service", service.id)}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <span className="text-primary font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-zinc-600 mb-4">{service.description}</p>
                    <div className="mt-auto flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full border ${
                          formData.service === service.id
                            ? "bg-primary border-primary"
                            : "border-zinc-300"
                        } mr-3 flex items-center justify-center`}
                      >
                        {formData.service === service.id && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium">
                        Select this service
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-8">
              <Button onClick={nextStep} className="px-8 py-6 text-lg">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Choose Date & Time
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border p-3"
                    disabled={(date) => {
                      return date < new Date() || date.getDay() === 0;
                    }}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Select Time</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={formData.time === time ? "default" : "outline"}
                        className={`py-6 ${
                          formData.time === time
                            ? ""
                            : "hover:border-primary hover:text-primary"
                        }`}
                        onClick={() => handleSelectChange("time", time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                className="px-8 py-6 text-lg"
              >
                Back
              </Button>
              <Button onClick={nextStep} className="px-8 py-6 text-lg">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Barber Selection */}
        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Choose Your Barber
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  formData.barber === "any" ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => handleSelectChange("barber", "any")}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">No Preference</h3>
                  </div>
                  <p className="text-zinc-600 mb-4">
                    {"We'll"} assign you to the first available barber
                  </p>
                  <div className="mt-auto flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full border ${
                        formData.barber === "any"
                          ? "bg-primary border-primary"
                          : "border-zinc-300"
                      } mr-3 flex items-center justify-center`}
                    >
                      {formData.barber === "any" && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium">
                      Select any barber
                    </span>
                  </div>
                </CardContent>
              </Card>

              {barbers.map((barber) => (
                <Card
                  key={barber.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    formData.barber === barber.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => handleSelectChange("barber", barber.id)}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 relative bg-zinc-200 rounded-full mr-4">
                        <PersonStanding className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{barber.name}</h3>
                        <p className="text-primary">{barber.position}</p>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full border ${
                          formData.barber === barber.id
                            ? "bg-primary border-primary"
                            : "border-zinc-300"
                        } mr-3 flex items-center justify-center`}
                      >
                        {formData.barber === barber.id && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-sm font-medium">
                        Select this barber
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                className="px-8 py-6 text-lg"
              >
                Back
              </Button>
              <Button onClick={nextStep} className="px-8 py-6 text-lg">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Personal Information & Confirmation */}
        {step === 4 && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Complete Your Booking
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Your Information
                  </h3>
                  <form className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="py-6 text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="py-6 text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="py-6 text-lg"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-base">
                          Special Requests (Optional)
                        </Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          placeholder="Any special requests or notes for your appointment"
                          value={formData.notes}
                          onChange={handleChange}
                          className="min-h-[120px] text-base"
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">
                    Appointment Summary
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-zinc-100 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Service:</span>
                        <span>
                          {
                            {
                              haircut: "Classic Haircut",
                              "haircut-beard": "Haircut & Beard Trim",
                              "beard-trim": "Beard Trim",
                              "hot-towel-shave": "Hot Towel Shave",
                              "gentlemans-choice": "Gentleman's Choice",
                              executive: "Executive Package",
                            }[formData.service]
                          }
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Price:</span>
                        <span>
                          {
                            {
                              haircut: "$25",
                              "haircut-beard": "$35",
                              "beard-trim": "$15",
                              "hot-towel-shave": "$30",
                              "gentlemans-choice": "$65",
                              executive: "$90",
                            }[formData.service]
                          }
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Date:</span>
                        <span>
                          {date
                            ? (date as Date).toLocaleDateString()
                            : "Not selected"}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Time:</span>
                        <span>{formData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Barber:</span>
                        <span>
                          {formData.barber === "any"
                            ? "No Preference"
                            : barbers.find((b) => b.id === formData.barber)
                                ?.name || "Not selected"}
                        </span>
                      </div>
                    </div>

                    <div className="bg-zinc-100 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">What to Expect</h4>
                      <ul className="space-y-2 text-zinc-600 text-sm">
                        <li>• Confirmation email with appointment details</li>
                        <li>
                          • Reminder text message 24 hours before your
                          appointment
                        </li>
                        <li>
                          • Please arrive 5-10 minutes before your scheduled
                          time
                        </li>
                        <li>
                          • First-time clients may need a brief consultation
                        </li>
                      </ul>
                    </div>

                    <p className="text-sm text-zinc-500 text-center">
                      By booking an appointment, you agree to our cancellation
                      policy. Please provide at least 24 hours notice for
                      cancellations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                className="px-8 py-6 text-lg"
              >
                Back
              </Button>
              <Button onClick={handleSubmit} className="px-8 py-6 text-lg">
                Confirm Booking
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
