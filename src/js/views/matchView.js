import { elements, spells, primaryPerks, queue, map } from "./base";

export const clearResults = () => {
    elements.match.innerHTML = '';
}

let dateGame;

let getFormatedTime = (mili) => {
  let d = new Date(mili);

  let dd = d.getDate();
  let mm = d.getMonth()+1;
  let year= d.getFullYear()
  if(dd<10) 
  {
      dd='0'+dd;
  } 
  
  if(mm<10) 
  {
      mm='0'+mm;
  } 
  
  return `${dd}/${mm}/${year}`
}




export const renderMatch = (match) => {
   

    const game = [] ;
    function failWin(s) {
      if (s==='Win') {
        game[0]='VICTORY';
        game[1]='DEFEAT';
      } else if (s==='Fail') {
        game[0]='DEFEAT';
        game[1]='VICTORY';
      }     
     
    }


    
  
    const pref = state.match.details;
    failWin(pref.teams[0].win);
    const topMarkup = `
    
    <div class="match_details">
      <div class="top_section">
        <div class="player_icon">
          <img src="https://cdn.communitydragon.org/9.16.1/profile-icon/${state.app.summoner.profileIconId}" alt="profileIcon" class="lol_img">
        </div>
        <div class="topmid">
          <div class=player_nick> ${state.app.summoner.name} </div>
          <div class="map_type"> ${map.get(pref.mapId)} </div>
          <div class="detailed_info">
            <div class="game_type">${queue.get(pref.queueId)} </div>
            <div class="timer">${Math.floor(pref.gameDuration/60) +':' + pref.gameDuration%60}</div>
            <div class="date">${dateGame = getFormatedTime(pref.gameCreation)}</div>
          </div>
        </div>
        <div class="share">
          <h2>Share This Game!</h2>
          <div class="social_links">
            <div class="fb">fb</div>
            <div class="twit">twit</div>
            <div class="mail">mail</div>
          </div>
        </div>
      </div>
      <div class="mid_section">
        <div class="wrapper">
          <div class="left_section">
            <div class="header_label" data-status="${game[1]}" }> 
            ${ game[1]}
            </div>
            <div class="team_results_left">
              <div class="icons_label">
                <div class="champIcon">champion</div>
                <div class="statsIcon">score</div>
                <div class="itemsIcon">items</div>
                <div class="minionsIcon">cs</div>
                <div class="goldIcon">gold</div>
              </div>              
            </div>
          </div>

          <div class="right_section">
            <div class="header_label" data-status="${game[0]}"> ${ game[0]} </div>
            <div class="team_results_right">
              <div class="icons_label">
                <div class="champIcon">champion</div>
                <div class="statsIcon">score</div>
                <div class="itemsIcon">items</div>
                <div class="minionsIcon">cs</div>
                <div class="goldIcon">gold</div>
              </div>             
            </div>

          </div>
        </div>
      </div>
    </div>


    
    
    `;
   

    elements.match.insertAdjacentHTML('afterbegin', topMarkup);

    for (let i = 0; i<5; i++) {
        const right_markup = `

        <div class="player">
        <div class="pick_info">
          <div class="pick_details">
            <div class="champ main_tab">
              <img src="https://cdn.communitydragon.org/9.16.1/champion/${pref.participants[i].championId}/square" alt="" class="lol_img">
            </div>
            <div class="spell_1">
              <img src="${spells.get(pref.participants[i].spell1Id)}" alt="" class="lol_img">
            </div>
            <div class="spell_2">
              <img src="${spells.get(pref.participants[i].spell2Id)}" alt="" class="lol_img">
            </div>
            <div class="rune_1">
              <img src="${primaryPerks.get(pref.participants[i].stats.perkPrimaryStyle)}" alt="" class="lol_img">
            </div>
            <div class="rune_2">
              <img src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/presstheattack/presstheattack.png" alt="" class="lol_img">
            </div>
          </div>
          <div class="score_nick">
            <div class="nick">${pref.participantIdentities[i].player.summonerName}</div>
            <div class="score">${pref.participants[i].stats.kills}/${pref.participants[i].stats.assists}/${pref.participants[0].stats.deaths} </div>
          </div>
        </div>
        <div class="items_wrapper">
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item0}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item2}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item3}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item4}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item5}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item6}.png" alt="" class="lol_img"></div>
        </div>
        <div class="farm">${pref.participants[i].stats.neutralMinionsKilled + pref.participants[i].stats.totalMinionsKilled}</div>
        <div class="gold">${Math.round((pref.participants[i].stats.goldEarned / 1000) * 10) / 10}k</div>
      </div>       
             
       
       `;
       
    document.querySelector('.team_results_right').insertAdjacentHTML('beforeend', right_markup);
    }
    for (let i = 5; i<10; i++) {
        const markup = `

        <div class="player">
        <div class="pick_info">
          <div class="pick_details">
            <div class="champ main_tab">
              <img src="https://cdn.communitydragon.org/9.16.1/champion/${pref.participants[i].championId}/square" alt="" class="lol_img">
            </div>
            <div class="spell_1">
              <img src="${spells.get(pref.participants[i].spell1Id)}" alt="" class="lol_img">
            </div>
            <div class="spell_2">
              <img src="${spells.get(pref.participants[i].spell2Id)}" alt="" class="lol_img">
            </div>
            <div class="rune_1">
              <img src="${primaryPerks.get(pref.participants[i].stats.perkPrimaryStyle)}" alt="" class="lol_img">
            </div>
            <div class="rune_2">
              <img src="http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/styles/precision/presstheattack/presstheattack.png" alt="" class="lol_img">
            </div>
          </div>
          <div class="score_nick">
            <div class="nick">${pref.participantIdentities[i].player.summonerName}</div>
            <div class="score">${pref.participants[i].stats.kills}/${pref.participants[i].stats.assists}/${pref.participants[0].stats.deaths} </div>
          </div>
        </div>
        <div class="items_wrapper">
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item0}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item2}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item3}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item4}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item5}.png" alt="" class="lol_img"></div>
          <div class="item"> <img src="img/items/${pref.participants[i].stats.item6}.png" alt="" class="lol_img"></div>
        </div>
        <div class="farm">${pref.participants[i].stats.neutralMinionsKilled + pref.participants[i].stats.totalMinionsKilled}</div>
        <div class="gold">${Math.round((pref.participants[i].stats.goldEarned / 1000) * 10) / 10}k</div>
      </div>       
             
       
       `;
      
    document.querySelector('.team_results_left').insertAdjacentHTML('beforeend', markup);
       }

      

} 