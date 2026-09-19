import { redirect } from "next/navigation";

import { createSession } from "@/lib/db/queries";

export const dynamic = "force-dynamic";

export default function DailyCheckInPage() {
  const session = createSession({
    kind: "daily_checkin",
    title: "Daily check-in",
  });
  redirect(`/chat/${session.id}?autostart=1`);
}
