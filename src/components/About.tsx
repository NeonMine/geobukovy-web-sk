import { motion } from "framer-motion";
import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="o-nas" className="py-24">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutImg}
              alt="Geodet pri práci"
              className="rounded-lg shadow-lg w-full object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6">O nás</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ing. Tomáš Bukový, PhD. — autorizovaný geodet s dlhoročnou praxou v oblasti geodézie a kartografie.
              Mojím cieľom je poskytovať presné, spoľahlivé a rýchle geodetické služby pre mojich klientov.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Využívam najmodernejšiu geodetickú techniku a softvér, vďaka čomu dokážem
              zabezpečiť najvyššiu presnosť meraní. Pôsobím v regióne Orava a na celom území Slovenska.
            </p>
            <div className="flex gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-3xl font-display text-primary">100%</div>
                <div className="text-muted-foreground text-sm mt-1">spokojnosť klientov</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="text-3xl font-display text-primary">Orava</div>
                <div className="text-muted-foreground text-sm mt-1">a celé Slovensko</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
