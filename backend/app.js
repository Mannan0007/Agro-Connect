import express from 'express'
import dotenv from 'dotenv'
import userRouter from './Routes/userRoutes.js';

dotenv.config({ path: './config/config.env' })
const app = express();



app.use(express.json())

app.get('/', (req, res) => {
    res.send(
       
    'bhai server chal gyaa'
)});



app.use('/api/user',userRouter)

export default app;