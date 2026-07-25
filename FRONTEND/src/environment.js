let IS_PROD = false;
const server = IS_PROD ?
    " https://videoconferencebackend-73gt.onrender.com" :

    "http://localhost:2020"


export default server;