import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services, site } from "../data/site";
import { FacebookIcon, InstagramIcon, Logo } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" aria-labelledby="footer-title" className="bg-navy text-sage-100/80">
      <h2 id="footer-title" className="sr-only">
        Contact and site information
      </h2>
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs leading-relaxed">
              Nurse-led concierge IV hydration and wellness, delivered across Sarasota &amp; Manatee Counties.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                aria-label="Avida Luna Wellness on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold hover:text-gold-light"
              >
                <InstagramIcon />
              </a>
              <a
                href={site.social.facebook}
                aria-label="Avida Luna Wellness on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition hover:border-gold hover:text-gold-light"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.bookingUrl} className="transition hover:text-white">
                  Book Appointment
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="transition hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Contact
            </h3>
            <address className="space-y-3.5 text-sm not-italic">
              <a href={site.phoneHref} className="flex items-center gap-3 transition hover:text-white">
                <Phone className="size-4 text-gold-light" aria-hidden="true" /> {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="size-4 text-gold-light" aria-hidden="true" /> {site.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="size-4 text-gold-light" aria-hidden="true" /> Lakewood Ranch, FL
              </p>
            </address>
            <div className="mt-6 flex gap-3 text-sm">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold-light" aria-hidden="true" />
              <dl className="space-y-1.5">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="text-white">{h.days}</dt>
                    <dd>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-4xl text-xs leading-relaxed text-sage-100/60">
          <strong className="font-semibold text-sage-100/80">Disclaimer:</strong> Services require telehealth
          clearance and are provided under medical oversight. Treatments are not intended to diagnose, treat,
          cure or prevent any disease. Individual results may vary. Not for medical emergencies; if you are
          experiencing an emergency, call 911.
        </p>
        <div className="mt-8 flex flex-col justify-between gap-3 text-xs text-sage-100/50 sm:flex-row">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Lakewood Ranch, Florida</p>
        </div>
      </div>
    </footer>
  );
}
