import { Database } from "bun:sqlite"

export function initializeItemTable(db: Database){
  const queryString = `CREATE TABLE IF NOT EXISTS item(
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  kind TEXT NOT NULL
  )`;
  const query = db.prepare(queryString)
  query.run();
}

export function createMemo(db: Database, content: string){
  const queryString = `INSERT INTO item (content, kind) VALUES (?, ?)`;
  const query = db.query(queryString);
  query.run(content, "memo");
}

export function createTodo(db: Database, content: string){
  const queryString = `INSERT INTO item (content, kind) VALUES (?, ?)`;
  const query = db.query(queryString);
  query.run(content, "todo");
}