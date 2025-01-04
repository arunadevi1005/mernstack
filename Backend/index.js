import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoute from './routes/userroute.js';

const app=express();

//middleware for passing json request to body
app.use(bodyParser.json());
dotenv.config();

const PORT=process.env.PORT || 5000; //if port is not available in env file then it will take 6000 as default port
const DBURL=process.env.DB_URL;

app.use('/api/user',userRoute);




//connecting to database
mongoose.connect(DBURL)
    .then(()=>{console.log('Connected to database');
    app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)
});

})
    