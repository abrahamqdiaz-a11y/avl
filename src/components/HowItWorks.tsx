import { steps } from "../data/site";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="how-title" eyebrow="How it works" title="Simple, safe, at your door" center>
            Three easy steps from booking to feeling restored.
          </SectionHeading>
        </Reveal>

        <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line behind the step markers on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-gradient-to-r from-sage-200 via-gold/60 to-sage-200 md:block"
          />
          {steps.map(({ icon: Icon, title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 0.12} className="relative text-center">
              <div className="relative mx-auto mb-7 grid size-20 place-items-center rounded-full border border-sage-200 bg-white shadow-lg shadow-sage-700/5">
                <Icon className="size-7 text-sage-600" aria-hidden="true" strokeWidth={1.6} />
                <span className="absolute -right-1 -top-1 grid size-7 place-items-center rounded-full bg-sage-600 text-xs font-semibold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-2xl">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs leading-relaxed text-ink-soft">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
