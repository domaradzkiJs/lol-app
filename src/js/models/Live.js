import { api_key } from '../config';
import Axios from 'axios';

export default class Live {
    constructor() {
    }
    async getLiveMatch(sumID) {
        const res = await Axios(`/https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${sumID}?api_key=${api_key}`);
        console.log(res);
    }
}