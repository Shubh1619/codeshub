import { services } from "@/lib/content";
import { CheckIcon } from "@/components/icons";

export function ServiceDetails() {
  return (
    <div className="mt-16 space-y-16">
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className="grid scroll-mt-24 gap-8 lg:grid-cols-[1.6fr_1fr]"
        >
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-faint)]">
              <span aria-hidden="true" className="h-px w-8 bg-[var(--color-accent)]" />
              {String(index + 1).padStart(2, "0")} — {service.name}
            </p>
            <h3 className="mt-4 heading-section text-2xl text-[var(--text)]">
              {service.name}
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {service.details.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:pt-12">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h4 className="heading-card text-sm text-[var(--text)]">
                Common use cases
              </h4>
              <ul className="mt-4 space-y-3">
                {service.useCases.map((useCase) => (
                  <li
                    key={useCase}
                    className="flex gap-3 text-sm text-[var(--text-muted)]"
                  >
                    <CheckIcon
                      width={16}
                      height={16}
                      className="mt-0.5 shrink-0 text-[var(--color-accent)]"
                    />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <h4 className="heading-card text-sm text-[var(--text)]">
                Technologies we use
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--bg)]/60 px-2.5 py-1 text-xs font-medium text-[var(--text-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm font-semibold text-[var(--text)]">
                Starting at{" "}
                <span className="text-[var(--color-accent)]">
                  {service.startingAt}
                </span>
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}