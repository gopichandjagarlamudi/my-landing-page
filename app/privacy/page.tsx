import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy information for ${siteConfig.name} website visitors and leads.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_24px_90px_rgba(8,12,28,0.42)] backdrop-blur-xl sm:p-10">
        <p className="text-sm uppercase tracking-[0.28em] text-violet-200/80">
          Privacy
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-300">
          <p>
            {siteConfig.name} may collect the information you choose to share
            when you contact the business by email, phone, or WhatsApp.
          </p>
          <p>
            That information is used only to respond to inquiries, discuss
            potential projects, and deliver requested services. The site does
            not currently publish a public account area or collect sensitive
            financial information.
          </p>
          <p>
            If analytics or form tools are added later, this page should be
            updated to reflect what data is collected, how long it is retained,
            and which third parties process it.
          </p>
          <p>
            For privacy questions, contact{" "}
            <a
              className="text-violet-200 underline decoration-violet-300/40 underline-offset-4"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-11 items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-medium text-slate-100 transition duration-300 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
