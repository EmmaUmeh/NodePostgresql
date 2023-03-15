var express = require('express');
var app = express();
var cors = require('cors');
var port = 8000;

app.use(cors());


app.get('/', function(request, response) {
    response.send('Router listening')
})


app.listen(port, () => {
    console.log(`Server listening to ${port}`)
});