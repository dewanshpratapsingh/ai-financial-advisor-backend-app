import { Router } from "express";
import advisorService from "./../service/advisor.service.js";
const router = Router();

router.get('/',async (req,res)=>{
    try {
        const salary = req.query.salary;
        const age = req.query.age;
        const risk = req.query.risk;
        const investment = req.query.investment;
        const location = req.query.location;
        const emi = req.query.emi;
        const response = await advisorService.generateFinancialAdvice(salary, age, investment, location, risk,emi);
        res.json(response);
    } catch (err) {
        res.status(500).json({
            status: "Failure",
            message: "Internal Server Error",
            data: {}
        });
    }
})

export default router;