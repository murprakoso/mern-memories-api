import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
// import router
import postRoutes from './routes/posts.js';

/** start */
const app = express();

/** use body-parser, CORS */
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/** middleware */
app.use('/posts', postRoutes);
/** ./middleware */

/** Mongoose connect db */
const DB = process.env.DATABASE_LOCAL;
const port = process.env.PORT || 8000
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => {
        // listening port 
        app.listen(port, () => {
            console.log(`Server running at port : ${port}`);
        })

    })
    .catch((err) => console.log('error: ', err));

