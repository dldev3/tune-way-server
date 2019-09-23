const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3344;
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register',(req,res) => {
    res.send({
        message:`${req.body.email} is registered`
    })
});



// create Server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at port -> ${PORT}`);
});
