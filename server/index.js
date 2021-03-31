const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'server/.env' });

const server = express();

const {
    SERVER_PORT,
    DB_USER,
    DB_PASS,
    DB_URL,
    DB_NAME
} = process.env;

server.use(cors());
server.use(morgan('tiny'));

server.get('/', (req, res) => {
    res.send('Working...')
});

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => {
    console.log('DB connected')
    server.listen(SERVER_PORT, () => {
        console.log(`Server is running on port http://localhost:${SERVER_PORT}`);
    });
})

