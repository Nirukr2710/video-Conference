let IS_PROD = true;
const server = IS_PROD ?
    " https://videoconferencebackend-qco9.onrender.com" :

    "http://localhost:2020"


export default server;