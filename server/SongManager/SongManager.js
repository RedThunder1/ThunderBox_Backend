import data from './songs.json' assert {type: 'json'};

export function loadSongs() {
    let songs = [];
    let playlists = [];

    data.songs.forEach(song => {songs.push(song);});
    data.playlists.forEach(playlist => {playlists.push(playlist);});
    return [songs, playlists];
}