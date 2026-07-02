import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end pb-20 pt-32 overflow-hidden bg-background">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />

        <div className="container relative z-10 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <span className="hairline" />
              <span className="eyebrow">Autorizovaný geodet · GEO2</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="font-display text-[13vw] leading-[0.95] md:text-[8rem] lg:text-[9.5rem] text-foreground"
            >
              GeoBukový<span className="text-accent">.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Ing. Tomáš Bukový, PhD. — geodetická kancelária s pätnástimi rokmi
              praxe v oblasti geometrických plánov, vytyčovania a inžinierskej geodézie.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
              >
                Nezáväzná konzultácia
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <a
                href="tel:+421948148341"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                0948 148 341
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE / SERVICES STRIP */}
      <section className="border-y border-border bg-background">
        <div className="container py-6 flex flex-wrap items-center gap-x-10 gap-y-2 text-xs tracking-[0.18em] uppercase text-muted-foreground">
          <span className="text-foreground/70 font-medium">Špecializácia</span>
          {[
            "Geometrické plány",
            "Vytyčovanie",
            "Adresné body",
            "Kataster",
            "Stavebné povolenia",
            "Kolaudácie",
          ].map((s) => (
            <span key={s}>· {s}</span>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-28 md:py-36 bg-background">
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Kto sme</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-foreground">
              Presné merania a spoľahlivá dokumentácia — od hraníc pozemku po kolaudáciu stavby.
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-8 border-t border-border pt-10">
              {[
                { k: "15", v: "rokov praxe" },
                { k: "GEO2", v: "autorizácia" },
                { k: "Orava", v: "a celé Slovensko" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-4xl text-foreground">{s.k}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="border-t border-border bg-background">
        <div className="container py-24">
          <div className="flex items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="hairline" />
                <span className="eyebrow">Služby</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-xl leading-[1.1]">
                Komplexné geodetické riešenia.
              </h2>
            </div>
            <Link
              to="/sluzby"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 pb-1 hover:border-foreground transition-colors"
            >
              Všetky služby <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 border-t border-border">
            {[
              { n: "01", t: "Geometrické plány", d: "Rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov." },
              { n: "02", t: "Vytyčovanie pozemkov", d: "Presné vytyčovanie hraníc v teréne modernou technikou." },
              { n: "03", t: "Adresné body", d: "Zameranie a zriadenie adresných bodov pre novostavby." },
            ].map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group py-10 md:px-8 md:border-r border-b md:border-b-0 border-border last:border-r-0"
              >
                <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">{s.n}</div>
                <h3 className="font-display text-2xl text-foreground mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24 md:py-32 grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-primary-foreground/40" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-primary-foreground/60">
                Kontakt
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Potrebujete geodeta?<br />
              <span className="text-accent">Ozvite sa.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-3.5 rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Napíšte nám <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
