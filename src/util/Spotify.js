let accessToken;
const clientId = "84d388b02bfe41e7b53279556f2e26e4";
const redirectUrl = "http://localhost:3000/";

const Spotify = {
    async savePlaylist(playlsitName, uris) {
        if (!playlsitName || !uris) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;
        let playlistId;

        let response = await fetch('https://api.spotify.com/v1/me', { 
            headers: headers
        });
        let jsonResponse = await response.json();
        userId = jsonResponse.id;

        response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, { 
            headers: headers,
            method: 'POST',
            body: JSON.stringify({ name: playlsitName})
        });
        jsonResponse = await response.json();
        playlistId = jsonResponse.id;
        response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { 
            headers: headers,
            method: 'POST',
            body: JSON.stringify({ uris: uris })
        });
    },

    async search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`,{
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        } else {
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        }
    },

    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
            accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
            const expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
        }
    }
}

export default Spotify;