"use client";

import { motion } from "framer-motion";

import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { LogoCloud } from "@/components/blocks/LogoCloud";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { TestimonialsGrid } from "@/components/blocks/TestimonialsGrid";
import { CTASplit } from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="bg-background">
      {/* HERO (mandatory) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Delhi Public School, Moradabad campus"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/0" />
        </div>

        <div className="relative">
          <div className="container mx-auto max-w-7xl px-4 py-10">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-3xl bg-background/10 backdrop-blur-xl p-6 md:p-10"
            >
              {/* Ensure hero text is white over background image */}
              <div className="text-white">
                <HeroMinimal
                  headline="Empowering Minds, Shaping Futures"
                  subheadline="Delhi Public School, Moradabad — a modern, values-driven learning environment with strong academics, co-curricular excellence, and a caring community."
                  primaryCta={{ label: "Explore Admissions", href: "/services" }}
                  secondaryCta={{ label: "Contact Us", href: "/contact" }}
                  imageUrl="/images/product-1.png"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos / trust */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <LogoCloud
          headline="Learning supported by strong foundations"
          logos={[
            { name: "Academics", imageUrl: "/images/product-2.png" },
            { name: "Sports", imageUrl: "/images/product-3.png" },
            { name: "Arts", imageUrl: "/images/product-2.png" },
            { name: "STEM", imageUrl: "/images/product-3.png" },
            { name: "Wellbeing", imageUrl: "/images/product-2.png" }
          ]}
        />
      </motion.section>

      {/* Pillars */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-muted"
      >
        <FeaturesGrid
          badge="Our Holistic Approach"
          headline="A campus designed for growth"
          subheadline="We focus on strong learning outcomes while nurturing confidence, curiosity, and character."
          features={[
            {
              icon: "📚",
              title: "Academic Excellence",
              description:
                "Structured learning with clear goals, regular feedback, and support for every learner."
            },
            {
              icon: "🧪",
              title: "STEM & Innovation",
              description:
                "Hands-on learning that builds problem-solving, creativity, and real-world readiness."
            },
            {
              icon: "🎭",
              title: "Arts & Expression",
              description:
                "Music, art, and cultural activities that help students find their voice."
            },
            {
              icon: "🏅",
              title: "Sports & Fitness",
              description:
                "Training, teamwork, and discipline through a balanced sports program."
            },
            {
              icon: "🤝",
              title: "Values & Leadership",
              description:
                "A respectful environment that encourages responsibility, empathy, and integrity."
            },
            {
              icon: "🧠",
              title: "Student Wellbeing",
              description:
                "A caring support system that prioritizes safety, confidence, and mental wellbeing."
            }
          ]}
        />
      </motion.section>

      {/* Story / sticky reveal */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <div className="container mx-auto max-w-7xl px-4 py-10 md:py-16">
          <StickyScrollReveal
            content={[
              {
                title: "A clear learning journey",
                description:
                  "From foundational skills to advanced concepts, our approach builds confidence step-by-step.",
                content: (
                  <img
                    src="/images/product-3.png"
                    alt="Students learning in classroom"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              },
              {
                title: "Beyond the classroom",
                description:
                  "Clubs, events, and activities help students explore interests and develop leadership.",
                content: (
                  <img
                    src="/images/product-1.png"
                    alt="Co-curricular activities"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              },
              {
                title: "A safe, supportive community",
                description:
                  "We create an environment where students feel seen, supported, and motivated to do their best.",
                content: (
                  <img
                    src="/images/product-1.png"
                    alt="Supportive school community"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              }
            ]}
          />
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-muted"
      >
        <TestimonialsGrid
          headline="Voices from our community"
          subheadline="What parents and students value most about DPS Moradabad."
          testimonials={[
            {
              quote:
                "The teachers are supportive and communication is clear. We’ve seen strong progress and confidence in our child.",
              name: "Parent",
              title: "Grade VI"
            },
            {
              quote:
                "The school encourages both academics and activities. I feel motivated to participate and improve.",
              name: "Student",
              title: "Middle School"
            },
            {
              quote:
                "A disciplined yet friendly environment. The focus on values and learning is balanced and practical.",
              name: "Parent",
              title: "Grade IX"
            }
          ]}
        />
      </motion.section>

      {/* CTA (mandatory) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <CTASplit
          headline="Start your child’s journey at DPS Moradabad"
          description="Get admissions guidance, fee plan options, and a quick checklist for the next steps."
          ctaLabel="View Admissions"
          ctaHref="/services"
          secondaryCtaLabel="See Fee Plans"
          secondaryCtaHref="/pricing"
          imageUrl="/images/product-2.png"
        />
      </motion.section>
    </div>
  );
}
