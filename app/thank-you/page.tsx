"use client";


// import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";


// export const metadata: Metadata = {
//   title: "Thank You | Inbuilt Infra",
//   description:
//     "Confirmation page for industrial project enquiries submitted to Inbuilt Infra.",
// };

export default function ThankYouPage() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[var(--brand-950)] px-6 pb-16 pt-28 text-white sm:px-8 sm:pt-32 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,196,0,0.16),_transparent_36%),linear-gradient(180deg,_rgba(11,31,59,0.24),_rgba(6,18,38,0.98))]" />
      <div className="absolute left-[-8%] top-24 h-48 w-48 rounded-full bg-[var(--accent-500)]/12 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute right-[-12%] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-white/6 blur-3xl sm:h-80 sm:w-80" />
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:120px_120px]" />

      <section className="relative flex w-full max-w-4xl flex-col items-center justify-center rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,_rgba(11,31,59,0.68),_rgba(6,18,38,0.88))] px-6 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.42)] backdrop-blur-md sm:px-10 sm:py-18 lg:px-16">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-500)]/80 to-transparent" />

        <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-[var(--accent-500)]/28 bg-[radial-gradient(circle_at_top,_rgba(255,212,79,0.5),_rgba(255,196,0,0.14)_58%,_rgba(255,255,255,0.04)_100%)] shadow-[0_0_45px_rgba(255,196,0,0.2)] sm:h-28 sm:w-28">
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <svg
            aria-hidden="true"
            className="relative z-10 h-11 w-11 text-[var(--brand-950)] sm:h-12 sm:w-12"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="mb-4 text-[11px] font-black uppercase tracking-[0.32em] text-[var(--accent-400)] sm:text-xs">
          Enquiry Received
        </p>
        <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
          Thank you
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
          We will get back to you shortly with the next steps for your project.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-[#FFAC03] to-[#FF8800] text-white px-8 py-4 rounded-full font-inter font-black hover:shadow-2xl hover:shadow-[#FFAC03]/40 transition-all active:scale-95 text-base"
          >
            Return to Home
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
