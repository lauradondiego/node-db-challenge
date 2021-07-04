exports.seed = function(knex) {
  return knex("resources").insert([
    { name: "person", description: "get some help" },
    { name: "hammer", description: "get a large hammer to hammer in nails" },
    { name: "book", description: "you will need to read the training manual" }
  ]);
};
