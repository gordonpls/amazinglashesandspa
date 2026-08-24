import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import useSEO from "../hooks/useSEO";
import { LOCATIONS, mapsHref } from "../data/site";
import ContactActions from "../components/ContactActions";

const melrose = LOCATIONS.find((loc) => loc.id === "melrose");
const medford = LOCATIONS.find((loc) => loc.id === "medford");

export default function BookMelrose() {
  useSEO({
    title: "Book the Melrose Location | Amazing Lashes & Spa",
    description:
      "Online booking isn't available for our Melrose location yet. Call to schedule your appointment.",
    path: "/book/melrose",
    noindex: true,
  });

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
          Melrose Location
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-brand-900">
          Please call to book
        </h1>
        <p className="mt-4 text-brand-600 leading-relaxed">
          Online booking isn&apos;t available for our Melrose location yet.
          Give us a call and we&apos;ll be happy to schedule your
          appointment.
        </p>

        <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-left">
          <h2 className="font-display text-lg text-brand-900 mb-3">
            {melrose.name}
          </h2>
          <a
            href={mapsHref(melrose.address)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-brand-600 hover:text-brand-800 transition-colors"
          >
            <MapPin className="size-5 mt-0.5 shrink-0 text-blush-500" />
            <span>{melrose.address}</span>
          </a>
          <ContactActions location={melrose} className="mt-4" />
        </div>

        <p className="mt-6 text-sm text-brand-500">
          Prefer to book online? Our{" "}
          <a
            href={medford.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blush-600 hover:text-blush-700 font-medium underline underline-offset-4 decoration-blush-200"
          >
            {medford.name} location
          </a>{" "}
          accepts online bookings.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block text-sm text-brand-500 hover:text-brand-800 underline underline-offset-4"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
