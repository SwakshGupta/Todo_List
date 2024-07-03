const { Router } = require("express");

const router = Router();

const { addTodo, deleteTodo, getAll, getById } = require("../controllers/todo");

router.post("/addTodo", addTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getAll", getAll);
router.get("/getById/:id", getById);

module.exports = router;
