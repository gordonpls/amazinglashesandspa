import { Calendar, Phone, Navigation } from "lucide-react";
import { mapsHref } from "../data/site";

export default function ContactActions({
  location,
  variant = "light",
  showDirections = false,
  className = "",
}) {
  const isDark = variant === "dark";
  const base =
    "flex items-center justify-center gap-1.5 rounded-full text-xs font-medium py-2.5 px-4 transition-colors whitespace-nowrap";
  const primary = "bg-blush-500 hover:bg-blush-600 text-white";
  const secondary = isDark
    ? "bg-white/10 hover:bg-white/20 text-white border border-white/15"
    : "bg-brand-50 hover:bg-brand-100 text-brand-700";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {location.bookingUrl && (
        <a
          href={location.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${primary}`}
        >
          <Calendar className="size-3.5 shrink-0" />
          Online
        </a>
      )}
      <a href={location.phoneHref} className={`${base} ${secondary}`}>
        <Phone className="size-3.5 shrink-0" />
        Call
      </a>
      {showDirections && (
        <a
          href={mapsHref(location.address)}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} ${secondary}`}
        >
          <Navigation className="size-3.5 shrink-0" />
          Directions
        </a>
      )}
    </div>
  );
}
