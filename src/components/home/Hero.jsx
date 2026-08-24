import { Link } from "react-router-dom";
import { CalendarCheck, ShieldCheck, MapPinned } from "lucide-react";
import orchidTowel from "../../assets/orchid-towel.png";
import BookNowMenu from "../BookNowMenu";

const badges = [
  { icon: MapPinned, label: "2 Locations" },
  { icon: ShieldCheck, label: "Certified Stylists" },
  { icon: CalendarCheck, label: "Book Online" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -right-40 size-96 rounded-full bg-blush-100 blur-3xl opacity-60"
      />

      <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
            Melrose &amp; Medford, MA
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brand-900 leading-[1.1]">
            Relax. Renew.
            <br className="hidden sm:block" /> <span className="text-blush-500">Amazing.</span>
          </h1>
          <p className="mt-5 text-brand-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Amazing Lashes &amp; Spa specializes in eyelash extensions by
            Xtreme Lashes®, along with facials, waxing, laser hair removal,
            microblading and more. Come relax and be pampered by our team.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <BookNowMenu
              menuAlign="left"
              triggerClassName="inline-flex items-center justify-center gap-1.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white font-display tracking-wide px-8 py-3.5 transition-colors"
            />
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-brand-300 text-brand-800 hover:border-blush-400 hover:text-blush-500 font-display tracking-wide px-8 py-3.5 transition-colors"
            >
              View Services
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-md mx-auto lg:mx-0">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center lg:items-start gap-1.5">
                <Icon className="size-5 text-blush-500" strokeWidth={1.75} />
                <dd className="text-xs sm:text-sm text-brand-600 leading-tight text-center lg:text-left">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute inset-8 rounded-[3rem] bg-blush-50 blur-2xl"
          />
          <img
            src={orchidTowel}
            alt="Orchid blossoms resting on rolled spa towels"
            loading="eager"
            fetchPriority="high"
            className="relative w-full drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
