const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/create", require("./routes/create"));
app.use("/get", require("./routes/get"));
mongoose.connect(
  "mongodb://falashreeshirodkar07_db_user:Kamakshi%4007@ac-olcrllu-shard-00-00.wea0ske.mongodb.net:27017,ac-olcrllu-shard-00-01.wea0ske.mongodb.net:27017,ac-olcrllu-shard-00-02.wea0ske.mongodb.net:27017/?ssl=true&replicaSet=atlas-8hfxsk-shard-0&authSource=admin&appName=clipboard"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
// mongoose.connect("mongodb://127.0.0.1:27017/test")
// .then(()=>console.log("Local Mongo works"))
// .catch(err=>console.log(err));  
app.listen(5000, () => console.log("Server running"));