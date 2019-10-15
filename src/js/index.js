import Summons from './models/Summons';
import Matches from './models/matches';
import Live from './models/Live';
import Featured from './models/Featured';
import Match from './models/Match';
import * as searchView from './views/searchView';
import * as matchView from './views/matchView';
import * as featuredView from './views/featuredView';
import { elements } from './views/base';
import { region } from './config';

 //const app = new Summons();
const state = {};
 window.state=state; 


    

const controlSearch = async () => {
    
    const query = searchView.getInput();
    const server = searchView.getOption();
    

    if (query) {
        state.app = new Summons(query,server);
        searchView.clearInput();
        await state.app.getResults().then(controlMatches);  
        

        
       
        
    } 
}





const controlMatches = async()=> {
    
    const accId = state.app.summoner.accountId;
    state.matches = new Matches();
    await state.matches.getMatchesList(accId,region[state.app.server]).then(controlMatch);
   // window.r= state.matches;
} 



/*

MATCH DETAILS CONTROLLER

*/

const controlMatch = async () => {
    matchView.clearResults();
    searchView.clearResults();
    searchView.renderResults(state.matches.matchList);
    const matchId = window.location.hash.replace('#', '');

    if(matchId) {

        state.match = new Match(matchId);

        console.log(matchId)
    

    try {   
        await state.match.getMatchDetails(region[state.app.server]);
         matchView.renderMatch(state);
        

    }   catch(err) {
        console.log(err);

    }

    }
 };

 ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMatch));




const controlLive = async () => {
    const sumId = state.app.summoner.id;
    state.live = new Live();
    await state.live.getLiveMatch(sumId)
}

const controlFeatured = async () => {
    
    state.featured = new Featured();
    await state.featured.getFeatured(region[state.app.server]).then(render);
}


const render= async () => {

    featuredView.renderResults(state.featured.featuredGames);
}


//Events caller
elements.searchForm.addEventListener('submit', e=> {
    e.preventDefault();
    controlSearch();
});



 window.addEventListener('keydown', e => {
    if(e.key === 'p') {
         controlLive() ;
         console.log(state.matches.matchList);
    } 
    });

 window.addEventListener('keydown', e => {
    if(e.key === 'o') {
         controlFeatured();
         
        
        };
 });


 
//controlMatches();
//await app.getResults('WilkFenris');
//app.getMatchList();
//window.s = app;

//const matchRaport = new Matches();

 //matchRaport.getMatchesList();