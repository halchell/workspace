import { Database } from "bun:sqlite"
import { Kind, Item } from "./types";

export function initializeItemTable(db: Database){
  const queryString = `CREATE TABLE IF NOT EXISTS item(
  id INTEGER PRIMARY KEY,
  content TEXT NOT NULL,
  kind TEXT NOT NULL
  )`;
  const query = db.prepare(queryString)
  query.run();
}

export function createItem(db: Database, content: string, kind: Kind){
  const queryString = `INSERT INTO item (content, kind) VALUES (?, ?)`;
  const query = db.query(queryString);
  query.run(content, kind);
}

export function getItems(db: Database): Item[]{
  const queryString = `SELECT * FROM item`;
  using query = db.query(queryString);
  return query.all() as Item[];
}