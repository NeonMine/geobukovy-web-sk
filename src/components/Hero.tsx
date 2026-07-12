import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { useRef, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 * i, ease },
  }),
};

const services = [
  { n: "I", t: "Geometrické plány", d: "Rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov." },
  { n: "II", t: "Vytyčovanie stavieb", d: "Presné vytýčenie hraníc a objektov v teréne." },
  { n: "III", t: "Inžinierska geodézia", d: "Zameranie skutočného vyhotovenia a dokumentácia." },
  { n: "IV", t: "Adresné body", d: "Zameranie adresných bodov pre novostavby a kolaudácie." },
];

const Hero = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ctaRef.current;
    const s = spotRef.current;
    if (!el || !s) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    s.style.setProperty("--mx", `${x}%`);
    s.style.setProperty("--my", `${y}%`);
    s.style.opacity = "1";
  };

  const handleLeave = () => {
    if (spotRef.current) spotRef.current.style.opacity = "0";
  };


  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-subtle-gradient">
        {/* Ambient orbs */}
        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-accent/15 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="grid md:grid-cols-12 gap-12 md:gap-14 items-center">
            {/* Copy */}
            <div className="md:col-span-7">
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={0}
                className="flex items-center gap-4 mb-8"
              >
                <span className="relative h-px w-14 bg-accent/60 overflow-hidden">
                  <span className="absolute inset-0 bg-accent origin-left animate-[shimmer-line_2.4s_ease-in-out_infinite]" />
                </span>
                <span className="text-[11px] tracking-[0.32em] uppercase text-primary/70">
                  Geodetická kancelária · GEO2
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={1}
                className="font-serif text-5xl md:text-6xl lg:text-[5.25rem] leading-[1] tracking-[-0.02em] text-primary-deep text-balance"
              >
                Presné merania.<br />
                <span className="italic font-light text-primary/85">Dôvera v každom bode.</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={2}
                className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-[1.7]"
              >
                Ing. Tomáš Bukový, PhD. — autorizovaný geodet a kartograf s viac ako
                pätnástimi rokmi praxe. Geometrické plány, vytyčovanie stavieb
                a inžinierska geodézia na Orave a po celom Slovensku.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                custom={3}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <Link
                  to="/kontakt"
                  className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-sm tracking-wide shadow-elegant hover:shadow-soft transition-all overflow-hidden"
                >
                  <span className="absolute inset-0 bg-primary-glow translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative">Nezáväzná konzultácia</span>
                  <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/sluzby"
                  className="story-link text-sm tracking-wide text-primary py-2"
                >
                  Prezrieť služby
                </Link>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease }}
              className="md:col-span-5"
            >
              <div className="relative">
                {/* Frame accents */}
                <motion.div
                  initial={{ opacity: 0, x: 12, y: 12 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 1, delay: 0.55, ease }}
                  className="absolute -inset-4 border border-accent/40 pointer-events-none"
                  aria-hidden
                />
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-accent pointer-events-none" aria-hidden />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-accent pointer-events-none" aria-hidden />

                {/* Image with green wash */}
                <div className="relative overflow-hidden shadow-elegant">
                  <img
                    src={heroBg}
                    alt="Geodetické práce v teréne"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-[1600ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-primary/10 to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 glass px-4 py-3 animate-float-slow">
                    <div className="flex items-center gap-2 text-primary">
                      <Compass className="w-4 h-4 text-accent" />
                      <span className="text-[10px] tracking-[0.24em] uppercase font-medium">
                        Autorizovaný geodet
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <div className="text-[10px] tracking-[0.28em] uppercase opacity-70 mb-1">
                      Terénne meranie
                    </div>
                    <div className="font-serif text-2xl italic">Orava, 2025</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="relative border-y border-border bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="container relative grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
          {[
            { k: "15+", v: "Rokov praxe" },
            { k: "GEO2", v: "Autorizácia" },
            { k: "PhD.", v: "Odbornosť" },
            { k: "±2 mm", v: "Presnosť merania" },
          ].map((s, i) => (
            <motion.div
              key={s.v}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="py-12 px-6 text-center group"
            >
              <div className="font-serif text-4xl md:text-5xl text-accent-soft group-hover:text-accent transition-colors">
                {s.k}
              </div>
              <div className="mt-3 text-[10px] tracking-[0.28em] uppercase text-primary-foreground/60">
                {s.v}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="hairline" />
                <span className="eyebrow">Naša ponuka</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-deep leading-[1.05] text-balance">
                Komplexné geodetické <span className="italic text-primary/70">služby.</span>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-muted-foreground leading-[1.75]">
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
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                className="group relative grid md:grid-cols-12 gap-6 py-10 border-b border-border items-baseline transition-colors px-2 -mx-2 hover:bg-secondary/60"
              >
                <span className="absolute left-0 top-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
                <div className="md:col-span-1 text-accent text-sm font-medium tracking-[0.2em]">
                  {s.n}
                </div>
                <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl text-primary-deep leading-tight">
                  {s.t}
                </h3>
                <p className="md:col-span-6 text-muted-foreground leading-relaxed">
                  {s.d}
                </p>
                <div className="md:col-span-1 md:text-right">
                  <ArrowRight className="inline-block w-4 h-4 text-muted-foreground/50 group-hover:text-accent group-hover:translate-x-2 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link to="/sluzby" className="story-link inline-flex items-center gap-2 text-sm text-primary py-1">
              Všetky služby <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="container">
          <motion.div
            ref={ctaRef}
            onMouseMove={handleMove}
            onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="group/cta relative overflow-hidden bg-hero-gradient text-primary-foreground p-12 md:p-20 shadow-elegant"
          >
            {/* Mouse-follow spotlight */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                opacity: spot.active ? 1 : 0,
                background: `radial-gradient(600px circle at ${spot.x}% ${spot.y}%, hsl(var(--accent) / 0.35), transparent 45%)`,
              }}
            />
            {/* Secondary softer glow */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                opacity: spot.active ? 1 : 0,
                background: `radial-gradient(900px circle at ${spot.x}% ${spot.y}%, hsl(var(--primary-glow) / 0.25), transparent 60%)`,
              }}
            />
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />


            <div className="relative grid md:grid-cols-12 gap-8 items-end">
              <div className="md:col-span-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-12 bg-accent" />
                  <span className="text-[11px] tracking-[0.32em] uppercase text-accent">
                    Kontakt
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-[-0.02em] text-balance">
                  Potrebujete geodeta?<br />
                  <span className="italic text-accent-soft">Ozvite sa.</span>
                </h2>
              </div>
              <div className="md:col-span-4 md:text-right space-y-5">
                <div>
                  <div className="text-[10px] tracking-[0.28em] uppercase text-primary-foreground/60 mb-1">
                    Telefón
                  </div>
                  <a
                    href="tel:+421948148341"
                    className="font-serif text-3xl md:text-4xl hover:text-accent transition-colors"
                  >
                    0948 148 341
                  </a>
                </div>
                <Link
                  to="/kontakt"
                  className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  Napíšte nám <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
