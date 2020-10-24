var express = require("express");
const port = process.env.PORT || 3005;
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./core/db")


// Initialize express app
var app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
db.on("error", () => console.log({ message: "MongoDB Connection has died. We did everything we could" }))


db.once("open", async () => {
    console.log('We out here')
})

app.listen(port, () => console.log(`server started on port ${port}`))