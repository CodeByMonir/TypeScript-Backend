<h1 class="text-align: center;">TypeScript Backend</h1>
<h3 class="text-align: end;">-CodeByMonir</h3>

step 1: Create a folder for backend;

step 2: npm init -y in empty folder

step 3: npm install -D typescript

step 4: tsc --init


**Recommended Rules for TypeScript

```{
    tsconfig.json =>
{
    // "rootDir": "./src",    // uncomment this
    // "outDir": "./dist",    // uncomment this


    "types": [],           // + "types": ["node"],
    

    // and npm install -D @types/node  // install this package

    // Other Outputs
    "sourceMap": true,
    "declaration": true,     // set false
    "declarationMap": true,  // set false


    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",       // remove this line
    

    }   // add here    ,
                       "include": ["src/**/*"],
                       "exclude": ["node_modules"],
}

```

step 5: npm install -D @types/node for typescript node


step 6: create src/server.ts file in root directory


step 7: run tsc in terminal


step 8: install express "npm i express", "npm i @types/express" & "npm install -D tsx"

now change this commonjs to module in package.json
  "type": "commonjs",
         =>
  "type": "module",



step 9: create src/app.ts
```
src/app.ts=>
import express, { type Application, type Request, type Response } from 'express'

export const app:Application = express()

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World')
})
```
```
src/server.ts=>
import { app } from "./app.js"


const main = () => {
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
}

main()
```

step 10: npm i dotenv

step 11: create .env in root

.env =>
PORT=3005

step 12: create src/config/index.ts
```
src/config/index.ts =>
import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
    path:path.join(process.cwd(),".env")
})

export default{
    port: process.env.PORT,
    // you can add add more here
}
```
```
src/server.ts =>
import config from "./config/index.js"

app.listen(config.port, () => {
        console.log(`Server is running on http://localhost:${config.port}`)
    })
```
```
src/app.ts =>
import config from "./config/index.js" or import "dotenv/config"
```


step 13: instal mongoose "npm i mongoose"

step 14: create src/config/db.ts

```
src/config/db.ts =>
import mongoose from "mongoose"
import config from "./index.js"

export const connectDB = async () => {
    try {
        mongoose.connect(config.dataBase);
        console.log("Connected MongoDB Successfully!");
    } catch (error) {
        console.log("Failed to Connect MongoDB!");
    }
}
```
```
src/server.ts =>

import { app } from "./app.js"
import { connectDB } from "./config/db.js"
import config from "./config/index.js"


const main = () => {

    connectDB()

    app.listen(config.port, () => {
        console.log(`Server is running on http://localhost:${config.port}`)
    })
}

main()
```



```
src/config/index.ts =>
export default{
    port: process.env.PORT,
    dataBase: process.env.MONGODB_URL as string,
}
```

```
.env =>
MONGODB_URL= Your Connection URL
```
