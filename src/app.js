const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 8081;
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status',(req,res) => {
    res.send({
        message:'Hello World'
    })
});



// create Server
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running at port -> ${PORT}`);
});
