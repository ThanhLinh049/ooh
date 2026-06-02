import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Việc Làm VIP", href: "#vip-jobs" },
  { label: "Thương Hiệu & Chiến Dịch", href: "#campaigns" },
  { label: "Ngành Nghề", href: "#industries" },
  { label: "Tải CV", href: "#cta" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className={`flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-black text-primary-foreground`}>
            V
          </span>
          <span className={`text-lg font-extrabold tracking-tight ${solid ? "text-foreground" : "text-white"}`}>
            Vieclam<span className="text-primary">OOH</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-semibold transition-colors ${
                solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className={`text-sm font-semibold ${solid ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}
          >
            Đăng Nhập
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover active:scale-95"
          >
            Nhà Tuyển Dụng Đăng Tin
          </a>
        </div>

        <button
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 py-4 shadow-lg">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <a href="#" className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted">
                Đăng Nhập
              </a>
              <a
                href="#"
                className="rounded-xl bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground hover:bg-primary-hover"
              >
                Nhà Tuyển Dụng Đăng Tin
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
