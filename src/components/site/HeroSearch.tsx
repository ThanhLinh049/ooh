import { useState, useEffect, useRef } from "react";
import { Search, MapPin, Layers, ChevronDown, Check } from "lucide-react";
import heroImg from "@/assets/hero-ooh.jpg";

const hotSearches = [
  "Biển tấm lớn Pano",
  "Lắp đặt màn hình LED",
  "Kế hoạch Media",
  "Account Executive",
];

const locations = [
  "Tất cả địa điểm",
  "TP. Hồ Chí Minh",
  "Hà Nội",
  "Đà Nẵng",
  "Bình Dương",
  "Đồng Nai",
];

const industries = [
  "Tất cả chuyên ngành",
  "Kinh doanh OOH",
  "Thi công lắp đặt",
  "Thiết kế 3D",
  "Media Planning",
  "LED Billboard",
];

export function HeroSearch() {
  const [location, setLocation] = useState(locations[0]);
  const [industry, setIndustry] = useState(industries[0]);

  return (
    <section className="relative isolate overflow-visible">
      <img
        src={heroImg}
        alt="Quảng cáo ngoài trời OOH Việt Nam"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

      <div className="relative mx-auto flex min-h-[500px] max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-12 sm:px-6 lg:min-h-[540px] lg:px-8">
        <div className="max-w-4xl text-center">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
            VieclamOOH
          </p>

          <h1 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tìm việc làm{" "}
            <span className="text-primary">quảng cáo ngoài trời</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Kết nối nhân sự chuyên biệt cho OOH Media, Production, LED Billboard
            và Activation tại Việt Nam.
          </p>
        </div>

        <div className="mt-8 w-full max-w-5xl">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative z-20 grid grid-cols-1 overflow-visible rounded-2xl bg-white p-2 shadow-2xl sm:grid-cols-[1.35fr_0.95fr_1fr_auto]"
          >
            <label className="flex h-12 items-center gap-3 px-4 sm:border-r sm:border-slate-200">
              <Search size={18} className="shrink-0 text-slate-400" />

              <input
                type="text"
                placeholder="Vị trí, kỹ năng, công ty..."
                className="h-full w-full bg-transparent text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </label>

            <div className="border-t border-slate-200 sm:border-t-0 sm:border-r">
              <CustomDropdown
                icon={<MapPin size={18} />}
                value={location}
                options={locations}
                onChange={setLocation}
              />
            </div>

            <div className="border-t border-slate-200 sm:border-t-0">
              <CustomDropdown
                icon={<Layers size={18} />}
                value={industry}
                options={industries}
                onChange={setIndustry}
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-black text-primary-foreground transition hover:bg-primary-hover active:scale-95 sm:mt-0 sm:ml-2"
            >
              <Search size={17} />
              Tìm kiếm
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 px-2 text-sm text-white/80">
            <span className="font-semibold">Gợi ý:</span>

            {hotSearches.map((s) => (
              <button
                key={s}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur transition hover:border-primary hover:bg-primary"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomDropdown({
  icon,
  value,
  options,
  onChange,
}: {
  icon: React.ReactNode;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-full items-center gap-3 px-4 text-left"
      >
        <span className="shrink-0 text-slate-400">{icon}</span>

        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-700">
          {value}
        </span>

        <ChevronDown
          size={16}
          className={`shrink-0 text-slate-400 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-2 right-2 top-[calc(100%+10px)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-2xl">
          {options.map((option) => {
            const active = option === value;

            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span className="truncate">{option}</span>

                {active && <Check size={15} className="shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}