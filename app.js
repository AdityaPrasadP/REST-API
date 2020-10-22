const express=require('express')
const mongoose=require('mongoose')
const app= express();
const bodyParser=require('body-parser')
app.use(bodyParser.json())
require('./routes/route')(app)




mongoose.connect('mongodb+srv://adi:Aditya@96@cluster0.oe7qu.mongodb.net/userdemodb?retryWrites=true&w=majority',{ useNewUrlParser: true },()=>{
    console.log('Connected to DB!!');
})
app.listen(3030)