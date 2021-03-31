const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send('Working...')
});

server.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
})