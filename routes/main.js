import { Router } from "express";
import advisorRouter from "./advisorRouter.js"
const router = Router();

router.use('/ai',advisorRouter);

export default router;