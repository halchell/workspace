import { Database } from "bun:sqlite"
import { initializeItemTable } from "./db";

const db = new Database("sqlite.db")

initializeItemTable(db);

if(Bun.argv.length === 4){
  // コマンドライン引数の最後の文字列を取得する
const content: string = Bun.argv.pop() ?? "";
const command: string = Bun.argv.pop() ?? "";

} else if(Bun.argv.length === 2){
  
} else{
  throw new Error("追加のコマンドライン引数は1つまでです。");
}

db.close();