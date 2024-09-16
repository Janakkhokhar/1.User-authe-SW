let mongoose = require("mongoose");

let UserSchema = mongoose.Schema({
    task: {
        type: String,
    },
    categories: {
        type: String,
    },
    Create: {
        type: mongoose.Schema.ObjectId,
        ref: "admin",
    },

})

let userpanel = mongoose.model('user', UserSchema);
module.exports = userpanel;