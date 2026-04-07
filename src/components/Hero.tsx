import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Ruler, FileText } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Geodetické meranie v krajine"
          className="absolute inset-0 w-full h-full object-cover scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

        <div className="relative z-10 container text-center px-4 py-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6"
          >
            <span className="inline-block px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase bg-accent/20 text-accent border border-accent/30 rounded-full backdrop-blur-sm">
              Geodetická kancelária, inžiniering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display text-primary-foreground mb-6 leading-[0.9]"
          >
            Geo<span className="text-accent">bukovy</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-2 font-body"
          >
            Ing. Tomáš Bukový, PhD. GEO2
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base md:text-lg text-primary-foreground/50 max-w-lg mx-auto mb-12 font-body"
          >
            Profesionálne geodetické služby s presnosťou a spoľahlivosťou
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/kontakt">
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 transition-shadow"
              >
                Kontaktujte nás
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
            <Link to="/sluzby">
              <motion.span
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary-foreground/10 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                Naše služby
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Floating decorative cards */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block absolute bottom-32 left-12 animate-float"
        >
          <div className="glass rounded-2xl p-5 shadow-2xl">
            <MapPin className="w-8 h-8 text-accent mb-2" />
            <div className="text-sm font-semibold text-foreground">Orava</div>
            <div className="text-xs text-muted-foreground">a celé Slovensko</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden lg:block absolute bottom-40 right-16 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="glass rounded-2xl p-5 shadow-2xl">
            <Ruler className="w-8 h-8 text-primary mb-2" />
            <div className="text-sm font-semibold text-foreground">100%</div>
            <div className="text-xs text-muted-foreground">presnosť meraní</div>
          </div>
        </motion.div>
      </section>

      {/* Quick services preview */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-accent bg-accent/10 rounded-full mb-4">
              Čo ponúkame
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Geodetické služby
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Komplexné riešenia pre vaše geodetické potreby
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileText, title: "Geometrické plány", desc: "Rozdelenie, zlúčenie a určenie hraníc pozemkov" },
              { icon: Ruler, title: "Vytyčovanie", desc: "Presné vytyčovanie hraníc v teréne" },
              { icon: MapPin, title: "Adresné body", desc: "Zameranie a zriadenie adresných bodov" },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl p-8 shadow-sm border hover:shadow-xl hover:border-primary/20 transition-all duration-500 cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link to="/sluzby">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
              >
                Zobraziť všetky služby <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display text-primary-foreground mb-6"
          >
            Máte otázky?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/60 mb-8 max-w-md mx-auto"
          >
            Neváhajte nás kontaktovať pre nezáväznú konzultáciu
          </motion.p>
          <Link to="/kontakt">
            <motion.span
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-accent/25"
            >
              Kontaktujte nás <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
