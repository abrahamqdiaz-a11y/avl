import { m } from "framer-motion";
import { ArrowRight, ShieldCheck, Stethoscope } from "lucide-react";
import { site } from "../data/site";
import { ButtonLink } from "./ui";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative -mt-20 overflow-hidden pt-20">
      {/* Abstract coastal background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sage-50 via-white to-white" />
        <div className="absolute -right-40 -top-40 size-[38rem] rounded-full bg-sage-200/60 blur-3xl" />
        <div className="absolute -left-32 top-1/3 size-[26rem] rounded-full bg-gold-light/30 blur-3xl" />
        <svg
          className="absolute bottom-0 left-0 w-full text-white"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0 80c240-50 480-50 720-10s480 40 720-10v60H0Z" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-36 lg:pt-24">
        <div>
          <m.p
            {...fadeUp(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700"
          >
            <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
            Lakewood Ranch, Florida
          </m.p>
          <m.h1 id="hero-title" {...fadeUp(0.1)} className="text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
            Premium Mobile Wellness <em className="font-medium text-sage-600">Delivered</em> to Your Doorstep.
          </m.h1>
          <m.p {...fadeUp(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Nurse-led concierge IV hydration, vitamin injections, and cellular therapies in Sarasota &amp;
            Manatee Counties.
          </m.p>
          <m.div {...fadeUp(0.3)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#services" variant="outline" className="py-3.5">
              Explore Services
            </ButtonLink>
            <ButtonLink href={site.bookingUrl} className="py-3.5">
              Book Now <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Arched art panel: swap the gradient for a photo when one is available */}
          <div
            role="img"
            aria-label="Calming sage and gold abstract artwork"
            className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] bg-gradient-to-br from-sage-200 via-sage-300 to-sage-500 shadow-2xl shadow-sage-700/20"
          >
            <div className="absolute right-[18%] top-[14%] size-24 rounded-full bg-gradient-to-br from-white to-gold-light/80" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sage-700/50 to-transparent" />
            <div className="absolute inset-4 rounded-t-full rounded-b-[1.5rem] border border-white/40" />
          </div>

          <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/90 p-4 pr-6 shadow-xl shadow-ink/10 backdrop-blur sm:-left-10">
            <span className="grid size-11 place-items-center rounded-full bg-sage-100 text-sage-700">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm">
              <strong className="block font-semibold">Medically supervised</strong>
              <span className="text-ink-soft">Telehealth clearance first</span>
            </span>
          </div>
          <div className="absolute -right-3 top-12 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-semibold shadow-lg shadow-ink/10 backdrop-blur sm:-right-6">
            <Stethoscope className="size-4 text-gold" aria-hidden="true" />
            RN administered
          </div>
        </m.div>
      </div>
    </section>
  );
}
