import lashStock1 from "../../assets/lash-stock-1.jpg";
import lashStock2 from "../../assets/lash-stock-2.jpg";
import facial from "../../assets/facial.jpg";
import waxing from "../../assets/waxing.jpg";
import microblading from "../../assets/microblading.jpg";
import shopInterior from "../../assets/shop-interior.jpg";

const photos = [
  { src: lashStock1, alt: "Eyelash extension application" },
  { src: facial, alt: "Relaxing facial treatment" },
  { src: lashStock2, alt: "Eyelash extension application" },
  { src: waxing, alt: "Professional waxing service" },
  { src: microblading, alt: "Microblading treatment" },
  { src: shopInterior, alt: "Amazing Lashes & Spa interior" },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <p className="font-display uppercase tracking-[0.25em] text-blush-500 text-xs md:text-sm mb-3">
            A Peek Inside
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-brand-900">
            Amazing Lashes &amp; Spa
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-sm hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
