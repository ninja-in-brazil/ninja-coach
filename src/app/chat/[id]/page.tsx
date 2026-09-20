import { notFound } from "next/navigation";

import { Chat } from "@/components/chat";
import { toUIMessages } from "@/lib/chat/messages";
import { getMessages, getSession } from "@/lib/db/queries";

export default async function ChatPage(props: PageProps<"/chat/[id]">) {
  const { id } = await props.params;
  const session = getSession(id);
  if (!session) {
    notFound();
  }
  const initialMessages = toUIMessages(getMessages(id));

  return (
    <div className="mx-auto flex h-full w-full max-w-3xl min-h-0 flex-col gap-3 px-6 py-8">
      <Chat sessionId={id} session={session} initialMessages={initialMessages} />
    </div>
  );
}
