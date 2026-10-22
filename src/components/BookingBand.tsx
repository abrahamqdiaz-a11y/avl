import { ArrowRight, Phone } from "lucide-react";
import { site } from "../data/site";
import Reveal from "./Reveal";
import { ButtonLink } from "./ui";

export default function BookingBand() {
  return (
    <section aria-labelledby="book-title" className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sage-700 px-6 py-20 text-center sm:px-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-sage-500/40 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 size-80 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="relative">
          <span className="gold-rule mx-auto mb-6 block" aria-hidden="true" />
          <h2 id="book-title" className="mx-auto max-w-2xl text-4xl text-white sm:text-5xl">
            Ready to feel restored?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-sage-100">
            Book your visit online, or call to talk through the right therapy for you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={site.bookingUrl} variant="light" className="py-3.5">
              Book Appointment <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href={site.phoneHref}
              className="border border-white/30 bg-transparent py-3.5 shadow-none hover:bg-white/10"
            >
              <Phone className="size-4" aria-hidden="true" /> {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
