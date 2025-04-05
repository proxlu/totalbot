const sports = require('radar-sport-api');

const sport = new sports('bet365', { getCommonContents: false });

sport.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})