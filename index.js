const express = require('express');
const log = console.log.bind(console);
const app = express();

app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));


app.listen(3000, ()=> log('listening on port 3000'));