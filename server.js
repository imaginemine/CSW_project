const express = require('express')
const app = express();

app.use(express.static('image'));
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/main.html');
});

app.get('/about',(req, res)=>{
    res.send("about");
});

app.listen(3000,function(){
    console.log('start at 3000');
}); 