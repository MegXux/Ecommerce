// Core Modules
require("dotenv").config();
const fs = require('fs')
const path = require("path");
const express = require("express");


// External Modules
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require('cors');

// Local Modules
const hostRouter = require("./routes/hostRouter");
const storeRouter = require("./routes/storeRouter");
const authRouter = require("./routes/authRouter");
const cartRouter = require("./routes/cartRouter");

const app = express();



// mongodb connection
const uri = process.env.MONGO_URL;
mongoose.connect(uri)

//Image Storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "upload/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage });



app.use(express.json());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use("/", hostRouter);
app.use("/", storeRouter);
app.use("/", authRouter);
app.use("/", cartRouter)

// Creating uploadig endpoint for image 
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: true,
        message: "Image uploaded successfully",
        image_url: `http://localhost:3000/images/${req.file.filename}`
    })
})
app.use("/images", express.static(path.join(__dirname, "upload/images")));


app.get("/" , (req, res, next) => {
    res.send("App is running")
})

const port = process.env.PORT 

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});


