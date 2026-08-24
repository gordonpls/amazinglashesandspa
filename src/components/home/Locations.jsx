import { MapPin } from "lucide-react";
import bgSequin from "../../assets/bg-sequin.jpg";
import { LOCATIONS } from "../../data/site";
import ContactActions from "../ContactActions";

export default function Locations() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 md:py-24">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSequin})` }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-display uppercase tracking-[0.25em] text-blush-300 text-xs md:text-sm mb-3">
            Melrose &amp; Medford
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            Visit Us
          </h2>
          <p className="mt-3 text-brand-300">
            Book online or call ahead to reserve your spot
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 md:p-8"
            >
              <h3 className="font-display text-xl text-white mb-4">
                {loc.name}
              </h3>

              <div className="flex items-start gap-3 text-brand-200">
                <MapPin className="size-5 mt-0.5 shrink-0 text-blush-300" />
                <span>{loc.address}</span>
              </div>

              <ContactActions
                location={loc}
                variant="dark"
                showDirections
                className="mt-5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
