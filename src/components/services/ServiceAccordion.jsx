import { ChevronDown, Clock } from "lucide-react";

export default function ServiceAccordion({ item }) {
  return (
    <details className="group py-3 border-b border-brand-100 last:border-b-0">
      <summary className="flex items-start justify-between gap-4 cursor-pointer">
        <div className="min-w-0">
          <p className="text-brand-800 font-medium">{item.name}</p>
          {item.time && (
            <p className="flex items-center gap-1 text-xs text-brand-400 mt-0.5">
              <Clock className="size-3" />
              {item.time}
            </p>
          )}
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <p className="font-medium text-brand-900 text-right whitespace-nowrap">
            {item.price}
          </p>
          <ChevronDown
            className="size-4 text-brand-400 transition-transform duration-200 group-open:rotate-180"
            strokeWidth={2}
          />
        </div>
      </summary>

      <div className="mt-3 pr-8 text-sm text-brand-600 leading-relaxed">
        <p>{item.description}</p>
        {item.bullets && (
          <ul className="mt-3 space-y-1.5">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-blush-400 mt-0.5">&bull;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {item.note && (
          <p className="mt-3 text-xs text-brand-400 italic">{item.note}</p>
        )}
      </div>
    </details>
  );
}
