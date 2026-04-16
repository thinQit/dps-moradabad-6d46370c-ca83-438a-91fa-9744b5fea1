"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { GalleryMasonry } from "@/components/blocks/GalleryMasonry";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { CTASplit } from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PortfolioPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-1.png"
            alt="Portfolio"
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
              headline="Campus Portfolio"
              subheadline="Highlights from academics, activities, events, and student achievements."
              primaryCta={{ label: "Admissions", href: "/services" }}
              secondaryCta={{ label: "Contact", href: "/contact" }}
              imageUrl="/images/product-1.png"
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <GalleryMasonry
          headline="Stories in snapshots"
          subheadline="Replace these images with real campus photos anytime."
          images={[
            { url: "/images/product-2.png", alt: "Academics", caption: "Academic excellence" },
            { url: "/images/product-3.png", alt: "STEM", caption: "STEM & innovation" },
            { url: "/images/product-2.png", alt: "Arts", caption: "Arts & culture" },
            { url: "/images/product-3.png", alt: "Sports", caption: "Sports & teamwork" },
            { url: "/images/product-1.png", alt: "Community", caption: "Community & values" },
            { url: "/images/product-3.png", alt: "Wellbeing", caption: "Student wellbeing" }
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
        <TestimonialsGrid
          headline="Achievement mindset"
          subheadline="A culture that celebrates effort, improvement, and excellence."
          testimonials={[
            {
              quote:
                "I learned to balance studies with activities. The encouragement helped me participate with confidence.",
              name: "Student",
              title: "Senior School"
            },
            {
              quote:
                "The school’s communication and focus on values make a real difference in daily learning.",
              name: "Parent",
              title: "Primary Wing"
            }
          ]}
        />
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <CTASplit
          headline="Visit the campus"
          description="Schedule a visit and see how learning happens at DPS Moradabad."
          ctaLabel="Contact Us"
          ctaHref="/contact"
          secondaryCtaLabel="Admissions Steps"
          secondaryCtaHref="/services"
          imageUrl="/images/product-1.png"
        />
      </motion.section>
    </div>
  );
}
