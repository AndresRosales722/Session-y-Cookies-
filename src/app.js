const express = require('express')
const path = require('path')
const app = express()


const mainRouter = require('./routes/main')

app.set("view engine", "ejs")
app.set("views", path.join(__dirname,"views"))

app.use(express.static(path.join(__dirname,"../public")))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/', mainRouter)





const PORT = 3000
app.listen(PORT, () => console.log(`puerto levantado en el puerto
http://localhost:${PORT}`))