
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://Luiz:Luiz1995@cluster0.hafxr.mongodb.net/test', { useNewUrlParser: true })
    .then(() => console.log('We are connected to Mongo...'))
    .catch(err => console.log('Could not connect to MongoDB', err))
    