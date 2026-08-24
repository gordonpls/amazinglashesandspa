import { Phone } from "lucide-react";
import { LOCATIONS } from "../data/site";

export default function TopBar() {
  return (
    <div className="bg-brand-900 text-brand-100 text-xs md:text-sm">
      <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 md:justify-between">
        <span className="hidden sm:inline font-display tracking-wide text-brand-300">
          By appointment at both locations
        </span>
        <div className="flex items-center gap-5">
          {LOCATIONS.map((loc) => (
            <span key={loc.id} className="flex items-center gap-2">
              <span className="font-medium">{loc.name}:</span>
              <a
                href={loc.phoneHref}
                aria-label={`Call ${loc.name}`}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Phone className="size-3.5" strokeWidth={2} />
                <span>{loc.phone}</span>
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
