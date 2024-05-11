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
