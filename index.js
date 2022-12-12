const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/', (req, res) => res.sendFile(__dirname+ "/index.html"))

app.post("/", (req, res) =>{
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)

    const Addition = num1+num2;
    res.send("Addition= " +Addition);    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


