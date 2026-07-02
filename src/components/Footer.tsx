import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container pt-20 pb-10">
      <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-background/10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="" className="h-10 w-auto invert-0" />
            <div>
              <div className="font-display text-xl">GeoBukový</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-background/50 mt-1">
                Geodézia · Inžiniering
              </div>
            </div>
          </div>
          <p className="text-background/60 text-sm leading-relaxed max-w-sm">
            Ing. Tomáš Bukový, PhD. — GEO2. Autorizovaný geodet s 15-ročnou praxou.
            Orava a celé Slovensko.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] tracking-[0.22em] uppercase text-background/40 mb-5">Navigácia</div>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="text-background/80 hover:text-accent transition-colors w-fit">Domov</Link>
            <Link to="/sluzby" className="text-background/80 hover:text-accent transition-colors w-fit">Služby</Link>
            <Link to="/o-nas" className="text-background/80 hover:text-accent transition-colors w-fit">O nás</Link>
            <Link to="/kontakt" className="text-background/80 hover:text-accent transition-colors w-fit">Kontakt</Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-[10px] tracking-[0.22em] uppercase text-background/40 mb-5">Kontakt</div>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+421948148341" className="text-background/80 hover:text-accent transition-colors w-fit">
              0948 148 341
            </a>
            <a href="mailto:geobukovy@gmail.com" className="text-background/80 hover:text-accent transition-colors w-fit">
              geobukovy@gmail.com
            </a>
            <span className="text-background/60">Rabča 327, Slovensko</span>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between gap-3 text-[11px] tracking-wider text-background/40">
        <span>© {new Date().getFullYear()} GeoBukový · Ing. Tomáš Bukový, PhD., GEO2</span>
        <span>Všetky práva vyhradené.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
