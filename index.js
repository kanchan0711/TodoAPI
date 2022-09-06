const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todo');

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const connectionUri = process.env.DATABASE_URL;



app.use(express.json());
app.use('/todo',todoRoutes);
app.get('/',(req,res) => res.json({'message': 'server is running'}));



mongoose.connect(connectionUri, {useNewUrlParser: true })
   .then(()=>{
    console.log('database connected');
    app.listen(PORT, () =>  console.log(`server started on port ${PORT}`));
    })
    
    
    .catch((err)=> {
        console.log(`Database connection failed`);
        console.log(err);

});

