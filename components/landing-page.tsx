"use client";

import { motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Custom Business Systems",
    description:
      "Custom internal software designed specifically for your operations.",
    items: [
      "scheduling systems",
      "booking systems",
      "internal portals",
      "workflow platforms",
    ],
  },
  {
    title: "Internal Tools & Dashboards",
    description: "Custom dashboards and operational tools.",
    items: [
      "employee management tools",
      "analytics dashboards",
      "admin portals",
      "reporting systems",
    ],
  },
  {
    title: "AI Assistants & Knowledge Tools",
    description: "Custom AI-ready tools designed around your internal knowledge.",
    items: [
      "document search assistants",
      "internal AI interfaces",
      "knowledge organization systems",
      "reporting insights",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "Understand your business workflow and identify the highest-impact system gaps.",
  },
  {
    number: "02",
    title: "System Design",
    description:
      "Design a custom solution tailored to your operations.",
  },
  {
    number: "03",
    title: "Rapid Development",
    description:
      "Build the system quickly using modern technologies and an efficient development process.",
  },
  {
    number: "04",
    title: "Deployment & Support",
    description:
      "Launch the system and provide ongoing improvements if needed.",
  },
];

const reasons = [
  "tailored software built for your exact workflow",
  "AI-accelerated development for faster delivery",
  "practical solutions focused on productivity",
  "direct communication with the developer",
  "focus on operational efficiency and ROI",
];

const problems = [
  "scheduling handled manually",
  "repetitive administrative work",
  "disconnected tools and spreadsheets",
  "inefficient workflows",
  "time lost on operational tasks",
];

const projectFeatures = [
  "employee login portal",
  "availability submission",
  "automated schedule generation",
  "centralized management dashboard",
];

const heroPreviewModules = [
  ["System Type", "Scheduling platform concept"],
  ["Primary Views", "Portal, dashboard, review queue"],
  ["Core Inputs", "Availability forms and role assignments"],
  ["Output", "Draft schedule layouts"],
];

const heroPreviewStages = [
  ["Interface planning", "mapped"],
  ["Workflow rules", "structured"],
  ["Admin controls", "outlined"],
];

const workPreviewCards = [
  ["Availability forms", "Portal screen"],
  ["Shift drafts", "Planning view"],
  ["Manager approvals", "Review flow"],
  ["Notifications", "Message layer"],
];

const workPreviewBars = [
  ["Availability collection", "76%"],
  ["Shift logic", "58%"],
  ["Manager review", "64%"],
];

const contactLinks = [
  {
    label: "Email",
    value: "jagarlamudigopichand99@gmail.com",
    href: "mailto:jagarlamudigopichand99@gmail.com",
  },
  {
    label: "Phone",
    value: "(226) 787-8310",
    href: "tel:+12267878310",
  },
  {
    label: "WhatsApp",
    value: "+1 226 787 8310",
    href: "https://wa.me/12267878310",
  },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center">
      <span className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-violet-200/80">
        <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_18px_rgba(196,181,253,0.9)]" />
        {eyebrow}
      </span>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="text-pretty text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}

function ParticleField() {
  const reducedMotion = useReducedMotion();

  const particles = [
    { left: "8%", top: "12%", size: 2, duration: 9, delay: 0.8 },
    { left: "18%", top: "68%", size: 3, duration: 11, delay: 1.6 },
    { left: "29%", top: "24%", size: 2, duration: 8, delay: 2.8 },
    { left: "42%", top: "84%", size: 2, duration: 10, delay: 0.4 },
    { left: "57%", top: "16%", size: 3, duration: 12, delay: 1.2 },
    { left: "69%", top: "62%", size: 2, duration: 9, delay: 2.1 },
    { left: "76%", top: "28%", size: 4, duration: 13, delay: 0.1 },
    { left: "84%", top: "74%", size: 2, duration: 10, delay: 1.9 },
    { left: "91%", top: "18%", size: 3, duration: 9, delay: 2.6 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.18),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.16),transparent_20%),radial-gradient(circle_at_80%_22%,rgba(217,70,239,0.12),transparent_24%),radial-gradient(circle_at_bottom,rgba(7,10,24,0.9),transparent_50%)]" />
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0.5px,transparent_0.7px)] [background-size:34px_34px]" />
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [-10, 10, -10],
                  opacity: [0.25, 0.9, 0.25],
                  scale: [1, 1.35, 1],
                }
          }
          transition={
            reducedMotion
              ? undefined
              : {
                  duration: particle.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: particle.delay,
                }
          }
        />
      ))}
    </div>
  );
}

export default function LandingPage() {
  const reducedMotion = useReducedMotion();

  return (
    <main
      id="home"
      className="relative min-h-screen overflow-x-clip bg-[var(--background)] text-[var(--foreground)]"
    >
      <ParticleField />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(10,12,24,0.72)] px-4 py-3 shadow-[0_20px_60px_rgba(5,8,20,0.35)] backdrop-blur-xl sm:px-6">
            <a
              href="#home"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-white/92"
            >
              Gopi Chand
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="glow-button inline-flex items-center justify-center rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-white"
            >
              Book a Call
            </a>
          </div>
        </header>

        <section className="relative px-4 pb-16 pt-20 sm:px-6 md:pb-24 md:pt-28 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <Reveal className="relative">
              <div className="hero-glow absolute left-1/2 top-12 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),rgba(99,102,241,0.08),transparent_72%)] blur-3xl sm:h-72 sm:w-72 lg:left-56" />
              <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-violet-200/80">
                  <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,0.95)]" />
                  AI Business Systems Developer
                </span>
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
                  Custom AI Systems for Modern Businesses
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                  I design and build custom software, internal tools, and
                  AI-informed business systems that reduce manual work and help
                  teams operate with more clarity and speed.
                </p>
                <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <a
                    href="#contact"
                    className="glow-button inline-flex items-center justify-center rounded-full border border-violet-300/35 bg-violet-400/18 px-6 py-3 text-base font-medium text-white"
                  >
                    Book a Free Consultation
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-base font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    View Services
                  </a>
                </div>
                <p className="mt-10 text-sm uppercase tracking-[0.28em] text-slate-400">
                  Custom systems for real business workflows.
                </p>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="panel-sheen rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_24px_90px_rgba(8,12,28,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,23,43,0.92),rgba(10,12,24,0.88))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Concept Preview
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        Scheduling Engine
                      </p>
                    </div>
                    <div className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-100">
                      Internal system concept
                    </div>
                  </div>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {heroPreviewModules.map(([label, value]) => (
                      <motion.div
                        key={label}
                        whileHover={
                          reducedMotion ? undefined : { y: -4, scale: 1.01 }
                        }
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="rounded-[1.35rem] border border-white/8 bg-white/6 p-4"
                      >
                        <p className="text-sm text-slate-400">{label}</p>
                        <p className="mt-3 text-2xl font-semibold text-white">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>Workflow structure</span>
                      <span className="text-violet-200">planning view</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {heroPreviewStages.map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between rounded-2xl border border-white/7 bg-black/20 px-4 py-3 text-sm"
                        >
                          <span className="text-slate-300">{label}</span>
                          <span className="font-medium text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Reveal className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Services"
              title="AI Solutions That Improve Business Operations"
              description="Custom-built systems designed to eliminate manual work and streamline workflows."
            />
            <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 20 }}
                  whileInView={
                    reducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: reducedMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                  whileHover={reducedMotion ? undefined : { y: -8 }}
                  className="group rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_14px_60px_rgba(4,8,20,0.34)] backdrop-blur-xl transition duration-300 hover:border-violet-300/30 hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]"
                >
                  <div className="flex h-full flex-col">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-sm font-semibold text-violet-100">
                      0{index + 1}
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.85)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="work" className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionIntro
                eyebrow="Featured Work"
                title="Example System Built for a Business"
                description="A premium concept example showing how manual operations can be translated into a streamlined internal platform."
              />
            </Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_24px_90px_rgba(8,12,28,0.42)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-violet-200/80">
                  Scheduling Platform
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  Automated Employee Scheduling System
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  A custom web application concept designed to replace manual
                  scheduling processes. Employees submit availability through a
                  secure portal and managers review structured schedule drafts
                  generated from the collected data.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {projectFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4 text-sm text-slate-100"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl border border-violet-300/12 bg-violet-400/8 px-5 py-4 text-sm text-violet-100/90">
                  Developed as a custom internal system concept for reducing
                  manual scheduling complexity.
                </p>
              </Reveal>

              <Reveal className="panel-sheen rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,34,0.92),rgba(8,10,20,0.92))] p-5 shadow-[0_24px_90px_rgba(8,12,28,0.42)]">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.045] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Dashboard Preview</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        Scheduling Workspace
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-200">
                      Concept interface
                    </span>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-400">
                            Planning status
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-white">
                            Module map
                          </p>
                        </div>
                        <div className="h-16 w-16 rounded-full border border-violet-300/20 bg-[conic-gradient(from_210deg,rgba(168,85,247,0.92),rgba(139,92,246,0.22),rgba(168,85,247,0.92))] p-2">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#090b14] text-sm text-violet-100">
                            Draft
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {workPreviewCards.map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[1.3rem] border border-white/8 bg-white/[0.04] p-4"
                        >
                          <p className="text-sm text-slate-400">{label}</p>
                          <p className="mt-2 text-lg font-medium text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center justify-between text-sm text-slate-300">
                        <span>System architecture</span>
                        <span className="text-violet-200">structured</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {workPreviewBars.map(([label, value]) => (
                          <div key={label}>
                            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-400">
                              <span>{label}</span>
                              <span>{value}</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/8">
                              <div
                                className="h-2 rounded-full bg-[linear-gradient(90deg,rgba(168,85,247,0.9),rgba(129,140,248,0.95))]"
                                style={{
                                  width:
                                    label === "Availability collection"
                                      ? "72%"
                                      : label === "Shift logic"
                                        ? "48%"
                                        : "88%",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-200/80">
                Common Pain Points
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                Many Businesses Still Run on Manual Processes
              </h3>
            </Reveal>
            <Reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,34,0.9),rgba(9,12,22,0.88))] p-8 shadow-[0_20px_60px_rgba(8,12,28,0.36)] backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-[1.35rem] border border-white/8 bg-black/16 px-5 py-4 text-sm text-slate-200"
                  >
                    {problem}
                  </div>
                ))}
              </div>
              <p className="mt-8 text-lg leading-8 text-slate-300">
                Custom software and thoughtfully designed digital systems can
                transform these processes into cleaner, more efficient
                operations.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="process" className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionIntro
                eyebrow="Process"
                title="How I Work"
                description="A clear delivery process focused on speed, precision, and practical business outcomes."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={reducedMotion ? undefined : { opacity: 0, y: 22 }}
                  whileInView={
                    reducedMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.55,
                    delay: reducedMotion ? 0 : index * 0.07,
                  }}
                  whileHover={reducedMotion ? undefined : { y: -6 }}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_16px_60px_rgba(6,9,20,0.34)] backdrop-blur-xl"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-200/80">
                    {step.number}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,19,35,0.92),rgba(8,10,18,0.9))] p-8 shadow-[0_20px_60px_rgba(8,12,28,0.35)] backdrop-blur-xl">
              <SectionIntro
                eyebrow="Why Work With Me"
                title="Why Businesses Choose Custom Systems"
                description="Built around operational realities, not generic templates or off-the-shelf compromises."
              />
            </Reveal>
            <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-4 rounded-[1.35rem] border border-white/8 bg-black/16 px-5 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_20px_rgba(196,181,253,1)]" />
                    <p className="text-base leading-7 text-slate-200">{reason}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Reveal className="rounded-[2rem] border border-violet-300/14 bg-[linear-gradient(180deg,rgba(26,14,44,0.76),rgba(11,13,24,0.94))] p-8 text-center shadow-[0_30px_100px_rgba(76,29,149,0.2)] backdrop-blur-xl sm:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80">
                Pricing
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                Project Pricing
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Every project is different depending on complexity and scope.
              </p>
              <p className="mt-8 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
                $500+
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.28em] text-slate-400">
                Custom systems start from $500+
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200">
                {[
                  "free consultation",
                  "custom quote",
                  "optional maintenance support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-shell scroll-mt-28 px-4 pb-28 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,38,0.92),rgba(7,9,17,0.95))] p-8 shadow-[0_30px_100px_rgba(5,8,20,0.4)] backdrop-blur-xl sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <Reveal>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80">
                  Contact
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Let&apos;s Improve Your Business Workflows
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  If your business relies on manual processes, custom systems
                  and modern internal tools can significantly improve
                  efficiency.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+12267878310"
                    className="glow-button inline-flex items-center justify-center rounded-full border border-violet-300/35 bg-violet-400/18 px-6 py-3 text-base font-medium text-white"
                  >
                    Book a Call
                  </a>
                  <a
                    href="mailto:jagarlamudigopichand99@gmail.com"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-base font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    Send a Message
                  </a>
                </div>
              </Reveal>

              <Reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="space-y-4">
                  {contactLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "WhatsApp" ? "_blank" : undefined}
                      rel={
                        item.label === "WhatsApp"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between rounded-[1.35rem] border border-white/8 bg-black/16 px-5 py-4 transition duration-300 hover:-translate-y-1 hover:border-violet-300/22 hover:bg-white/8"
                    >
                      <div>
                        <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-2 text-base font-medium text-white">
                          {item.value}
                        </p>
                      </div>
                      <span className="text-sm text-violet-200 transition duration-300 group-hover:text-white">
                        Open
                      </span>
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/8 px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold uppercase tracking-[0.24em] text-white/90">
                Gopi Chand
              </p>
              <p className="mt-2">AI Business Systems Developer</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:jagarlamudigopichand99@gmail.com"
                className="transition duration-300 hover:text-white"
              >
                Email
              </a>
              <a
                href="tel:+12267878310"
                className="transition duration-300 hover:text-white"
              >
                Phone
              </a>
              <a
                href="https://wa.me/12267878310"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
          <a
            href="tel:+12267878310"
            className="glow-button flex items-center justify-center rounded-full border border-violet-300/35 bg-[rgba(129,90,255,0.18)] px-6 py-4 text-base font-medium text-white shadow-[0_20px_60px_rgba(91,33,182,0.32)] backdrop-blur-xl"
          >
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}
