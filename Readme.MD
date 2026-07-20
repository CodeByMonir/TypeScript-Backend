<h1 class="text-align: center;">TypeScript Backend</h1>
<h3 class="text-align: end;">-CodeByMonir</h3>

step 1: Create a folder fot backend;
step 2: npm init in empty folder



step 3: npm install -D typescript

ste 4: tsc -init


**Recommended Rules for TypeScript

```{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    // "rootDir": "./src",    // uncomment this
    // "outDir": "./dist",    // uncomment this

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],           // + "types": ["node"],
    // For nodejs:
    // "lib": ["esnext"],
    // "types": ["node"],
    // and npm install -D @types/node  // instal this package

    // Other Outputs
    "sourceMap": true,
    "declaration": true,     // set false
    "declarationMap": true,  // set false

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Style Options
    // "noImplicitReturns": true,
    // "noImplicitOverride": true,
    // "noUnusedLocals": true,
    // "noUnusedParameters": true,
    // "noFallthroughCasesInSwitch": true,
    // "noPropertyAccessFromIndexSignature": true,

    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",       // remove this line
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }              // add     ,
                            "include": ["src/**/*"],
                            "exclude": ["node_modules"],
}

```


step 5: create src/server.ts file in root directory
step 6: run tsc in terminal






step 7: instal express "npm i express" & "npm i @types/express"

now change this commonjs to module in package.json
  "type": "commonjs",
         =>
  "type": "module",



step 8: create src/app.ts
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

step 9: npm i dotenv

step 10: create .env in root

.env =>
PORT=3005

step 11: create src/config/index.ts
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
