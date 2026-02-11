import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";

function getDb() {
  const client = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });
  return drizzle(client, { schema });
}

let _db: ReturnType<typeof getDb> | undefined;
export const db = new Proxy({} as ReturnType<typeof getDb>, {
  get(_, prop) {
    if (!_db) _db = getDb();
    return (_db as any)[prop];
  },
});
