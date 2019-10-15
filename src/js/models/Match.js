import { api_key } from '../config';
import Axios from 'axios';

export default class Match {
    constructor(matchId) {
        this.matchId=matchId;
    }
    async getMatchDetails(reg) {
        const res = await Axios(`https://cors-anywhere.herokuapp.com/https://${reg}.api.riotgames.com/lol/match/v4/matches/${this.matchId}?api_key=${api_key}`);
       
       this.details = res.data;
        console.log(res);
    }
}

