var mongoose = require('mongoose');
mongoose.connect("url")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})
