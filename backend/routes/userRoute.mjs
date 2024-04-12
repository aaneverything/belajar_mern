// const express = require("express");
import express from "express";
import { 
    getUsers, 
    getUserById,
    createUsers,
    updateUsers,
    deleteUsers
} from "../controllers/userController.mjs";
const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUsers);
router.patch("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);


export default router;
