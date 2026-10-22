import { MapPin } from "lucide-react";
import { cities } from "../data/site";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const home = cities.find((c) => "home" in c)!;

function StylizedMap() {
  return (
    <svg viewBox="0 0 400 480" className="h-auto w-full" role="img" aria-labelledby="map-title map-desc">
      <title id="map-title">Service area map</title>
      <desc id="map-desc">
        Stylized map of the Gulf Coast showing Parrish, Bradenton, Lakewood Ranch, Sarasota and Venice,
        Florida.
      </desc>
      <defs>
        <pattern id="water" width="14" height="14" patternUnits="userSpaceOnUse">
          <path d="M0 7c3.5-3 7-3 10.5 0" fill="none" stroke="#B7CAB0" strokeWidth="1" />
        </pattern>
        <radialGradient id="radius" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E6D3A3" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#E6D3A3" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="480" fill="#F5F8F4" />
      {/* Gulf of Mexico */}
      <path d="M0 0h70c10 100 15 160 60 220s70 110 95 260H0Z" fill="#EAF0E8" />
      <path d="M0 0h70c10 100 15 160 60 220s70 110 95 260H0Z" fill="url(#water)" opacity="0.7" />
      <path d="M70 0c10 100 15 160 60 220s70 110 95 260" fill="none" stroke="#92AD8B" strokeWidth="1.5" />
      <text x="28" y="330" fill="#6F8D69" fontSize="11" letterSpacing="3" transform="rotate(-90 28 330)">
        GULF OF MEXICO
      </text>
      {/* Service radius around home base */}
      <circle cx={home.x} cy={home.y} r="200" fill="url(#radius)" />
      <circle
        cx={home.x}
        cy={home.y}
        r="150"
        fill="none"
        stroke="#B8975A"
        strokeOpacity="0.5"
        strokeDasharray="4 6"
      />
      {cities.map((c) => {
        const isHome = "home" in c;
        return (
          <g key={c.name}>
            {isHome && <circle cx={c.x} cy={c.y} r="16" fill="#576D52" opacity="0.15" />}
            <circle
              cx={c.x}
              cy={c.y}
              r={isHome ? 8 : 5.5}
              fill={isHome ? "#576D52" : "#fff"}
              stroke="#576D52"
              strokeWidth="2"
            />
            <text
              x={c.x + (c.x > 240 ? -14 : 14)}
              y={c.y + 4}
              textAnchor={c.x > 240 ? "end" : "start"}
              fontSize="14"
              fontWeight={isHome ? 600 : 500}
              fill="#1F2A37"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function ServiceArea() {
  return (
    <section id="service-area" aria-labelledby="area-title" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <SectionHeading id="area-title" eyebrow="Service area" title="We come to you">
              Based in Lakewood Ranch and serving homes, offices, hotels and events across Sarasota &amp;
              Manatee Counties.
            </SectionHeading>
          </Reveal>
          <ul className="-mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {cities.map((c, i) => (
              <Reveal
                as="li"
                key={c.name}
                delay={i * 0.06}
                className={`flex items-center gap-3 rounded-2xl border border-sage-200 bg-white px-5 py-4 ${"home" in c ? "sm:col-span-2" : ""}`}
              >
                <MapPin className="size-5 text-sage-600" aria-hidden="true" strokeWidth={1.7} />
                <span className="font-medium">{c.name}, FL</span>
                {"home" in c && (
                  <span className="ml-auto rounded-full bg-sage-100 px-2.5 py-0.5 text-xs font-semibold text-sage-700">
                    Home base
                  </span>
                )}
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">
            Outside these areas?{" "}
            <a
              href="#contact"
              className="font-semibold text-sage-700 underline underline-offset-4 hover:text-sage-800"
            >
              Get in touch
            </a>{" "}
            and we'll do our best to accommodate you.
          </p>
        </div>

        <Reveal
          delay={0.15}
          className="overflow-hidden rounded-[2rem] border border-sage-200 shadow-xl shadow-sage-700/5"
        >
          <StylizedMap />
        </Reveal>
      </div>
    </section>
  );
}
