//Import mongoose database
var cors = require('cors') //Import cores using express
const connecttoMongoose = require('./Databases/db.js')
connecttoMongoose();
//import express

const express = require('express')
const app = express()
app.use(cors()) //use cores to fetch the data in the browser
const port = 5000
//req to server using json
app.use(express.json())
//Routes(paths)
app.use('/api/auth',require('./Routes/auth.js'))
app.use('/api/notes',require('./Routes/note.js'))
app.listen(port, () => {
  console.log(`Ynotebook app is listening on port http://localhost:${port}`)
})