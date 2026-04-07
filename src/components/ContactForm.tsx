import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Construct mailto link and open it
    const subject = encodeURIComponent(`Dopyt od ${formData.name} — Geobukovy`);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="max-w-xl mx-auto mt-16"
    >
      <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
        <h3 className="text-2xl font-display text-center mb-6">Napíšte nám</h3>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8"
          >
            <CheckCircle className="w-16 h-16 text-accent" />
            <p className="text-primary-foreground text-lg font-semibold">Ďakujeme za správu!</p>
            <p className="text-primary-foreground/70 text-center">
              Váš emailový klient by sa mal otvoriť s predvyplnenou správou. Odošlite ju prosím.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-accent hover:underline transition-colors"
            >
              Odoslať ďalšiu správu
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <Label htmlFor="name" className="text-primary-foreground/80 mb-2 block">
                Meno a priezvisko
              </Label>
              <Input
                id="name"
                required
                placeholder="Ján Novák"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-primary-foreground/80 mb-2 block">
                Váš email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="jan.novak@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-primary-foreground/80 mb-2 block">
                Vaša správa
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                placeholder="Opíšte, čo potrebujete..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent text-accent-foreground py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send className="w-5 h-5" />
              {sending ? "Odosielam..." : "Odoslať správu"}
            </motion.button>
          </form>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
