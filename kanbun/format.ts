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