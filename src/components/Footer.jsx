import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import logo from "../assets/logo-dark.png";
import bgSequin from "../assets/bg-sequin.jpg";
import { LOCATIONS, NAV_LINKS, SITE, mapsHref } from "../data/site";
import BookNowMenu from "./BookNowMenu";
import ContactActions from "./ContactActions";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-900 text-brand-300">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
        style={{ backgroundImage: `url(${bgSequin})` }}
      />

      <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <img
            src={logo}
            alt={SITE.name}
            loading="lazy"
            className="h-10 w-auto invert opacity-90"
          />
          <p className="mt-4 text-sm leading-relaxed max-w-xs">
            Eyelash extensions by Xtreme Lashes®, facials, waxing, laser hair
            removal, microblading and more, in Melrose and Medford, MA.
          </p>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-[0.2em] text-xs text-brand-400 mb-4">
            Locations
          </h3>
          <ul className="space-y-6">
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <p className="text-white font-medium mb-1">{loc.name}</p>
                <a
                  href={mapsHref(loc.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm hover:text-white transition-colors"
                >
                  <MapPin className="size-4 mt-0.5 shrink-0" />
                  <span>{loc.address}</span>
                </a>
                <ContactActions location={loc} variant="dark" className="mt-3" />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase tracking-[0.2em] text-xs text-brand-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <BookNowMenu
                menuAlign="right"
                triggerClassName="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 text-xs text-brand-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
