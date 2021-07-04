exports.seed = function(knex) {
  return knex("manager").insert([
    { projects_id: 1, resources_id: 1 },
    { projects_id: 2, resources_id: 2 }
  ]);
};
