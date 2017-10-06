const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create student schema and model
const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    sex: {
        type: String,
        required: [true, 'Sex field is required']
    },
    location: {
        type: String,
        required: [true, 'Location field is required']
    },
    dob: {
        type: String,
        required: [true, 'Date of Birth field is required']
    },
    hobby: {
        type: String,
    },
    about: {
        type: String,
        required: [true, 'About field is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is requied']
    },
    education_qualification: {
        type: String,
        required: [true, "Education qualification is required"]
    },
    job: {
        type: String,
        required: [true, 'Job field is required']
    }

});

const Student = mongoose.model('student', StudentSchema);
module.exports = Student;