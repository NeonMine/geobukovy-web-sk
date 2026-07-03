import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  { n: "01", t: "Geometrické plány", d: "Rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov." },
  { n: "02", t: "Vytyčovanie stavieb", d: "Presné vytyčovanie hraníc a objektov v teréne modernou technikou." },
  { n: "03", t: "Inžinierska geodézia", d: "Zameranie skutočného vyhotovenia, kontrolné merania a dokumentácia." },
  { n: "04", t: "Adresné body", d: "Zameranie a zriadenie adresných bodov pre novostavby a kolaudácie." },
];

const Hero = () => {
  return (
    <>
      {/* HERO — architectural framed composition */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-background">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-[0_40px_80px_-30px_hsl(158_84%_12%_/_0.25)] bg-primary">
            {/* Hero visual band */}
            <div className="relative h-[560px] md:h-[640px] flex items-center overflow-hidden">
              <img
                src={heroBg}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
              />
              {/* Technical dot grid */}
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Emerald wash for legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/30" />

              {/* Content */}
              <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-5xl">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={0}
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="h-px w-12 bg-accent" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
                    Geodetické &amp; kartografické práce
                  </span>
                </motion.div>

                <motion.h1
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={1}
                  className="font-display font-extrabold text-primary-foreground text-6xl md:text-7xl lg:text-8xl leading-[0.88] tracking-tight mb-8"
                >
                  Definujeme
                  <br />
                  <span className="italic text-accent">priestor.</span>
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={2}
                  className="text-lg md:text-xl text-primary-foreground/80 max-w-lg leading-relaxed font-light mb-10"
                >
                  Ing. Tomáš Bukový, PhD. — geodetická kancelária s 15 rokmi praxe v oblasti geometrických plánov, vytyčovania a inžinierskej geodézie.
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  custom={3}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/kontakt"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-2xl shadow-[0_20px_40px_-10px_hsl(82_84%_50%_/_0.35)] hover:-translate-y-0.5 hover:shadow-[0_25px_50px_-12px_hsl(82_84%_50%_/_0.45)] transition-all font-mono uppercase text-xs tracking-[0.2em]"
                  >
                    Nezáväzná konzultácia
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                  <Link
                    to="/sluzby"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground/5 text-primary-foreground border border-primary-foreground/20 backdrop-blur-md font-bold rounded-2xl hover:bg-primary-foreground/10 transition-all font-mono uppercase text-xs tracking-[0.2em]"
                  >
                    Naše služby
                  </Link>
                </motion.div>
              </div>

              {/* Floating data points */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-1/2 right-10 lg:right-20 -translate-y-1/2 hidden lg:flex flex-col gap-10"
              >
                <div className="border-l border-primary-foreground/25 pl-6">
                  <div className="font-display text-3xl font-black text-accent">±2mm</div>
                  <div className="font-mono text-[10px] text-primary-foreground/50 uppercase font-bold tracking-[0.22em] mt-1">
                    Garantovaná presnosť
                  </div>
                </div>
                <div className="border-l border-primary-foreground/25 pl-6">
                  <div className="font-display text-3xl font-black text-accent">15+</div>
                  <div className="font-mono text-[10px] text-primary-foreground/50 uppercase font-bold tracking-[0.22em] mt-1">
                    Rokov praxe
                  </div>
                </div>
                <div className="border-l border-primary-foreground/25 pl-6">
                  <div className="font-display text-3xl font-black text-accent">GEO2</div>
                  <div className="font-mono text-[10px] text-primary-foreground/50 uppercase font-bold tracking-[0.22em] mt-1">
                    Autorizovaný geodet
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services strip inside the frame */}
            <div className="bg-primary-glow/30 border-t border-primary-foreground/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-4">
                {services.map((s, i) => (
                  <motion.div
                    key={s.n}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                    className="group px-8 py-10 md:border-r border-primary-foreground/10 last:border-r-0 hover:bg-primary-foreground/[0.03] transition-colors"
                  >
                    <div className="font-mono text-[11px] font-bold text-accent/70 mb-4">
                      / {s.n}
                    </div>
                    <h3 className="font-display font-bold text-xl text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                      {s.t}
                    </h3>
                    <p className="text-sm text-primary-foreground/60 leading-relaxed">
                      {s.d}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-primary/70">
                Kto sme
              </span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-tight text-primary">
              Presné merania a spoľahlivá dokumentácia — od hraníc pozemku po kolaudáciu stavby.
            </h2>
            <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { k: "15", v: "rokov praxe" },
                { k: "GEO2", v: "autorizácia" },
                { k: "Orava", v: "a celé Slovensko" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display font-black text-4xl text-primary">{s.k}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container">
          <div className="rounded-[2rem] bg-primary text-primary-foreground p-12 md:p-20 grid md:grid-cols-12 gap-8 items-end relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="md:col-span-8 relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-accent" />
                <span className="font-mono text-[11px] font-bold tracking-[0.28em] uppercase text-accent">
                  Kontakt
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.02] tracking-tight">
                Potrebujete geodeta?
                <br />
                <span className="italic text-accent">Ozvite sa.</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right relative">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-mono text-xs font-bold uppercase tracking-[0.2em] hover:-translate-y-0.5 transition-transform"
              >
                Napíšte nám <ArrowUpRight className="w-4 h-4" />
              </Link>
              <div className="mt-6 font-mono text-lg font-extrabold">0948 148 341</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
