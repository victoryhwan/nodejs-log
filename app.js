const express = require('express');
const app = express();
const logger = require('./logger');
require('dotenv').config();
const morganMiddleware = require('./morganMiddleware');
const port = process.env.PORT || 3000;
var router = express.Router();

app.use(morganMiddleware)
app.use(express.json());

app.get('/', (req, res) => {
    // res.send('Hello World!');
    // res.writeHead(200, { 'Content-Type' : 'text/html' });
	// res.end('success!!');
    // logger.info('로그메시지');
    res.statusCode = 200;
    res.end('success!!');
});

app.get('/log', (req, res) => {
    // logger.info('로그메시지');
    res.statusCode = 200;
    res.end('log success');
});

app.listen(port, ()=>{
    let msg = `Server listening on port ${port}`

    logger.info(msg);
    console.log(msg);
})