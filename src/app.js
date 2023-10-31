let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let i;
let b;
let c;

for (i = 0; i < pronoun.length; i++) {
  for (b = 0; b < adj.length; b++) {
    for (c = 0; c < noun.length; c++) {
      console.log(pronoun[i] + adj[b] + noun[c] + "puedes.es \n");
    }
  }
}
