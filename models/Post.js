const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    //this field object id from db to link post to users
    type: mongoose.Schema.Types.ObjectId,
    //ref user model
    ref: "User",
  },
  createdAt: {
    type: Date,
    //sets date if one isnt added
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
