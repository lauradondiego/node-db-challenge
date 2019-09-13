const express = require("express");

const db = require("../data/db-config");

const router = express.Router();


router.post("")

router.get("/", (req, res) => {
  db("resources")
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve list of resources" });
    });
});
