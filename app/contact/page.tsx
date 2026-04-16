"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { ContactForm } from "@/components/blocks/ContactForm";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-2.png"
            alt="Contact DPS Moradabad"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/0" />
        </div>

        <div className="relative container mx-auto max-w-7xl px-4 py-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl bg-background/10 backdrop-blur-xl p-6 md:p-10 text-white"
          >
            <HeroMinimal
              headline="Contact Us"
              subheadline="Have a question about admissions, fees, or campus life? Send a message and our team will respond."
              primaryCta={{ label: "Send Enquiry", href: "#form" }}
              secondaryCta={{ label: "Admissions", href: "/services" }}
              imageUrl="/images/product-3.png"
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        id="form"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <ContactForm
          headline="Send an enquiry"
          subheadline="Share your child’s grade and your question. We’ll guide you on the next steps."
          contactInfo={[
            { icon: "📍", label: "Campus", value: "DPS Moradabad (Office)" },
            { icon: "☎️", label: "Phone", value: "+91-XXXXXXXXXX" },
            { icon: "✉️", label: "Email", value: "admissions@dpsmoradabad.edu.in" }
          ]}
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-muted"
      >
        <GalleryMasonry
          headline="Campus glimpses"
          subheadline="A quick look at learning spaces and student life."
          images={[
            { url: "/images/product-2.png", alt: "Campus view", caption: "Green, open campus spaces" },
            { url: "/images/product-3.png", alt: "Classroom learning", caption: "Engaging classroom learning" },
            { url: "/images/product-3.png", alt: "Activities", caption: "Co-curricular activities" },
            { url: "/images/product-3.png", alt: "Sports", caption: "Sports and fitness" },
            { url: "/images/product-3.png", alt: "Events", caption: "Events and celebrations" },
            { url: "/images/product-3.png", alt: "Labs", caption: "Hands-on learning" }
          ]}
        />
      </motion.section>
    </div>
  );
}
