//! https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASS);

//! Connect to Cluster()
//! add your connection string into your application code
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2ncikoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/#insert-a-document
        const database = client.db("coffeeDB");
        const coffeeCollection = database.collection('coffees');


        //!----------------CRUD Start  -----------
        //* Find/Read all documents
        // https://expressjs.com/en/starter/basic-routing.html
        //? will be called when: loader: () => fetch("http://localhost:5000/coffees"), is invoke
        app.get('/coffees', async (req, res) => {
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        //* Insert just one document
        // https://expressjs.com/en/starter/basic-routing.html
        app.post('/coffees', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);

            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/#insert-a-document
            //! send data to MongoDB
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        })

        //* Delete just one document
        // https://expressjs.com/en/starter/basic-routing.html
        app.delete('/coffees/:id', async (req, res) => {
            const id = req.params.id;
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/
            const query = { _id: new ObjectId(id) };
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        })

        //!----------------CRUD  End  ------------


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


//! Connected to Server (Expressjs)
app.get('/', (req, res) => {
    res.send('Coffee making server is Running...');
})

app.listen(port, () => {
    console.log(`Coffee server is listening on port ${port} , go to the http://localhost:${port}`)
})