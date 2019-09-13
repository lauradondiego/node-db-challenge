exports.up = function(knex) {
  return (
    knex.chema

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
        tbl.boolean("completed").notNullable();
      })

      // TASKS TABLE
      .createTable("tasks", tbl => {
        tbl.increments();
        tbl.string("description", 512).notNullable();
        tbl.string("notes", 512);
        tbl.boolean("completed").notNullable();
        tbll
          .integer("projects_id")
          .unsigned()
          .references("id")
          .inTable("projects")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
      })

      // MANAGER TABLE
      .createTable("manager", tbl => {
        tbl
          .integer("project_id")
          .unsigned()
          .references("id")
          .inTable("project")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");

        tbl
          .integer("resource_id")
          .unsigned()
          .references("id")
          .inTable("resources")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.primary(["project_id", "resource_id"]);
      })
  );
};

exports.down = function(knex) {};

resource / Project / task / manager in order;
