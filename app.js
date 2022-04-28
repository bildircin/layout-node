const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()


app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layout')
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

app.get('/', function (req, res) {
  res.render("anasayfa", {title:"Sayfa Başlıgı"})
})

app.get('/hakkimizda', function (req, res) {
  res.render("hakkimizda", {title:"hakkimizda Başlıgı"})
})

app.listen(3000)