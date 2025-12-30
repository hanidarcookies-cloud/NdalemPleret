import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary"
          >
            Stay With Us
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mb-12 font-serif text-4xl text-foreground"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-card border border-border shadow-xl shadow-stone-200/50"
          >
            <div className="bg-primary/5 p-8 pb-4">
              <h3 className="font-serif text-2xl font-medium text-foreground">Standard Room</h3>
              <p className="mt-2 text-muted-foreground">Perfect for couples or solo travelers.</p>
            </div>
            
            <div className="p-8 pt-4">
              <div className="mb-8 flex items-baseline justify-center gap-1">
                <span className="text-sm font-medium text-muted-foreground align-top">IDR</span>
                <span className="text-5xl font-serif font-bold text-primary">350k</span>
                <span className="text-muted-foreground">/ night</span>
              </div>

              <ul className="mb-8 space-y-4 text-left">
                {[
                  "Queen Size Bed",
                  "Private Bathroom with Hot Shower",
                  "Free High-Speed WiFi",
                  "Breakfast for 2 Included",
                  "Access to Garden & Lounge",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-4 text-center font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Book via WhatsApp
                <MessageCircle className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-xs text-muted-foreground">
                *Prices may vary during holidays and weekends.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
