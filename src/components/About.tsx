import { motion } from "framer-motion";
import aboutImg from "@/assets/about-image.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const About = () => {
  return (
    <section className="min-h-screen w-full bg-background pt-32 md:pt-36 pb-20 md:pb-28">
      <div className="container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              initial={{ opacity: 0, x: -8, y: -8 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="absolute -top-6 -left-6 w-full h-full border border-primary/20 z-0 pointer-events-none"
              aria-hidden
            />
            <div className="aspect-[4/5] overflow-hidden shadow-elegant relative z-10 group">
              <img
                src={aboutImg}
                alt="Ing. Tomáš Bukový, PhD. — autorizovaný geodet"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-accent" />
                <span className="text-[11px] font-semibold tracking-[0.32em] uppercase text-accent">
                  O nás
                </span>
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-primary-deep leading-[0.95] tracking-[-0.02em] text-balance">
                Geodézia s <span className="italic font-light text-primary/85">pätnástimi</span> rokmi praxe.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2"
            >
              <h2 className="font-serif text-2xl text-primary-deep font-medium">
                Ing. Tomáš Bukový, PhD.
              </h2>
              <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
                Autorizovaný geodet · GEO2
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <p className="text-muted-foreground leading-[1.75] text-base md:text-lg">
                Stabilný partner v oblasti inžinierskej geodézie a katastra
                nehnuteľností v regióne Orava. Odborná prax sa opiera o precíznosť
                a dôveru budovanú počas viac ako pätnástich rokov pôsobenia v teréne.
              </p>
              <p className="text-muted-foreground leading-[1.75] text-base md:text-lg">
                Používame najmodernejšiu meraciu techniku a softvérové riešenia,
                ktoré garantujú presnosť výsledkov aj v najnáročnejších
                geografických podmienkach Oravy a celého Slovenska.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="mt-12 grid grid-cols-3 gap-4 pt-10 border-t border-border"
            >
              {[
                { k: "15+", v: "Rokov praxe" },
                { k: "PhD.", v: "Odbornosť" },
                { k: "GEO2", v: "Certifikácia" },
              ].map((s, i) => (
                <div
                  key={s.v}
                  className={i > 0 ? "border-l border-border pl-6" : ""}
                >
                  <div className="font-serif text-4xl md:text-5xl text-primary-deep mb-1">
                    {s.k}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-accent font-bold">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
