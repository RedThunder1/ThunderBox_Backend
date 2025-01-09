import express from 'express'
import {Connect} from './Database/Database.js'
import {loadSongs} from './SongManager/SongManager.js'
import cors from 'cors'

const PORT = 8000;

const app = express();
app.use(cors());

Connect()

//sends Songs
let song_data = loadSongs();
app.get('/api/songs', (req, res) => {
    res.json(song_data[0]);
})
//sends Playlists
app.get('/api/playlists', (req, res) => {
    res.json(song_data[1]);
})

app.listen(PORT, function(err) {
    if (err) throw err;
    console.log(`Server running on port: ${PORT}`);
})