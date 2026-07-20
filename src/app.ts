import express, { type Application, type Request, type Response } from 'express'
import "dotenv/config"

export const app:Application = express()

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World')
})
