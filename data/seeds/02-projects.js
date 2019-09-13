exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "Node", description: "backend learning", completed: false },
    { name: "React", description: "front end learning", completed: true }
  ]);
};
