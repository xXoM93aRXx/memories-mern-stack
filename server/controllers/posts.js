import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//Function for getting all the posts from the database
export const getPosts = async (req, res) => {
  try {
    //Finds the post using the model created in the models folder
    const posts = await PostMessage.find();
    //200 means the post was found, it sends json of the posts fetched
    res.status(200).json(posts);
  } catch (error) {
    //404 means that the post was not found will return a json with the error message
    res.status(404).json({ message: error.message });
  }
};
//Function for creating a new post
export const createPost = async (req, res) => {
  //Initializes the post from the request body
  const post = req.body;

  //Creates a new post model
  const newPost = new PostMessage(post);
  try {
    //Saves the post
    await newPost.save();
    //201 means that the dat was sent successfully will return a json with the new post
    res.status(201).json(newPost);
  } catch (error) {
    //409 means that there was an error sending the data will return a message with the error message in json format
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post found");

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  );

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post found");
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "Post deleted sucecessfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post found");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );

  res.json(updatedPost);
};
