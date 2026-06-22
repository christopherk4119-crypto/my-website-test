"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Home,
  Building2,
  Car,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
  Menu,
  X,
  Award,
  BadgeCheck,
  Wrench,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { useState, useRef } from "react";

/* ─── Types ─────────────────────────────────────────────── */
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/* ─── Motion helper (respects prefers-reduced-motion) ───── */
function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ───────────────────────────────────────────────── */
const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    desc: "Full-service home electrical — from outlet replacements to complete rewires. Safe, code-compliant, and backed by our guarantee.",
    tags: ["Panel upgrades", "Outlet & lighting", "Home rewiring", "Safety inspections"],
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    desc: "Reliable commercial installations and maintenance that keep your business running. We minimise downtime and pass inspection first time.",
    tags: ["Office fit-outs", "Industrial wiring", "Code compliance", "Maintenance contracts"],
  },
  {
    icon: Car,
    title: "EV Charger Installation",
    desc: "Level 1 & 2 charger installation for homes and businesses. Compatible with Tesla, Ford, GM, and all major EV brands.",
    tags: ["Level 1 & 2 chargers", "Panel assessment", "Smart chargers", "Permit handling"],
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    desc: "Upgrade from 60A or 100A to 200A–400A. Essential for modern homes with EV chargers, hot tubs, and high-draw appliances.",
    tags: ["100A – 400A upgrades", "Load calculations", "Safety breakers", "Permit & inspection"],
  },
  {
    icon: AlertTriangle,
    title: "24 / 7 Emergency",
    desc: "Electrical emergencies don't keep business hours — and neither do we. Average response under 60 minutes across Calgary.",
    tags: ["Around-the-clock", "<60 min response", "Power restoration", "Hazard containment"],
  },
  {
    icon: Wrench,
    title: "Electrical Inspections",
    desc: "Pre-purchase, insurance, and code-compliance inspections. Detailed written reports accepted by all major Calgary insurers.",
    tags: ["Pre-purchase", "Insurance docs", "Code compliance", "Written report"],
  },
];

const credentials = [
  { icon: Award, label: "BBB Accredited", sub: "A+ Rating" },
  { icon: BadgeCheck, label: "Red Seal Certified", sub: "Master Electricians" },
  { icon: ShieldCheck, label: "Fully Insured", sub: "$5M Liability" },
  { icon: CheckCircle2, label: "Safety Codes", sub: "Officer Approved" },
];

const stats = [
  { value: "15+", label: "Years in Calgary", pulse: true },
  { value: "2,500+", label: "Projects completed", pulse: false },
  { value: "4.9 ★", label: "Google rating", pulse: true },
  { value: "<60 min", label: "Emergency response", pulse: false },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner · NW Calgary",
    rating: 5,
    text: "Restore Electric upgraded our panel and installed two EV chargers in a single day. The quote was exact — zero surprises on the invoice. I've already referred them to three neighbours.",
  },
  {
    name: "James T.",
    role: "Property Manager · Airdrie",
    rating: 5,
    text: "Called at 9 pm on a Sunday with a tripped main breaker in a multi-unit building. Technician arrived in 45 minutes, diagnosed a faulty breaker, and had power restored before midnight. Exceptional.",
  },
  {
    name: "Linda K.",
    role: "Business Owner · SE Calgary",
    rating: 5,
    text: "Full commercial fit-out for our new office. On schedule, on budget, passed Safety Codes on the first inspection. That last part alone saved us two weeks of delays.",
  },
];

const problems = [
  { icon: AlertTriangle, title: "Tripping breakers", desc: "Overloaded panels struggle with modern power demands — EV chargers, induction ranges, and home offices." },
  { icon: Zap, title: "Outdated wiring", desc: "Aluminum or knob-and-tube wiring is a fire risk that voids home insurance in most Calgary policies." },
  { icon: Clock, title: "Slow EV charging", desc: "Level 1 chargers add just 5 km of range per hour. A panel-aware Level 2 install changes everything." },
];

const areas = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere", "Strathmore", "High River", "Crossfield", "Carstairs", "Olds"];

/* ─── Navbar ─────────────────────────────────────────────── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Services", "About", "Testimonials", "Contact"];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-[#0A0A14]/90 backdrop-blur-md border border-[rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" aria-hidden="true" />
          </div>
          <span className="font-heading font-bold text-white text-base tracking-tight">
            Restore<span className="text-[#F97316]">Electric</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-slate-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer"
            >
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="tel:+14031234567"
          className="hidden md:flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          (403) 123-4567
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2 cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-3 border-t border-white/5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-slate-300 text-sm py-1 cursor-pointer"
            >
              {l}
            </a>
          ))}
          <a
            href="tel:+14031234567"
            className="flex items-center gap-2 bg-[#F97316] text-white font-semibold text-sm px-5 py-2.5 rounded-full w-fit cursor-pointer mt-1"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            (403) 123-4567
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function RestoreElectricPage() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <main className="bg-black text-slate-100 overflow-x-hidden">
      <Navbar />

      {/* ── 1. HERO (ContainerScroll) ── */}
      <section className="pt-20">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center gap-5 px-4">
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 bg-[#1E40AF]/20 border border-[#3B82F6]/30 text-[#93C5FD] text-xs font-medium px-4 py-1.5 rounded-full">
                <BadgeCheck className="w-3.5 h-3.5" aria-hidden="true" />
                Calgary&apos;s Trusted Master Electricians · BBB Accredited
              </div>

              <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight">
                Power Done Right.
                <br />
                <span className="text-[#F97316]">First Time.</span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed font-body">
                Restore Electric delivers safe, permit-pulled, code-compliant electrical work for Calgary homeowners and businesses — backed by 15+ years and 2,500+ completed projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer glow-orange"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="tel:+14031234567"
                  className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 hover:bg-white/5 text-white px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> Call (403) 123-4567
                </a>
              </div>

              {/* Credential pills */}
              <div className="flex flex-wrap justify-center gap-2 mt-1">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-1.5 bg-[#0A0A14] border border-[#1E40AF]/30 hover:border-[#3B82F6]/60 text-slate-300 text-xs px-3 py-1.5 rounded-full transition-colors duration-200 cursor-default"
                  >
                    <c.icon className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                    {c.label} · <span className="text-[#93C5FD]">{c.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1400&q=80"
            alt="Restore Electric master electrician working on a residential panel in Calgary"
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            priority
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ── 2. STATS STRIP ── */}
      <section className="py-12 bg-[#0A0A14] border-y border-[rgba(59,130,246,0.12)]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className={s.pulse ? "metric-pulse" : ""}>
              <div className="font-heading font-black text-3xl md:text-4xl text-[#F97316]">{s.value}</div>
              <div className="text-slate-400 text-xs mt-1 font-body">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. PROBLEM STATEMENT ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">The Problem</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Your Electrical System<br />
              <span className="text-[#F97316]">Can&apos;t Wait</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-body">
              Calgary homes built before 2000 weren&apos;t designed for today&apos;s power demands. Ignoring the warning signs is expensive — and dangerous.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {problems.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] hover:border-[#3B82F6]/40 rounded-2xl p-6 h-full transition-colors duration-200 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                    <p.icon className="w-5 h-5 text-[#F97316]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SOLUTION / SERVICES ── */}
      <section id="services" className="py-24 px-4 bg-[#0A0A14]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">Our Services</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Everything Electrical —<br />
              <span className="text-[#F97316]">Done Right</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-body">
              From a single outlet to a full commercial system. Every job is permit-pulled, inspected, and guaranteed.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.08}>
                <div className="group bg-black border border-[rgba(59,130,246,0.12)] hover:border-[#1E40AF]/50 rounded-2xl p-6 h-full transition-all duration-200 cursor-default glow-blue hover:glow-blue">
                  <div className="w-11 h-11 rounded-xl bg-[#1E40AF]/15 group-hover:bg-[#1E40AF]/25 flex items-center justify-center mb-4 transition-colors duration-200">
                    <s.icon className="w-5 h-5 text-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 font-body">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.tags.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-xs text-slate-500 font-body">
                        <ChevronRight className="w-3 h-3 text-[#F97316] shrink-0" aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. ABOUT + TRUST CREDENTIALS ── */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <FadeUp>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden border border-[rgba(59,130,246,0.2)]">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                  alt="Restore Electric team lead on a Calgary job site"
                  width={900}
                  height={640}
                  className="w-full object-cover h-[480px]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-[#1E40AF] rounded-2xl px-5 py-4 shadow-xl glow-blue">
                <div className="font-heading font-black text-3xl text-white">15+</div>
                <div className="text-[#93C5FD] text-xs font-medium">Years Serving Calgary</div>
              </div>
            </div>
          </FadeUp>

          {/* Text side */}
          <FadeUp delay={0.15}>
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">About Restore Electric</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-5 leading-tight">
              Calgary&apos;s Most Trusted<br />
              <span className="text-[#F97316]">Electrical Contractor</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 font-body">
              Founded in Calgary in 2009, Restore Electric is a locally owned electrical contractor serving homeowners and businesses across Calgary and surrounding communities. We are a BBB Accredited Business with an A+ rating and a team of Red Seal certified master electricians.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 font-body">
              Every job we take is permit-pulled, properly inspected, and backed by our written workmanship warranty. We believe the job isn&apos;t done until it passes the Safety Codes Officer inspection — because your family&apos;s safety depends on it.
            </p>

            {/* Credential grid */}
            <div className="grid grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] hover:border-[#3B82F6]/40 rounded-xl px-4 py-3 transition-colors duration-200 cursor-default"
                >
                  <c.icon className="w-5 h-5 text-[#3B82F6] shrink-0" aria-hidden="true" />
                  <div>
                    <div className="text-white text-xs font-semibold font-heading">{c.label}</div>
                    <div className="text-slate-500 text-xs font-body">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-4 bg-[#0A0A14]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">Customer Reviews</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              What Calgary Homeowners
              <br /><span className="text-[#F97316]">Say About Us</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <div className="bg-black border border-[rgba(59,130,246,0.12)] hover:border-[#1E40AF]/40 rounded-2xl p-6 h-full flex flex-col transition-colors duration-200 cursor-default">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#F97316] text-[#F97316]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-5 font-body">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-white/5 pt-4">
                    <div className="text-white font-semibold text-sm font-heading">{t.name}</div>
                    <div className="text-slate-500 text-xs font-body">{t.role}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SERVICE AREAS ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp>
            <h3 className="font-heading font-bold text-2xl text-white mb-2">Areas We Serve</h3>
            <p className="text-slate-500 text-sm mb-8 font-body">Proudly powering homes and businesses across the Calgary region</p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {areas.map((a) => (
                <span
                  key={a}
                  className="flex items-center gap-1.5 bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] text-slate-300 text-sm px-4 py-2 rounded-full font-body cursor-default"
                >
                  <MapPin className="w-3 h-3 text-[#F97316]" aria-hidden="true" />
                  {a}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── 8. CONTACT CTA ── */}
      <section id="contact" className="py-24 px-4 bg-[#0A0A14]">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">Get In Touch</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Ready to Get Started?<br />
              <span className="text-[#F97316]">We&apos;ll Quote Today</span>
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto leading-relaxed font-body">
              Call us now for a same-day quote, or fill out the form and we&apos;ll respond within one business day. No obligation, no pressure.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {[
                { icon: Phone, label: "Phone", value: "(403) 123-4567", sub: "24 / 7 Emergency Line", href: "tel:+14031234567" },
                { icon: Mail, label: "Email", value: "info@restoreelectric.ca", sub: "Reply within 1 business day", href: "mailto:info@restoreelectric.ca" },
                { icon: MapPin, label: "Location", value: "Calgary, Alberta", sub: "Serving Calgary & region", href: "#" },
                { icon: Clock, label: "Hours", value: "Mon – Fri  7 am – 6 pm", sub: "Sat 8 am – 4 pm · 24/7 Emergency", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 bg-black border border-[rgba(59,130,246,0.12)] hover:border-[#1E40AF]/45 rounded-2xl p-4 transition-colors duration-200 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E40AF]/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-[#3B82F6]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-widest font-body mb-0.5">{item.label}</div>
                    <div className="text-white font-semibold text-sm font-heading">{item.value}</div>
                    <div className="text-slate-500 text-xs font-body">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-black border border-[rgba(59,130,246,0.15)] rounded-2xl p-7">
              <h3 className="font-heading font-bold text-lg text-white mb-6">Request a Free Quote</h3>
              <form
                ref={formRef}
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "fname", label: "First Name", type: "text", placeholder: "John" },
                    { id: "lname", label: "Last Name", type: "text", placeholder: "Smith" },
                  ].map((f) => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label htmlFor={f.id} className="text-slate-400 text-xs font-body">{f.label}</label>
                      <input
                        id={f.id}
                        type={f.type}
                        placeholder={f.placeholder}
                        className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] focus:border-[#3B82F6]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-200 font-body"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-slate-400 text-xs font-body">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(403) 555-0100"
                    className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] focus:border-[#3B82F6]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-200 font-body"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-slate-400 text-xs font-body">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@email.com"
                    className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] focus:border-[#3B82F6]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-200 font-body"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-slate-400 text-xs font-body">Service Needed</label>
                  <select
                    id="service"
                    className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] focus:border-[#3B82F6]/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors duration-200 font-body cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A14]">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title} className="bg-[#0A0A14]">{s.title}</option>
                    ))}
                    <option value="Other" className="bg-[#0A0A14]">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-slate-400 text-xs font-body">Tell Us About Your Project</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="e.g. I need a 200A panel upgrade and two EV charger outlets in my garage…"
                    className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] focus:border-[#3B82F6]/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors duration-200 resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer glow-orange font-heading"
                >
                  Send My Request <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <p className="text-slate-600 text-xs text-center font-body">
                  No obligation. We respond within 1 business day.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[rgba(59,130,246,0.1)] py-12 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            <div className="max-w-xs">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E40AF] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <span className="font-heading font-bold text-white">
                  Restore<span className="text-[#F97316]">Electric</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-body">
                Calgary&apos;s trusted master electricians. Licensed, insured, and ready to help.
              </p>
              <div className="flex gap-2 mt-4">
                {credentials.map((c) => (
                  <div key={c.label} title={`${c.label} · ${c.sub}`} className="w-8 h-8 rounded-lg bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] flex items-center justify-center cursor-default" aria-label={c.label}>
                    <c.icon className="w-4 h-4 text-[#3B82F6]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-14">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 font-heading">Services</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-body">
                  {services.map((s) => (
                    <li key={s.title}>{s.title}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 font-heading">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-body">
                  <li>(403) 123-4567</li>
                  <li>info@restoreelectric.ca</li>
                  <li>Calgary, Alberta</li>
                  <li>Mon–Fri 7am–6pm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-body">
            <span>© {new Date().getFullYear()} Restore Electric Ltd. All rights reserved.</span>
            <span>BBB Accredited · Red Seal Certified · $5M Insured · Calgary, AB</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
