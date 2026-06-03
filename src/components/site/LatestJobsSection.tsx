import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { latestJobs } from "@/lib/mockData";
import { LatestJobCard } from "./LatestJobCard";

const PAGE_SIZE = 12;

export function LatestJobsSection() {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(latestJobs.length / PAGE_SIZE));

  const currentJobs = useMemo(() => {
    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return latestJobs.slice(start, end);
  }, [page]);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(0);
    }
  }, [page, totalPages]);

  const canShowPagination = totalPages > 1;

  return (
    <section id="latest-jobs" className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              <Clock3 size={13} />
              Cập nhật liên tục
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Việc làm mới nhất
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Tin tuyển dụng mới được đăng từ các doanh nghiệp trong ngành OOH,
              quảng cáo, truyền thông, thi công và media.
            </p>
          </div>

          <a
            href="#"
            className="hidden text-sm font-semibold text-primary hover:underline sm:inline"
          >
            Xem tất cả việc làm →
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {currentJobs.map((job) => (
            <LatestJobCard key={job.id} job={job} />
          ))}
        </div>

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
            className="inline-flex items-center justify-center rounded-xl border border-primary bg-white px-5 py-2.5 text-sm font-semibold text-primary"
          >
            Xem tất cả việc làm
          </a>
        </div>
      </div>
    </section>
  );
}