import advisorConfig from "./../config/advisor.config.js";
import responseHandler from "./../util/reponse.helper.js";
import geminiClient from "./../clients/gemini.js";

class AdvisorService{
    async generateFinancialAdvice(salary, age, investment, location, risk,emi){
        try{
            const adviceData = await geminiClient(salary, age, investment, location, risk,emi);
            const response ={
                data : adviceData,
                message :  advisorConfig.messages.success.ADVISE_GENERATION_SUCCESS
            }            
            return responseHandler._200(response);
        }catch(err){
            console.log(err);
            
            const response = {
                data : {},
                message : advisorConfig.messages.failure.ADVISE_GENERATION_FAILURE
            }
            return responseHandler._500(response);
        }
    }
}
export default new AdvisorService();