import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategoryNav({ categories }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const linkRefs = useRef({});
  const scrollerRef = useRef(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateFades = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    updateFades();
    el.addEventListener("scroll", updateFades, { passive: true });
    window.addEventListener("resize", updateFades);
    return () => {
      el.removeEventListener("scroll", updateFades);
      window.removeEventListener("resize", updateFades);
    };
  }, [categories]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  useEffect(() => {
    const activeLink = linkRefs.current[activeId];
    const scroller = scrollerRef.current;
    if (!activeLink || !scroller) return;
    const linkLeft = activeLink.offsetLeft;
    const linkRight = linkLeft + activeLink.offsetWidth;
    if (linkLeft < scroller.scrollLeft) {
      scroller.scrollTo({ left: linkLeft - 16, behavior: "smooth" });
    } else if (linkRight > scroller.scrollLeft + scroller.clientWidth) {
      scroller.scrollTo({
        left: linkRight - scroller.clientWidth + 16,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur border-b border-brand-100">
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={scrollerRef}
          className="px-4 flex items-center gap-2 py-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              ref={(el) => (linkRefs.current[cat.id] = el)}
              href={`#${cat.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-display tracking-wide transition-colors ${
                activeId === cat.id
                  ? "bg-blush-500 text-white"
                  : "bg-brand-50 text-brand-600 hover:bg-brand-100"
              }`}
            >
              {cat.name}
            </a>
          ))}
        </div>

        <div
          aria-hidden
          className={`pointer-events-none absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-white to-transparent transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-white to-transparent transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll categories left"
          tabIndex={canScrollLeft ? 0 : -1}
          className={`absolute left-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-7 rounded-full bg-white text-brand-500 shadow-md border border-brand-100 transition-opacity duration-200 hover:text-blush-500 ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronLeft className="size-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll categories right"
          tabIndex={canScrollRight ? 0 : -1}
          className={`absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center size-7 rounded-full bg-white text-brand-500 shadow-md border border-brand-100 transition-opacity duration-200 hover:text-blush-500 ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <ChevronRight className="size-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
