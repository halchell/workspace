import { Database } from "bun:sqlite"

export function initializeItemTable(db: Database):{
  const queryString = `CREATE TABLE IF NOT EXISTS item(
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL
  kind TEXT NOT NULL
  )`;
  const query = db.prepare(queryString)
  query.run();
}