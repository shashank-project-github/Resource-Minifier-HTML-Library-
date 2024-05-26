const Terser = require("terser");


Terser.minify(`
// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();

// const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');
const contactRouter = require('./routers/contactRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const minifyRouter = require('./routers/minify-util');
// const userRouter = require('./routers/userRouter');
const bodyParser = require('body-parser');

// middleware

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json({ limit: '200mb' }));
app.use(bodyParser.urlencoded({ limit: '200mb', extended: true, parameterLimit:50000 }));
app.use(express.json());

// app.use('/post', postRouter);
app.use('/user', userRouter);
app.use('/contact', contactRouter);
app.use('/feedback', feedbackRouter);
app.use('/minify', minifyRouter);

const port = 5000;

app.use(express.static('./static/resources'));


app.listen(port, () => { console.log('express server open') });`)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});