const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas);

console.log(`\nA fruta Caqui existe? ${frutas.has("Caqui")}`);
// apaga uma informação
frutas.delete("Caqui");

console.table(frutas);
