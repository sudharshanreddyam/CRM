import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter first name'
    },
    lastName: {
        type: String,
        required: 'Enter last name'
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    company: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});