import { useEffect, useState } from "react";
import { ArrowRight, Briefcase, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { featuredCampaigns, featuredEmployers } from "@/lib/mockData";

export function FeaturedCampaignsAndBrands() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % featuredCampaigns.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  const c = featuredCampaigns[idx];

  return (
    <section id="campaigns" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Thương Hiệu & Chiến Dịch Tuyển Dụng
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Các doanh nghiệp đang mở chiến dịch tuyển dụng nổi bật trong ngành OOH.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-foreground via-foreground to-foreground/90 p-8 text-white shadow-xl lg:col-span-3 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                <Sparkles size={12} /> {c.badge}
              </span>
              <div className="mt-5 text-sm font-semibold uppercase tracking-wide text-white/60">
                {c.companyName}
              </div>
              <h3 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                {c.campaignTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
                {c.campaignDescription}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-white/90">
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={15} className="text-primary" /> {c.activeJobs} vị trí đang tuyển
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={15} className="text-primary" /> {c.location}
                </span>
              </div>

              <div className="mt-7 flex items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary-hover active:scale-95"
                >
                  Xem Chiến Dịch <ArrowRight size={16} />
                </a>
                <div className="flex items-center gap-1.5">
                  {featuredCampaigns.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Chiến dịch ${i + 1}`}
                      onClick={() => {
                        setPaused(true);
                        setIdx(i);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        i === idx ? "w-7 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2">
            {featuredEmployers.slice(0, 4).map((e) => (
              <EmployerCard key={e.id} employer={e} compact />
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {featuredEmployers.slice(4).map((e) => (
            <EmployerCard key={e.id} employer={e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EmployerCard({
  employer,
  compact = false,
}: {
  employer: (typeof featuredEmployers)[number];
  compact?: boolean;
}) {
  return (
    <a
      href="#"
      className="group flex flex-col rounded-2xl border border-border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-base font-black text-primary">
          {employer.initial}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <h4 className="truncate text-sm font-bold text-foreground group-hover:text-primary">
              {employer.companyName}
            </h4>
            {employer.isVerified && <ShieldCheck size={14} className="shrink-0 text-primary" />}
          </div>
          <div className="mt-0.5 text-xs font-medium text-muted-foreground">{employer.industry}</div>
        </div>
      </div>
      <div className={`mt-3 flex items-center justify-between border-t border-border/60 pt-3 text-xs ${compact ? "" : ""}`}>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <MapPin size={11} /> {employer.location}
        </span>
        <span className="font-bold text-primary">{employer.activeJobs} vị trí</span>
      </div>
    </a>
  );
}
