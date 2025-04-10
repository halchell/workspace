// output.txtをファイルとして取得し、テキストを読み出す
const file = Bun.file("output.txt");
const source = await file.text();

// 現在の日時を取得する
const now = new Date();

// ファイルに元のテキストと改行、日時を書き込む
const writer = file.writer();
writer.write(source);
writer.write("\n");
writer.write(now.toString());
writer.end();

// ファイルから再びテキストを読み出す
const result = await file.text();
console.log(result);