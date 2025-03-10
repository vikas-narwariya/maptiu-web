"use client"

import { motion } from "framer-motion"
// import { Button } from "@/app/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function GradientCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl bg-black p-8 md:p-12"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7ED957]/10 to-[#7ED957]/10 blur-3xl" />
      <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="space-y-4">
          <h2 className="bg-gradient-to-r from-[#7ED957] to-[#7ED957] bg-clip-text font-heading text-3xl text-transparent sm:text-4xl md:text-5xl">
          Smart Talent Solutions
            <br />
            for a Smarter Tomorrow!
          </h2>
          <p className="max-w-3xl text-lg text-zinc-400">
          Our talent experts are ready to help you build your dream team. Schedule a call today!
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-[#7ED957] to-[#7ED957] transition-all hover:shadow-xl hover:shadow-[#083B73]/20"
        >
          <Link href="/contact-us" className="flex items-center gap-2">
            Let&#39;s Talk
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
