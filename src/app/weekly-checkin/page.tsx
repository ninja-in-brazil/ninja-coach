import { redirect } from "next/navigation";

import { createSession } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default function WeeklyCheckInPage() {
  const session = createSession({
    kind: "weekly_checkin",
    title: "Weekly check-in",
  });
  redirect(`/chat/${session.id}?autostart=1`);
}
