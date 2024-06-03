//requires
const express=require('express');
const app = express();
const list = require('./routes/todo.route')
const bodyParser = require('body-parser')

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/list', list)

//global
const port = 5001

//spin up
app.listen(port, ()=>{
    console.log('server up on', port)
})