import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
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
      transition={{ duration: 0.7 }}
    >
      <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border">
        <h3 className="text-2xl font-display text-foreground mb-2">Napíšte nám</h3>
        <p className="text-muted-foreground text-sm mb-8">Odpovieme vám čo najskôr</p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-12"
          >
            <CheckCircle className="w-16 h-16 text-primary" />
            <p className="text-foreground text-lg font-semibold">Ďakujeme za správu!</p>
            <p className="text-muted-foreground text-center text-sm">
              Váš emailový klient by sa mal otvoriť s predvyplnenou správou.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-primary hover:text-accent transition-colors font-medium text-sm"
            >
              Odoslať ďalšiu správu
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <Label htmlFor="name" className="text-foreground/80 mb-2 block text-sm">
                Meno a priezvisko
              </Label>
              <Input
                id="name"
                required
                placeholder="Ján Novák"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-foreground/80 mb-2 block text-sm">
                Váš email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="jan.novak@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-xl"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-foreground/80 mb-2 block text-sm">
                Vaša správa
              </Label>
              <Textarea
                id="message"
                required
                rows={5}
                placeholder="Opíšte, čo potrebujete..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl resize-none"
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent text-accent-foreground py-3.5 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-shadow disabled:opacity-60"
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
