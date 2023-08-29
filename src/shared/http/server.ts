import 'dotenv/config'
import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT, () => {
  try {
    console.log(`Server Started on port: ${process.env.PORT}`)
  } catch (error) {
    console.error('Something went wrong', error)
  }
})
