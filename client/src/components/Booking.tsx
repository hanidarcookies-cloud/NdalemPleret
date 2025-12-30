import { motion } from "framer-motion";

export function Booking() {
  return (
    <section className="bg-secondary py-20 text-secondary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 font-serif text-3xl md:text-5xl font-medium"
        >
          Ready to experience Solo?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 text-lg text-secondary-foreground/80 max-w-2xl mx-auto"
        >
          Book your stay directly with us for the best rates and personalized service.
          We look forward to welcoming you home.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
          className="bg-background text-foreground px-8 py-4 rounded-full font-medium tracking-wide uppercase transition-transform hover:scale-105 hover:shadow-lg"
        >
          Book Now via WhatsApp
        </motion.button>
      </div>
    </section>
  );
}
