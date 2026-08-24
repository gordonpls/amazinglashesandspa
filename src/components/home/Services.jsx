import { Link } from "react-router-dom";
import { Sparkles, Flower2, Feather, Zap, PenTool, Gem } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Lash Extensions",
    desc: "Xtreme Lashes® classic, hybrid & volume sets.",
  },
  {
    icon: Flower2,
    title: "Facials",
    desc: "Customized treatments for healthy, glowing skin.",
  },
  {
    icon: Feather,
    title: "Waxing",
    desc: "Full-body waxing in a clean, comfortable space.",
  },
  {
    icon: Zap,
    title: "Laser Hair Removal",
    desc: "Long-lasting smoothness for every skin tone.",
  },
  {
    icon: PenTool,
    title: "Microblading",
    desc: "Natural, precise, semi-permanent brows.",
  },
  {
    icon: Gem,
    title: "Spa Treatments",
    desc: "Massage and pampering for total relaxation.",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-brand-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-900">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-5 md:p-7 shadow-sm border border-brand-100 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center gap-2"
            >
              <span className="flex items-center justify-center size-12 rounded-full bg-blush-50 text-blush-500 mb-1">
                <Icon className="size-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-brand-900 text-base md:text-lg">
                {title}
              </h3>
              <p className="text-brand-500 text-xs md:text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-full border border-brand-300 text-brand-800 hover:border-blush-400 hover:text-blush-500 font-display tracking-wide px-8 py-3 transition-colors"
          >
            See Full Service Menu &amp; Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
