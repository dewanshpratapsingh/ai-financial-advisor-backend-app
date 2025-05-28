import advisorService from '../service/advisor.service.js';
class AdvisorController{
    async generateFinancialAdvice(salary, age, investment, location, risk,emi){
        console.log("controller:generateFinancialAdvice");
        if (!salary || !age || !investment || !location || !risk || !emi) {
            throw new Error("Missing required parameters: salary, age, investment, location, risk, or emi");
        }
        return advisorService.generateFinancialAdvice(salary, age, investment, location, risk,emi);
    }
}

export default new AdvisorController();