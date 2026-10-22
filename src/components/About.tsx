import { BadgeCheck, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Safety first",
    body: "Telehealth screening and clearance before every treatment.",
  },
  {
    icon: Stethoscope,
    title: "Medical oversight",
    body: "Protocols backed by professional medical supervision.",
  },
  {
    icon: HeartPulse,
    title: "Preventive & personal",
    body: "Care customized to your goals, history and lifestyle.",
  },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-sage-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Portrait placeholder: replace with a photo of Shary */}
          <div
            role="img"
            aria-label="Portrait placeholder for Shary Gonzalez, RN"
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-sage-100 via-sage-200 to-sage-400"
          >
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-serif text-8xl italic text-white/70">SG</span>
            </div>
            <div className="absolute inset-5 rounded-[1.5rem] border border-white/50" />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-white px-6 py-5 shadow-xl shadow-ink/10 sm:-right-6">
            <p className="font-serif text-2xl font-semibold">Shary Gonzalez</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-sage-700">
              <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
              RN, BSN, BS · Founder
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading id="about-title" eyebrow="About" title="Clinical expertise, concierge comfort">
              Avida Luna Wellness was founded by Shary Gonzalez, RN, BSN, BS, to bring hospital-grade
              standards of care into the comfort of your home, office or event, without the waiting room.
            </SectionHeading>
          </Reveal>
          <ul className="-mt-4 space-y-6">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 0.1} className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-white text-sage-700">
                  <Icon className="size-5" aria-hidden="true" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-sans text-base font-semibold tracking-normal">{title}</h3>
                  <p className="mt-1 text-ink-soft">{body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
