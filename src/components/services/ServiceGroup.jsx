import ServiceRow from "./ServiceRow";
import ServiceAccordion from "./ServiceAccordion";

export default function ServiceGroup({ group }) {
  return (
    <div className="mb-6 last:mb-0">
      {group.title && (
        <h3 className="font-display uppercase tracking-[0.15em] text-xs text-blush-500 mb-2">
          {group.title}
        </h3>
      )}
      <div>
        {group.items.map((item) =>
          item.description ? (
            <ServiceAccordion key={item.name} item={item} />
          ) : (
            <ServiceRow key={item.name} item={item} />
          ),
        )}
      </div>
    </div>
  );
}
