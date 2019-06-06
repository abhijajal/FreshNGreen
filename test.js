const mongoose = require('mongoose')
const Item = require('./database/models/Item')

mongoose.connect('mongodb://localhost/FreshNGreen')

Item.find({},(error,items)=>{
    console.log(error,items)
})



// Item.create({
//     title: 'Tomatoes',
//     description: 'Red round',
//     price: '10.9'
// },(error,item)=>{
//     console.log(error,item)
// })
