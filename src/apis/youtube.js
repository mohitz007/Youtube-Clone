import axios from 'axios';


// use valid API key
const KEY = "AIzaSyD0WB_yVkv7AF1-6ttOO-VvrNb40M7CY4I";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params : {
        part:'snippet',
        maxResults : 5,
        key : KEY
    }
});