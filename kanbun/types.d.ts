type Kind = "memo" | "todo" | "done";

interface Item{
  id: number;
  content: string;
  kind: Kind;
}