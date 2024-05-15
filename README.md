# Some Command

make package.json file

```
npm init -y
```

make some file

```

touch index.js .env .gitignore
```

install some necessary packages

```
npm i express cors dotenv mongodb
```

install JWT and cookie-parser

```

npm i jsonwebtoken cookie-parser
```

generate 64bit hex secretOrPrivateKey for JWT

```
node
require('crypto').randomBytes(64).toString('hex');
```

# Backend deploy on vercel:

## Prepare your index.js file (server code) to Deploy server:

### Step 1:

[Go to your firebase](https://console.firebase.google.com/) --> click on your current project then Build --> Hosting --> Get Started --> Next --> Next --> Continue to console --> Finally, you will get two links. Copy (yourProjectName.web.app) this link and paste it to origin: ['the link you have copied'],

warning: if you don't enough information in corsOptions then you will get 'cors' related error!

### Step 2:

You should also add a (vercel.json) file with appropriate configuration.(the file is in the current github link).

### Step 3:

[Installing Vercel CLI](https://vercel.com/docs/cli#installing-vercel-cli)
(This is one time process. If you have already done it for any of your previous project. Now skip it.)

```
npm i -g vercel
```

### Step 4:

And you should also log in vercel.

How to login vercel?

```
vercel login
```

How to logout from vercel?

```
vercel logout
```

### Step 5: (may be optional, on this project i didn't do it )

Set environment variable on vercel (from .env file)

### Step 6:

After doing the above instruction, then open the terminal with correct path and give the command

```
vercel
```

then follow the commands, your server site will Deploy on vercel, inshaALLAH. That's it 😶
