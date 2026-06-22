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
    icon: AlertTriangle,
    title: "Emergency Power Restoration",
    desc: "Rapid response for power outages, meter base repairs, and garage wiring failures. Merwan gets your power back fast.",
    tags: ["Power outages", "Meter base repair", "Garage wiring", "Rapid response"],
  },
  {
    icon: Home,
    title: "Basement & Development",
    desc: "Full electrical for basement suites and home developments — roughed-in, inspected, and ready for occupancy permits.",
    tags: ["Basement suites", "Rough-in wiring", "Permit & inspection", "Dev electrical"],
  },
  {
    icon: Building2,
    title: "Commercial Excellence",
    desc: "Trusted by Calgary businesses like Shawarma Ave. Code-compliant commercial installs that pass inspection first time.",
    tags: ["Commercial fit-outs", "Code compliance", "First-pass inspection", "Local businesses"],
  },
  {
    icon: Zap,
    title: "Panel Replacements",
    desc: "Upgrade aging panels to handle modern power demands — EV chargers, hot tubs, and high-draw appliances.",
    tags: ["Panel upgrades", "Load calculations", "Safety breakers", "Permit & inspection"],
  },
  {
    icon: Car,
    title: "Install EV Chargers",
    desc: "Level 1 & 2 EV charger installation for homes and businesses. Compatible with all major vehicle brands.",
    tags: ["Level 1 & 2 chargers", "Panel assessment", "Smart chargers", "Permit handling"],
  },
  {
    icon: Wrench,
    title: "Lighting & Home Upgrades",
    desc: "Pot lights, feature lighting, outdoor fixtures, and full home & business renovation electrical work.",
    tags: ["Pot lights", "Outdoor lighting", "Home renovations", "Business upgrades"],
  },
  {
    icon: ShieldCheck,
    title: "Wire Hot Tub & AC",
    desc: "Safe, dedicated circuit installation for hot tubs, air conditioners, and high-draw equipment.",
    tags: ["Hot tub wiring", "AC circuits", "Dedicated lines", "Safety-code approved"],
  },
  {
    icon: Building2,
    title: "Home & Business Renovations",
    desc: "Full renovation electrical from demo to final inspection. Kitchens, additions, commercial renos — done right.",
    tags: ["Kitchen renos", "Additions", "Commercial renos", "Full scope"],
  },
  {
    icon: CheckCircle2,
    title: "Satisfaction Guaranteed",
    desc: "Every job is backed by Merwan's personal guarantee — code-compliant, inspector-approved, or we make it right.",
    tags: ["Free estimates", "Licensed & insured", "Inspector-approved", "Personal guarantee"],
  },
];

const credentials = [
  { icon: BadgeCheck, label: "Master Electrician", sub: "Merwan — Licensed" },
  { icon: ShieldCheck, label: "Fully Insured", sub: "Licensed & Certified" },
  { icon: Award, label: "5-Star Local Rating", sub: "Calgary Trusted" },
  { icon: CheckCircle2, label: "Inspector-Approved", sub: "First-pass guaranteed" },
];

const stats = [
  { value: "5 ★", label: "5-Star Local Rating", pulse: true },
  { value: "Licensed", label: "Master Electrician", pulse: false },
  { value: "Free", label: "Estimates", pulse: true },
  { value: "24 / 7", label: "Emergency Service", pulse: false },
];

const testimonials = [
  {
    name: "Shawarma Ave",
    role: "Local Business · Calgary",
    rating: 5,
    text: "Merwan handled our full commercial electrical and passed the Safety Codes inspection on the first try. On schedule, on budget, and zero headaches. We won't call anyone else.",
  },
  {
    name: "Ahmad K.",
    role: "Homeowner · NW Calgary",
    rating: 5,
    text: "Called Merwan for an emergency power outage late at night. He showed up fast, found the issue quickly, and had everything restored the same evening. Incredibly professional.",
  },
  {
    name: "Sandra T.",
    role: "Homeowner · Edgemont, Calgary",
    rating: 5,
    text: "Merwan wired our basement suite and installed an EV charger. Free estimate, fair price, passed inspection first time. He genuinely cares about doing the job right.",
  },
];

const problems = [
  { icon: AlertTriangle, title: "Tripping breakers", desc: "Overloaded panels struggle with modern power demands — EV chargers, induction ranges, and home offices." },
  { icon: Zap, title: "Outdated wiring", desc: "Aluminum or knob-and-tube wiring is a fire risk that voids home insurance in most Calgary policies." },
  { icon: Clock, title: "Slow EV charging", desc: "Level 1 chargers add just 5 km of range per hour. A panel-aware Level 2 install changes everything." },
];

const areas = ["NW Calgary (Edgemont)", "NE Calgary", "Downtown Calgary", "South Calgary", "All Calgary Communities & Beyond"];

const faqs = [
  { q: "What areas do you serve?", a: "All of Calgary — NW, NE, Downtown, South — and surrounding communities. If you're unsure, just call." },
  { q: "Do you offer emergency power restoration?", a: "Yes. Merwan provides rapid response for power outages, meter base failures, and urgent electrical issues." },
  { q: "Do you handle commercial projects?", a: "Absolutely. Restore Electric is trusted by local businesses like Shawarma Ave for full commercial electrical work." },
  { q: "Are you licensed and insured?", a: "Yes — Merwan is a fully licensed, insured, and certified Master Electrician operating in Calgary, AB." },
  { q: "Do you offer free estimates?", a: "Yes. Contact Merwan for a free, no-obligation estimate on any residential or commercial project." },
];

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
          href="tel:+14034723080"
          className="hidden md:flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors duration-200 cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5" aria-hidden="true" />
          (403) 472-3080
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
            href="tel:+14034723080"
            className="flex items-center gap-2 bg-[#F97316] text-white font-semibold text-sm px-5 py-2.5 rounded-full w-fit cursor-pointer mt-1"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            (403) 472-3080
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
                Calgary&apos;s Trusted Electrical Experts · Master Electrician Merwan
              </div>

              <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-[5.5rem] text-white leading-[1.05] tracking-tight">
                Power Done Right.
                <br />
                <span className="text-[#F97316]">First Time.</span>
              </h1>

              <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed font-body">
                Master Electrician Merwan delivers code-compliant, inspector-approved electrical work for Calgary homes and businesses. Free estimates. Emergency service available.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer glow-orange"
                >
                  Get a Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="tel:+14034723080"
                  className="flex items-center justify-center gap-2 border border-white/15 hover:border-white/35 hover:bg-white/5 text-white px-8 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> Call (403) 472-3080
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
                <div className="font-heading font-black text-3xl text-white">5 ★</div>
                <div className="text-[#93C5FD] text-xs font-medium">5-Star Calgary Rating</div>
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
              Restore Electric is a locally owned electrical contractor based in Edgemont, NW Calgary. Master Electrician Merwan serves homeowners and businesses across all Calgary communities — bringing licensed, insured, and code-compliant work to every project.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 font-body">
              Every job is permit-pulled, properly inspected, and backed by a personal satisfaction guarantee. Merwan believes the job isn&apos;t done until it passes the Safety Codes Officer inspection the first time — because your family&apos;s safety depends on it.
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

      {/* ── 8. FAQ ── */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <p className="text-[#3B82F6] text-sm font-semibold uppercase tracking-widest mb-3 font-body">FAQ</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4">
              Common Questions
            </h2>
          </FadeUp>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="bg-[#0A0A14] border border-[rgba(59,130,246,0.15)] hover:border-[#3B82F6]/35 rounded-2xl px-6 py-5 transition-colors duration-200 cursor-default">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1E40AF]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm mb-1.5">{faq.q}</p>
                      <p className="text-slate-400 text-sm leading-relaxed font-body">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT CTA ── */}
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
                { icon: Phone, label: "Phone", value: "(403) 472-3080", sub: "24 / 7 Emergency Service", href: "tel:+14034723080" },
                { icon: Mail, label: "Email", value: "restoreelectricyyc@gmail.com", sub: "Free estimates — reply same day", href: "mailto:restoreelectricyyc@gmail.com" },
                { icon: MapPin, label: "Based In", value: "Edgemont, NW Calgary", sub: "Serving all Calgary & beyond", href: "#" },
                { icon: Clock, label: "Availability", value: "Mon – Sat  7 am – 7 pm", sub: "24 / 7 Emergency Response", href: "#" },
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
                  {["Panel Upgrades", "EV Chargers", "Basement Dev", "Emergency Repair", "Garage Wiring", "Hot Tub & AC Wiring"].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3 font-heading">Contact</h4>
                <ul className="space-y-2 text-sm text-slate-500 font-body">
                  <li>(403) 472-3080</li>
                  <li>restoreelectricyyc@gmail.com</li>
                  <li>Edgemont, NW Calgary</li>
                  <li>Mon–Sat 7am–7pm</li>
                  <li>24/7 Emergency</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-body">
            <span>© {new Date().getFullYear()} Restore Electric Ltd. All rights reserved.</span>
            <span>Licensed Master Electrician · Fully Insured · Edgemont, Calgary, AB</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
