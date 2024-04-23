# Github Link

-   [Click Here](https://github.com/ProgrammingHero1/coffee-store-server)

## Setup

### Step 1:

Clone the figma file in your local directory

```
https://github.com/ProgrammingHero1/coffee-store-espresso-emporium.git
```

### Step 2:

Create package.json file

```
npm init -y
```

### Step 3:

```
npm install express cors mongodb dotenv
```

### Step 4:

in package.json file add

```
 "start": "node index.js",
```

in "scripts":{}

### Step 5:

Create .gitignore file and add

```
node_modules
```

### Setup dotenv

-   [dotenv](https://www.npmjs.com/package/dotenv)

# Article / Resources

### From 54-6 Video

-   [Hello world example](https://expressjs.com/en/starter/hello-world.html)

-   [To know about: const port = process.env.PORT || 5000; see 54-6 video 03:54 minute;]()

### From: 54-7 Video

To fixed the error--

blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

add in index.js file

```
const cors = require('cors');
// middleware
app.use(cors());
```

-   [Supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

### From: 54-8 Video

-   [Post data from client side.](https://developer.mozilla.org/en-US/docs/Web/API/fetch#options)

-   [To solve the erroe: express request body is undefined.](https://stackoverflow.com/a/55610690/23363732)

```
const app = express();
app.use(express.json());
```
