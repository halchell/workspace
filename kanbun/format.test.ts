import { expect, test } from "bun:test";
import { formatToItem } from "./format";

const itemMemo = {
  id: 1,
  content: "メモ",
  kind: "memo",
} as const;

const itemTodo = {
  id: 1,
  content: "Todo",
  kind: "todo",
} as const;

test("formatToItem", () => {
  expect(formatToItem(itemMemo)).toBe("- メモ");
  expect(formatToItem(itemTodo)).toBe("o Todo");
});