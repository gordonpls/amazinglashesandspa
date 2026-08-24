import { Clock, MapPin } from "lucide-react";
import useSEO from "../hooks/useSEO";
import CategoryNav from "../components/services/CategoryNav";
import CategorySection from "../components/services/CategorySection";
import CtaBanner from "../components/home/CtaBanner";
import { SERVICE_CATEGORIES } from "../data/services";
import { LOCATIONS, SITE } from "../data/site";

export default function Services() {
  useSEO({
    title: "Services & Pricing | Amazing Lashes & Spa",
    description:
      "See pricing for eyelash extensions, facials, waxing, laser hair removal and microblading at Amazing Lashes & Spa in Melrose and Medford, MA.",
    path: "/services",
  });

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8 md:pt-16 md:pb-10 text-center">
        <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
          Service Menu
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-brand-900">
          Our Services
        </h1>
        <p className="mt-2 text-xs text-brand-400">
          {SITE.priceDisclaimer}
        </p>
        <p className="mt-4 text-brand-600 max-w-xl mx-auto leading-relaxed">
          Tap any service with a description to see the full details.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-brand-500">
          <Clock className="size-4 text-blush-500" />
          {SITE.hours}
        </div>
      </section>

      <CategoryNav categories={SERVICE_CATEGORIES} />

      <div className="max-w-6xl mx-auto px-4">
        {SERVICE_CATEGORIES.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        <div className="py-10 border-t border-brand-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-lg text-brand-900 mb-2">
              Cancellation Policy
            </h2>
            <p className="text-sm text-brand-500 leading-relaxed">
              {SITE.cancellationPolicy}
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="flex items-start gap-2.5 text-sm text-brand-600">
                  <MapPin className="size-4 mt-0.5 shrink-0 text-blush-500" />
                  <span>
                    <span className="font-medium text-brand-800">
                      {loc.name}:
                    </span>{" "}
                    {loc.address}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
