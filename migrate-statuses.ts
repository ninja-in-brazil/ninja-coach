import "server-only";

import { db } from "./src/lib/db";
import { goals, todos } from "./src/lib/db/schema";
import { eq, inArray } from "drizzle-orm";

async function main() {
  console.log("Starting status migration...");

  const deletedGoals = db.delete(goals).where(eq(goals.status, "dropped" as any)).run();
  console.log(`Deleted ${deletedGoals.changes} dropped goals.`);

  const updatedGoals = db.update(goals).set({ status: "active" }).where(eq(goals.status, "paused" as any)).run();
  console.log(`Updated ${updatedGoals.changes} paused goals to active.`);

  const updatedTodos = db.update(todos).set({ status: "active" }).where(inArray(todos.status, ["pending", "in_progress"] as any)).run();
  console.log(`Updated ${updatedTodos.changes} pending/in_progress todos to active.`);
  
  console.log("Migration complete.");
}

main().catch(console.error);
