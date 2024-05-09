// https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 9000;

const app = express();
const corsOptions = {
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        // 'https://solosphere.web.app',
    ],
    credentials: true,
    optionSuccessStatus: 200,
}
//! middleware
app.use(cors(corsOptions));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('soloSphere server is Running...');
})
//! Connected to Server (Express js)
app.listen(port, () => {
    console.log(`soloSphere server is running on port ${port} , go to the http://localhost:${port}`)
})