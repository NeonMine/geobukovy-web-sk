import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const services = [
  { n: "I", t: "Geometrické plány", d: "Rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov." },
  { n: "II", t: "Vytyčovanie stavieb", d: "Presné vytýčenie hraníc a objektov v teréne." },
  { n: "III", t: "Inžinierska geodézia", d: "Zameranie skutočného vyhotovenia a dokumentácia." },
  { n: "IV", t: "Adresné body", d: "Zameranie adresných bodov pre novostavby a kolaudácie." },
];

const Hero = () => {
  return (
    <>
      {/* HERO — classic editorial split */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            <div className="md:col-span-7">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] tracking-[0.32em] uppercase text-accent">
                  Geodetická kancelária
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={1}
                className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-primary"
              >
                Presné merania.<br />
                <span className="text-foreground/80">Spoľahlivá dokumentácia.</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={2}
                className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
              >
                Ing. Tomáš Bukový, PhD. — autorizovaný geodet a kartograf s viac ako
                pätnástimi rokmi praxe v oblasti geometrických plánov, vytyčovania
                a inžinierskej geodézie.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-wrap items-center gap-8"
              >
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-primary-glow transition-colors"
                >
                  Nezáväzná konzultácia
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/sluzby"
                  className="text-sm tracking-wide text-primary border-b border-accent/60 hover:border-accent pb-0.5 transition-colors"
                >
                  Prezrieť služby
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-3 border border-accent/40 pointer-events-none" aria-hidden />
                <img
                  src={heroBg}
                  alt="Geodetické práce v teréne"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="mt-4 flex items-baseline justify-between text-[11px] tracking-[0.24em] uppercase text-muted-foreground">
                  <span>Orava · Slovensko</span>
                  <span>Est. 2010</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { k: "15+", v: "Rokov praxe" },
            { k: "GEO2", v: "Autorizácia" },
            { k: "PhD.", v: "Odbornosť" },
            { k: "±2 mm", v: "Presnosť merania" },
          ].map((s) => (
            <div key={s.v} className="py-10 px-6 text-center">
              <div className="font-serif text-3xl md:text-4xl text-primary">{s.k}</div>
              <div className="mt-2 text-[10px] tracking-[0.26em] uppercase text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
                  Naša ponuka
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.05]">
                Komplexné geodetické služby.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 flex items-end">
              <p className="text-muted-foreground leading-relaxed">
                Od geometrických plánov cez vytyčovanie stavieb až po adresné body
                a inžiniersku geodéziu — s dôrazom na presnosť, termíny a čistú
                dokumentáciu pre fyzické aj právnické osoby.
              </p>
            </div>
          </div>

          <div className="border-t border-border">
            {services.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group grid md:grid-cols-12 gap-6 py-8 md:py-10 border-b border-border items-baseline hover:bg-secondary/40 transition-colors px-2 -mx-2"
              >
                <div className="md:col-span-1 text-accent text-sm tracking-[0.2em]">{s.n}</div>
                <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl text-primary leading-tight">
                  {s.t}
                </h3>
                <p className="md:col-span-6 text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
                <div className="md:col-span-1 md:text-right">
                  <ArrowRight className="inline-block w-4 h-4 text-muted-foreground/60 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to="/sluzby"
              className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent/60 hover:border-accent pb-0.5"
            >
              Všetky služby <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="container">
          <div className="border-t border-b border-border py-16 md:py-24 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
                  Kontakt
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-primary leading-[1.05]">
                Potrebujete geodeta? Ozvite sa —
                pripravím nezáväznú ponuku.
              </h2>
            </div>
            <div className="md:col-span-4 md:text-right space-y-4">
              <div>
                <div className="text-[10px] tracking-[0.26em] uppercase text-muted-foreground mb-1">
                  Telefón
                </div>
                <a
                  href="tel:+421948148341"
                  className="font-serif text-2xl md:text-3xl text-primary hover:text-accent transition-colors"
                >
                  0948 148 341
                </a>
              </div>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-primary-glow transition-colors"
              >
                Napíšte nám <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
