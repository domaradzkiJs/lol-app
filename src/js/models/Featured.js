import { api_key } from '../config';
import Axios from 'axios';

export default class Featured {
    constructor() {
    }
    async getFeatured(reg) {
        const res = await Axios(`https://cors-anywhere.herokuapp.com/https://${reg}.api.riotgames.com/lol/spectator/v4/featured-games?api_key=${api_key}`);
        this.featuredGames = res.data.gameList;
    }
}