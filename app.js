const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.listen(3000, function(){
    console.log("listening on port 3000")
   
})

app.post("/", (req,res)=>{
    console.log(req.body.email)
})