import { Search, MapPin, Layers } from "lucide-react";
import heroImg from "@/assets/hero-ooh.jpg";

const hotSearches = [
  "Biển tấm lớn Pano",
  "Lắp đặt màn hình LED",
  "Kế hoạch Media",
  "Account Executive",
];

export function HeroSearch() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Quảng cáo ngoài trời OOH Việt Nam"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

      <div className="relative mx-auto flex min-h-[680px] max-w-7xl flex-col items-center justify-center px-4 pt-32 pb-20 sm:px-6 lg:min-h-[760px] lg:px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tìm việc làm <span className="text-primary">quảng cáo ngoài trời</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            Kết nối nhân sự chuyên biệt cho OOH Media, Production, LED Billboard và Activation tại Việt Nam.
          </p>
        </div>

        <div className="mt-10 w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-2 px-2 text-sm font-semibold text-white sm:grid-cols-3 sm:gap-0">
            <div className="sm:pl-6">Bạn đang tìm việc gì?</div>
            <div className="sm:pl-6">Ở đâu?</div>
            <div className="sm:pl-6">Chuyên ngành</div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-3 grid grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-2xl sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:rounded-3xl"
          >
            <label className="flex items-center gap-3 px-5 py-4 sm:py-5 sm:border-r sm:border-border">
              <Search size={20} className="shrink-0 text-muted-foreground" />
              <input
                type="text"
                placeholder="Tên vị trí, kỹ năng, công ty..."
                className="w-full bg-transparent text-[15px] font-medium text-foreground placeholder:text-muted-foreground/80 focus:outline-none"
              />
            </label>
            <label className="flex items-center gap-3 border-t border-border px-5 py-4 sm:border-t-0 sm:border-r sm:py-5">
              <MapPin size={20} className="shrink-0 text-muted-foreground" />
              <select className="w-full appearance-none bg-transparent text-[15px] font-medium text-foreground focus:outline-none">
                <option>Tỉnh / Thành phố</option>
                <option>TP. Hồ Chí Minh</option>
                <option>Hà Nội</option>
                <option>Đà Nẵng</option>
              </select>
            </label>
            <label className="flex items-center gap-3 border-t border-border px-5 py-4 sm:border-t-0 sm:py-5">
              <Layers size={20} className="shrink-0 text-muted-foreground" />
              <select className="w-full appearance-none bg-transparent text-[15px] font-medium text-foreground focus:outline-none">
                <option>Tất cả chuyên ngành</option>
                <option>Kinh doanh OOH</option>
                <option>Thi công lắp đặt</option>
                <option>Thiết kế 3D</option>
                <option>Media Planning</option>
              </select>
            </label>
            <button
              type="submit"
              className="m-2 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-hover active:scale-95 sm:m-2"
            >
              <Search size={18} className="mr-2 sm:hidden" />
              Tìm Kiếm
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center gap-2 px-2 text-sm text-white/80">
            <span className="font-semibold">Gợi ý tìm kiếm:</span>
            {hotSearches.map((s) => (
              <button
                key={s}
                className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
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
