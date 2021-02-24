import axios from 'axios';

const KEY = 'AIzaSyC3MXIqaQUeLuTADbR5eYPyt4jguAjN1WU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
