import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from "../controllers/UserController.js";
import { admin, protect } from "../middleware/AuthMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);

router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
