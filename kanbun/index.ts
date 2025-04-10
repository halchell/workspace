const file = Bun.file("output.txt");
const source = await file.text();
console.log(source);