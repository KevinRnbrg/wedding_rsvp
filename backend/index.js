const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 8080;
require("dotenv").config();
const mongoose = require("mongoose");

const guestFormRoutes = require("./routes/guestform.routes");

const cors = require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}
app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.json());

/* const uri = `mongodb+srv://kevinrosenberg04:mongoMAN1000@weddingcluster0.dpqltzr.mongodb.net/?retryWrites=true&w=majority`; */
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@weddingcluster0.dpqltzr.mongodb.net/?retryWrites=true&w=majority`;  /* acting up */

mongoose
  .connect(uri)
  .then(() => console.log("Database connection established"))
  .catch((e) => console.error(e));

app.use("/guestform", guestFormRoutes);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
