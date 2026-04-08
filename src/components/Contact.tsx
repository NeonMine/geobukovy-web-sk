import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefón",
    items: [
      { text: "0948 148 341", href: "tel:+421948148341" },
    ],
  },
  {
    icon: Mail,
    title: "E-mail",
    items: [{ text: "geobukovy@gmail.com", href: "mailto:geobukovy@gmail.com" }],
  },
  {
    icon: MapPin,
    title: "Adresa",
    items: [{ text: "Rabča 327" }],
  },
  {
    icon: Clock,
    title: "Pracovná doba",
    items: [{ text: "Po – Pi: 8:00 – 16:00" }],
  },
];

const Contact = () => {
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
            Spojte sa s nami
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-display text-primary-foreground mb-4"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 max-w-lg mx-auto"
          >
            Neváhajte ma kontaktovať pre nezáväznú konzultáciu alebo cenovú ponuku
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Info cards */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.items.map((item) =>
                      item.href ? (
                        <a
                          key={item.text}
                          href={item.href}
                          className="block text-muted-foreground hover:text-accent transition-colors text-sm"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <p key={item.text} className="text-muted-foreground text-sm">
                          {item.text}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
