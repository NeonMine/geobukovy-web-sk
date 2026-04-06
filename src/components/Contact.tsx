import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontakt" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4">
        <h2 className="text-4xl md:text-5xl font-display text-center mb-4">Kontaktujte nás</h2>
        <p className="text-center text-primary-foreground/75 mb-16 max-w-xl mx-auto">
          Neváhajte nás kontaktovať pre nezáväznú konzultáciu alebo cenovú ponuku
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center gap-3">
            <Phone className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">Telefón</h3>
            <a href="tel:+421900000000" className="text-primary-foreground/80 hover:text-accent transition-colors">
              +421 900 000 000
            </a>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Mail className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">E-mail</h3>
            <a href="mailto:info@geobukovy.sk" className="text-primary-foreground/80 hover:text-accent transition-colors">
              info@geobukovy.sk
            </a>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <MapPin className="w-8 h-8 text-accent" />
            <h3 className="text-lg font-semibold">Adresa</h3>
            <p className="text-primary-foreground/80">Slovensko</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
