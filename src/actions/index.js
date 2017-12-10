import axios from 'axios';

const API_KEY = '44e37abbabcdd9c000bf4114be695c4e';
//const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //es6 igual ao de cima usando template strings

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country) {
    const url = `${ROOT_URL}&q=${city},${country}`;
    const request = axios.get(url);

//    console.log('req: ',request);

    return {
        type: FETCH_WEATHER,
        payload: request //if this is a promise redux-promise waits the promise to resolve then calls the action with the object returned as payload

    };
}