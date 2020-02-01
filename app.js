const express = require("express");
const process = require("process");
const path = require("path");
const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routers
const indexRouter = require("./routes/index");

// TODO

// use routers
app.use('/',indexRouter);

app.listen(3000, () => {
    console.log(`node version: ${process.version}`);
    console.log(`OS info: ${process.arch}`);
    console.log(`Server OS: ${process.platform}`);
    console.log(`server Ready!`);
});