const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin : "http://localhost:8081"
}
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    res.json({message:"je suis ouhna elhassan c'est ali maintenant"})
})

app.listen(8080, () =>{
    console.log("server listening on port 8080")
})
//