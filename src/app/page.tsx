"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import {
  Phone, Mail, MapPin, ExternalLink, Menu, X, ChevronRight,
  Star, Award, Users, Building2, CheckCircle2, ArrowRight,
  Home, Paintbrush, Layers, MessageSquare, Sparkles,
} from "lucide-react";

/* ─── Motion helper ──────────────────────────────────────── */
function Reveal({
  children, delay = 0, className = "", direction = "up",
}: {
  children: React.ReactNode; delay?: number; className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const reduce = useReducedMotion();
  const from =
    reduce || direction === "none" ? { opacity: 0 }
    : direction === "left" ? { opacity: 0, x: -40 }
    : direction === "right" ? { opacity: 0, x: 40 }
    : { opacity: 0, y: 36 };
  return (
    <motion.div
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
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
    title: "Residential Wallpaper Installation",
    desc: "Transform any room with professional wallpaper installation — precise, clean, worry-free. Charlie handles the measurement, prep, and installation so you don't have to.",
  },
  {
    icon: Layers,
    title: "Mural Installation",
    desc: "Custom mural installation for homes and commercial spaces. Seamless, stunning, and built to last — residential feature walls to full hotel lobbies.",
  },
  {
    icon: Building2,
    title: "Commercial Vinyl Installation",
    desc: "Large-scale commercial vinyl wall covering for offices, hotels, and condos. Propaper handles projects of any scope with the precision commercial clients require.",
  },
  {
    icon: MessageSquare,
    title: "Free Consultation",
    desc: "Not sure what to buy or how much wallpaper you need? Charlie provides free consultation and supplier recommendations — no obligation.",
  },
  {
    icon: Paintbrush,
    title: "Professional Painting",
    desc: "Professional painting services to complement your wallpaper installation. One specialist, one seamless project.",
  },
];

const differentiators = [
  {
    icon: Award,
    title: "Calgary's Most Experienced",
    desc: "Thousands of installations completed since 2013. No other wallpaper installer in Calgary has more experience.",
  },
  {
    icon: Sparkles,
    title: "Specialist Installers",
    desc: "Not a general painter who does wallpaper on the side. Charlie and his team do nothing else — and it shows.",
  },
  {
    icon: Building2,
    title: "Commercial Capability",
    desc: "Hotels, offices, and condos trust Propaper for large-scale commercial projects that demand precision and reliability.",
  },
  {
    icon: CheckCircle2,
    title: "Worry-Free Process",
    desc: "Free consultation, expert advice, clean installation. Charlie makes the entire process simple — from the first call to the final reveal.",
  },
];

const reviews = [
  {
    name: "Lori E.",
    text: "They are a great company — great work and great people. I will be using them for future wallpapering projects.",
    stars: 5,
    type: "Homeowner",
  },
  {
    name: "Killeen K.",
    text: "Charlie provided great advice, made sure I had the right amount of paper in advance, and did a beautiful job.",
    stars: 5,
    type: "Homeowner",
  },
  {
    name: "Amy K.",
    text: "We highly recommend and use for all our design jobs — very talented and professional, we are always happy with the outcome.",
    stars: 5,
    type: "Interior Designer",
  },
  {
    name: "Jassy C.",
    text: "Fast, efficient, and friendly workers. Very reasonably priced — I wish I had called them sooner instead of trying to wallpaper myself.",
    stars: 5,
    type: "Homeowner",
  },
  {
    name: "Andrew F.",
    text: "Charlie did an incredible job on our feature wall. The attention to detail and pattern matching was flawless. Highly recommend.",
    stars: 5,
    type: "Homeowner",
  },
  {
    name: "Karen S.",
    text: "Professional from start to finish. Charlie's advice on product selection alone was worth it — the finished result is stunning.",
    stars: 4,
    type: "Homeowner",
  },
  {
    name: "Clinton S.",
    text: "Used Propaper for our office renovation. Large-scale commercial install done on time and on budget. Will use again.",
    stars: 5,
    type: "Commercial Client",
  },
  {
    name: "Fran T.",
    text: "Beautiful work on our staircase mural. Charlie was meticulous and the final result exceeded our expectations completely.",
    stars: 5,
    type: "Homeowner",
  },
];

const portfolioImages = [
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", label: "Residential Feature Wall" },
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", label: "Living Room Installation" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", label: "Commercial Project" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", label: "Bathroom Mural" },
  { src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80", label: "Bedroom Wallpaper" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", label: "Staircase Installation" },
  { src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80", label: "Hotel Project" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", label: "Custom Mural" },
];

const areas = ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere"];

/* ─── Sticky Header ──────────────────────────────────────── */
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/98 shadow-sm backdrop-blur-md" : "bg-white/95 backdrop-blur-sm"
      } border-b border-[#E5DDD6]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer shrink-0">
          <div className="w-8 h-8 bg-[#1C1917] rounded flex items-center justify-center">
            <Layers className="w-4 h-4 text-[#CA8A04]" aria-hidden="true" />
          </div>
          <div>
            <div className="font-heading font-bold text-[#1C1917] text-sm leading-tight tracking-wide">PROPAPER</div>
            <div className="text-[#78716C] text-[9px] tracking-widest uppercase leading-tight">Wallpaper Services</div>
          </div>
        </a>

        {/* Phone — center */}
        <a
          href="tel:+15877774131"
          className="hidden sm:flex items-center gap-2 text-[#1C1917] font-semibold text-sm cursor-pointer hover:text-[#CA8A04] transition-colors duration-200 font-body"
        >
          <Phone className="w-4 h-4 text-[#CA8A04]" aria-hidden="true" />
          587-777-4131
        </a>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 bg-[#CA8A04] hover:bg-[#B07A03] text-white font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200 cursor-pointer hover:scale-105 font-body"
          >
            Get a Free Quote
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden text-[#1C1917] p-2 cursor-pointer rounded hover:bg-[#F2EDE8] transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="sm:hidden bg-white border-t border-[#E5DDD6] px-4 pb-4 pt-3 flex flex-col gap-3"
        >
          {["Services", "Portfolio", "Reviews", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="text-[#44403C] text-sm py-1 cursor-pointer font-body">{l}</a>
          ))}
          <a href="tel:+15877774131"
            className="flex items-center gap-2 text-[#1C1917] font-semibold text-sm font-body">
            <Phone className="w-4 h-4 text-[#CA8A04]" aria-hidden="true" /> 587-777-4131
          </a>
          <a href="#contact"
            className="bg-[#CA8A04] text-white font-semibold text-sm px-5 py-2.5 rounded text-center cursor-pointer font-body">
            Get a Free Quote
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  } as const;
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  } as const;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?w=1800&q=85"
          alt="Propaper — professional wallpaper installation in Calgary"
          fill className="object-cover object-center" priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6 py-24"
      >
        <motion.div variants={item}>
          <span className="inline-block border border-[#CA8A04]/60 text-[#CA8A04] text-xs tracking-[0.2em] uppercase px-4 py-1.5 font-body">
            Established 2013 · Calgary, AB
          </span>
        </motion.div>

        <motion.h1 variants={item}
          className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight">
          Calgary&apos;s Most Experienced<br />
          <span className="text-[#CA8A04]">Wallpaper & Mural Installers</span>
        </motion.h1>

        <motion.p variants={item}
          className="text-stone-300 text-lg md:text-xl max-w-2xl leading-relaxed font-body font-light">
          Residential. Commercial. Hotels. Condos. Murals.<br />
          Worry-Free Installation — Every Time.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="#contact"
            className="flex items-center justify-center gap-2 bg-[#CA8A04] hover:bg-[#B07A03] text-white font-semibold px-9 py-4 transition-all duration-200 cursor-pointer hover:scale-105 shadow-lg shadow-amber-900/30 font-body">
            Get My Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="tel:+15877774131"
            className="flex items-center justify-center gap-2 border border-white/40 hover:border-white/70 hover:bg-white/8 text-white font-semibold px-9 py-4 transition-all duration-200 cursor-pointer backdrop-blur-sm font-body">
            <Phone className="w-4 h-4" aria-hidden="true" /> Call Charlie: 587-777-4131
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div variants={item}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-3 text-stone-400 text-xs font-body tracking-wide">
          {[
            "Operating Since 2013",
            "Thousands of Jobs Completed",
            "4.3 Stars — 17 Google Reviews",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#CA8A04]" aria-hidden="true" />
              {t}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={item}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="mt-10 flex flex-col items-center gap-2 text-stone-500"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#CA8A04]" />
          <span className="text-[10px] tracking-widest uppercase font-body">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────── */
export default function PropaperPage() {
  return (
    <main className="bg-[#FAFAF9] text-[#1C1917] overflow-x-hidden">
      <Header />
      <Hero />

      {/* ── SOCIAL PROOF BAR ── */}
      <section className="py-14 bg-[#1C1917]">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Google badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex gap-0.5">
                {[1,2,3,4].map((i) => <Star key={i} className="w-5 h-5 fill-[#CA8A04] text-[#CA8A04]" aria-hidden="true" />)}
                <Star className="w-5 h-5 fill-[#CA8A04]/50 text-[#CA8A04]" aria-hidden="true" />
              </div>
              <div>
                <div className="text-white font-semibold text-sm font-heading">4.3 Stars on Google</div>
                <div className="text-stone-400 text-xs font-body">17 Reviews</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            {/* Review snippets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
              {[
                { text: "Great work and great people. I will be using them for future projects.", name: "Lori E." },
                { text: "We use Propaper for all our design jobs — always happy with the outcome.", name: "Amy K., Interior Designer" },
                { text: "Very reasonably priced — I wish I had called them sooner.", name: "Jassy C." },
              ].map((r) => (
                <div key={r.name} className="border-l-2 border-[#CA8A04]/40 pl-4">
                  <p className="text-stone-300 text-xs leading-relaxed font-body italic">&ldquo;{r.text}&rdquo;</p>
                  <p className="text-stone-500 text-xs mt-1.5 font-body">— {r.name}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROPAPER DIFFERENCE ── */}
      <section className="py-24 px-4 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="max-w-2xl mb-16">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">The Propaper Difference</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] leading-tight gold-line">
              Why Calgary Homeowners & Contractors Choose Propaper
            </h2>
          </Reveal>

          {/* Pull quote */}
          <Reveal delay={0.1} className="mb-14">
            <blockquote className="bg-[#1C1917] rounded-none p-8 md:p-10 max-w-3xl border-l-4 border-[#CA8A04]">
              <p className="text-stone-200 text-lg md:text-xl font-body font-light leading-relaxed italic mb-4">
                &ldquo;Fast, efficient, and friendly workers. Very reasonably priced — I wish I had called them sooner instead of trying to wallpaper myself.&rdquo;
              </p>
              <footer className="text-[#CA8A04] text-xs tracking-widest uppercase font-body">— Jassy C., Calgary Homeowner</footer>
            </blockquote>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.1}>
                <div className="group p-7 bg-white border border-[#E5DDD6] hover:border-[#CA8A04]/40 hover:shadow-lg transition-all duration-300 cursor-default h-full">
                  <div className="w-10 h-10 bg-[#FEF3C7] flex items-center justify-center mb-5 group-hover:bg-[#CA8A04]/15 transition-colors duration-300">
                    <d.icon className="w-5 h-5 text-[#CA8A04]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#1C1917] text-sm mb-3 leading-snug">{d.title}</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-body">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-4 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Services</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] leading-tight">
              Every Wallpaper & Mural Service<br />Done By Specialists
            </h2>
            <div className="w-12 h-0.5 bg-[#CA8A04] mx-auto mt-5" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={Math.floor(i / 3) * 0.08 + (i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E5DDD6] p-7 group cursor-default h-full flex flex-col"
                >
                  <div className="w-10 h-10 bg-[#FEF3C7] flex items-center justify-center mb-5 group-hover:bg-[#CA8A04]/20 transition-colors duration-300">
                    <s.icon className="w-5 h-5 text-[#CA8A04]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#1C1917] text-sm mb-3">{s.title}</h3>
                  <p className="text-[#78716C] text-sm leading-relaxed font-body flex-1">{s.desc}</p>
                  <a href="#contact"
                    className="mt-5 flex items-center gap-1.5 text-[#CA8A04] text-xs font-semibold font-body hover:gap-3 transition-all duration-200 cursor-pointer uppercase tracking-wider">
                    Get a Quote <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="py-24 px-4 bg-[#1C1917]">
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Our Clients</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Trusted By Calgary&apos;s Best
            </h2>
            <p className="text-stone-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body font-light mb-14">
              Propaper works alongside award-winning contractors and interior designers across Calgary. Interior designers rely on Charlie and his team for all their client design jobs — from single feature walls to complete hotel projects.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Home, title: "Homeowners", desc: "Calgary homeowners who want professional results without the stress — done right the first time." },
              { icon: Users, title: "Interior Designers", desc: "Award-winning interior designers who trust Charlie with every client project, every time." },
              { icon: Building2, title: "Commercial & Hospitality", desc: "Hotels, offices, and condos requiring precision, scale, and a flawless finish." },
            ].map((w, i) => (
              <Reveal key={w.title} delay={i * 0.12}>
                <div className="border border-white/10 hover:border-[#CA8A04]/40 p-8 transition-all duration-300 cursor-default group">
                  <div className="w-10 h-10 bg-white/5 group-hover:bg-[#CA8A04]/10 flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                    <w.icon className="w-5 h-5 text-[#CA8A04]" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-3">{w.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed font-body">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 px-4 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">How It Works</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] leading-tight">
              Simple. Worry-Free. Done Right.
            </h2>
            <div className="w-12 h-0.5 bg-[#CA8A04] mx-auto mt-5" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[calc(16.7%+2rem)] right-[calc(16.7%+2rem)] h-px bg-[#E5DDD6]" />

            {[
              { step: "01", title: "Free Consultation", desc: "Charlie advises on wallpaper types, quantities, and supplier recommendations — no obligation, no guesswork." },
              { step: "02", title: "Professional Installation", desc: "Precise, clean, and efficient. Charlie and his team handle every detail from surface prep to final trim." },
              { step: "03", title: "Beautiful Results", desc: "Every job completed to the standard Calgary's best interior designers trust. Guaranteed, every time." },
            ].map((p, i) => (
              <Reveal key={p.step} delay={i * 0.15} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#1C1917] flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-heading font-bold text-[#CA8A04] text-lg">{p.step}</span>
                </div>
                <h3 className="font-heading font-semibold text-[#1C1917] mb-3">{p.title}</h3>
                <p className="text-[#78716C] text-sm leading-relaxed font-body">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 px-4 bg-[#F2EDE8]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Our Work</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] mb-2 leading-tight">
              Thousands of Installations Across Calgary
            </h2>
            <div className="w-12 h-0.5 bg-[#CA8A04] mx-auto mt-5 mb-4" />
            <p className="text-[#78716C] font-body text-sm">Residential · Commercial · Murals · Hotels · Condos</p>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {portfolioImages.map((img, i) => (
              <Reveal key={img.label} delay={(i % 4) * 0.07} className={i === 0 ? "col-span-2 row-span-2" : ""}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden bg-[#E5DDD6] cursor-default group"
                  style={{ paddingBottom: i === 0 ? "100%" : "75%" }}
                >
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-body tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {img.label}
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <a
              href="https://www.instagram.com/propaperyyc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#1C1917] hover:bg-[#1C1917] hover:text-white text-[#1C1917] font-semibold text-sm px-8 py-3.5 transition-all duration-200 cursor-pointer font-body"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              See More on ExternalLink @propaperyyc
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-24 px-4 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Google Reviews</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] leading-tight">
              4.3 Stars — What Calgary Says
            </h2>
            <div className="w-12 h-0.5 bg-[#CA8A04] mx-auto mt-5" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 4) * 0.08}>
                <div className="bg-white border border-[#E5DDD6] hover:border-[#CA8A04]/30 p-6 h-full flex flex-col transition-all duration-200 cursor-default group">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-[#CA8A04] text-[#CA8A04]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[#44403C] text-sm leading-relaxed font-body flex-1 italic mb-5">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="border-t border-[#E5DDD6] pt-4">
                    <div className="font-heading font-semibold text-[#1C1917] text-xs">{r.name}</div>
                    <div className="text-[#78716C] text-xs font-body">{r.type}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center">
            <p className="text-[#78716C] font-body text-sm mb-6">Ready to add your review to the list?</p>
            <a href="#contact"
              className="inline-flex items-center gap-2 bg-[#CA8A04] hover:bg-[#B07A03] text-white font-semibold px-9 py-4 transition-all duration-200 cursor-pointer hover:scale-105 font-body">
              Get Your Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-16 px-4 bg-[#F2EDE8] border-y border-[#E5DDD6]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Coverage</p>
            <h3 className="font-heading font-semibold text-2xl text-[#1C1917] mb-8">
              Serving Calgary & Surrounding Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-2 bg-white border border-[#E5DDD6] text-[#44403C] text-sm px-5 py-2.5 font-body cursor-default"
                >
                  <MapPin className="w-3 h-3 text-[#CA8A04]" aria-hidden="true" />
                  {a}
                </motion.span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT / QUOTE FORM ── */}
      <section id="contact" className="py-24 px-4 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-[#CA8A04] text-xs tracking-[0.2em] uppercase font-body mb-4">Free Quote</p>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#1C1917] leading-tight">
              Get Your Free Wallpaper<br />Installation Quote From Charlie
            </h2>
            <div className="w-12 h-0.5 bg-[#CA8A04] mx-auto mt-5" />
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <Reveal direction="left" className="lg:col-span-2 flex flex-col gap-5 justify-start">
              <p className="text-[#78716C] font-body leading-relaxed text-sm">
                Call or message Charlie directly. He personally handles every project consultation — no sales team, no middlemen.
              </p>

              {[
                { icon: Phone, label: "Phone", value: "587-777-4131", sub: "Call or text Charlie directly", href: "tel:+15877774131" },
                { icon: ExternalLink, label: "ExternalLink", value: "@propaperyyc", sub: "See our latest installations", href: "https://www.instagram.com/propaperyyc" },
                { icon: MapPin, label: "Location", value: "2120 18 St NW, Calgary, AB", sub: "Serving Calgary & region", href: "#" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === ExternalLink ? "_blank" : undefined}
                  rel={item.icon === ExternalLink ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-start gap-4 border border-[#E5DDD6] hover:border-[#CA8A04]/40 bg-white p-4 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-9 h-9 bg-[#FEF3C7] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[#CA8A04]" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-[#78716C] text-[10px] uppercase tracking-widest font-body mb-0.5">{item.label}</div>
                    <div className="text-[#1C1917] font-semibold text-sm font-heading">{item.value}</div>
                    <div className="text-[#78716C] text-xs font-body">{item.sub}</div>
                  </div>
                </motion.a>
              ))}

              {/* Trust note */}
              <div className="bg-[#1C1917] p-6 mt-2">
                <p className="text-stone-300 text-xs leading-relaxed font-body italic">
                  &ldquo;We highly recommend and use for all our design jobs — very talented and professional, we are always happy with the outcome.&rdquo;
                </p>
                <p className="text-[#CA8A04] text-xs mt-3 font-body uppercase tracking-wider">— Amy K., Interior Designer</p>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right" delay={0.1} className="lg:col-span-3">
              <div className="bg-white border border-[#E5DDD6] p-8">
                <h3 className="font-heading font-bold text-lg text-[#1C1917] mb-6">Request Your Free Quote</h3>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith", colSpan: true },
                    ].map((f) => (
                      <div key={f.id} className={`flex flex-col gap-1.5 ${f.colSpan ? "sm:col-span-2" : ""}`}>
                        <label htmlFor={f.id} className="text-[#78716C] text-xs uppercase tracking-wider font-body">{f.label}</label>
                        <input id={f.id} type={f.type} placeholder={f.placeholder}
                          className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] placeholder-stone-400 outline-none transition-colors duration-200 font-body rounded-none" />
                      </div>
                    ))}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[#78716C] text-xs uppercase tracking-wider font-body">Phone</label>
                      <input id="phone" type="tel" placeholder="587-000-0000"
                        className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] placeholder-stone-400 outline-none transition-colors duration-200 font-body" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[#78716C] text-xs uppercase tracking-wider font-body">Email</label>
                      <input id="email" type="email" placeholder="jane@email.com"
                        className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] placeholder-stone-400 outline-none transition-colors duration-200 font-body" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="project-type" className="text-[#78716C] text-xs uppercase tracking-wider font-body">Project Type</label>
                    <select id="project-type"
                      className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] outline-none transition-colors duration-200 font-body cursor-pointer">
                      <option value="">Select project type…</option>
                      {["Residential", "Commercial", "Hotel & Hospitality", "Mural", "Painting", "Other"].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="text-[#78716C] text-xs uppercase tracking-wider font-body">Project Details</label>
                    <textarea id="details" rows={4}
                      placeholder="e.g. Feature wall in living room, approx. 12ft wide × 9ft tall, floral pattern…"
                      className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] placeholder-stone-400 outline-none transition-colors duration-200 resize-none font-body" />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-method" className="text-[#78716C] text-xs uppercase tracking-wider font-body">Preferred Contact Method</label>
                    <select id="contact-method"
                      className="border border-[#E5DDD6] focus:border-[#CA8A04]/60 bg-[#FAFAF9] px-4 py-3 text-sm text-[#1C1917] outline-none transition-colors duration-200 font-body cursor-pointer">
                      <option value="">Select preference…</option>
                      {["Phone Call", "Text Message", "Email"].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 bg-[#CA8A04] hover:bg-[#B07A03] text-white font-bold py-4 transition-colors duration-200 cursor-pointer font-heading tracking-wide shadow-lg shadow-amber-900/20 mt-1"
                  >
                    Send My Quote Request <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </motion.button>

                  <p className="text-stone-400 text-xs text-center font-body">
                    Charlie responds within one business day — usually same day.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1C1917] border-t border-white/5 py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-[#CA8A04] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#1C1917]" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm tracking-wide">PROPAPER</div>
                  <div className="text-stone-500 text-[9px] tracking-widest uppercase">Wallpaper Services</div>
                </div>
              </div>
              <p className="text-stone-500 text-xs leading-relaxed font-body mb-5">
                Calgary&apos;s Most Experienced Wallpaper & Mural Installers — Thousands of Jobs Completed Since 2013.
              </p>
              <a href="https://www.instagram.com/propaperyyc" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-400 hover:text-[#CA8A04] text-xs transition-colors duration-200 cursor-pointer font-body">
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> @propaperyyc
              </a>
            </div>

            {/* Links */}
            <div className="flex gap-14">
              <div>
                <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 font-heading">Navigate</h4>
                <ul className="space-y-2.5">
                  {["Home", "Services", "Portfolio", "Reviews", "Contact"].map((l) => (
                    <li key={l}>
                      <a href={`#${l.toLowerCase()}`}
                        className="text-stone-500 hover:text-[#CA8A04] text-xs font-body transition-colors duration-200 cursor-pointer">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold text-xs tracking-widest uppercase mb-4 font-heading">Contact</h4>
                <ul className="space-y-2.5 text-xs text-stone-500 font-body">
                  <li>
                    <a href="tel:+15877774131" className="hover:text-[#CA8A04] transition-colors cursor-pointer">587-777-4131</a>
                  </li>
                  <li>2120 18 St NW</li>
                  <li>Calgary, AB</li>
                  <li>
                    <a href="https://propaper.ca" target="_blank" rel="noopener noreferrer"
                      className="hover:text-[#CA8A04] transition-colors cursor-pointer">propaper.ca</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600 font-body">
            <span>© {new Date().getFullYear()} Propaper Wallpaper Services — Calgary, AB</span>
            <span>Operating Since 2013 · Thousands of Jobs Completed</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
