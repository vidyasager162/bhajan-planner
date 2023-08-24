// import { url, username, password } from "../settings";

const url = "mongodb://127.0.0.1:27017/";
const username = "admin";
const password = "2732";

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

mongoose.connect(url + "BhajanDB");

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
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  if (memberFound.length === 0) {
    Members.create({
      username: username,
      password: hashedPassword,
    });
  }
});

app.get("/check-admin", async (req, res) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  Members.findOne({ username: username }).then((memberFound) => {
    if (!memberFound) {
      Members.create({
        username: username,
        password: hashedPassword,
      });
    }
  });
});

app.get("/get-bhajans", (req, res) => {
  console.log("Received request");
  Bhajans.find({})
    .sort({ bhajan_no: 1 })
    .then((bhajans) => {
      if (bhajans.length !== 0) {
        res.send({
          bhajans: bhajans,
          message: "yay",
        });
      }
    });
});

app.post("/add-cohort", (req, res) => {
  let number;
  Bhajans.countDocuments({}).then((count) => {
    if (count === 0) {
      number = count + 1;
    } else {
      number = count;
    }
    console.log(count);
  });
  for (let i = 0; i < req.body.payload.length; i++) {
    Bhajans.findOne({ bhajan_name: req.body.payload[i].bhajan_Name }).then(
      async (err, bhajanFound) => {
        if (err) throw err;
        if (bhajanFound) {
          console.log("bhajan already exists");
        } else {
          Bhajans.create({
            bhajan_no: number + i,
            bhajan_name: req.body.payload[i].bhajan_name,
            sruthi: req.body.payload[i].sruthi,
          }).then(() => {
            // console.log("Added Bhajan Succesfully");
          });
        }
      }
    );
  }
  res.send({ message: "success" });
});

// app.post("/add-bhajan", (req, res) => {
//   console.log(req.body);
//   Bhajans.countDocuments({}).then((count) => {
//     var number = count + 1;
//     Bhajans.create({
//       bhajan_no: number,
//       bhajan_name: req.body.bhajan_name,
//       sruthi: req.body.sruthi,
//     }).then((success) => {
//       if (success) {
//         res.status(200).json();
//         console.log("Successfully added the Bhajan.");
//       }
//     });
//   });
// });

app.listen(8000, () => {
  console.log("Server is running on port 8000.");
});
