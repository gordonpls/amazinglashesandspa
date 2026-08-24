import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import eyeMacro from "../../assets/eye-macro.jpg";

const features = [
  "Certified Xtreme Lashes® stylists",
  "Two convenient locations: Melrose & Medford",
  "Book your appointment online in seconds",
];

export default function Welcome() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="mx-auto max-w-md lg:max-w-none order-1">
          <img
            src={eyeMacro}
            alt="Close-up of eyelash extensions"
            loading="lazy"
            className="w-full rounded-3xl object-cover aspect-[4/3] shadow-md"
          />
        </div>

        <div className="text-center lg:text-left order-2">
          <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
            Welcome
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-900">
            Thank you for visiting
          </h2>
          <p className="mt-5 text-brand-600 leading-relaxed">
            Amazing Lashes and Spa is a spa specializing in eyelash
            extensions by Xtreme Lashes®, as well as facials, waxing, laser
            hair removal, microblading and more. Come relax and be pampered
            at one of our two locations in Melrose and Medford.
          </p>

          <ul className="mt-7 space-y-3 flex flex-col items-start text-left w-fit mx-auto lg:mx-0">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-brand-700">
                <CheckCircle2 className="size-5 text-blush-500 shrink-0" strokeWidth={1.75} />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              to="/services"
              className="text-blush-600 hover:text-blush-700 font-medium underline underline-offset-4 decoration-blush-200"
            >
              View our full service menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
