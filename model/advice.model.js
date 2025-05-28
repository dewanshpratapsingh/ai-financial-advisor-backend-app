const mongoose = require('mongoose');

const userFinancialDataSchema = new mongoose.Schema({
    monthly_salary: {
        type: String,
        required: true
    },
    monthly_emi: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user_email : {
        type: String,
        required: true
    }
})
const adviceSchema = new mongoose.Schema({
    userFinancialData: userFinancialDataSchema,
    overall_advice: {
        type: String,
        required: true
    },
    suggestions: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    cautions: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }]
})

const Advice = mongoose.model('Advice', adviceSchema);
const UserFinancialData = mongoose.model('UserFinancialData', userFinancialDataSchema);
module.exports = {
    Advice,
    UserFinancialData
}