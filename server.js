var express = require('express')
var app = express()
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req,res){
  res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/header', function (req, res) {
　　var language = req.get('Accept-Language');
　　language = language.split(';');
  language = language[0];
　　var user_agent = req.get('User-Agent');
　　var u_a = user_agent.split('(')[1];
　　var software = u_a.split(')')[0];
  var ip = req.ip;
 　res.send(JSON.stringify({ipaddress: ip, language: language, software: software}));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
