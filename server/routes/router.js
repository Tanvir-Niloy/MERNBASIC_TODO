const express = require('express');
const { loginUser } = require('./loginRoute');
const { createTodo, getTodos, updateTodo, deleteTodo } = require('./todosRoute');
const {isLoggedIn} = require('../middleware/isLoggedIn');
const router = express.Router();


router.post('/login',loginUser);
router.post('/todos',isLoggedIn,createTodo);
router.get('/todos',isLoggedIn,getTodos);
router.put('/todos/:id',isLoggedIn,updateTodo);
router.delete('/todos/:id',isLoggedIn,deleteTodo);




module.exports = router