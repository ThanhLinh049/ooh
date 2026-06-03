import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock,
  Flame,
  MapPin,
  Sparkles,
  Tag,
} from "lucide-react";
import type { LatestJob } from "@/lib/mockData";

function getCompanyInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function LatestJobCard({ job }: { job: LatestJob }) {
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
          <div className="flex min-w-0 items-start gap-1.5">
            <a
              href={job.applyUrl}
              title={job.jobTitle}
              className="line-clamp-2 min-w-0 text-[13px] font-semibold leading-[1.22] text-slate-950 transition-colors [overflow-wrap:anywhere] group-hover:text-primary"
            >
              {job.jobTitle}
            </a>

            {job.isNew && (
              <span className="mt-0.5 hidden shrink-0 rounded-full bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium leading-none text-blue-600 xl:inline-flex">
                Mới
              </span>
            )}
          </div>

          <p
            title={job.companyName}
            className="mt-1 truncate text-[13px] font-medium uppercase leading-none text-slate-500"
          >
            {job.companyName}
          </p>
        </div>

        <a
          href={job.applyUrl}
          aria-label="Xem chi tiết việc làm"
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowUpRight size={13} />
        </a>
      </div>

      <div className="mt-2 flex min-w-0 flex-wrap items-center gap-1.5">
        <span
          title={job.salary}
          className="inline-flex max-w-[125px] items-center truncate rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-normal leading-none text-emerald-700"
        >
          {job.salary}
        </span>

        <span
          title={job.location}
          className="inline-flex max-w-[115px] items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-normal leading-none text-slate-600"
        >
          <MapPin size={10} className="shrink-0 text-slate-500" />
          <span className="truncate">{job.location}</span>
        </span>

        <span
          title={job.category}
          className="inline-flex max-w-[120px] items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-normal leading-none text-slate-600"
        >
          <Tag size={10} className="shrink-0 text-slate-500" />
          <span className="truncate">{job.category}</span>
        </span>
      </div>

      <div className="mt-2 flex min-w-0 flex-wrap items-center gap-1.5">
        <span className="inline-flex items-center gap-1 text-[10px] font-normal leading-none text-slate-500">
          <Clock size={10} className="shrink-0" />
          <span className="whitespace-nowrap">{job.postedLabel}</span>
        </span>

        <span className="inline-flex items-center gap-1 text-[10px] font-normal leading-none text-slate-500">
          <BriefcaseBusiness size={10} className="shrink-0" />
          <span className="whitespace-nowrap">{job.jobType}</span>
        </span>

        <span className="inline-flex items-center gap-1 text-[10px] font-normal leading-none text-slate-500">
          <Sparkles size={10} className="shrink-0" />
          <span className="whitespace-nowrap">{job.experience}</span>
        </span>

        {job.isUrgent && (
          <span className="inline-flex items-center gap-1 text-[10px] font-medium leading-none text-red-600">
            <Flame size={10} className="shrink-0" />
            <span className="whitespace-nowrap">Tuyển gấp</span>
          </span>
        )}
      </div>
    </article>
  );
}