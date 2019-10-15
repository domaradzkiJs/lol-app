import { api_key } from '../config';
import Axios from 'axios';

export default class Matches {
    constructor() {
    }
    async getMatchesList(accID,reg) {
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://${reg}.api.riotgames.com/lol/match/v4/matchlists/by-account/${accID}?api_key=${api_key}`,{
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
              }
        });
        
        const res = await api_call.json();
        this.matchList= res.data.matches.slice(0,10);
        console.log(this.matchList);
    }
}