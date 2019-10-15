import { elements, queue, lane } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () =>elements.searchInput.value= ''; 
export const getOption = () =>elements.searchSelection.value;

export const clearResults = () => {
    elements.searchMatchesHist.innerHTML = '';
   
}

const renderMatchItem = cur => {
    const markup = `

    <li>
    <a class="match_link"  href="#${cur.gameId}">

        <div class=champ>
            <img src="https://cdn.communitydragon.org/9.16.1/champion/${cur.champion}/square" alt=""
                class="lol_img">
        </div>


        <div class=lane>
            <img src="${lane.get(cur.lane)}"
                alt="" class="lol_img">
        </div>

        <div class="type">${ queue.get(cur.queue)}</div>

        <div class="mapIcon"> <img src="https://vignette.wikia.nocookie.net/leagueoflegends/images/8/80/Summoner%27s_Rift_icon.png/revision/latest/scale-to-width-down/20?cb=20171101151627"  alt="" class="lol_img">  
        </div>


        <div class="map">${cur.lane}</div>
    </a>
</li>






    
    `;
    elements.searchMatchesHist.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (matches) => {
    matches.forEach(renderMatchItem);
}