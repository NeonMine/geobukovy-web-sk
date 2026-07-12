import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const infoRows = [
  { icon: Phone, label: "Telefón", value: "0948 148 341", href: "tel:+421948148341" },
  { icon: Mail, label: "E-mail", value: "geobukovy@gmail.com", href: "mailto:geobukovy@gmail.com" },
  { icon: MapPin, label: "Adresa", value: "Rabča 327" },
  { icon: Clock, label: "Pracovná doba", value: "Dohoda cez telefón" },
];

const Contact = () => {
  return (
    <>
      <section className="relative pt-40 pb-20 bg-background border-b border-border overflow-hidden">
        {/* Ambient animated blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-10 right-0 w-[360px] h-[360px] rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container relative grid md:grid-cols-12 gap-8">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span
                className="hairline"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: "left" }}
              />
              <span className="eyebrow">Spojme sa</span>
            </div>
          </motion.div>
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1] text-foreground overflow-hidden">
              {"Kontakt".split("").map((c, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  {c}
                </motion.span>
              ))}
              <motion.span
                className="text-accent inline-block"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.4, 1], opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                .
              </motion.span>
            </h1>
            <motion.p
              className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Napíšte, čo potrebujete — pripravím nezáväznú cenovú ponuku
              a odpoviem zvyčajne do 24 hodín.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-16">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="eyebrow mb-6">Kontaktné údaje</div>
            <div className="divide-y divide-border border-y border-border">
              {infoRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center justify-between py-5 gap-6 cursor-default"
                >
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <motion.span
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary group-hover:bg-accent/20 transition-colors"
                    >
                      <row.icon className="w-4 h-4 group-hover:text-accent transition-colors" />
                    </motion.span>
                    <span className="text-xs tracking-[0.18em] uppercase">{row.label}</span>
                  </div>
                  {row.href ? (
                    <a href={row.href} className="story-link text-foreground hover:text-primary transition-colors text-right">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-foreground text-right">{row.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 text-sm text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Ing. Tomáš Bukový, PhD.<br />
              GEO2 — Geodetická kancelária, inžiniering<br />
              Rabča 327, Slovenská republika
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
