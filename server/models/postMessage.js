import mongoose from "mongoose";

//Sets up the schema
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: new Date() },
});

//Makes a model from the schema
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
