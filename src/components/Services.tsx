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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="sluzby" className="py-24 bg-muted">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display text-center text-foreground mb-4"
        >
          Naše služby
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
        >
          Ponúkame komplexné geodetické služby pre fyzické aj právnické osoby
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 12px 30px -8px hsl(152 45% 28% / 0.15)" }}
              className="bg-card rounded-lg p-8 shadow-sm border cursor-default transition-colors"
            >
              <s.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-display text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
