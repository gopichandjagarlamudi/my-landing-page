import type { Metadata } from "next";
import LandingPage from "@/components/landing-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "P2PLabs | Problem to Product Labs",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LandingPage />;
}
