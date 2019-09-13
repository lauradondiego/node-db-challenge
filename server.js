const express = require("express");
const helmet = require("helmet");

const tasksRouter = require("./tasks/task-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Tasks API is up and running!" });
});

module.exports = server;
