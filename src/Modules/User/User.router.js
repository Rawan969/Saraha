import { Router } from "express";
import * as userController from "./controller/User.controller.js";
import { auth } from "../../Middleware/auth.middleware.js";
import { asyncHandler } from "../../Services/errorHandling.js";
import fileupload, { HME } from "../../Services/multer.js";
const router = Router();

router.get('/profile',auth,asyncHandler(userController.profile));//it will go to auth middleware
router.patch('/profilePic',auth,fileupload().single('image'),HME, userController.profilePic);

export default router;