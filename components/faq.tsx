import type { Faq } from "@/lib/content";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--card)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-6 sm:px-7">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold text-[var(--text)] [&::-webkit-details-marker]:hidden">
              {faq.question}
              <span
                aria-hidden="true"
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--text-faint)] transition-transform duration-200 group-open:rotate-45 group-open:text-[var(--color-accent)]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-[var(--text-muted)]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}