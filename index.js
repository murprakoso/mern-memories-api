import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import router
import postRoutes from "./routes/posts.js";

/** start */
const app = express();
dotenv.config();

/** use body-parser, CORS */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/** middleware */
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("Hello Dude !");
});
/** ./middleware */

/** Mongoose connect db */
const DB = process.env.DATABASE_LOCAL;
const PORT = process.env.PORT || 8080;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    //   connect db
    console.log(`Connected to DB`);
    // listening port
    app.listen(PORT, () => {
      console.log(`Server running at port : ${PORT}`);
    });
  })
  .catch((err) => console.log("error: ", err));
