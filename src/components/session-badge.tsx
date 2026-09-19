import type { SessionKind } from "@/lib/db/schema";

export function SessionBadge({ kind }: { kind: SessionKind | string }) {
  if (kind === "weekly_checkin" || kind === "checkin") {
    return (
      <span className="shrink-0 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
        Weekly check-in
      </span>
    );
  }

  if (kind === "daily_checkin" || kind === "open") {
    return (
      <span className="shrink-0 rounded-full border border-sky-300 bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-300">
        Daily check-in
      </span>
    );
  }

  return null;
}
