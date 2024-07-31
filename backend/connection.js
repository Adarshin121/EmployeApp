var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user:user@cluster0.ja6rsv3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})