const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./tasks/project-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "Projects API is up and running!" });
});

module.exports = server;
