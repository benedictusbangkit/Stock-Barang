// node server
import express from 'express';
import cors from 'cors';
const app = express()
import Stockroute from './routes/stockRoutes.js';

app.use(express.json())
app.use(cors())
app.use(Stockroute);
const PORT = 27017
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})
// connect mongodb database
import mongoose from 'mongoose';

const DB = 'mongodb://localhost:27017/pijarcamp'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})