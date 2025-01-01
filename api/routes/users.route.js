import express from "express";
import {
    createUser,
    deleteUser,
    getByEmail,
    getUser,
    getUsers,
    updateUser,
} from "../controllers/users.controller.js";

const userRouter = express.Router();

// GET //
userRouter.get("/search", getByEmail);
userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);

// POST //
userRouter.post("/", createUser);

// PUT //
userRouter.put("/:id", updateUser);

// DELETE //
userRouter.delete("/:id", deleteUser);

export default userRouter;
