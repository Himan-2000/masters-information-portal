const mongoose = require('mongoose');

var forumSchema = new mongoose.Schema({
    question :
    {
        title : String ,
        text : String ,        
        createdAt :  { type : Date, default: Date.now },
        updatedAt :  { type : Date, default: Date.now },
        poster :
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        upvoters :
        [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }],
        downvoters :
        [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
    }],
    },

    answers :
    [{
        text : String ,
        createdAt :  { type : Date, default: Date.now },
        updatedAt :  { type : Date, default: Date.now },
        poster :
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        upvoters :
        [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }],
        downvoters :
        [{
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }],
        pinned : {type:Boolean , default:false}
    }]
});

module.exports = mongoose.model("Forum",forumSchema);