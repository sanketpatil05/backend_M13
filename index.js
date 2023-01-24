
const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
const { userRoute } = require("./route/user.route");
const app = express();
const {adrouter}= require("./route/admin.route");

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});

 app.use("/user", userRoute);
 
 app.use("/admin", adrouter)

 

app.listen(5000, async() => {
    try {
        await connection;
        console.log("connection done");
      } catch (err) {
        console.log(err);
      }
      console.log("server started on 5000");
});


