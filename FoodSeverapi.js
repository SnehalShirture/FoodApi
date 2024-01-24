const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

// Import Multer and Path
const multer = require("multer");
const path = require("path");

const server = new express();
server.use(bodyparser.json());

// Storage Config

const filestorage = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Upload Config

const uploadConfig = multer({
  storage: filestorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return cb(new Error("Upload Correct File"));
    }
    cb(undefined, true);
  },
});

server.post(
  "/uploadfile",
  uploadConfig.single("image"),
  (req, res) => {
    res.status(200).json({
      filepath: "/images".concat(req.file.filename),
      uploaded: true,
    });
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

// DateBase Conectivity
mongoose
  .connect("mongodb://127.0.0.1:27017/foodresdb", {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("Datebase Connected");
  })
  .catch((err) => {
    console.log("Datebase Not Connected");
  });

const routes = require("./Routes/Routes");
server.use("/api/", routes);

server.listen(5000, () => {
  console.log("Server Started");
});
