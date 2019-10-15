import { api_key, region } from '../config';
import Axios from 'axios';
export default class Summons{
    constructor(query,server){
      this.query=query; 
      this.server=server;   
     
            
    }
    async getResults(){
      const api_call= await fetch(`https://cors-anywhere.herokuapp.com/https://${region[this.server]}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${this.query}?api_key=${api_key}`, {
        method: 'GET',  
      headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
        
      const res = await api_call.json();
      this.summoner= res.data;
        console.log(region[this.server]);
        
        
        
       
       // console.log(this.summoner);
        //return this.summoner;
    }

    
}