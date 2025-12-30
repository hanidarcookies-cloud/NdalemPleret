import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Text Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">
              Location
            </span>
            <h2 className="mb-6 font-serif text-4xl text-foreground">
              In the heart of heritage
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Omah Solo is strategically located near the city's most iconic landmarks. 
              Enjoy the convenience of being just minutes away from cultural sites while 
              retreating to a quiet residential neighborhood.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Address</h4>
                  <p className="text-muted-foreground">Jl. Melati No. 12, Solo, Central Java, Indonesia 57141</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Contact</h4>
                  <p className="text-muted-foreground">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Instagram className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium">Follow Us</h4>
                  <p className="text-muted-foreground">@omahsolo.homestay</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative min-h-[400px] overflow-hidden rounded-xl border border-border bg-muted"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63283.7431355404!2d110.77885404507062!3d-7.561578663852037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16627ad11ab1%3A0x3027a76e352bb10!2sSurakarta%2C%20Surakarta%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1709123456789!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', inset: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
