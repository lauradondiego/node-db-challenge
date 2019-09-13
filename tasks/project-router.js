const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.post("/", (req, res) => {
  const projectData = req.body;
  db("projects")
    .insert(projectData)
    .then(project => {
      db("projects")
        .where({ id: project[0] })
        .then(newProjectEntry => {
          if (newProjectEntry[0].completed === 0) {
            newProjectEntry[0].completed = false;
            console.log(newProjectEntry);
          } else {
            newProjectEntry[0].completed = true;
          }
          res.status(201).json(newProjectEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: err.message });
    });
});

router.get("/", (req, res) => {
  db("projects")
    .then(projects => {
      console.log(projects);
      projects.forEach(project => {
        if (project.completed === 0) {
          project.completed = false;
        } else {
          project.completed = true;
        }
      });
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;
  db("resources")
    .insert(resourceData)
    .then(resource => {
      db("resources")
        .where({ id: resource[0] })
        .then(newResourceEntry => {
          res.status(201).json(newResourceEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: err.message });
    });
});

router.get("/resources", (req, res) => {
  db("resources")
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;
  db("tasks")
    .insert(taskData)
    .then(task => {
      db("tasks")
        .where({ id: task[0] })
        .then(newTaskEntry => {
          res.status(201).json(newTaskEntry);
        });
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: err.message });
    });
});

router.get("/tasks", (req, res) => {
  db("tasks")
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
