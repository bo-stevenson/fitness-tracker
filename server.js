//Require our dependencies 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Port
const PORT = process.env.PORT || 8000;

//Express setup
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//make static directory
app.use(express.static("public"));

//connect to our db via mongoose
require('dotenv').config()
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: false
});

//Routes

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

