"use client";

import { useEffect, useState } from "react";

const codeLines = [
  `const buildProduct = async () => {`,
  `  console.log("Building digital products...");`,
  `  await runTests();`,
  `  await buildProject();`,
  `  await deployToProduction();`,
  `  return {`,
  `    success: true,`,
  `    status: "production-ready",`,
  `  };`,
  `};`,
];

type TokenKind = "keyword" | "string" | "bool" | "fn" | "comment" | "plain";

interface Token {
  text: string;
  kind: TokenKind;
}

const tokenColors: Record<TokenKind, string> = {
  keyword: "#c792ea",
  string: "#98c379",
  bool: "#82aaff",
  fn: "#e8e6f2",
  comment: "#5f6278",
  plain: "#c2c0d2",
};

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "async",
  "await",
  "return",
  "function",
  "if",
  "else",
  "for",
  "while",
  "of",
  "in",
  "import",
  "export",
  "from",
  "new",
  "typeof",
]);

const BOOLEANS = new Set(["true", "false", "null", "undefined"]);

function tokenizeLine(source: string): Token[] {
  const tokens: Token[] = [];
  let index = 0;

  while (index < source.length) {
    const rest = source.slice(index);

    const comment = /^\/\/.*/.exec(rest);
    if (comment) {
      tokens.push({ text: comment[0], kind: "comment" });
      index += comment[0].length;
      continue;
    }

    const str = /^"(?:[^"\\]|\\.)*"|^'(?:[^'\\]|\\.)*'/.exec(rest);
    if (str) {
      tokens.push({ text: str[0], kind: "string" });
      index += str[0].length;
      continue;
    }

    const word = /^[A-Za-z_$][A-Za-z0-9_$]*/.exec(rest);
    if (word) {
      const w = word[0];
      tokens.push({
        text: w,
        kind: KEYWORDS.has(w) ? "keyword" : BOOLEANS.has(w) ? "bool" : "fn",
      });
      index += w.length;
      continue;
    }

    tokens.push({ text: rest[0], kind: "plain" });
    index += 1;
  }

  return tokens;
}

function useTypewriter(lines: string[]) {
  const [lens, setLens] = useState<number[]>(() => lines.map(() => 0));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLens(lines.map((l) => l.length));
      return;
    }

    let cancelled = false;
    let line = 0;
    let char = 0;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (cancelled) return;
      const target = lines[line] ? lines[line].length : 0;
      if (char < target) {
        char += 1;
        setLens((prev) => {
          const next = [...prev];
          next[line] = char;
          return next;
        });
        timer = setTimeout(step, 16);
      } else {
        line += 1;
        char = 0;
        if (line < lines.length) {
          timer = setTimeout(step, 90);
        }
      }
    };

    timer = setTimeout(step, 500);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [lines]);

  return lens;
}

export function HeroTerminal() {
  const lens = useTypewriter(codeLines);
  const done =
    lens.length === codeLines.length &&
    lens.every((len, i) => len >= (codeLines[i]?.length ?? 0));

  return (
    <div className="relative w-full max-w-md">
      {/* subtle glow behind the terminal */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(closest-side,var(--color-accent-glow),transparent_70%)] opacity-40 blur-2xl"
      />
      <div
        className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[#0c0c14] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]"
        role="img"
        aria-label="Animated TypeScript build process for a Codeshub product: tests pass, project builds, and the deploy ships to production"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[10px] text-white/40 sm:text-xs">
            build.ts — codeshub
          </span>
        </div>
        <pre className="overflow-x-auto px-3 py-2.5 font-mono text-[10px] leading-[1.45rem] sm:px-5 sm:py-3.5 sm:text-[13px] sm:leading-[1.7rem]">
          {codeLines.map((line, i) => {
            const tokens = tokenizeLine(line);
            const revealed = Math.min(lens[i] ?? 0, line.length);
            let consumed = 0;
            return (
              <div key={i} className="whitespace-pre">
                <span className="select-none pr-2 text-white/20 sm:pr-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tokens.map((token, j) => {
                  const start = consumed;
                  consumed += token.text.length;
                  if (start >= revealed) return null;
                  const visible = Math.min(token.text.length, revealed - start);
                  if (visible <= 0) return null;
                  return (
                    <span key={j} style={{ color: tokenColors[token.kind] }}>
                      {token.text.slice(0, visible)}
                    </span>
                  );
                })}
                {!done && revealed < line.length && (
                  <span className="animate-pulse text-[var(--color-accent)]">▍</span>
                )}
              </div>
            );
          })}
        </pre>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4 sm:py-2.5">
          <span className="inline-flex items-center gap-2 text-[10px] text-emerald-400 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            build succeeded
          </span>
          <span className="font-mono text-[10px] text-white/40 sm:text-xs">
            scale: 0 → production
          </span>
        </div>
      </div>
    </div>
  );
}