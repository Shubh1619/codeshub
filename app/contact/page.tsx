"use client";

import { Container, SectionHeading } from "@/components/ui";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import type { ChangeEvent, FormEvent, ReactElement, ReactNode } from "react";
import { isValidElement, cloneElement, useState, useId } from "react";

const helpOptions = [
  "I want to build a product",
  "I need a website / web app",
  "I need a mobile app",
  "I need custom software",
  "I need a SaaS platform",
  "I need AI / ML development",
  "I need API / Backend development",
  "I need maintenance / support",
  "I'm looking for a career opportunity",
  "I'm looking for an internship",
  "Something else",
];

const CAREER_PATH = new Set([
  "I'm looking for a career opportunity",
  "I'm looking for an internship",
]);

const budgetRanges = [
  "₹50k – ₹2L",
  "₹2L – ₹5L",
  "₹5L – ₹10L",
  "₹10L – ₹25L",
  "₹25L+",
];

const timelines = [
  "ASAP",
  "Within a month",
  "1–3 months",
  "3–6 months",
  "Just exploring for now",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  position: string;
  budget: string;
  timeline: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  inquiryType: "",
  position: "",
  budget: "",
  timeline: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const careerPath = CAREER_PATH.has(form.inquiryType);

  const set = (field: keyof FormState) => (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((errs) => {
      if (!errs[field]) return errs;
      const next = { ...errs };
      delete next[field];
      return next;
    });
  };

  const validate = (f: FormState): Errors => {
    const next: Errors = {};
    if (!f.name.trim()) next.name = "Enter your name.";
    if (!f.email.trim()) next.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      next.email = "That email doesn't look right.";
    if (f.phone.trim() && !/^[+\d][\d\s().-]{9,}$/.test(f.phone.trim()))
      next.phone = "Enter a valid phone number.";
    if (!f.inquiryType) next.inquiryType = "Pick a reason you're reaching out.";
    if (!careerPath) {
      if (!f.budget) next.budget = "Select a budget range.";
      if (!f.timeline) next.timeline = "Select a timeline.";
      if (!f.message.trim()) next.message = "Tell us a little about what you need.";
    }
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    // No backend wired up - simulate the request so the flow is demonstrable.
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-lg rounded-2xl border border-[var(--border)] bg-[var(--card)] p-10 text-center">
          <span className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            <CheckIcon width={26} height={26} />
          </span>
          <h1 className="heading-section text-2xl text-[var(--text)]">
            Enquiry received
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Thanks, {form.name.split(" ")[0] || "there"}. Our team will review
            your enquiry and get back to you at{" "}
            <span className="text-[var(--text)]">{form.email}</span>.
          </p>
          <button
            type="button"
            onClick={() => {
              setForm(initialForm);
              setSubmitted(false);
            }}
            className="mt-7 text-sm font-semibold text-[var(--color-accent)] underline-offset-4 hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      </Container>
    );
  }

  return (
    <>
      <section className="border-b border-[var(--border)]">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            kicker="Contact"
            title="Tell us what you want to build"
            intro="Have an idea, a business problem, or a product that needs engineering? Tell us about it and our team will get back to you."
          />
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <aside className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="heading-card text-lg text-[var(--text)]">
                A few things to know
              </h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
                <li className="flex gap-3">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>
                    <span className="font-semibold text-[var(--text)]">No commitment.</span>{" "}
                    This first message is just a conversation starter.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>
                    <span className="font-semibold text-[var(--text)]">Real scoping.</span>{" "}
                    We&apos;ll ask about your problem, not just your feature list.
                  </span>
                </li>
                <li className="flex gap-3">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  <span>
                    <span className="font-semibold text-[var(--text)]">Honest timelines.</span>{" "}
                    If we think you don&apos;t need a build yet, we&apos;ll say so.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="font-semibold text-sm text-[var(--text)]">
                Prefer a direct contact?
              </p>
              <div className="mt-4 space-y-4 text-sm">
                <div>
                  <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--text-faint)]">
                    Email
                  </p>
                  <a
                    href="mailto:contact@codeshub.in"
                    className="mt-1 inline-block font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-deep)]"
                  >
                    contact@codeshub.in
                  </a>
                </div>
                <div>
                  <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--text-faint)]">
                    Call us
                  </p>
                  <div className="mt-1 flex flex-col">
                    <a
                      href="tel:+918888184205"
                      className="font-medium text-[var(--text)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      +91 88881 84205
                    </a>
                    <a
                      href="tel:+917517932501"
                      className="font-medium text-[var(--text)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      +91 751 793 2501
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="font-semibold text-sm text-[var(--text)]">
                Looking for opportunities?
              </p>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Explore our current career and internship openings and find an
                opportunity that matches your skills.
              </p>
              <a
                href="/careers"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)]"
              >
                View Careers
                <ArrowRightIcon width={15} height={15} />
              </a>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name} required>
                <input
                  type="text"
                  className="input"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="Company" error={errors.company}>
                <input
                  type="text"
                  className="input"
                  value={form.company}
                  onChange={set("company")}
                  placeholder="Acme Inc."
                  autoComplete="organization"
                  aria-invalid={!!errors.company}
                />
              </Field>
              <Field label="Email" error={errors.email} required>
                <input
                  type="email"
                  className="input"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="jane@company.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  type="tel"
                  className="input"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+91 00000 00000"
                  autoComplete="tel"
                  aria-invalid={!!errors.phone}
                />
              </Field>

              <Field
                label="How can we help you?"
                error={errors.inquiryType}
                required
                className="sm:col-span-2"
              >
                <select
                  className="input"
                  value={form.inquiryType}
                  onChange={set("inquiryType")}
                  aria-invalid={!!errors.inquiryType}
                >
                  <option value="">Select an option</option>
                  {helpOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>

              {careerPath ? (
                <>
                  <div className="sm:col-span-2">
                    <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-muted)] p-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                        Application forms and open positions live on the{" "}
                        <span className="font-semibold text-[var(--text)]">
                          Careers page
                        </span>
                        . Apply there directly, or leave a message here and
                        we&apos;ll point you to the right place.
                      </p>
                      <a
                        href="/careers"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_var(--color-accent-glow)]"
                      >
                        View Careers
                        <ArrowRightIcon width={15} height={15} />
                      </a>
                    </div>
                  </div>

                  <Field label="Position / Area of interest" error={errors.position}>
                    <input
                      type="text"
                      className="input"
                      value={form.position}
                      onChange={set("position")}
                      placeholder="e.g. Web Development Intern"
                    />
                  </Field>

                  <Field
                    label="Message"
                    error={errors.message}
                    className="sm:col-span-2"
                  >
                    <textarea
                      rows={4}
                      className="input"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Anything else we should know? (optional)"
                      aria-invalid={!!errors.message}
                    />
                  </Field>
                </>
              ) : (
                <>
                  <Field label="Budget" error={errors.budget} required>
                    <select
                      className="input"
                      value={form.budget}
                      onChange={set("budget")}
                      aria-invalid={!!errors.budget}
                    >
                      <option value="">Select a range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Timeline" error={errors.timeline} required>
                    <select
                      className="input"
                      value={form.timeline}
                      onChange={set("timeline")}
                      aria-invalid={!!errors.timeline}
                    >
                      <option value="">Select a timeline</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Message"
                    error={errors.message}
                    required
                    className="sm:col-span-2"
                  >
                    <textarea
                      rows={5}
                      className="input"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="What problem are you trying to solve? Any constraints, integrations, or existing systems we should know about?"
                      aria-invalid={!!errors.message}
                    />
                  </Field>
                </>
              )}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
              <p className="text-xs text-[var(--text-faint)]">
                By submitting, you agree to be contacted about your enquiry.
              </p>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-[transform,box-shadow,opacity] hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-10px_var(--color-accent-glow)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send enquiry"}
                <ArrowRightIcon width={16} height={16} />
              </button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  required,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const id = useId();
  const child = isValidElement(children)
    ? cloneElement(children as ReactElement<{ id?: string }>, {
        id,
      })
    : children;

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="mb-1.5 text-sm font-medium text-[var(--text)]">
        {label}
        {required && (
          <span className="ml-1 text-[var(--color-accent)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {child}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}