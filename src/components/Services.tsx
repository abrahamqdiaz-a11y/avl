import { ArrowRight, Check } from "lucide-react";
import { services, site } from "../data/site";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-sage-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading id="services-title" eyebrow="Services" title="Wellness, tailored to you">
            Every treatment begins with a telehealth consultation and medical clearance, so your care is safe,
            personal and right for your body.
          </SectionHeading>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, items, price }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={i * 0.08}
              className="group flex h-full flex-col rounded-[1.75rem] border border-sage-200 bg-white p-8 transition-[translate,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-sage-300 hover:shadow-2xl hover:shadow-sage-700/10 sm:p-10"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-sage-100 text-sage-700 transition group-hover:bg-sage-600 group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" strokeWidth={1.6} />
                </span>
                <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold text-ink-soft">
                  {price}
                </span>
              </div>
              <h3 className="text-3xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{description}</p>
              <ul className="mb-8 mt-6 space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={site.bookingUrl}
                className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-sage-700 hover:text-sage-800"
              >
                Learn more<span className="sr-only"> about {title}</span>
                <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
