// https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
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

// ---------------------------START MongoDB ------------------------ // 

//! Connect to Cluster()
//! add your connection string into your application code
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2ncikoy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//! Error: const query = { _id: new objectid(id) }; ^ referenceerror: objectid is not defined
//! Almost i have spend 01:30:00 hour to fix this error 🙂
//! https://stackoverflow.com/a/69069376/23363732
const ObjectId = require('mongodb').ObjectId;
// const { ObjectId } = require('mongodb'); (it is also correct)
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db("soloSphere");
        const jobsCollection = database.collection('jobs');
        const bidsCollection = database.collection('bids');


        //!----------------CRUD Start  -----------

        // Get all jobs data from database
        //* Find/Read all documents --- READ(R) Operation -------
        // https://expressjs.com/en/starter/basic-routing.html
        app.get('/jobs', async (req, res) => {
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/find/
            const result = await jobsCollection.find().toArray();
            res.send(result);
        })

        // Get a single job data from db using job id
        //* Find/Read just one document --- READ(R) Operation -------
        // https://www.mongodb.com/docs/drivers/node/current/usage-examples/findOne/
        app.get('/job/:id', async (req, res) => {
            const id = req.params.id;
            //! Almost i have spend 01:30:00 hour to fix this error 🙂
            const query = { _id: new ObjectId(id) };
            // const query = { category: "Web Development" };
            console.log(query);
            const result = await jobsCollection.findOne(query);
            res.send(result);
        })

        // Save a bid data in database
        //* Insert just one document --- CREATE(C) Operation -------
        // https://expressjs.com/en/starter/basic-routing.html
        app.post('/bid', async (req, res) => {
            const bidData = req.body;
            // console.log(bidData);return;

            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/#insert-a-document
            //! send data to MongoDB
            const result = await bidsCollection.insertOne(bidData);
            res.send(result);
        })

        // Save a job data in database
        //* Insert just one document --- CREATE(C) Operation -------
        app.post('/job', async (req, res) => {
            const jobData = req.body;

            //! send data to MongoDB
            const result = await jobsCollection.insertOne(jobData);
            res.send(result);
        })

        //get all jobs posted by a specific user
        //* Find/Read all documents --- READ(R) Operation -------
        app.get('/jobs/:email', async (req, res) => {
            const email = req.params.email;
            // const query = { buyer.email: email }; it is not correct
            const query = { "buyer.email": email };
            const result = await jobsCollection.find(query).toArray();
            res.send(result);
        })

        // delete a job data from db
        //* Delete just one document --- DELETE(D) Operation -------
        // https://expressjs.com/en/starter/basic-routing.html
        app.delete('/job/:id', async (req, res) => {
            const id = req.params.id;
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/deleteOne/
            const query = { _id: new ObjectId(id) };
            const result = await jobsCollection.deleteOne(query);
            res.send(result);
        })

        // update a job in
        //* Update just one  --- UPDATE(U) Operation -------
        // https://expressjs.com/en/starter/basic-routing.html
        app.put('/job/:id', async (req, res) => {
            const id = req.params.id;
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
            const jobData = req.body;
            const query = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    ...jobData,
                },
            }
            const result = await jobsCollection.updateOne(query, updateDoc, options);
            res.send(result);
        })


        // get all bids for a user by email from 
        //* Find/Read all documents --- READ(R) Operation -------
        app.get('/my-bids/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email };
            const result = await bidsCollection.find(query).toArray();
            res.send(result);
        })
        //Get all bid requests from db for job owner
        app.get('/bid-requests/:email', async (req, res) => {
            const email = req.params.email;
            const query = { 'buyer.email': email };
            const result = await bidsCollection.find(query).toArray();
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


// ----------------------------END MongoDB ------------------------- // 

app.get('/', (req, res) => {
    res.send('soloSphere server is Running...');
})
//! Connected to Server (Express js)
app.listen(port, () => {
    console.log(`soloSphere server is running on port ${port} , go to the http://localhost:${port}`)
})