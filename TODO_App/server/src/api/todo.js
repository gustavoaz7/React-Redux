const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

const Todo = restful.model('Todo', todoSchema)

// ===== Services =====
Todo.methods(['get', 'post', 'put', 'delete'])
Todo.updateOptions({ new: true, runValidators: true }) // returns the newly updated object and check schemas validators

module.exports = Todo;