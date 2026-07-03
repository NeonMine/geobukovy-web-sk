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
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Spojme sa</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1] text-foreground">
              Kontakt<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
              Napíšte, čo potrebujete — pripravím nezáväznú cenovú ponuku
              a odpoviem zvyčajne do 24 hodín.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">Kontaktné údaje</div>
            <div className="divide-y divide-border border-y border-border">
              {infoRows.map((row, i) => (
                <motion.div
                  key={row.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center justify-between py-5 gap-6"
                >
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <row.icon className="w-4 h-4" />
                    <span className="text-xs tracking-[0.18em] uppercase">{row.label}</span>
                  </div>
                  {row.href ? (
                    <a href={row.href} className="text-foreground hover:text-primary transition-colors text-right">
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-foreground text-right">{row.value}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 text-sm text-muted-foreground leading-relaxed">
              Ing. Tomáš Bukový, PhD.<br />
              GEO2 — Geodetická kancelária, inžiniering<br />
              Rabča 327, Slovenská republika
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
