import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.send("Hi, This is crazy!")
})

export default router;