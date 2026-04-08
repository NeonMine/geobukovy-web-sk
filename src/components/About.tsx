import { motion } from "framer-motion";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-accent bg-accent/20 rounded-full mb-4"
          >
            Kto sme
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display text-primary-foreground mb-4"
          >
            O nás
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 max-w-lg mx-auto"
          >
            Spoznajte nás bližšie
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Geodet pri práci"
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl">
                  <div className="text-3xl font-display font-bold">15</div>
                  <div className="text-xs opacity-80">rokov</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-2">
                Ing. Tomáš Bukový, PhD.
              </h2>
              <div className="text-accent font-semibold mb-6">GEO2 — Geodetická kancelária, inžiniering</div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Autorizovaný geodet s dlhoročnou praxou v oblasti geodézie a kartografie.
                Mojím cieľom je poskytovať presné, spoľahlivé a rýchle geodetické služby pre mojich klientov.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Využívam najmodernejšiu geodetickú techniku a softvér, vďaka čomu dokážem
                zabezpečiť najvyššiu presnosť meraní. Pôsobím v regióne Orava a na celom území Slovenska.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "100%", label: "spokojnosť" },
                  { value: "Orava", label: "a celé SR" },
                  { value: "GEO2", label: "certifikácia" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="text-center p-4 rounded-xl bg-muted"
                  >
                    <div className="text-2xl font-display text-primary font-bold">{stat.value}</div>
                    <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
