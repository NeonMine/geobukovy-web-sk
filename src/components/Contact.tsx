import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display text-center mb-4"
        >
          Kontaktujte nás
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-primary-foreground/75 mb-16 max-w-xl mx-auto"
        >
          Neváhajte ma kontaktovať pre nezáväznú konzultáciu alebo cenovú ponuku
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3">
            <Phone className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">Telefón</h3>
            <div className="flex flex-col gap-1">
              <a href="tel:+421948148341" className="text-primary-foreground/80 hover:text-accent transition-colors">
                0948 148 341
              </a>
              <a href="tel:+421908978591" className="text-primary-foreground/80 hover:text-accent transition-colors">
                0908 978 591
              </a>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3">
            <Mail className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">E-mail</h3>
            <a href="mailto:geobukovy@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors">
              geobukovy@gmail.com
            </a>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center gap-3">
            <MapPin className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">Adresa</h3>
            <p className="text-primary-foreground/80">Rabča 327</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
