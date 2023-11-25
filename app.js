const express = require("express");
const app = express();

const taskRouter = require("./router/taskRouter");

const PORT = 3000;

app.use(express.json());

// app.use(express.urlencoded{extended:true});

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Your have reach the Task Manager Webpage" });
});

app.use("/tasks", taskRouter);

app.listen(PORT, () => {
  console.log(`Server hava started at port ${3000}`);
});
