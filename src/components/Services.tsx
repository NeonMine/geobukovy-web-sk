import { MapPin, Ruler, FileText, Building2 } from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Geometrické plány",
    desc: "Vypracovanie geometrických plánov pre rozdelenie, zlúčenie a určenie vlastníckych hraníc pozemkov.",
  },
  {
    icon: Ruler,
    title: "Vytýčenie hraníc",
    desc: "Presné vytýčenie hraníc pozemkov v teréne s použitím modernej geodetickej techniky.",
  },
  {
    icon: FileText,
    title: "Kataster nehnuteľností",
    desc: "Kompletný servis pre zápis do katastra nehnuteľností vrátane poradenstva a právnej podpory.",
  },
  {
    icon: Building2,
    title: "Inžinierska geodézia",
    desc: "Geodetické práce pre stavebníctvo — zameranie stavieb, vytýčenie a kontrolné merania.",
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="py-24 bg-muted">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center text-foreground mb-4">
          Naše služby
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
          Ponúkame komplexné geodetické služby pre fyzické aj právnické osoby
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border">
              <s.icon className="w-10 h-10 text-primary mb-5" />
              <h3 className="text-xl font-display text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
