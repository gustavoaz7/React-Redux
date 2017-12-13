const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ===== CORS =====
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ===== Database =====
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todo_app', { useMongoClient: true })
.then(() => console.log('Successfully connected to database'))
.catch(err => console.log('Error connecting to database: '+err.message))

// ===== Routes =====
const router = express.Router()
app.use('/api', router)
const todoService = require('./api/todo')
todoService.register(router, '/todos')


app.listen(process.env.PORT || 3003, () => console.log('Server is up and running...'))