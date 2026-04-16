"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { PricingTable } from "@/components/blocks/PricingTable";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASplit } from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function PricingPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-3.png"
            alt="Fee plans"
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
              headline="Fee Plans (Indicative)"
              subheadline="Choose a plan view to understand typical school fee components. For the latest grade-wise fees, contact the admissions office."
              primaryCta={{ label: "Contact for Exact Fees", href: "/contact" }}
              secondaryCta={{ label: "Admissions", href: "/services" }}
              imageUrl="/images/product-2.png"
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
        <PricingTable
          headline="Simple fee plan overview"
          subheadline="These tiers are placeholders for website structure. Replace amounts with official DPS Moradabad figures."
          tiers={[
            {
              name: "Primary",
              price: "₹ —",
              period: "per term",
              description: "Foundational learning with strong teacher support.",
              features: [
                "Tuition component",
                "Activity & development",
                "Assessment & reporting",
                "Parent communication"
              ],
              ctaLabel: "Ask for Primary Fees",
              ctaHref: "/contact"
            },
            {
              name: "Middle School",
              price: "₹ —",
              period: "per term",
              description: "Balanced academics + clubs + sports pathways.",
              features: [
                "Tuition component",
                "Lab / activity component",
                "Clubs & events",
                "Student support"
              ],
              ctaLabel: "Ask for Middle School Fees",
              ctaHref: "/contact",
              highlighted: true
            },
            {
              name: "Senior",
              price: "₹ —",
              period: "per term",
              description: "Focused preparation with guidance and mentoring.",
              features: [
                "Tuition component",
                "Subject enrichment",
                "Career guidance",
                "Exam readiness support"
              ],
              ctaLabel: "Ask for Senior Fees",
              ctaHref: "/contact"
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
        className="section-muted"
      >
        <FAQAccordion
          headline="Fee FAQs"
          subheadline="Quick clarity on common fee-related questions."
          items={[
            {
              question: "Are fees the same for every grade?",
              answer:
                "Fees can vary by grade due to curriculum needs, lab usage, and activity components. Contact admissions for the latest grade-wise fee sheet."
            },
            {
              question: "Do you offer transport?",
              answer:
                "Transport availability and routes depend on location and capacity. Please confirm with the school office."
            },
            {
              question: "What payment modes are accepted?",
              answer:
                "Payment modes can include online transfer and other options as provided by the school office. Contact admissions for current details."
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
          headline="Need the official fee sheet?"
          description="We’ll share the latest grade-wise fees and required documents."
          ctaLabel="Contact Office"
          ctaHref="/contact"
          secondaryCtaLabel="Admissions Steps"
          secondaryCtaHref="/services"
          imageUrl="/images/product-1.png"
        />
      </motion.section>
    </div>
  );
}
