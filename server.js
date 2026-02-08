const express = require('express');
//const dotenv = require('dotenv');
const db = require('./db/db');

const app = express();
//dotenv.config();
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/train', require('./routes/train'));

app.get('/', (req, res)=>{
    res.send('IRCTC Server is running');
});
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
