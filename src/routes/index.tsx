import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HeroSearch } from "@/components/site/HeroSearch";
import { VIPJobsSection } from "@/components/site/VIPJobsSection";
import { FeaturedCampaignsAndBrands } from "@/components/site/FeaturedCampaignsAndBrands";
import { TopIndustriesGrid } from "@/components/site/TopIndustriesGrid";
import { CandidateCTA } from "@/components/site/CandidateCTA";
import { Footer } from "@/components/site/Footer";
import { LatestJobsSection } from "../components/site/LatestJobsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VieclamOOH - Việc làm Quảng Cáo Ngoài Trời, OOH Media, LED Billboard" },
      {
        name: "description",
        content:
          "Sàn việc làm chuyên biệt ngành Quảng Cáo Ngoài Trời (OOH), LED Billboard, Production và Activation tại Việt Nam. Tìm việc VIP, ứng tuyển nhanh.",
      },
      { property: "og:title", content: "VieclamOOH - Việc làm Quảng Cáo Ngoài Trời" },
      {
        property: "og:description",
        content: "Kết nối nhân sự chuyên biệt cho OOH Media, Production, LED Billboard và Activation tại Việt Nam.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <HeroSearch />
        <VIPJobsSection />
        <LatestJobsSection />
        <FeaturedCampaignsAndBrands />
        <TopIndustriesGrid />
        <CandidateCTA />
      </main>
      <Footer />
    </div>
  );
}
