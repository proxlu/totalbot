const scoreBing = require("scorebing-api");
var fetch = require('node-fetch')
var request = require("request")
const token = '1809701127:AAG88i-ftVdrf9XXBBSLrX4Ausf_cZukbDg'
const chat_id = "-1001454600443"
fetch('http://25.56.34.56/DADOS/crawler')
.then(response => response.text())
.then(text => {
const array = text.split("\n");
console.log(array);
})
const url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id='+chat_id+'&text='+scoreBing
let r = request(url, (err, res, body) => {
    if(err) console.log(err)
    console.log(body)
})


