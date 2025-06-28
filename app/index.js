const express = require("express");
const app = express();

app.use(express.json());

const todos = [];

app.get("/health", (req, res) => {
  res.send({ status: "ok", uptime: process.uptime() });
});

app.get("/todos", (req, res) => {
  res.send(todos);
});

app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.status(201).send({ message: "Todo added" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
