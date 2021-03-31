const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(cors());
server.use(morgan('tiny'));

server.get('/', (req,res) => {
    res.send('Working...')
});

server.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
})