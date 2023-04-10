import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import PostRoutes from "./routes/posts.js";

import * as dotenv from "dotenv";

dotenv.config();

//Initializes the app
const app = express();
//Let's the app use body parser and configures body parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
//App uses cors
app.use(cors());
//Uses a port for the post routs
app.use("/posts", PostRoutes);

//Defines the Connection URL to mongodb and the PORT for the server
const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT || 5000;

//Tries the connection to mongodb
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
