"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Who It's For", href: "#fit" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Custom internal systems",
    description:
      "Software built around your real workflow so your team spends less time patching together spreadsheets, inboxes, and disconnected tools.",
    items: [
      "scheduling and booking systems",
      "operations portals",
      "workflow automation dashboards",
      "internal approval and review tools",
    ],
  },
  {
    title: "Dashboards and admin tools",
    description:
      "Clear operational visibility for owners and managers who need reliable data, approvals, and reporting in one place.",
    items: [
      "team and staff management tools",
      "analytics dashboards",
      "admin portals",
      "reporting and exception tracking",
    ],
  },
  {
    title: "AI assistants and knowledge tools",
    description:
      "Practical AI features that help your team search documents, organize information, and speed up routine decisions.",
    items: [
      "document search assistants",
      "internal AI workspaces",
      "knowledge organization systems",
      "reporting insights and summaries",
    ],
  },
];

const fitItems = [
  "Service businesses running too much of the day through calls, texts, sheets, and manual follow-up",
  "Owners and operators who need a system tailored to how their team already works",
  "Teams that want AI where it is useful, not bolted on as a gimmick",
];

const processSteps = [
  {
    number: "01",
    title: "Strategy call",
    description:
      "We map your current workflow, bottlenecks, and highest-value opportunities first.",
  },
  {
    number: "02",
    title: "Scope and system design",
    description:
      "You get a practical plan for the simplest system that solves the right problem.",
  },
  {
    number: "03",
    title: "Build and refine",
    description:
      "The system is built quickly, reviewed with you, and adjusted around real usage.",
  },
  {
    number: "04",
    title: "Launch and support",
    description:
      "Once it is live, P2PLabs can continue improving it as your operations evolve.",
  },
];

const reasons = [
  "Direct access to the person designing and building the system",
  "Custom delivery instead of forcing your business into a generic SaaS template",
  "Clear scope, clear communication, and a real contact method",
  "AI used where it creates leverage, not noise",
];

const problems = [
  "Scheduling handled manually across calls, texts, and spreadsheets",
  "Repetitive admin work that slows down the team every week",
  "Disconnected tools that create errors and duplicate effort",
  "No single system for owners, staff, and managers to work from",
];

const outcomes = [
  "Less manual admin",
  "Faster internal response times",
  "Clearer team accountability",
  "More reliable day-to-day operations",
];

const heroPreviewModules = [
  ["Built for", "Service teams and operators"],
  ["Typical projects", "Dashboards, portals, automations"],
  ["Primary goal", "Reduce manual workflow friction"],
  ["Next step", "Book a strategy call"],
];

const heroPreviewStages = [
  ["Workflow mapping", "done first"],
  ["System scope", "kept practical"],
  ["Launch path", "clearly defined"],
];

const trustPoints = [
  ["Direct founder contact", "Email, phone, and WhatsApp are all available"],
  ["Clear engagement path", "Free strategy call before any project scope is defined"],
  ["Problem-first approach", "Every engagement starts by defining the bottleneck before the build"],
  ["Custom fit", "Built around your process instead of forcing a template"],
];

const faqItems = [
  {
    question: "What kind of businesses is P2PLabs best for?",
    answer:
      "P2PLabs is best for service businesses and operators that rely on manual coordination, internal admin work, or disconnected tools that slow the team down.",
  },
  {
    question: "What does P2PLabs mean?",
    answer:
      "P2PLabs stands for Problem to Product Labs. The focus is turning real operational problems into practical products, systems, and workflows your team can use every day.",
  },
  {
    question: "Do you only build AI products?",
    answer:
      "No. Many projects start with better workflow software, dashboards, or internal systems. AI is added when it creates a real operational advantage.",
  },
  {
    question: "What should I do if I am not sure what system I need?",
    answer:
      "Book the strategy call. The first step is defining the problem, the bottlenecks, and the smallest useful system to build.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    label: "WhatsApp",
    value: "+1 226 787 8310",
    href: siteConfig.whatsapp,
  },
];

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validateContactForm(values: ContactFormValues) {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Please enter your company or business name.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a short message.";
  }

  return errors;
}

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
  const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const [formValues, setFormValues] =
    useState<ContactFormValues>(initialFormValues);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "success" | "error";
    message: string;
  }>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: siteConfig.email,
        telephone: siteConfig.phoneHref,
        availableLanguage: ["English"],
      },
    ],
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    sameAs: [siteConfig.whatsapp],
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    setFormErrors((current) => {
      if (!current[name as keyof ContactFormValues]) {
        return current;
      }

      const nextErrors = { ...current };
      delete nextErrors[name as keyof ContactFormValues];
      return nextErrors;
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateContactForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitState({
        status: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    if (!web3FormsAccessKey) {
      setSubmitState({
        status: "error",
        message:
          "Form configuration is missing. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY and redeploy.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: "New P2PLabs contact form submission",
          from_name: formValues.name,
          name: formValues.name,
          email: formValues.email,
          company: formValues.company,
          message: formValues.message,
          botcheck: "",
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send your message right now.");
      }

      setFormValues(initialFormValues);
      setFormErrors({});
      setSubmitState({
        status: "success",
        message: "Thanks. Your message was sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      id="main-content"
      className="relative min-h-dvh overflow-x-clip bg-[var(--background)] text-[var(--foreground)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <ParticleField />

      <div className="relative z-10">
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(10,12,24,0.72)] px-4 py-3 shadow-[0_20px_60px_rgba(5,8,20,0.35)] backdrop-blur-xl sm:px-6">
            <a
              href="#main-content"
              className="text-sm font-semibold uppercase tracking-[0.18em] text-white/92"
            >
              {siteConfig.name}
              <span className="ml-2 hidden text-slate-400 md:inline">
                Problem to Product Labs
              </span>
            </a>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-6 md:flex"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="min-h-11 text-sm text-slate-300 transition duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              data-track="cta-header"
              className="glow-button inline-flex min-h-11 items-center justify-center rounded-full border border-violet-300/30 bg-violet-400/12 px-4 py-2 text-sm font-medium text-white"
            >
              Book a Free Strategy Call
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
                  P2PLabs | Problem to Product Labs
                </span>
                <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
                  Turning problems into products with software built for how your
                  team actually works
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
                  P2PLabs, short for Problem to Product Labs, designs and builds
                  custom internal tools, dashboards, and AI-enabled systems for
                  service businesses that need fewer manual tasks, clearer
                  operations, and faster team execution.
                </p>
                <p className="mt-4 max-w-2xl text-pretty text-base leading-8 text-slate-400 sm:text-lg">
                  If your business still runs important work through inboxes,
                  spreadsheets, and manual follow-up, P2PLabs helps turn that
                  chaos into a practical operating system.
                </p>
                <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                  <a
                    href="#contact"
                    data-track="cta-hero-primary"
                    className="glow-button inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/35 bg-violet-400/18 px-6 py-3 text-base font-medium text-white"
                  >
                    Book a Free Strategy Call
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    data-track="cta-hero-secondary"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-base font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    Email P2PLabs
                  </a>
                </div>
                <div className="mt-10 grid w-full gap-3 text-left sm:grid-cols-3">
                  {[
                    "Custom systems, not templates",
                    "Free strategy call before scope",
                    "Problem-first product design",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal className="relative">
              <div className="panel-sheen rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_24px_90px_rgba(8,12,28,0.45)] backdrop-blur-xl">
                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(19,23,43,0.92),rgba(10,12,24,0.88))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-300">
                        Workflow Snapshot
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-white">
                        P2PLabs Delivery Focus
                      </p>
                    </div>
                    <div className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-100">
                      Built for operators
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
                      <span>Engagement approach</span>
                      <span className="text-violet-200">clarity first</span>
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

        <section className="section-shell px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
            {outcomes.map((item) => (
              <Reveal
                key={item}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.045] px-5 py-5 text-center text-sm font-medium text-slate-100 shadow-[0_14px_60px_rgba(4,8,20,0.28)]"
              >
                {item}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section-shell px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-violet-200/80">
                The Problem
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                When operations stay manual, growth usually gets messy
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                The biggest cost is not just wasted time. It is the constant
                friction, missed handoffs, and lack of visibility that make the
                business harder to run.
              </p>
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
            </Reveal>
          </div>
        </section>

        <section
          id="services"
          className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <Reveal className="mx-auto max-w-7xl">
            <SectionIntro
              eyebrow="Services"
              title="Services built around operational bottlenecks, not generic feature lists"
              description="P2PLabs helps service businesses replace manual coordination with systems that are easier to run, measure, and improve."
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

        <section
          id="fit"
          className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionIntro
                eyebrow="Who It's For"
                title="A strong fit when your business needs practical systems, not extra software clutter"
                description="The best projects start with a clear operational problem and a team that wants a better way to run it."
              />
            </Reveal>
            <div className="mt-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_24px_90px_rgba(8,12,28,0.42)] backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.28em] text-violet-200/80">
                  Ideal Engagements
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
                  P2PLabs is built for business owners and operators who need a
                  system that fits
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  You do not need to arrive with a full technical specification.
                  You need a real business problem, a working process that can be
                  improved, and a willingness to replace manual friction with a
                  cleaner operating workflow.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {fitItems.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-black/18 px-4 py-4 text-sm text-slate-100"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl border border-violet-300/12 bg-violet-400/8 px-5 py-4 text-sm text-violet-100/90">
                  Best suited for businesses that want a tailored solution and
                  direct collaboration instead of a generic off-the-shelf setup.
                </p>
              </Reveal>

              <Reveal className="panel-sheen rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,18,34,0.92),rgba(8,10,20,0.92))] p-5 shadow-[0_24px_90px_rgba(8,12,28,0.42)]">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.045] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Trust Snapshot</p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        Why prospects can move forward confidently
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-slate-200">
                      Real business signals
                    </span>
                  </div>
                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.4rem] border border-white/8 bg-black/20 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-400">
                            Public contact paths
                          </p>
                          <p className="mt-2 text-3xl font-semibold text-white">
                            3 ways to reach P2PLabs
                          </p>
                        </div>
                        <div className="h-16 w-16 rounded-full border border-violet-300/20 bg-[conic-gradient(from_210deg,rgba(168,85,247,0.92),rgba(139,92,246,0.22),rgba(168,85,247,0.92))] p-2">
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#090b14] text-sm text-violet-100">
                            Live
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {trustPoints.map(([label, value]) => (
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
                        <span>Buyer confidence path</span>
                        <span className="text-violet-200">low friction</span>
                      </div>
                      <div className="mt-4 space-y-3">
                        {[
                          "Understand the problem",
                          "See the process",
                          "Pick a direct contact method",
                        ].map((item) => (
                          <div
                            key={item}
                            className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                          >
                            {item}
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

        <section
          id="process"
          className="section-shell scroll-mt-28 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionIntro
                eyebrow="Process"
                title="A simple process that keeps scope clear and momentum high"
                description="The goal is not to overcomplicate the engagement. It is to define the right system and build it safely."
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
                eyebrow="Why P2PLabs"
                title="Why businesses choose a custom system instead of another patchwork tool"
                description="P2PLabs stays focused on the practical outcome: a system your team can actually use and keep using."
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
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionIntro
                eyebrow="FAQ"
                title="Questions a new visitor is likely to ask"
                description="These answers reduce ambiguity before someone reaches out."
              />
            </Reveal>
            <div className="mt-12 space-y-4">
              {faqItems.map((item) => (
                <Reveal
                  key={item.question}
                  className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_16px_60px_rgba(6,9,20,0.28)] backdrop-blur-xl"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {item.answer}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-shell scroll-mt-28 px-4 pb-28 pt-16 sm:px-6 md:pb-32 md:pt-24 lg:px-8"
        >
          <div className="mx-auto max-w-7xl rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,20,38,0.92),rgba(7,9,17,0.95))] p-8 shadow-[0_30px_100px_rgba(5,8,20,0.4)] backdrop-blur-xl sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <Reveal>
                <p className="text-sm uppercase tracking-[0.3em] text-violet-200/80">
                  Contact
                </p>
                <h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
                  Tell P2PLabs what is slowing your team down
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  If the workflow is painful, repetitive, or hard to manage, the
                  next step is a short conversation with Problem to Product Labs
                  to define the right fix.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    data-track="cta-contact-primary"
                    className="glow-button inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/35 bg-violet-400/18 px-6 py-3 text-base font-medium text-white"
                  >
                    Book a Free Strategy Call
                  </a>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="cta-contact-whatsapp"
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/12 bg-white/6 px-6 py-3 text-base font-medium text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                  >
                    Message on WhatsApp
                  </a>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-400">
                  Use the form to send project details directly, or choose email,
                  phone, or WhatsApp below if you prefer a faster path.
                </p>
              </Reveal>

              <Reveal className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6">
                <form className="space-y-4" noValidate onSubmit={handleSubmit}>
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(formErrors.name)}
                        aria-describedby={formErrors.name ? "name-error" : undefined}
                        className="min-h-12 w-full rounded-[1.1rem] border border-white/10 bg-black/18 px-4 py-3 text-base text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-300/35 focus:bg-white/8"
                        placeholder="Your name"
                      />
                      {formErrors.name ? (
                        <p id="name-error" className="mt-2 text-sm text-rose-300">
                          {formErrors.name}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        aria-invalid={Boolean(formErrors.email)}
                        aria-describedby={formErrors.email ? "email-error" : undefined}
                        className="min-h-12 w-full rounded-[1.1rem] border border-white/10 bg-black/18 px-4 py-3 text-base text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-300/35 focus:bg-white/8"
                        placeholder="you@company.com"
                      />
                      {formErrors.email ? (
                        <p id="email-error" className="mt-2 text-sm text-rose-300">
                          {formErrors.email}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400"
                    >
                      Company or Business Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formValues.company}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.company)}
                      aria-describedby={formErrors.company ? "company-error" : undefined}
                      className="min-h-12 w-full rounded-[1.1rem] border border-white/10 bg-black/18 px-4 py-3 text-base text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-300/35 focus:bg-white/8"
                      placeholder="Your business name"
                    />
                    {formErrors.company ? (
                      <p
                        id="company-error"
                        className="mt-2 text-sm text-rose-300"
                      >
                        {formErrors.company}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm uppercase tracking-[0.18em] text-slate-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formValues.message}
                      onChange={handleInputChange}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? "message-error" : undefined}
                      className="w-full rounded-[1.1rem] border border-white/10 bg-black/18 px-4 py-3 text-base text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-300/35 focus:bg-white/8"
                      placeholder="Tell us about the workflow, bottleneck, or system you want to improve."
                    />
                    {formErrors.message ? (
                      <p id="message-error" className="mt-2 text-sm text-rose-300">
                        {formErrors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="glow-button inline-flex min-h-12 items-center justify-center rounded-full border border-violet-300/35 bg-violet-400/18 px-6 py-3 text-base font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {submitState.status !== "idle" ? (
                      <p
                        className={
                          submitState.status === "success"
                            ? "text-sm text-emerald-300"
                            : "text-sm text-rose-300"
                        }
                        role="status"
                      >
                        {submitState.message}
                      </p>
                    ) : null}
                  </div>
                </form>

                <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
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
                        Contact
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
                {siteConfig.name}
              </p>
              <p className="mt-2">Problem to Product Labs for service businesses</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition duration-300 hover:text-white"
              >
                Email
              </a>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="transition duration-300 hover:text-white"
              >
                Phone
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-white"
              >
                WhatsApp
              </a>
              <Link
                href="/privacy"
                className="transition duration-300 hover:text-white"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>

        <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            data-track="cta-mobile-sticky"
            className="glow-button flex min-h-12 items-center justify-center rounded-full border border-violet-300/35 bg-[rgba(129,90,255,0.18)] px-6 py-4 text-base font-medium text-white shadow-[0_20px_60px_rgba(91,33,182,0.32)] backdrop-blur-xl"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </main>
  );
}
