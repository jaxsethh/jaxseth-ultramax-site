"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Crown,
  ExternalLink,
  Gamepad2,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Music,
  Play,
  Code2,
  Video,
  Radio,
  Send,
  Shield,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About", "Gaming", "Socials", "Content", "Community", "Projects", "Contact"];

const stats: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "4+", label: "Main Games", icon: Gamepad2 },
  { value: "10+", label: "Social Platforms", icon: Globe2 },
  { value: "1", label: "Official Brand", icon: Crown },
  { value: "100%", label: "Creator Energy", icon: Zap },
];

const socialLinks = [
  {
    platform: "YouTube",
    label: "Gaming videos, shorts, and creator content",
    href: "https://youtube.com/@jaxsethh",
    icon: Video,
    stat: "Subscribe",
  },
  {
    platform: "Facebook",
    label: "Official updates, posts, and community reach",
    href: "https://facebook.com/jaxsethh",
    icon: Users,
    stat: "Follow",
  },
  {
    platform: "Gmail",
    label: "Business, sponsorship, and contact email",
    href: "mailto:jaxsethh@gmail.com",
    icon: Mail,
    stat: "Email",
  },
  {
    platform: "TikTok",
    label: "Short clips, gaming moments, and creator videos",
    href: "https://tiktok.com/@jaxsethh",
    icon: Play,
    stat: "Watch",
  },
  {
    platform: "Telegram",
    label: "Direct updates and creator community",
    href: "https://t.me/jaxsethh",
    icon: Send,
    stat: "Join",
  },
  {
    platform: "Discord",
    label: "Gaming community and fan server",
    href: "https://discord.gg/nZHkjU9a",
    icon: MessageCircle,
    stat: "Join",
  },
  {
    platform: "GitHub",
    label: "Projects, code, and digital building journey",
    href: "https://github.com/jaxsethh",
    icon: Code2,
    stat: "Code",
  },
  {
    platform: "Spotify",
    label: "Music profile and creator vibe",
    href: "https://open.spotify.com/user/jaxsethh",
    icon: Music,
    stat: "Listen",
  },
  {
    platform: "Twitch",
    label: "Live streaming and creator broadcasts",
    href: "https://twitch.tv/jaxsethh",
    icon: Radio,
    stat: "Live",
  },
];

const games = [
  ["PUBG Mobile", "Battle royale strategy, skill, and competitive gameplay.", Trophy],
  ["Free Fire", "Fast action, survival gameplay, and mobile gaming energy.", Zap],
  ["Mobile Legends", "Team strategy, hero battles, and competitive mobile MOBA gameplay.", Shield],
  ["Roblox", "Creative gaming, fun worlds, and community experiences.", Gamepad2],
] as const;

const contentCards = [
  "Gaming Videos",
  "Live Streams",
  "Short Clips",
  "Tutorials",
  "Funny Moments",
  "Social Posts",
  "Community Updates",
  "Future Projects",
];

const projects = [
  "Gaming Content",
  "Creator Brand",
  "Social Media Growth",
  "Streaming Journey",
  "Community Building",
  "Future Website Upgrades",
];

function SectionTitle({ badge, title, text }: { badge: string; title: string; text: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200"
      >
        <Sparkles className="h-4 w-4 text-cyan-300" />
        {badge}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-black tracking-tight text-white sm:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        viewport={{ once: true }}
        className="mt-5 text-base leading-8 text-slate-300 sm:text-lg"
      >
        {text}
      </motion.p>
    </div>
  );
}

function PremiumButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 ${
        primary ? "button-primary" : "button-secondary"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050510] text-white">
      <div className="orb left-[-120px] top-[-80px] h-72 w-72 bg-red-500" />
      <div className="orb right-[-120px] top-[160px] h-80 w-80 bg-cyan-500" />
      <div className="orb bottom-[15%] left-[20%] h-72 w-72 bg-purple-600" />

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-500 via-purple-500 to-cyan-400 shadow-[0_0_35px_rgba(255,36,77,0.35)]">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-black leading-none tracking-wide">JaxSeth</p>
              <p className="text-xs text-slate-400">Official Creator Hub</p>
            </div>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">
                {item}
              </a>
            ))}
          </div>

          <a href="#socials" className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-cyan-200 lg:inline-flex">
            Follow Me
          </a>

          <button onClick={() => setOpen((value) => !value)} className="rounded-xl border border-white/15 p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-white/10 bg-black/80 px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-2xl px-4 py-3 text-slate-200 hover:bg-white/10">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="bg-grid relative flex min-h-screen items-center px-5 pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-xl">
              <BadgeCheck className="h-4 w-4 text-cyan-300" />
              Official Creator Website
            </div>
            <h1 className="glow-text text-6xl font-black tracking-tighter sm:text-7xl lg:text-8xl">
              Jax<span className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Seth</span>
            </h1>
            <p className="mt-5 text-2xl font-bold text-slate-100 sm:text-3xl">Student · Gamer · Content Creator</p>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300">
              Welcome to the official website of JaxSeth — a student, gamer, and digital creator building a powerful personal brand through gaming, content creation, and social media.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PremiumButton href="#socials" primary>Follow My Socials</PremiumButton>
              <PremiumButton href="#gaming">View Gaming Profile</PremiumButton>
              <PremiumButton href="#contact">Contact Me</PremiumButton>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="float-slow">
            <div className="glass neon-border relative overflow-hidden rounded-[2rem] p-6">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 grid h-32 w-32 place-items-center rounded-[2rem] bg-gradient-to-br from-red-500 via-purple-500 to-cyan-400 shadow-[0_0_60px_rgba(168,85,247,0.35)]">
                  <Gamepad2 className="h-16 w-16" />
                </div>
                <h2 className="text-3xl font-black">JaxSeth Profile</h2>
                <p className="mt-2 text-slate-300">Student & Gaming Creator</p>
                <div className="mt-6 grid gap-3">
                  {[
                    ["Brand", "JaxSeth"],
                    ["Height", "1.80m / 5'11"],
                    ["Status", "Single"],
                    ["Creator Type", "Gaming & Social Media"],
                    ["Main Games", "PUBG · Free Fire · MLBB · Roblox"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <span className="text-sm text-slate-400">{label}</span>
                      <span className="text-right text-sm font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, icon: Icon }) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-[1.5rem] p-6">
              <Icon className="mb-5 h-8 w-8 text-cyan-300" />
              <p className="text-4xl font-black">{value}</p>
              <p className="mt-2 text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Personal Brand" title="About JaxSeth" text="JaxSeth is a student, gamer, and content creator focused on building a strong online identity through gaming, social media, and digital creativity." />
          <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {["Student Life", "Gaming Passion", "Content Creation", "Social Media Growth", "Personal Brand", "Future Creator Journey"].map((item, index) => (
                <motion.div key={item} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} viewport={{ once: true }} className="card-shine rounded-[1.4rem] border border-white/10 p-5">
                  <Star className="mb-4 h-6 w-6 text-red-300" />
                  <h3 className="font-black">{item}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Premium creator identity focused on growth, skill, and future opportunities.</p>
                </motion.div>
              ))}
            </div>
            <div className="glass rounded-[1.7rem] p-6">
              <h3 className="text-2xl font-black">Personal Information</h3>
              <div className="mt-6 grid gap-3">
                {[
                  ["Name", "JaxSeth"],
                  ["Height", "1.80m / 5'11"],
                  ["Status", "Single"],
                  ["Identity", "Student, Gamer, Creator"],
                  ["Favorite Games", "PUBG Mobile, Free Fire, Mobile Legends, Roblox"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-white/[0.06] p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{label}</p>
                    <p className="mt-1 font-bold text-slate-100">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gaming" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Gaming Profile" title="Premium Gaming Showcase" text="Explore JaxSeth's main gaming categories with a professional esports-style presentation." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {games.map(([title, text, Icon], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} viewport={{ once: true }} className="glass group rounded-[1.7rem] p-6 transition hover:-translate-y-2">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-500/80 to-cyan-400/80">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-400">{text}</p>
                <a href="#content" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
                  View Content <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="socials" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Social Media Hub" title="Follow JaxSeth Everywhere" text="All official social media platforms are organized in one clean, premium creator hub." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map(({ platform, label, href, icon: Icon, stat }, index) => (
              <motion.a key={platform} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035 }} viewport={{ once: true }} className="glass group rounded-[1.6rem] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
                    <Icon className="h-7 w-7 text-cyan-300" />
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-200">{stat}</span>
                </div>
                <h3 className="mt-5 text-xl font-black">{platform}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-black/25 px-4 py-3 text-sm text-slate-300">
                  <span className="truncate pr-3">Open official link</span>
                  <ExternalLink className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="content" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Latest Content" title="Content Studio" text="A premium coming-soon content grid ready to connect with YouTube, TikTok, Facebook, and Twitch later." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contentCards.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.035 }} viewport={{ once: true }} className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06]">
                <div className="h-36 bg-gradient-to-br from-red-500/35 via-purple-500/25 to-cyan-400/35" />
                <div className="p-5">
                  <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-200">Coming Soon</span>
                  <h3 className="mt-4 text-lg font-black">{item}</h3>
                  <p className="mt-2 text-sm text-slate-400">Connect platform content and show real creator updates here.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="px-5 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-500/20 via-purple-500/10 to-cyan-500/20 p-8 text-center sm:p-14">
          <Users className="mx-auto mb-6 h-12 w-12 text-cyan-300" />
          <h2 className="text-3xl font-black sm:text-5xl">Join the JaxSeth Community</h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Connect with JaxSeth across gaming, social media, and creator platforms. Follow the journey, join the community, and stay updated with new content.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PremiumButton href="https://t.me/jaxsethh" primary>Join Telegram</PremiumButton>
            <PremiumButton href="https://discord.gg/nZHkjU9a">Join Discord</PremiumButton>
            <PremiumButton href="https://youtube.com/@jaxsethh">Subscribe YouTube</PremiumButton>
            <PremiumButton href="https://tiktok.com/@jaxsethh">Follow TikTok</PremiumButton>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Future Plans" title="Projects & Growth Roadmap" text="Professional project cards for JaxSeth's creator brand, gaming content, streaming journey, and future upgrades." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.04 }} viewport={{ once: true }} className="glass rounded-[1.5rem] p-6">
                <Radio className="mb-5 h-8 w-8 text-red-300" />
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">A premium roadmap item designed for creator growth, content expansion, and long-term brand value.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle badge="Business" title="Collaboration & Sponsorship" text="For sponsorships, gaming partnerships, creator collaborations, brand deals, and professional contact, use the official contact links." />
          <div className="grid gap-4 md:grid-cols-3">
            {["Gaming Collaboration", "Brand Sponsorship", "Social Media Partnership", "Streaming Opportunity", "Esports Opportunity", "Content Collaboration"].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                <h3 className="font-black">{item}</h3>
                <p className="mt-2 text-sm text-slate-400">Open for professional opportunities and creator growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              <Mail className="h-4 w-4 text-cyan-300" /> Contact JaxSeth
            </div>
            <h2 className="text-4xl font-black sm:text-5xl">Send a professional message</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Send a message for collaboration, gaming, content, sponsorship, or professional inquiries.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PremiumButton href="mailto:jaxsethh@gmail.com" primary>Gmail Contact</PremiumButton>
              <PremiumButton href="#socials">Quick Social Links</PremiumButton>
            </div>
          </div>
          <form className="glass rounded-[2rem] p-6" action="mailto:jaxsethh@gmail.com" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="input-premium" name="name" placeholder="Your name" />
              <input className="input-premium" name="email" placeholder="Your email" type="email" />
            </div>
            <input className="input-premium mt-4" name="subject" placeholder="Subject" />
            <textarea className="input-premium mt-4 min-h-40 resize-y" name="message" placeholder="Your message" />
            <button type="submit" className="button-primary mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black text-white transition hover:-translate-y-0.5">
              Send Message <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-black">JaxSeth</p>
            <p className="mt-2 text-sm text-slate-400">Official website of JaxSeth — Student, Gamer, and Content Creator.</p>
            <p className="mt-3 text-sm text-slate-500">© 2026 JaxSeth. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.slice(0, 8).map(({ platform, href, icon: Icon }) => (
              <a key={platform} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" aria-label={platform} className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
