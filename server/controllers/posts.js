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
