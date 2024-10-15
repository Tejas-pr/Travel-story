const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TravelStorySchema = new Schema({
    title: {type: String, required: true},
    story: {type: String, required: true},
    visitedLocation: {type: [String], default: []},
    isFavourite: {type: Boolean, default: false},
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    createdOn: {type: Date, default: Date.now},
    imageUrl: {type: String, require: true},
    visitedDate: {type: Date, require: true}
});

module.exports = mongoose.model("TravelStory", TravelStorySchema);