require('dotenv').config()
const express = require('express')
const app = express()
const helloRouter = require('./routes/hello')
app.use(express.json())
app.use('/hello',helloRouter)
app.get('/',(req,res)=>{
    res.send('welcome to simple node.js')
})

const PORT = process.env.PORT || 3002
app.listen(PORT,()=>console.log(`server running in port ${PORT}`))
