export default function ServiceRow({ item }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-3 border-b border-brand-100 last:border-b-0">
      <div className="min-w-0">
        <p className="text-brand-800">{item.name}</p>
        {item.note && (
          <p className="text-xs text-brand-400 mt-0.5">{item.note}</p>
        )}
      </div>
      <p className="shrink-0 font-medium text-brand-900 text-right">
        {item.price}
      </p>
    </div>
  );
}
