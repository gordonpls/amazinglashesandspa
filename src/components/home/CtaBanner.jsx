import { LOCATIONS } from "../../data/site";
import BookNowMenu from "../BookNowMenu";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-blush-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-brand-900">
          Ready to feel Amazing?
        </h2>
        <p className="mt-4 text-brand-600">
          Book online in seconds, or give us a call. We look forward to
          seeing you.
        </p>

        <div className="mt-8 flex justify-center">
          <BookNowMenu triggerClassName="inline-flex items-center justify-center gap-1.5 rounded-full bg-blush-500 hover:bg-blush-600 text-white font-display tracking-wide px-10 py-4 transition-colors" />
        </div>

        <p className="mt-6 text-sm text-brand-500">
          {LOCATIONS.map((loc, i) => (
            <span key={loc.id}>
              {i > 0 && <span className="mx-2 text-brand-300">&bull;</span>}
              {loc.name}:{" "}
              <a href={loc.phoneHref} className="text-blush-600 hover:text-blush-700">
                {loc.phone}
              </a>
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
