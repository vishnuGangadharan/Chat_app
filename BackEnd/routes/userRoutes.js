import express from "express";
import { getUserForSideBar } from "../controllers/userController.js";
import protectRoute from "../middileware/protectRoute.js";

const router = express.Router()

router.get('/',protectRoute,getUserForSideBar)

export default router 