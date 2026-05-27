const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    avatar: { type: String, default: 'avatar_placeholder.png' },
    password: String,
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('user', mySchema);