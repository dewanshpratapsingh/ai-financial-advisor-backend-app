
class Advisor{
    async generateFinancialAdvice(requestBody){
        console.log("controller:generateFinancialAdvice");
        
        if(!requestBody){
            throw new Error("Request Body is not defined.");
        }
        if(!requestBody.salary){
            throw new Error("Request Body is not defined.");
        }
        if(!requestBody.risk){
            throw new Error("Request Body is not defined.");
        }
        if(!requestBody.liabilities){
            throw new Error("Request Body is not defined.");
        }
        return advisorService.generateFinancialAdvice();
    }
}

module.exports = new Advisor();