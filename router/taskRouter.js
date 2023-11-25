const router = require("express").Router();
const fs = require("fs");
const Validate = require("../helpers/validator");
const path = require("path");
const tasks = require("../tasks.json");
var uniqid = require("uniqid");

router.get("/", (req, res) => {
  return res.status(200).json(tasks);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);
  if (tasks.length > 0) {
    const taskfilter = tasks.filter((task) => task.id === id);

    return res.status(200).json(taskfilter);
  }

  return res.status(401).json({ msg: `No task with Id: ${id}` });
});

router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (Validate.required(title) && Validate.required(description)) {
    const data = {
      id: uniqid(),
      title,
      description,
      completed: false,
    };

    tasks.push(data);
    console.log(tasks);

    fs.writeFile("./tasks.json", JSON.stringify(tasks), (err) => {
      if (err) return res.status("500").json(err);
      return res.status(201).json(tasks);
    });
  } else {
    return res
      .status("500")
      .json({ msg: "Your expected  to add title and description" });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  if (id) {
    const { title, description, completed } = req.body;
    const oldTask = tasks.filter((task) => task.id === id);
    const taskfilter = tasks.filter((task) => task.id !== id);

    const data = {
      id,
      title: title !== undefined ? title : oldTask[0].title,
      description:
        description !== undefined ? description : oldTask[0].description,
      completed: completed !== undefined ? completed : oldTask[0].completed,
    };

    taskfilter.push(data);

    fs.writeFile("./tasks.json", JSON.stringify(taskfilter), (err) => {
      if (err) {
        return res.status("500").json(err);
      }
      return res.status(201).json(taskfilter);
    });
  } else {
    return res.status(401).json({ msg: `No task with Id: ${id}` });
  }
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  if (id) {
    const taskfilter = tasks.filter((task) => task.id !== id);

    fs.writeFile("./tasks.json", JSON.stringify(taskfilter), (err) => {
      if (err) {
        return res.status("500").json(err);
      }
      return res.status(201).json(taskfilter);
    });
  } else {
    return res.status(401).json({ msg: `No task with Id: ${id}` });
  }
});

module.exports = router;
