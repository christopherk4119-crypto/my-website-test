"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Home,
  Building2,
  Car,
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description:
      "Complete home electrical services from wiring upgrades to new construction. Safe, code-compliant work for Calgary homeowners.",
    features: ["Panel upgrades", "Outlet & switch installation", "Lighting design", "Home rewiring"],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description:
      "Reliable electrical solutions for offices, retail spaces, and industrial facilities. Minimizing downtime while maximizing safety.",
    features: ["Office fit-outs", "Industrial wiring", "Lighting systems", "Code compliance"],
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    description:
      "Future-proof your home or business with Level 2 EV charger installation. Compatible with all major electric vehicle brands.",
    features: ["Level 1 & 2 chargers", "Panel capacity assessment", "Smart charger setup", "Permit handling"],
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description:
      "Upgrade your electrical panel to meet modern power demands. Essential for older homes and growing businesses.",
    features: ["100A–400A upgrades", "Safety inspections", "Breaker replacement", "Load calculations"],
  },
  {
    icon: Shield,
    title: "Emergency Services",
    description:
      "24/7 emergency electrical response for Calgary and surrounding areas. We're there when you need us most.",
    features: ["24/7 availability", "Same-day response", "Power restoration", "Hazard assessment"],
  },
  {
    icon: CheckCircle2,
    title: "Electrical Inspections",
    description:
      "Comprehensive electrical inspections for home buyers, sellers, and businesses ensuring full code compliance.",
    features: ["Pre-purchase inspection", "Safety audits", "Code compliance reports", "Insurance documentation"],
  },
];

const reasons = [
  { title: "Master Electricians", desc: "Licensed Red Seal master electricians with decades of combined experience." },
  { title: "Calgary Locals", desc: "Born and raised in Calgary — we know the local codes, climate, and community." },
  { title: "Upfront Pricing", desc: "No hidden fees. You get a clear quote before any work begins." },
  { title: "Fully Insured", desc: "Fully licensed and insured for your peace of mind on every job." },
  { title: "Clean Work", desc: "We treat your home like our own — clean worksite, zero mess left behind." },
  { title: "Guaranteed Work", desc: "All work is backed by our satisfaction guarantee and warranty." },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "NW Calgary",
    rating: 5,
    text: "Restore Electric upgraded our entire panel and installed two EV chargers. Professional, fast, and the pricing was exactly as quoted. Couldn't be happier!",
  },
  {
    name: "James T.",
    location: "Airdrie, AB",
    rating: 5,
    text: "Had an electrical emergency on a Sunday evening — they showed up within the hour. Diagnosed the issue quickly and had power restored the same night.",
  },
  {
    name: "Linda K.",
    location: "SE Calgary",
    rating: 5,
    text: "We used Restore Electric for a full commercial fit-out. The team was knowledgeable, on schedule, and passed inspection on the first try.",
  },
];

const serviceAreas = [
  "Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere",
  "Strathmore", "High River", "Crossfield", "Carstairs", "Olds",
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              Restore<span className="text-amber-500">Electric</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Why Us", "Testimonials", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+14031234567"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              (403) 123-4567
            </a>
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {["Services", "About", "Why Us", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-gray-300 text-sm py-1"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+14031234567"
            className="flex items-center gap-2 bg-amber-500 text-black font-semibold text-sm px-4 py-2 rounded-full w-fit"
          >
            <Phone className="w-4 h-4" />
            (403) 123-4567
          </a>
        </div>
      )}
    </nav>
  );
}

export default function HomePage() {
  return (
    <main className="bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />

      {/* Hero + Scroll Animation */}
      <section className="pt-16">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full">
                <Zap className="w-4 h-4" />
                Calgary&apos;s Trusted Master Electricians
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Power Your Home.
                <br />
                <span className="text-amber-500">Protect Your Family.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                Restore Electric delivers safe, code-compliant electrical solutions for Calgary homeowners and businesses. From panel upgrades to EV chargers — we do it right, the first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="#contact"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-full transition-colors"
                >
                  Get a Free Quote <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+14031234567"
                  className="flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Licensed & Insured</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-amber-500" /> 24/7 Emergency</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Free Quotes</span>
              </div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80"
            alt="Electrician working on panel"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* Stats Bar */}
      <section className="bg-amber-500 py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "2,500+", label: "Projects Completed" },
            { value: "4.9★", label: "Average Rating" },
            { value: "24/7", label: "Emergency Service" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-black">{stat.value}</div>
              <div className="text-black/70 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything Electrical,<br />
              <span className="text-amber-500">Done Right</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From simple repairs to complete electrical systems, our Red Seal electricians handle every job with precision and care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-white/8 transition-all group"
              >
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <service.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                      <ChevronRight className="w-3 h-3 text-amber-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-4 bg-white/2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-6">
              About Restore Electric
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Calgary&apos;s Most Trusted<br />
              <span className="text-amber-500">Electrical Contractor</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Restore Electric is a locally owned and operated electrical contractor serving Calgary and the surrounding communities since 2009. We are proud to be a BBB Accredited Business with a track record of delivering safe, reliable, and code-compliant electrical work.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our team of Red Seal master electricians brings expertise to every project — from straightforward repairs to complete commercial electrical systems. We believe in honest pricing, clean workmanship, and lasting relationships with our clients.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "BBB Accredited Business",
                "Red Seal Certified",
                "Fully Licensed & Insured",
                "ECAA Members",
                "Safety Codes Officer Approved",
                "Serving Calgary Since 2009",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Master electrician at work"
                width={800}
                height={600}
                className="w-full object-cover h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-black rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm font-medium text-black/70">Years Serving Calgary</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Restore Electric<br />
              <span className="text-amber-500">Difference</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 bg-white/4 border border-white/8 rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-4 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-4">
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Calgary Says<br />
              <span className="text-amber-500">About Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Areas We Serve</h3>
          <p className="text-gray-400 text-sm mb-8">Proudly serving Calgary and surrounding communities</p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                <MapPin className="w-3 h-3 inline mr-1 text-amber-500" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 bg-white/2">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Get Started?<br />
              <span className="text-amber-500">Contact Us Today</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Call us for a free estimate or fill out the form and we&apos;ll get back to you within one business day.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "(403) 123-4567",
                  sub: "24/7 Emergency Line Available",
                  href: "tel:+14031234567",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@restoreelectric.ca",
                  sub: "We reply within 1 business day",
                  href: "mailto:info@restoreelectric.ca",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Calgary, Alberta",
                  sub: "Serving Calgary & surrounding areas",
                  href: "#",
                },
                {
                  icon: Clock,
                  label: "Business Hours",
                  value: "Mon–Fri: 7am – 6pm",
                  sub: "Sat: 8am – 4pm | 24/7 Emergency",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-amber-500/30 transition-colors"
                >
                  <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold">{item.value}</div>
                    <div className="text-gray-500 text-sm">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Request a Free Quote</h3>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-gray-400 text-sm">Last Name</label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(403) 555-0100"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">Service Needed</label>
                  <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500/50 transition-colors">
                    <option value="" className="bg-[#111]">Select a service...</option>
                    <option value="residential" className="bg-[#111]">Residential Electrical</option>
                    <option value="commercial" className="bg-[#111]">Commercial Electrical</option>
                    <option value="ev" className="bg-[#111]">EV Charger Installation</option>
                    <option value="panel" className="bg-[#111]">Panel Upgrade</option>
                    <option value="emergency" className="bg-[#111]">Emergency Service</option>
                    <option value="inspection" className="bg-[#111]">Electrical Inspection</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-gray-400 text-sm">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  Send Request <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <div className="max-w-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <span className="text-white font-bold text-lg">
                  Restore<span className="text-amber-500">Electric</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Calgary&apos;s trusted master electricians for residential and commercial electrical services. Licensed, insured, and ready to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">Services</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>Residential Electrical</li>
                  <li>Commercial Electrical</li>
                  <li>EV Charger Installation</li>
                  <li>Panel Upgrades</li>
                  <li>Emergency Services</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li>(403) 123-4567</li>
                  <li>info@restoreelectric.ca</li>
                  <li>Calgary, Alberta</li>
                  <li>Mon–Fri 7am–6pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Restore Electric Ltd. All rights reserved.</span>
            <span>BBB Accredited Business · Red Seal Certified · Fully Insured</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
