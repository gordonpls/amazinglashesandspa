import { MapPin, Clock } from "lucide-react";
import useSEO from "../hooks/useSEO";
import { LOCATIONS, SITE, mapsHref } from "../data/site";
import ContactActions from "../components/ContactActions";

export default function Contact() {
  useSEO({
    title: "Contact Us | Amazing Lashes & Spa",
    description:
      "Book online or call Amazing Lashes & Spa in Melrose or Medford, MA. Addresses, hours, and directions for both locations.",
    path: "/contact",
  });

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8 md:pt-16 md:pb-10 text-center">
        <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
          Get In Touch
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-900">
          Contact Us
        </h1>
        <p className="mt-4 text-brand-600 max-w-xl mx-auto leading-relaxed">
          Book online or give us a call, whichever is easiest. We look
          forward to seeing you.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-brand-500">
          <Clock className="size-4 text-blush-500" />
          {SITE.hours}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-24">
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl border border-brand-100 bg-white shadow-sm p-6 md:p-8"
            >
              <h2 className="font-display text-2xl text-brand-900 mb-4">
                {loc.name}
              </h2>
              <a
                href={mapsHref(loc.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-brand-600 hover:text-brand-800 transition-colors"
              >
                <MapPin className="size-5 mt-0.5 shrink-0 text-blush-500" />
                <span>{loc.address}</span>
              </a>

              <ContactActions location={loc} className="mt-6" />

              {!loc.bookingUrl && (
                <p className="mt-4 text-xs text-brand-400">
                  Online booking isn&apos;t available at this location yet.
                  Call to schedule.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
