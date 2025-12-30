import { motion } from "framer-motion";
import { Wifi, Snowflake, Coffee, Car, ShieldCheck, MapPin } from "lucide-react";

const facilities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Stay connected with our dedicated fiber optic internet."
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description: "Cool and comfortable rooms for tropical days."
  },
  {
    icon: Coffee,
    title: "Morning Breakfast",
    description: "Authentic local breakfast included with your stay."
  },
  {
    icon: Car,
    title: "Secure Parking",
    description: "Spacious private parking for cars and motorbikes."
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "CCTV and staff on standby for your safety."
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "Close to Kraton, Pasar Klewer, and culinary spots."
  }
];

export function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary"
          >
            Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground"
          >
            Everything you need for a relaxing stay
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-lg border border-border/50 bg-card p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <facility.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-medium">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
