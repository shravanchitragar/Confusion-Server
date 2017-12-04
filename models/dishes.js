const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// const commentSchema = new Schema({

//     comment:{
//         type:String,
//         required:true,
//         },
//     rating:{
//         type:Number,
//         min:1,
//         max:10,
//         required:true

//     },
// },{
//     timestamps:true
// });

var dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    //comments:[commentSchema]
}, {
    timestamps: true
});

var Dishes = mongoose.model('dish',dishSchema);

module.exports = Dishes;