import type { Kind } from "./types";

export function symbolizeKind(kind: Kind): string{
  switch(kind){
    case "memo":
      return "-";
    case "todo":
      return "o";
    case "done":
      return "x";
  }
}

/** 項目の内容の先頭に、項目の種類に相当するシンボルをつけて返す */
export function formatToItem(content: string, kind: Kind): string{
  const symbol = symbolizeKind(kind);
  return `${symbol} ${content}`;
}