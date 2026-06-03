import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Crown } from "lucide-react";
import { vipJobs } from "@/lib/mockData";
import { VipJobCard } from "./VipJobCard";

const tabs = [
  { id: "all", label: "Tất cả" },
  { id: "top", label: "Top VIP" },
  { id: "urgent", label: "Tuyển gấp" },
  { id: "high_salary", label: "Lương cao" },
] as const;

const PAGE_SIZE = 12;

export function VIPJobsSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const [page, setPage] = useState(0);

  const filteredJobs = useMemo(() => {
    const list = [...vipJobs];

    switch (tab) {
      case "top":
        return list
          .filter((job) => job.packageType === "top_vip")
          .sort((a, b) => b.priorityLevel - a.priorityLevel);

      case "urgent":
        return list
          .filter((job) => job.isUrgent)
          .sort((a, b) => a.daysLeft - b.daysLeft);

      case "high_salary":
        return list
          .filter((job) => job.isHighSalary)
          .sort((a, b) => b.priorityLevel - a.priorityLevel);

      default:
        return list.sort((a, b) => {
          if (b.priorityLevel !== a.priorityLevel) {
            return b.priorityLevel - a.priorityLevel;
          }

          return a.daysLeft - b.daysLeft;
        });
    }
  }, [tab]);

  const totalPages = Math.max(1, Math.ceil(filteredJobs.length / PAGE_SIZE));

  const currentJobs = filteredJobs.slice(
    page * PAGE_SIZE,
    page * PAGE_SIZE + PAGE_SIZE
  );

  useEffect(() => {
    setPage(0);
  }, [tab]);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(0);
    }
  }, [page, totalPages]);

  const canShowPagination = totalPages > 1;

  return (
    <section id="vip-jobs" className="bg-muted/40 py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary">
              <Crown size={12} />
              Việc làm nổi bật
            </div>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Việc làm VIP - Nổi bật
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Các vị trí được ưu tiên hiển thị từ doanh nghiệp trong ngành OOH,
              truyền thông và thi công.
            </p>
          </div>

          <a
            href="#"
            className="hidden text-sm font-bold text-primary hover:underline sm:inline"
          >
            Xem tất cả việc VIP →
          </a>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="tablist">
          {tabs.map((item) => {
            const active = tab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={`rounded-full border px-3.5 py-1.5 text-sm font-bold transition-all ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-white text-foreground/70 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currentJobs.map((job) => (
            <VipJobCard key={job.id} job={job} />
          ))}
        </div>

        {currentJobs.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-white px-5 py-10 text-center">
            <p className="text-sm font-bold text-foreground">
              Chưa có việc làm phù hợp.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Hãy thử chọn bộ lọc khác.
            </p>
          </div>
        )}

        {canShowPagination && (
          <div className="mt-7 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Trang trước"
              onClick={() =>
                setPage((currentPage) =>
                  currentPage === 0 ? totalPages - 1 : currentPage - 1
                )
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white text-foreground transition hover:bg-muted"
            >
              <ChevronLeft size={17} />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Trang ${index + 1}`}
                  onClick={() => setPage(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === page
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Trang sau"
              onClick={() =>
                setPage((currentPage) =>
                  currentPage === totalPages - 1 ? 0 : currentPage + 1
                )
              }
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white text-foreground transition hover:bg-muted"
            >
              <ChevronRight size={17} />
            </button>
          </div>
        )}

        <div className="mt-7 text-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl border border-primary bg-white px-5 py-2.5 text-sm font-bold text-primary"
          >
            Xem tất cả việc VIP
          </a>
        </div>
      </div>
    </section>
  );
}