import { Building2, MapPin, Clock, Tag, Flame, Crown, Sparkles, BadgeCheck } from "lucide-react";
import type { VipJob } from "@/lib/mockData";

const pkgMeta: Record<VipJob["packageType"], { label: string; icon: typeof Crown }> = {
  top_vip: { label: "TOP VIP", icon: Crown },
  vip: { label: "VIP", icon: Sparkles },
  sponsored: { label: "Sponsored", icon: BadgeCheck },
  highlighted: { label: "Highlighted", icon: Sparkles },
};

export function VipJobCard({ job }: { job: VipJob }) {
  const Pkg = pkgMeta[job.packageType];
  return (
    <article className="group relative flex flex-col rounded-2xl border border-vip-border/40 bg-vip-bg p-5 shadow-[0_4px_20px_-8px_rgba(244,123,32,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
          <Pkg.icon size={11} /> {Pkg.label}
        </span>
        {job.isUrgent && (
          <span className="inline-flex items-center gap-1 rounded-full bg-urgent-bg px-2.5 py-1 text-[10px] font-bold uppercase text-urgent-text">
            <Flame size={11} /> Tuyển gấp
          </span>
        )}
      </div>

      <h3 className="text-base font-bold leading-snug text-foreground line-clamp-2 group-hover:text-primary">
        {job.jobTitle}
      </h3>

      <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground/80">
        <Building2 size={14} className="text-muted-foreground" />
        <span className="truncate">{job.companyName}</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground/70">
          <MapPin size={11} /> {job.location}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-foreground/70">
          <Tag size={11} /> {job.category}
        </span>
      </div>

      <div className="mt-3 text-sm font-bold text-success-salary">{job.salary}</div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">{job.excerpt}</p>

      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-urgent-text">
          <Clock size={12} /> Còn {job.daysLeft} ngày
        </span>
        <a href={job.applyUrl} className="text-xs font-bold text-primary hover:underline">
          Xem chi tiết →
        </a>
      </div>

      <a
        href={job.applyUrl}
        className="mt-3 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover active:scale-95"
      >
        Ứng tuyển ngay
      </a>
    </article>
  );
}
