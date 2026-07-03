import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { label: "Domov", href: "/" },
  { label: "Služby", href: "/sluzby" },
  { label: "O nás", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center overflow-hidden ring-1 ring-primary/10 shadow-sm">
            <img src={logo} alt="GeoBukový GEO2" className="h-8 w-8 object-contain" />
          </div>
          <div className="leading-none">
            <div className="font-display font-extrabold text-xl text-primary tracking-tight">
              GeoBukový
            </div>
            <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted-foreground mt-1">
              Geodézia · Inžiniering
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link
                key={l.href}
                to={l.href}
                className={`relative font-mono text-[11px] font-bold tracking-[0.24em] uppercase transition-colors pb-1 ${
                  active
                    ? "text-primary border-b-2 border-accent"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <a
          href="tel:+421948148341"
          className="hidden md:flex flex-col items-end group"
        >
          <span className="font-mono text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            Kontaktujte nás
          </span>
          <span className="font-mono text-base font-extrabold text-primary group-hover:text-primary-glow transition-colors">
            0948 148 341
          </span>
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container flex flex-col py-3">
              {links.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase border-b border-border/60 ${
                    location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:+421948148341"
                className="py-4 font-mono text-sm font-extrabold text-primary"
              >
                0948 148 341
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
