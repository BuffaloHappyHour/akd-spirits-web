type LedgerField = {
  label: string;
  value: string;
};

type LedgerTagProps = {
  name: string;
  status: string;
  fields: LedgerField[];
  note?: string;
  rotate?: boolean;
};

export default function LedgerTag({
  name,
  status,
  fields,
  note,
  rotate = false,
}: LedgerTagProps) {
  return (
    <div
      className={`relative rounded-sm border border-gold-dim/60 bg-bg-panel-raised p-6 sm:p-7 ${
        rotate ? "sm:-rotate-[0.6deg]" : ""
      }`}
    >
      <span
        aria-hidden
        className="absolute left-4 top-4 h-2.5 w-2.5 rounded-full border border-gold-dim bg-bg"
      />
      <span
        aria-hidden
        className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full border border-gold-dim bg-bg"
      />

      <div className="flex items-start justify-between gap-4 pl-4">
        <h3 className="font-display text-2xl leading-tight text-cream sm:text-[1.75rem]">
          {name}
        </h3>
        <span className="eyebrow whitespace-nowrap rounded-full border border-gold-dim px-2.5 py-1 text-[0.62rem]">
          {status}
        </span>
      </div>

      <div className="mt-5 rule-full pl-4" />

      <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 pl-4 font-mono text-[0.8rem] text-cream-dim sm:grid-cols-4">
        {fields.map((field) => (
          <div key={field.label}>
            <dt className="text-[0.62rem] uppercase tracking-[0.12em] text-cream-faint">
              {field.label}
            </dt>
            <dd className="mt-1 text-cream">{field.value}</dd>
          </div>
        ))}
      </dl>

      {note && (
        <p className="mt-5 border-t border-line-soft pl-4 pt-4 text-sm leading-relaxed text-cream-dim">
          {note}
        </p>
      )}
    </div>
  );
}
