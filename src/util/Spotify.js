const access_token = "";
const clientId = "84d388b02bfe41e7b53279556f2e26e4";
const redirectUrl = "http://localhost:3000/";

const Spotify = {

}

const getAccessToken = () => {
    if (userToken) {
        return userToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
        access_token = window.location.href.match(/access_token=([^&]*)/);
        const expiresIn = window.location.href.match(/expires_in=([^&]*)/)
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
    } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`
    }
}

export default Spotify;