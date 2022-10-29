import express from "express";
import Feedback from "../Controllers/Feedback.js";
import Token from "../utils/Jwt.js";
const router = express.Router();

router.post("/Post",Token.VerifyToken,Feedback.getFeedback);
router.post("/:id",Token.VerifyToken,Feedback.UpdateUpvotes);
router.get("/",Token.VerifyToken,Feedback.getFeedback);


export default router;