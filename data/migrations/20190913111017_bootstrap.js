exports.up = function(knex) {
  return (
    knex.schema

      // RESOURCES TABLE
      .createTable("resources", tbl => {
        tbl.increments();
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description", 512);
      })

      // PROJECTS TABLE
      .createTable("projects", tbl => {
        tbl.increments();
        tbl
          .string("name", 255)
          .notNullable()
          .unique();
        tbl.string("description", 512);
        tbl.boolean("completed")
      })

      // TASKS TABLE
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description", 512).notNullable();
        tbl.string("notes", 512);
        tbl.boolean("completed").notNullable();
        tbl
          .integer("projects_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      // MANAGER TABLE
      .createTable("manager", tbl => {
        tbl
          .integer("projects_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

        tbl
          .integer("resources_id")
          .unsigned()
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.primary(["projects_id", "resources_id"]);
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("manager")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects")
    .dropTableIfExists("resources");
};

// in order by resource / Project / task / manager
