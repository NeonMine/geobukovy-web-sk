import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", t: "Geometrické plány", d: "Vypracovanie geometrických plánov pre rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov." },
  { n: "02", t: "Vytyčovanie pozemkov", d: "Presné vytyčovanie hraníc pozemkov v teréne s modernou geodetickou technikou." },
  { n: "03", t: "Adresné body", d: "Zameranie a zriadenie adresných bodov pre novostavby a existujúce budovy." },
  { n: "04", t: "Zisťovanie vlastníctva", d: "Identifikácia vlastníckych vzťahov k pozemkom a nehnuteľnostiam v katastri." },
  { n: "05", t: "Vyznačenie vlastníctva", d: "Vyznačenie vlastníckych práv v katastri nehnuteľností na základe podkladov." },
  { n: "06", t: "Stavebné povolenia", d: "Geodetické podklady potrebné pre vydanie stavebného povolenia." },
  { n: "07", t: "Kolaudačné rozhodnutia", d: "Zameranie stavieb a príprava dokumentácie pre kolaudačné konanie." },
];

const Services = () => {
  return (
    <>
      <section className="pt-40 pb-20 bg-background border-b border-border">
        <div className="container grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="hairline" />
              <span className="eyebrow">Naša ponuka</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <h1 className="font-display text-5xl md:text-7xl leading-[1] text-foreground">Služby</h1>
            <p className="mt-6 max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed">
              Komplexné geodetické služby pre fyzické aj právnické osoby —
              s dôrazom na presnosť, termíny a čistú dokumentáciu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:border-b border-border">
            {services.map((s, i) => (
              <motion.article
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="group relative py-12 md:p-10 md:border-r md:border-t border-border last:md:border-r"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.n}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="container py-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="font-display text-3xl md:text-5xl text-foreground max-w-xl leading-[1.1]">
            Máte konkrétny projekt? Pripravím vám ponuku.
          </h2>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:bg-primary transition-colors"
          >
            Kontaktujte nás <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
