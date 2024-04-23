//! https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Coffee making server is Running...');
})

app.listen(port, () => {
    console.log(`Coffee server is listening on port ${port} , go to the http://localhost:${port}`)
})