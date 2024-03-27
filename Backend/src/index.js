const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")

const templatePath = path.join(__dirname, '../templates')
const publicPath=path.join(__dirname,'../public')

app.use(express.json())
app.use(express.static(publicPath))
app.set("view engine", "hbs")
app.set("views", templatePath)
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
    res.render("login")
})
app.get("/home", (req, res) => {
    res.render("index")
})


app.get("/registration", (req, res) => {
    res.render("registration")
})
app.get("/registration.html", (req, res) => {
    res.render("registration")
})

app.post("/registration", async (req, res) => {
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    await collection.insertMany([data])

    res.render('index')
})

app.listen(3000, () => {
    console.log("app is listining at 3000")
})
