import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import heroImage from "@assets/generated_images/cozy_minimalist_homestay_bedroom_in_solo.png";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="h-full w-full"
        >
          <img
            src={heroImage}
            alt="Cozy Bedroom in Solo"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-white/90"
        >
          Welcome to Solo
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-6 font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight"
        >
          Omah Solo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mb-8 max-w-lg text-lg font-light text-white/90 md:text-xl"
        >
          A peaceful sanctuary in the heart of Javanese culture.
          Experience the warmth of heritage living.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          onClick={handleBook}
          className="group flex items-center gap-2 rounded-full bg-white/10 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-primary"
        >
          Book Your Stay
          <MessageCircle className="h-4 w-4" />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform cursor-pointer text-white/80 transition-colors hover:text-white"
        onClick={scrollToAbout}
      >
        <ArrowDown className="h-8 w-8 animate-bounce font-light" />
      </motion.div>
    </section>
  );
}
