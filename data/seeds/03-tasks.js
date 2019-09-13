exports.seed = function(knex) {
  return knex("tasks").insert([
    {
      id: 1,
      description: "take out garbage",
      notes: "if you forget to do this it will be gross",
      completed: false,
      projects_id: 1
    },
    {
      id: 2,
      description: "walk dog",
      notes: "at least 5x daily",
      completed: true,
      projects_id: 1
    },
    {
      id: 3,
      description: "go to Lambda School",
      notes: "pay attention",
      completed: true,
      projects_id: 1
    }
  ]);
};
