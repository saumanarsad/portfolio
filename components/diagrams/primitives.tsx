import type { ReactNode } from "react";

// Shared building blocks for the inline architecture diagrams. Neutral strokes
// use currentColor (set on the <svg>); the "hot path" uses the accent.

export function Diagram({
  id,
  label,
  width,
  height,
  children,
}: {
  id: string;
  label: string;
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full font-mono text-neutral-500"
    >
      <defs>
        {(["a", "h"] as const).map((kind) => (
          <marker
            key={kind}
            id={`${id}-${kind}`}
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            markerUnits="userSpaceOnUse"
            orient="auto-start-reverse"
          >
            <path
              d="M0,0 L10,5 L0,10 z"
              fill={kind === "a" ? "currentColor" : undefined}
              className={kind === "h" ? "fill-emerald-400" : undefined}
            />
          </marker>
        ))}
      </defs>
      {children}
    </svg>
  );
}

export function Box({
  x,
  y,
  w,
  h = 28,
  lines,
  small,
  dashed,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  lines: string[];
  small?: boolean;
  dashed?: boolean;
}) {
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={6}
        strokeWidth={1}
        strokeDasharray={dashed ? "4 3" : undefined}
        className="fill-neutral-900 stroke-neutral-700"
      />
      {lines.map((line, i) => (
        <text
          key={line}
          x={cx}
          y={cy + (i - (lines.length - 1) / 2) * 13}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={i === 0 && !small ? 11 : 10}
          className={i === 0 ? "fill-neutral-200" : "fill-neutral-400"}
        >
          {line}
        </text>
      ))}
    </g>
  );
}

export function Arrow({
  id,
  d,
  hot,
  dashed,
}: {
  id: string;
  d: string;
  hot?: boolean;
  dashed?: boolean;
}) {
  return (
    <path
      d={d}
      fill="none"
      stroke={hot ? undefined : "currentColor"}
      strokeWidth={hot ? 1.5 : 1}
      strokeDasharray={dashed ? "4 3" : undefined}
      strokeLinejoin="round"
      className={hot ? "stroke-emerald-400" : undefined}
      markerEnd={`url(#${id}-${hot ? "h" : "a"})`}
    />
  );
}

export function Label({
  x,
  y,
  children,
  anchor = "middle",
  hot,
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: "start" | "middle" | "end";
  hot?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={10}
      className={hot ? "fill-emerald-400" : "fill-neutral-400"}
    >
      {children}
    </text>
  );
}
