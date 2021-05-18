const axios = require('axios');
var convert = require('xml-js');

 async function getData () {
   let data = await axios.get('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
   .then(res => res.data)
   //console.log('data', data)
   var result1 = convert.xml2json(data, {compact: true, spaces: 4, alwaysChildren: true});
    return result1;
}


exports.get = async ctx => {
  try {
    ctx.body = await getData()
    console.log(ctx.body)
    ctx.status = 200
  } catch (e) {
    ctx.status = 500;
    console.log('error controller', e)
  }
};