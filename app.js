const express = require("express");
const session = require("express-session");
const process = require("process");
const path = require("path");
const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ 
    resave: false,
    saveUninitialized: true,
    secret: "aaa",
    cookie: {
        httpOnly: true,
        secure: false
    },
}));

// routers
const indexRouter = require("./routes/index");
const signinRouter = require("./routes/signin");
const signupRouter = require("./routes/signup");

// use routers
app.use("/",indexRouter);
app.use("/signin", signinRouter);
app.use("/signup", signupRouter);

app.listen(3000, () => {
    console.log(`node version: ${process.version}`);
    console.log(`OS info: ${process.arch}`);
    console.log(`Server OS: ${process.platform}`);
    console.log(`server Ready!`);
});