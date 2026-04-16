"use client";

import { motion } from "framer-motion";
import { HeroMinimal } from "@/components/blocks/HeroMinimal";
import { StickyScroll as StickyScrollReveal } from "@/components/ui/effects/StickyScrollReveal";
import { FeaturesGrid } from "@/components/blocks/FeaturesGrid";
import { FAQAccordion } from "@/components/blocks/FAQAccordion";
import { CTASplit } from "@/components/blocks/CTASplit";

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-3.png"
            alt="Admissions"
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
              headline="Admissions"
              subheadline="A clear, parent-friendly admissions journey—enquiry, eligibility, documentation, and confirmation."
              primaryCta={{ label: "Contact Us", href: "/contact" }}
              secondaryCta={{ label: "Fee Plans", href: "/pricing" }}
              imageUrl="/images/product-1.png"
            />
          </motion.div>
        </div>
      </section>

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
                title: "Step 1: Enquiry & campus visit",
                description:
                  "Reach out to the admissions desk to understand grade availability and schedule a visit.",
                content: (
                  <img
                    src="/images/product-2.png"
                    alt="Campus visit"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              },
              {
                title: "Step 2: Application & documents",
                description:
                  "Submit the application form with required documents (ID, previous records, photos).",
                content: (
                  <img
                    src="/images/product-3.png"
                    alt="Application documents"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              },
              {
                title: "Step 3: Interaction / assessment",
                description:
                  "A simple interaction or assessment (grade-dependent) to understand learning readiness.",
                content: (
                  <img
                    src="/images/product-3.png"
                    alt="Student interaction"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              },
              {
                title: "Step 4: Confirmation & onboarding",
                description:
                  "Fee submission, uniform/books guidance, and a smooth start to the academic year.",
                content: (
                  <img
                    src="/images/product-1.png"
                    alt="Onboarding"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                )
              }
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-muted"
      >
        <FeaturesGrid
          badge="What you get"
          headline="Admissions support that’s simple and transparent"
          subheadline="We help families understand requirements and timelines clearly."
          features={[
            {
              icon: "🗓️",
              title: "Clear timelines",
              description:
                "Know what happens next and when—no confusion, no last-minute surprises."
            },
            {
              icon: "📄",
              title: "Document checklist",
              description:
                "A straightforward list of required documents for each grade level."
            },
            {
              icon: "☎️",
              title: "Quick assistance",
              description:
                "Support via phone/email for forms, eligibility, and fee plan queries."
            },
            {
              icon: "🎒",
              title: "Onboarding guidance",
              description:
                "Uniform, books, transport, and first-week readiness support."
            }
          ]}
        />
      </motion.section>

      <motion.section
        id="faqs"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-surface"
      >
        <FAQAccordion
          headline="Admissions FAQs"
          subheadline="Common questions from parents and guardians."
          items={[
            {
              question: "Which documents are typically required?",
              answer:
                "Commonly required: student photo, ID/address proof, birth certificate, previous report card/transfer certificate (as applicable). Please confirm with the admissions office for your grade."
            },
            {
              question: "Is there an entrance test or interaction?",
              answer:
                "Depending on the grade, there may be an interaction or a simple assessment to understand readiness and learning needs."
            },
            {
              question: "How do I understand the fee structure?",
              answer:
                "You can view fee plan options on the Pricing page, or contact the admissions team for the latest grade-wise details."
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
          headline="Ready to apply?"
          description="Contact our admissions team for the current session’s availability and next steps."
          ctaLabel="Contact Admissions"
          ctaHref="/contact"
          secondaryCtaLabel="See Fee Plans"
          secondaryCtaHref="/pricing"
          imageUrl="/images/product-3.png"
        />
      </motion.section>
    </div>
  );
}
