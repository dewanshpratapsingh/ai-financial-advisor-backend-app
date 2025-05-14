class Response{
    async _200(responseData){
        if(!responseData.data){
            responseData.data = {};
        }
        if(!responseData.message){
            responseData.message = "Success";
        }
        return {
            statusCode : 200 ,
            status : "Success",
            data : responseData.data,
            message : responseData.message
        }
    }
    async _500(responseData){
        if(!responseData.data){
            responseData.data = {};
        }
        if(!responseData.message){
            responseData.message = "Something went wrong";
        }
        return {
            statusCode : 500 ,
            status : "Failure",
            data : responseData.data,
            message : responseData.message
        }
    }
}

export default new Response();