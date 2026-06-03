import {
  ArrowUpRight,
  BadgeCheck,
  Clock,
  Crown,
  Flame,
  MapPin,
  Sparkles,
  Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { VipJob } from "@/lib/mockData";

const pkgMeta: Record<
  VipJob["packageType"],
  {
    label: string;
    icon: LucideIcon;
  }
> = {
  top_vip: {
    label: "Top",
    icon: Crown,
  },
  vip: {
    label: "VIP",
    icon: Sparkles,
  },
  sponsored: {
    label: "Nổi bật",
    icon: BadgeCheck,
  },
  highlighted: {
    label: "Nổi bật",
    icon: Sparkles,
  },
};

function getCompanyInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function VipJobCard({ job }: { job: VipJob }) {
  const meta = pkgMeta[job.packageType];
  const PackageIcon = meta.icon;
  const initials = getCompanyInitials(job.companyName);

  return (
    <article className="group self-start rounded-xl border border-border bg-white p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
      <div className="grid min-w-0 grid-cols-[52px_minmax(0,1fr)_auto] gap-2">
        <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white p-1.5">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={`${job.companyName} logo`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center rounded bg-primary text-xs font-semibold text-primary-foreground">
              {initials}
            </span>
          )}
        </div>

        <div className="min-w-0">
          <a
            href={job.applyUrl}
            title={job.jobTitle}
            className="line-clamp-2 text-[13px] font-semibold leading-[1.22] text-slate-950 transition-colors [overflow-wrap:anywhere] group-hover:text-primary"
          >
            {job.jobTitle}
          </a>

          <p
            title={job.companyName}
            className="mt-1 truncate text-[13px] font-medium uppercase leading-none text-slate-500"
          >
            {job.companyName}
          </p>
        </div>

        <span
          title={meta.label}
          className="inline-flex h-6 shrink-0 items-center gap-1 rounded-full bg-primary/10 px-2 text-[13px] font-semibold leading-none text-primary"
        >
          <PackageIcon size={10} className="shrink-0" />
          <span className="whitespace-nowrap">{meta.label}</span>
        </span>
      </div>

      <div className="mt-2 flex min-w-0 flex-wrap items-center gap-1.5">
        <span
          title={job.salary}
          className="inline-flex max-w-[125px] items-center truncate rounded-full bg-success-salary/10 px-2 py-0.5 text-[11px] font-regular leading-none text-success-salary"
        >
          {job.salary}
        </span>

        <span
          title={job.location}
          className="inline-flex max-w-[115px] items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-regular leading-none text-slate-600"
        >
          <MapPin size={10} className="shrink-0 text-slate-500" />
          <span className="truncate">{job.location}</span>
        </span>

        <span
          title={job.category}
          className="inline-flex max-w-[120px] items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-regular leading-none text-slate-600"
        >
          <Tag size={10} className="shrink-0 text-slate-500" />
          <span className="truncate">{job.category}</span>
        </span>
      </div>

      <div className="mt-1 flex items-center justify-between gap-2">
        <div className="flex min-w-0 flex-wrap items-center gap-1.5">
          {job.isUrgent && (
            <span className="inline-flex items-center gap-1 text-[10px] font-regular leading-none text-urgent-text">
              <Flame size={10} className="shrink-0" />
              <span className="whitespace-nowrap">Tuyển gấp</span>
            </span>
          )}

          <span className="inline-flex items-center gap-1 text-[10px] font-regular leading-none text-slate-500">
            <Clock size={10} className="shrink-0" />
            <span className="whitespace-nowrap">Còn {job.daysLeft} ngày</span>
          </span>
        </div>

        <a
          href={job.applyUrl}
          aria-label="Xem chi tiết việc làm"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}