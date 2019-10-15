import { elements, queue, map, mapIcon } from './base';

const renderMatchItem = cur => {
    const markup = `

    <li>
    
    <a class="featured_link"  href="#${cur.gameId}">

       

        <div class="mapIconFeatured"> <img src="${mapIcon.get(cur.mapId)}"  alt="" class="lol_img"> </div>
        <div>22:18</div>

        <div class="mapFeatured">${map.get(cur.mapId)}</div>
        <div class="typeFeatured">${ queue.get(cur.gameQueueConfigId)}</div>

    </a>
</li>






    
    `;
    elements.searchFeatured.insertAdjacentHTML('beforeend', markup);
}

export const renderResults = (games) => {
    games.forEach(renderMatchItem);
}