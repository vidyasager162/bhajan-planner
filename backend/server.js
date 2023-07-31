const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/BhajanDB");

const memberSchema = new mongoose.Schema({
  username: String,
  password: String,
  cookieID: String,
});

const bhajanSchema = new mongoose.Schema({
  bhajan_no: Number,
  bhajan_name: String,
  sruthi: String,
});

const Members = mongoose.model("member", memberSchema);
const Bhajans = mongoose.model("bhajan", bhajanSchema);

Members.find({}).then(async (memberFound) => {
  const hashedPassword = await bcrypt.hash("2732", saltRounds);
  if (memberFound.length === 0) {
    Members.create({
      username: "admin",
      password: hashedPassword,
    });
  }
});

app.get("/check-admin", async (req, res) => {
  const hashedPassword = await bcrypt.hash("2732", saltRounds);
  Members.findOne({ username: "admin" }).then((memberFound) => {
    if (!memberFound) {
      Members.create({
        username: "admin",
        password: hashedPassword,
      });
    }
  });
});

app.post("/add-bhajan", (req, res) => {
  console.log(req.body);
  Bhajans.countDocuments({}).then((count) => {
    var number = count + 1;
    Bhajans.create({
      bhajan_no: number,
      bhajan_name: req.body.bhajan_name,
      sruthi: req.body.sruthi,
    }).then((success) => {
      if (success) {
        res.status(200).json();
        console.log("Successfully added the Bhajan.");
      }
    });
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
