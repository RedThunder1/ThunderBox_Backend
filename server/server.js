import express from 'express'
import {Connect} from './Database/Database.js'

const PORT = process.env.PORT || 3001;

const app = express();

Connect()

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});