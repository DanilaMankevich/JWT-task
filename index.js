const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes')

const app = express()

app.use(cookieParser())
app.use(cors())

app.use(express.json())

app.use('/api', routes)

const startServer = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost/jwt-project',
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("successful connection to db");
        app.listen(3000, () => {
            console.log("Server is running on port " + 3000);
        });
    } catch (error) {
        console.log("error" + error);
    }
};

startServer();
