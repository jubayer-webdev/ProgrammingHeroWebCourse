# Some Necessary Commands

make package.json file

```bash
npm init -y
```

make some file

```bash

touch index.js .env .gitignore
```

install some necessary packages

```bash
npm i express cors dotenv mongodb
```

install JWT and cookie-parser

```bash

npm i jsonwebtoken cookie-parser
```

generate 64bit hex secretOrPrivateKey for JWT

```bash
node
require('crypto').randomBytes(64).toString('hex');
```

# Backend deploy on Vercel:

## Prepare your index.js file (server code) to Deploy server:

[help-from](https://github.com/ProgrammingHero1/B9-CRUD-and-JWT-battlefield/tree/main?tab=readme-ov-file#server-deployment-steps)

## Server Deployment steps:

1. comment await commands outside api methods for solving gateway timeout error

```js
//comment the following commands in index.js file
await client.connect();
await client.db("admin").command({ ping: 1 });
```

2. create vercel.json file for configuring the server

```json
{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "index.js",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
        }
    ]
}
```

3. Add Your production domains to your cors configuration. Don't use the URL we have provided here inside the origin. Replace them with your own. Watch video Milestone 61 (61-9 to 61-11) for solving server deployment issues.

```js
//Must remove "/" from your production URL
app.use(
    cors({
        origin: [
            "http://localhost:5173", 
            "https://cardoctor-bd.web.app", 
            "https://cardoctor-bd.firebaseapp.com"
            ],
        credentials: true,
    })
);
```

[Go to your firebase](https://console.firebase.google.com/) --> click on your current project then Build --> Hosting --> Get Started --> Next --> Next --> Continue to console --> Finally, you will get two links. Copy (yourProjectName.web.app) this link and paste it to origin: ['the link you have copied'],

warning: if you don't enough information in corsOptions then you will get 'cors' related error!

4. Let's create a cookie options for both production and local server

```js
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};
//localhost:5000 and localhost:5173 are treated as same site.  so sameSite value must be strict in development server.  in production sameSite will be none
// in development server secure will false .  in production secure will be true
```

## now we can use this object for cookie option to modify cookies

```js
//creating Token
app.post("/jwt", logger, async (req, res) => {
    const user = req.body;
    console.log("user for token", user);
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.cookie("token", token, cookieOptions).send({ success: true });
});

//clearing Token
app.post("/logout", async (req, res) => {
    const user = req.body;
    console.log("logging out", user);
    res.clearCookie("token", { ...cookieOptions, maxAge: 0 }).send({ success: true });
});
```

5. [Installing Vercel CLI](https://vercel.com/docs/cli#installing-vercel-cli)  
   (This is one time process. If you have already done it for any of your previous project. Now skip it.)

```bash
npm i -g vercel
```

6.  And you should also log in vercel.

How to login vercel?

```shell
vercel login
```

How to logout from vercel?

```bash
vercel logout
```

you can also login/logout from the Vercel CLI site.

6. Deploy to Vercel

After doing the above instruction, then open the terminal with correct path and give the command,
then follow the commands, your server site will Deploy on vercel, inshaALLAH.

```bash
vercel
vercel --prod
```

-   After completed the deployment . click on inspect link and copy the production domain
-   setup your environment variables in vercel (from .env file). [may be optional, on this (M11ConceptualSession1&2) project i didn't do it ]
-   check your public API

<img src="code.jpg"/>

# Server Deployment Done
