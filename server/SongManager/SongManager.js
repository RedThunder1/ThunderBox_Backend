import data from './songs.json' assert {type: 'json'};

export function loadSongs() {
    let songs = [];
    let playlists = [];

    data.songs.forEach(song => {songs.push(song);});
    data.playlists.forEach(playlist => {playlists.push(playlist);});
    console.log(playlists[0].info);
    let playlist_elements = [];
    for (let i = 0; i < playlists.length; i++) {
        playlist_elements.push('<li className="playlist_item"><div className="playlist">' +
            '<p className="playlist_name">' + playlists[i].info[0] + '</p><p className="playlist_count">' +
            (playlists[i].info.length - 1) + '</p></div></li>');
    }
    return [songs, playlists];
}