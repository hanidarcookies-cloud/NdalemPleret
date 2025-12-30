import { motion } from "framer-motion";
import exteriorImage from "@assets/generated_images/modern_tropical_house_exterior_in_java.png";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm">
              <img
                src={exteriorImage}
                alt="Modern Tropical Exterior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 -z-10 h-1/2 w-1/2 bg-primary/10 rounded-sm" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-primary">
              Our Story
            </span>
            <h2 className="mb-6 font-serif text-4xl md:text-5xl text-foreground">
              Modern Comfort, <br /> Javanese Soul.
            </h2>
            <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
              Nestled in a quiet corner of Solo, our homestay offers a retreat from the bustling city while keeping you close to its cultural heart. We blend modern minimalist architecture with the warmth of traditional Javanese hospitality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every corner is designed to bring peace and comfort, allowing you to slow down and appreciate the simple joys of travel. Whether you are here for a cultural exploration or a business trip, Omah Solo is your home away from home.
            </p>
            
            <div className="mt-8 flex gap-8">
              <div>
                <span className="block font-serif text-3xl text-primary">5</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Minutes to City Center</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-primary">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Local Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
