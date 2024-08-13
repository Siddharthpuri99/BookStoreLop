const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
require("./connetion/conn");

const userroute = require("./routes/user");
const bookroute = require("./routes/book");
const favouriteRoute = require("./routes/favourite");

app.use("/api/v1",userroute);
app.use("/api/v1",bookroute);
app.use("/api/v1",favouriteRoute);

app.get("/",(req,res)=>{
    res.send({message:"hello from server"});
})
app.listen(process.env.PORT , ()=>{
    console.log(`Server is listening on ${process.env.PORT}`)
})

