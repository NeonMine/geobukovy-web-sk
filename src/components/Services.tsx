import { MapPin, Ruler, FileText, Building2, Home, Search, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Geometrické plány",
    desc: "Vypracovanie geometrických plánov pre rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov.",
  },
  {
    icon: Ruler,
    title: "Vytyčovanie pozemkov",
    desc: "Presné vytyčovanie hraníc pozemkov v teréne s použitím modernej geodetickej techniky.",
  },
  {
    icon: MapPin,
    title: "Adresné body",
    desc: "Zameranie a zriadenie adresných bodov pre novostavby a existujúce budovy.",
  },
  {
    icon: Search,
    title: "Zisťovanie vlastníctva",
    desc: "Identifikácia vlastníckych vzťahov k pozemkom a nehnuteľnostiam podľa katastra.",
  },
  {
    icon: Landmark,
    title: "Vyznačenie vlastníctva",
    desc: "Vyznačenie vlastníckych práv v katastri nehnuteľností na základe právnych podkladov.",
  },
  {
    icon: Building2,
    title: "Stavebné povolenia",
    desc: "Geodetické podklady potrebné pre vydanie stavebného povolenia.",
  },
  {
    icon: Home,
    title: "Kolaudačné rozhodnutia",
    desc: "Zameranie stavieb a príprava dokumentácie pre kolaudačné konanie.",
  },
];

const Services = () => {
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
            Naša ponuka
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display text-primary-foreground mb-4"
          >
            Služby
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 max-w-lg mx-auto"
          >
            Komplexné geodetické služby pre fyzické aj právnické osoby
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group bg-card rounded-2xl p-8 shadow-sm border hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
