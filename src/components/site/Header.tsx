import { useEffect, useState } from "react";
import { Menu, X, BriefcaseBusiness } from "lucide-react";
import LogoWhite from "@/assets/Logo-vieclamooh.png";
import LogoDark from "@/assets/logo-vieclamooh.png";

type HeaderProps = {
  variant?: "transparent" | "solid";
};

const nav = [
  { label: "Việc làm", href: "#vip-jobs" },
  { label: "Công ty", href: "#campaigns" },
  { label: "Ngành nghề", href: "#industries" },
];

export function Header({ variant = "solid" }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isTransparentVariant = variant === "transparent";

  useEffect(() => {
    if (!isTransparentVariant) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [isTransparentVariant]);

  const solid = !isTransparentVariant || scrolled || open;
  const logo = solid ? LogoDark : LogoWhite;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid
          ? "border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
          : "border-b border-white/10 bg-transparent"
        }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex h-10 items-center sm:h-12">
          <img
            src={logo}
            alt="VieclamOOH Logo"
            className="block h-8 w-auto max-w-[135px] object-contain transition-all duration-300 sm:h-9 sm:max-w-[155px] lg:h-11 lg:max-w-[180px]"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${solid
                  ? "text-foreground/75 hover:bg-primary/10 hover:text-primary"
                  : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#"
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${solid
                ? "text-foreground/75 hover:bg-muted hover:text-primary"
                : "text-white/85 hover:bg-white/10 hover:text-white"
              }`}
          >
            Đăng nhập
          </a>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-black text-primary-foreground shadow-sm transition hover:bg-primary-hover active:scale-95"
          >
            <BriefcaseBusiness size={16} />
            Đăng tin
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition lg:hidden ${solid
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
            }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-bold text-foreground hover:bg-muted"
              >
                {n.label}
              </a>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-4">
              <a
                href="#"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-border px-4 py-3 text-center text-sm font-bold text-foreground hover:bg-muted"
              >
                Đăng nhập
              </a>

              <a
                href="#"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-primary px-4 py-3 text-center text-sm font-black text-primary-foreground hover:bg-primary-hover"
              >
                Đăng tin
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}