import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Page Not Found | Amazing Lashes & Spa",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-md w-full text-center">
        <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
          404
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-brand-900">
          Page not found
        </h1>
        <p className="mt-4 text-brand-600 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-blush-500 hover:bg-blush-600 text-white font-display tracking-wide px-6 py-2.5 transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-300 text-brand-800 hover:border-blush-400 hover:text-blush-500 font-display tracking-wide px-6 py-2.5 transition-colors"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
