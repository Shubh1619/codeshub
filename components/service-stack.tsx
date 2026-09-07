import type { ReactElement } from "react";
import {
  ArrowRightIcon,
  BrainIcon,
  CloudIcon,
  GlobeIcon,
  LayersIcon,
  PhoneIcon,
  PlugIcon,
} from "@/components/icons";

interface StackNode {
  label: string;
  Icon: (props: { width?: number; height?: number; className?: string }) => ReactElement;
}

const stackNodes: StackNode[] = [
  { label: "Web", Icon: GlobeIcon },
  { label: "Mobile", Icon: PhoneIcon },
  { label: "API", Icon: PlugIcon },
  { label: "SaaS", Icon: LayersIcon },
  { label: "AI", Icon: BrainIcon },
  { label: "Cloud", Icon: CloudIcon },
];

function DesktopNode({ node }: { node: StackNode }) {
  const Icon = node.Icon;
  return (
    <div className="flex flex-1 items-center justify-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)]/50 px-3 py-3">
      <Icon
        width={16}
        height={16}
        className="shrink-0 text-[var(--color-accent)]"
      />
      <span className="text-sm font-medium text-[var(--text)]">{node.label}</span>
    </div>
  );
}

function DesktopRow({ nodes }: { nodes: StackNode[] }) {
  return (
    <div className="flex items-center gap-2">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex flex-1 items-center">
          {i > 0 && (
            <span className="mx-1.5 shrink-0 text-[var(--text-faint)]">
              <ArrowRightIcon width={15} height={15} />
            </span>
          )}
          <DesktopNode node={node} />
        </div>
      ))}
    </div>
  );
}

export function ServiceStack() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.45)] sm:p-7"
      role="img"
      aria-label="Service stack coverage: Web, Mobile, API, SaaS, AI and Cloud"
    >
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 right-0 h-48 w-72 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent)] blur-2xl"
      />
      {/* subtle technical grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,20,35,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,35,0.035)_1px,transparent_1px)] bg-[size:28px_28px] dark:bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />

      <div className="relative">
        <p className="label-eyebrow text-xs uppercase tracking-widest text-[var(--text-faint)]">
          The stack we ship
        </p>

        {/* Vertical pipeline (mobile) */}
        <div className="mt-4 flex flex-col gap-2 sm:hidden">
          {stackNodes.map((node) => {
            const Icon = node.Icon;
            return (
              <div
                key={node.label}
                className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)]/50 px-3 py-2.5"
              >
                <Icon
                  width={15}
                  height={15}
                  className="shrink-0 text-[var(--color-accent)]"
                />
                <span className="text-sm font-medium text-[var(--text)]">
                  {node.label}
                </span>
                <span className="ml-auto text-[var(--text-faint)]">
                  <ArrowRightIcon width={14} height={14} />
                </span>
              </div>
            );
          })}
        </div>

        {/* Horizontal flow (desktop) */}
        <div className="mt-5 hidden flex-col gap-3 sm:flex">
          <DesktopRow nodes={stackNodes.slice(0, 3)} />
          <div className="mx-auto h-3 w-px bg-[var(--border)]" />
          <DesktopRow nodes={stackNodes.slice(3)} />
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <span className="inline-flex items-center gap-2 text-[11px] font-medium text-[var(--text-faint)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Full delivery, one team
          </span>
          <span className="hidden font-mono text-[11px] text-[var(--text-faint)] sm:block">
            design · build · deploy · scale
          </span>
        </div>
      </div>
    </div>
  );
}