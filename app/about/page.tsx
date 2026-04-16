"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { StatsCounter } from "@/components/blocks/StatsCounter";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { CTASplit } from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-2.png"
            alt="School building"
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
              headline="About DPS Moradabad"
              subheadline="A modern school community committed to academic excellence, character building, and holistic development."
              primaryCta={{ label: "Admissions", href: "/services" }}
              secondaryCta={{ label: "Contact", href: "/contact" }}
              imageUrl="/images/product-3.png"
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
      >
        <StatsCounter
          bgColor="bg-foreground text-background"
          stats={[
            { label: "Student-first culture", value: "100%" },
            { label: "Co-curricular pathways", value: "20+" },
            { label: "Learning support", value: "1:1" },
            { label: "Community focus", value: "Always" }
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
        <TeamGrid
          headline="Leadership & educators"
          subheadline="A dedicated team guiding students with care, clarity, and high expectations."
          members={[
            {
              name: "Principal",
              title: "School Leadership",
              bio: "Academic direction, student wellbeing, and community partnership.",
              imageUrl: "/images/product-2.png"
            },
            {
              name: "Academic Coordinator",
              title: "Curriculum & Assessment",
              bio: "Learning outcomes, teacher support, and continuous improvement.",
              imageUrl: "/images/product-1.png"
            },
            {
              name: "Activities Coordinator",
              title: "Clubs & Events",
              bio: "Co-curricular programs that build confidence and leadership.",
              imageUrl: "/images/product-1.png"
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
          headline="Want to know if DPS Moradabad is the right fit?"
          description="Talk to our admissions team for eligibility, documents, and the next steps."
          ctaLabel="Contact Admissions"
          ctaHref="/contact"
          secondaryCtaLabel="View Admissions"
          secondaryCtaHref="/services"
          imageUrl="/images/product-2.png"
        />
      </motion.section>
    </div>
  );
}
