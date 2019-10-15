export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search_field'),
    searchSelection: document.querySelector('.drop_serv'),
    searchMatchesHist: document.querySelector('.match_list'),
    match: document.querySelector('.match_details'),
    searchFeatured: document.querySelector('.games_list')
    
};


export const elementStrings = {
    loader: 'loader'
};



export const spells = new Map();

spells.set(1,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_boost.png');
spells.set(3,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_exhaust.png');
spells.set(4,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_flash.png');
spells.set(5,'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_Backtrack.png');
spells.set(6, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_haste.png');
spells.set(7, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_heal.png');
spells.set(11, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_smite.png');
spells.set(12, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_teleport.png');
spells.set(13, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonermana.png');
spells.set(14, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerignite.png');
spells.set(21, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summonerbarrier.png');
spells.set(30, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/benevolence_of_king_poro_icon.png');
spells.set(31, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/trailblazer_poro_icon.png');
spells.set(32, 'http://raw.communitydragon.org/latest/game/data/spells/icons2d/summoner_mark.png');

export const primaryPerks = new Map();
primaryPerks.set(8000,'https://vignette.wikia.nocookie.net/leagueoflegends/images/2/26/Precision_icon.png/revision/latest/scale-to-width-down/40?cb=20170926031126');
primaryPerks.set(8100,'https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1e/Domination_icon.png/revision/latest/scale-to-width-down/40?cb=20170926031123');
primaryPerks.set(8200,'https://vignette.wikia.nocookie.net/leagueoflegends/images/c/cd/Sorcery_icon.png/revision/latest/scale-to-width-down/40?cb=20170926031125');
primaryPerks.set(8300,'https://vignette.wikia.nocookie.net/leagueoflegends/images/0/0d/Inspiration_icon.png/revision/latest/scale-to-width-down/40?cb=20170926031124');
primaryPerks.set(8400,'https://vignette.wikia.nocookie.net/leagueoflegends/images/f/fa/Resolve_icon.png/revision/latest/scale-to-width-down/40?cb=20170926031125');


export const lane = new Map();

lane.set('BOTTOM','https://vignette.wikia.nocookie.net/leagueoflegends/images/9/97/Bottom_icon.png/revision/latest?cb=20181117143632');
lane.set('NONE','https://vignette.wikia.nocookie.net/leagueoflegends/images/9/97/Bottom_icon.png/revision/latest?cb=20181117143632');
lane.set('MID','https://vignette.wikia.nocookie.net/leagueoflegends/images/9/98/Middle_icon.png/revision/latest?cb=20181117143644');
lane.set('JUNGLE','https://vignette.wikia.nocookie.net/leagueoflegends/images/1/1b/Jungle_icon.png/revision/latest?cb=20181117143559');
lane.set('TOP','https://vignette.wikia.nocookie.net/leagueoflegends/images/e/ef/Top_icon.png/revision/latest?cb=20181117143602');


export const queue = new Map();

queue.set(420, "5v5 Ranked Solo");
queue.set(400, "5v5 Normal Draft");
queue.set(440, "5v5 Ranked Flex");
queue.set(430, "5v5 Normal Blind");
queue.set(460, "3v3 Normal Blind");
queue.set(470, "3v3 Ranked Flex");
queue.set(450, "5v5 ARAM");


export const map = new Map();

map.set(4, 'Twisted Treeline');
map.set(11, `Summoner's Rift`);
map.set(12, `Howling Abyss`);

export const mapIcon = new Map();

mapIcon.set(4, 'img/mapIcons/Twisted_Treeline_icon.png');
mapIcon.set(11, `img/mapIcons/Summoner's_Rift_icon.png`);
mapIcon.set(12, 'img/mapIcons/Howling_Abyss_icon.png');
