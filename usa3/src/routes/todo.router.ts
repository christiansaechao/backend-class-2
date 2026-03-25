import { Router } from "express";
import { prisma } from "../config/client";

// every route starts with /todo
// http://localhost:3000/todo
const router = Router();

// Austin
router.get("/", async (req, res) => {
  const todos = await prisma.todos.findMany();
  return res.send({ data: todos });
});

// Faruk: GET: by ID: retgurn Todo by ID
router.get("/post/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await prisma.todos.findUnique({
//     });
//   } catch {
//     console.log(error);
//   }

//   return res.status(200);
});

// Arv: POST: requirements / parmaeters / part of the req.body
// router.post("/post", async (req, res) => {
//   const { title, description, isComplete } = req.body;
//   if (!title || !description || isComplete === undefined) {
//     return res.status(400);
//   }
// });

// // John: Delete
// router.delete("/delete/:id", async (req, res) => {
//   const { id } = req.params;
//   if (!id) return res.status(400).json({ message: "Id missing" });

//   try {
//     const deletedTask = await prisma.todos.delete({
//       where: {
//         id: id,
//       },
//     });

//     if (!deletedTask)
//       return res.status(404).json({ message: "Task not found" });

//     return res.status(200).json({ message: `todo: ${id} deleted` });
//   } catch (e) {
//     console.error(e);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// });

// router.patch("/patch/:id", async (req, res) => {
//   const todoId = req.params.id;
//   const { title, description } = req.body;

//   try {
//     const todo = await prisma.todos.findUnique({
//       where: { id: todoId },
//     });
//     if (!todo) {
//       return res.send({ success: false, message: "Can't find the data" });
//     }
//     const todoUpdate = await prisma.todos.upsert({
//       where: { id: todoId },
//       update: { title: title, description: description },
//     });
//     return res.status(200)({ success: true, message: "Patched" });
//   } catch (e) {
//     return res.send({ success: false, error: e });
//   }
// });

export default router;
