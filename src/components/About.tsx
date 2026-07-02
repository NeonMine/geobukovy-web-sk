import { motion } from "framer-motion";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <>
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">O nás</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1] text-foreground">
              Geodézia s pätnástimi rokmi praxe.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <img
              src={aboutImg}
              alt="Geodet pri práci v teréne"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 md:pl-8"
          >
            <div className="eyebrow mb-4">Ing. Tomáš Bukový, PhD.</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-8">
              Autorizovaný geodet a kartograf, GEO2 — geodetická kancelária a inžiniering.
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Za viac ako pätnásť rokov v odbore som vypracoval stovky geometrických plánov,
                vytýčení a geodetických podkladov pre stavby v regióne Orava a po celom Slovensku.
              </p>
              <p>
                Používam najmodernejšiu geodetickú techniku a softvér. Klientom garantujem
                presnosť, dodržanie termínov a jasnú, prehľadnú dokumentáciu — bez zbytočných
                komplikácií a s osobným prístupom.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "15", v: "rokov praxe" },
                { k: "PhD.", v: "vysoká odbornosť" },
                { k: "GEO2", v: "autorizácia" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl md:text-4xl text-foreground">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground tracking-wide">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
