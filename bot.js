const sports = require('radar-sport-api');

const sport = new sports('bet365', { getCommonContents: false });

sport.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})

var objeto = require(__dirname, 'data.json')

var texto = JSON.stringify(objeto);

console.log(texto)

const request = require('request')
const token = '1809701127:AAG88i-ftVdrf9XXBBSLrX4Ausf_cZukbDg'
const url = 'https://api.telegram.org/bot'+token+'/sendMessage'
const chat_id = "-1001454600443"

let r = request(url, (err, res, body) => {
    if(err) console.log(err)
    console.log(body)
})

let f = r.form()
f.append('chat_id', chat_id)
f.append('text', texto)   
