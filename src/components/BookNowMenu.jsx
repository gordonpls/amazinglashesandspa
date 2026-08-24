import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LOCATIONS } from "../data/site";
import ContactActions from "./ContactActions";

export default function BookNowMenu({
  triggerClassName = "",
  menuAlign = "right",
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={triggerClassName}
      >
        Book Now
        <ChevronDown
          className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 w-80 rounded-2xl bg-white shadow-xl border border-brand-100 overflow-hidden ${
            menuAlign === "right" ? "right-0" : "left-0"
          }`}
        >
          <p className="px-4 pt-3 pb-1 text-xs font-display uppercase tracking-[0.2em] text-brand-400">
            Choose a location
          </p>
          {LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              onClick={() => setOpen(false)}
              className="px-4 py-3 border-t border-brand-100"
            >
              <p className="font-medium text-brand-800 mb-2">{loc.name}</p>
              <ContactActions location={loc} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
