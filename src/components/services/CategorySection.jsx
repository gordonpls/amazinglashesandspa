import { Tag } from "lucide-react";
import ServiceGroup from "./ServiceGroup";

export default function CategorySection({ category }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-40 md:scroll-mt-48 py-12 md:py-16 border-t border-brand-100 first:border-t-0 first:pt-0"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl text-brand-900 mb-6 md:mb-8">
          {category.name}
        </h2>

        <div className="bg-white rounded-2xl border border-brand-100 p-5 sm:p-7 shadow-sm">
          {category.groups.map((group, i) => (
            <ServiceGroup key={group.title ?? i} group={group} />
          ))}
        </div>

        {category.footnote && (
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-blush-50 px-4 py-3 text-sm text-blush-700">
            <Tag className="size-4 mt-0.5 shrink-0" />
            <p>{category.footnote}</p>
          </div>
        )}
      </div>
    </section>
  );
}
