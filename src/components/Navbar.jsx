import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { LOCATIONS, NAV_LINKS, SITE } from "../data/site";
import BookNowMenu from "./BookNowMenu";
import ContactActions from "./ContactActions";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-brand-100">
      <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center shrink-0"
        >
          <img src={logo} alt={SITE.name} className="h-9 md:h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-display tracking-wide text-sm uppercase transition-colors ${
                  isActive
                    ? "text-blush-500"
                    : "text-brand-700 hover:text-blush-500"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookNowMenu
            menuAlign="right"
            triggerClassName="inline-flex items-center gap-1.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white font-display tracking-wide text-sm px-6 py-2.5 transition-colors"
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center size-11 -mr-2 text-brand-800"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
    </header>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white overflow-y-auto">
          <nav className="flex flex-col px-6 pt-6 pb-8 gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-display text-2xl py-3 border-b border-brand-100 ${
                    isActive ? "text-blush-500" : "text-brand-800"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-6 flex flex-col gap-4" onClick={() => setOpen(false)}>
            <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-400">
              Get In Touch
            </p>
            {LOCATIONS.map((loc) => (
              <div key={loc.id}>
                <p className="font-medium text-brand-900 mb-2">{loc.name}</p>
                <ContactActions location={loc} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
