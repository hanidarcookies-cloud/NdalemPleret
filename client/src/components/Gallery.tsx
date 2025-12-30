import { motion } from "framer-motion";
import detailImage from "@assets/generated_images/javanese_wooden_craft_decoration_detail.png";
import gardenImage from "@assets/generated_images/peaceful_inner_courtyard_garden.png";
import bedroomImage from "@assets/generated_images/cozy_minimalist_homestay_bedroom_in_solo.png";

export function Gallery() {
  const images = [
    { src: bedroomImage, alt: "Cozy Bedroom", aspect: "aspect-[4/3]" },
    { src: detailImage, alt: "Javanese Details", aspect: "aspect-[3/4]" },
    { src: gardenImage, alt: "Peaceful Garden", aspect: "aspect-[4/3]" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <motion.span 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary"
            >
              Gallery
            </motion.span>
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="font-serif text-4xl text-foreground"
            >
              A glimpse into our sanctuary
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground md:max-w-xs text-sm"
          >
            Explore the corners of Omah Solo, where every detail is curated for your peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-sm group ${index === 1 ? 'md:-mt-12 md:mb-12' : ''}`}
            >
              <div className={`${img.aspect} w-full overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white font-serif italic text-lg">{img.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
