const mongoose = require('mongoose');

// const url = "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mydatabase7654?retryWrites=true&w=majority&appName=Cluster0"
const url = "mongodb://Shashank:1234@ac-9fbzhmq-shard-00-00.azciqec.mongodb.net:27017,ac-9fbzhmq-shard-00-01.azciqec.mongodb.net:27017,ac-9fbzhmq-shard-00-02.azciqec.mongodb.net:27017/?ssl=true&replicaSet=atlas-14n7m2-shard-0&authSource=admin&appName=Cluster0"
// asynchronous function  - returns Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;