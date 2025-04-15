import { Database } from "bun:sqlite"
import { createItem, getItems, initializeItemTable } from "./db";

const db = new Database("sqlite.db")

initializeItemTable(db);

if(Bun.argv.length === 4){
  // コマンドライン引数の最後の文字列を取得する
const content: string = Bun.argv.pop() ?? "";
const command: string = Bun.argv.pop() ?? "";

switch(command){
  case "memo":
    createItem(db, content, "memo")
    break;
  case "todo":
    createItem(db, content, "todo")
    break;
  case "done":
    // TODO: タスクを完了にする処理を書く
    break;
  default:
    throw new Error("不正なコマンドです");
}

} else if(Bun.argv.length === 2){
  const items = getItems(db);
  console.log(items);
} else{
  throw new Error("追加のコマンドライン引数は1つまでです。");
}

db.close();