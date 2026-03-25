import type { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom AI Systems and Internal Tools for Service Businesses",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage />;
}
