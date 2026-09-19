import { updateSession, getSession } from "@/lib/db/queries";
import type { SessionKind } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: Request,
  props: { params: Promise<{ id: string }> },
) {
  const { id } = await props.params;
  const session = getSession(id);
  if (!session) {
    return Response.json({ error: "Session not found." }, { status: 404 });
  }

  let body: { kind?: SessionKind; title?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const updated = updateSession(id, {
    kind: body.kind,
    title: body.title,
  });

  return Response.json(updated);
}
