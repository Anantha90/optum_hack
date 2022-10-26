import express from "express";
import Feedback from "../Controllers/Feedback.js";
import VerifyToken from "../utils/Jwt.js";
const router = express.Router();

router.post("/Post",VerifyToken,Feedback.PostFeedback);
router.get("/",VerifyToken,Feedback.getFeedback);
router.post("/:id",VerifyToken,Feedback.UpdateUpvotes);

export default router;