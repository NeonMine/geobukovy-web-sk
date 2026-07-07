import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const subject = encodeURIComponent(`Dopyt od ${formData.name} — GeoBukový`);
    const body = encodeURIComponent(
      `Meno: ${formData.name}\nEmail: ${formData.email}\n\nSpráva:\n${formData.message}`
    );
    window.open(`mailto:geobukovy@gmail.com?subject=${subject}&body=${body}`, "_self");
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-border py-4 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4 py-16 border-t border-border"
      >
        <CheckCircle className="w-10 h-10 text-primary" />
        <h3 className="font-display text-3xl text-foreground">Ďakujeme.</h3>
        <p className="text-muted-foreground max-w-md">
          Váš emailový klient by sa mal otvoriť s predvyplnenou správou pripravenou
          na odoslanie na geobukovy@gmail.com.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm font-medium text-foreground border-b border-foreground/40 hover:border-foreground pb-0.5"
        >
          Odoslať ďalšiu správu
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="mb-8">
        <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight">
          Napíšte nám
        </h3>
        <div className="w-16 h-1 bg-accent mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-foreground mb-2">Meno a priezvisko</span>
          <input
            required
            placeholder="Ján Novák"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={inputClass}
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-foreground mb-2">E-mail</span>
          <input
            required
            type="email"
            placeholder="jan.novak@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={inputClass}
          />
        </label>
      </div>

      <label className="block pt-8">
        <span className="block text-sm font-medium text-foreground mb-2">Vaša správa</span>
        <textarea
          required
          rows={5}
          placeholder="Opíšte, čo potrebujete zamerať alebo vypracovať…"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`${inputClass} resize-none`}
        />
      </label>

      <div className="pt-10">
        <motion.button
          type="submit"
          disabled={sending}
          whileHover={{ x: 4 }}
          className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:bg-primary-deep transition-colors disabled:opacity-60 shadow-elegant"
        >
          {sending ? "Odosielam…" : "Odoslať správu"}
          <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      </div>
    </form>
  );
};

export default ContactForm;
