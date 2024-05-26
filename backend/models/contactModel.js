const { Schema, model } = require('../connection');

const mySchema = new Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true},
    subject: { type: String, require: true },
    message: { type: String, require: true },
    
});

module.exports = model('contact', mySchema);