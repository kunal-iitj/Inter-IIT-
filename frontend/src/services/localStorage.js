import { json } from "react-router-dom";

const storeToken = (value) => {
    if (value) {
        const { access, refresh } = value;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
    }
};

const getToken = () => {
    let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
    return { access_token, refresh_token };
};

const removeToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

const storeLikedSongs = (arr) => {
    localStorage.setItem("likedSongsArray", JSON.stringify(arr));
};

const getLikedSongs = () => {
    let likedSongsArray = localStorage.getItem("likedSongsArray");
    return JSON.parse(likedSongsArray);
};

const removeLikedSongs = () => {
    localStorage.removeItem("likedSongsArray");
};

const storeUserName = (username) => {
    localStorage.setItem("username", username);
};

const getUserName = () => {
    let username = localStorage.getItem("username");
    return username
};

const removeUserName = () => {
    localStorage.removeItem("username");
};

export { storeToken, getToken, removeToken, 
        storeLikedSongs, getLikedSongs, removeLikedSongs, 
        storeUserName, getUserName, removeUserName,
};
