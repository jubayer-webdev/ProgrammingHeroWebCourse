// https://expressjs.com/en/starter/hello-world.html

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
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
app.use(cookieParser());

//! verify jwt middleware
const verifyToken = (req, res, next) => {
    const token = req.cookies?.token;
    // console.log('from verifyToken, token =', token);

    if (!token) return res.status(401).send({ message: 'unauthorized access' });

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                // return res.status(401).send({ message: 'unauthorized access' });
            }
            console.log('decoded =', decoded);
            // This is bracket notation
            // req['user'] = decoded; 
            req.user = decoded;
            next();
        })
    }
}

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

        //! JWT generate
        app.post('/jwt', async (req, res) => {
            const loggedInUserEmail = req.body;
            // console.log('Dynamic token for this loggedInUserEmail----->', loggedInUserEmail);
            const token = jwt.sign(loggedInUserEmail, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '365d',
            });
            // const token = 'hardcoded token';
            // res.send({ token });
            res
                .cookie('token', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                })
                .send({ success: true })
        })

        //! Clear token on logout
        app.get('/logout', (req, res) => {
            res
                .clearCookie('token', {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
                    maxAge: 0,
                })
                .send({ success: true })
        })



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

            //! ------------- check if its a duplicate request START ----------------
            // https://github.com/shakilahmedatik/soloSphere-complete/blob/main/server/index.js
            const query = {
                email: bidData.email,
                jobId: bidData.jobId,
            };
            const alreadyApplied = await bidsCollection.findOne(query);
            console.log('alreadyApplied doc =', alreadyApplied);
            if (alreadyApplied) {
                return res
                    .status(400)
                    .send('You have already placed a bid on this job.');
            }
            //! ------------- check if its a duplicate request END ------------------

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
        app.get('/jobs/:email', verifyToken, async (req, res) => {
            // const token = req.cookies?.token;
            // console.log('from /jobs/:email, token =', token);
            // //! Decode the token
            // if (token) {
            //     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
            //         if (error) {
            //             return console.log(error);
            //         }
            //         console.log('decoded ', decoded);
            //     })
            // }

            //! //!------------- verifyToken Start -----------------
            // const tokenData = req.user;
            // console.log('tokenData =', tokenData);
            //! From verifyToken
            const tokenEmail = req.user.email;
            // console.log('tokenEmail =', tokenEmail);

            const loggedInEmail = req.params.email;
            console.log('(/jobs/:email) loggedInEmail =', loggedInEmail);
            if (tokenEmail !== loggedInEmail) {
                return res.status(403).send({ message: 'forbidden access' });
            }
            //!------------- verifyToken End -----------------

            // const query = { buyer.email: loggedInEmail }; it is not correct
            const query = { "buyer.email": loggedInEmail };
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
        app.put('/job/:id', verifyToken, async (req, res) => {
            const id = req.params.id;
            // https://www.mongodb.com/docs/drivers/node/current/usage-examples/updateOne/
            const jobData = req.body;

            //!------------- verifyToken Start -----------------
            const tokenEmail = req.user.email;
            // console.log('tokenEmail =', tokenEmail);

            const loggedInEmail = req.body.buyer.email;
            console.log("('/job/:id') loggedInEmail =", loggedInEmail);
            if (tokenEmail !== loggedInEmail) {
                return res.status(403).send({ message: 'forbidden access' });
            }
            //!------------- verifyToken End -----------------

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
        app.get('/my-bids/:email', verifyToken, async (req, res) => {
            //!------------- verifyToken Start -----------------
            const tokenEmail = req.user.email;
            // console.log('tokenEmail =', tokenEmail);

            const loggedInEmail = req.params.email;
            console.log("('/my-bids/:email') loggedInEmail =", loggedInEmail);
            if (tokenEmail !== loggedInEmail) {
                return res.status(403).send({ message: 'forbidden access' });
            }
            //!------------- verifyToken End -----------------

            //! This was bug
            // const query = {loggedInEmail}; it is bug
            const query = { email: loggedInEmail };
            const result = await bidsCollection.find(query).toArray();
            res.send(result);
        })
        //Get all bid requests from db for job owner
        //* Find/Read all documents --- READ(R) Operation -------
        app.get('/bid-requests/:email', verifyToken, async (req, res) => {
            //!------------- verifyToken Start -----------------
            const tokenEmail = req.user.email;
            // console.log('tokenEmail =', tokenEmail);

            const loggedInEmail = req.params.email;
            console.log("('/bid-requests/:email') loggedInEmail =", loggedInEmail);
            if (tokenEmail !== loggedInEmail) {
                return res.status(403).send({ message: 'forbidden access' });
            }
            //!------------- verifyToken End -----------------

            const query = { 'buyer.email': loggedInEmail };
            const result = await bidsCollection.find(query).toArray();
            res.send(result);
        })

        // Update Bid status (In Progress, Complete, Rejected)
        //* Update just one(patch)  --- UPDATE(U) Operation -------
        app.patch('/bid/:id', async (req, res) => {
            console.log('(/bid/:id)');
            const id = req.params.id;
            const status = req.body;
            const query = { _id: new ObjectId(id) };
            const updateDoc = {
                // $set: { ...status }, it is also correct
                $set: status,
            };
            const result = await bidsCollection.updateOne(query, updateDoc);
            res.send(result);
        })


        //! -------------- For Pagination, Search, Sort ---------------------

        // Get all jobs data from database for  pagination
        app.get('/all-jobs', async (req, res) => {
            console.log('(/all-jobs)');
            const sizePerPage = parseInt(req.query.sizePerPage);
            const currentPage = parseInt(req.query.currentPage) - 1;
            console.log('currentPage =', currentPage, 'sizePerPage =', sizePerPage);
            const filter = req.query.filter;

            let query = {};
            if (filter) query = { category: filter };
            // const result = await jobsCollection.find().toArray();
            const result =
                await jobsCollection
                    .find(query)
                    .skip(currentPage * sizePerPage)
                    .limit(sizePerPage)
                    .toArray();

            res.send(result);
        })

        // Get all jobs data count from database
        app.get('/jobs-count', async (req, res) => {
            console.log(('(/jobs-count)'));
            const filter = req.query.filter;
            console.log('filter =', filter);

            let query = {};
            if (filter) query = { category: filter };
            // const result = await jobsCollection.estimatedDocumentCount();
            const count = await jobsCollection.countDocuments(query);
            console.log(count);
            res.send({ count });
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