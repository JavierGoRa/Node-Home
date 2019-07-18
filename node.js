var express = require('express');        // call express
var app = express();                 // define our app using express
var router = express.Router();              // get an instance of the express Router
var Gpio = require('onoff').Gpio;
var rele = new Gpio(4,"high");
var port = 3000;

rele.writeSync(1);
function toggle(){
    if (rele.readSync()=== 0){
        rele.writeSync(1);    
        return { message: 'Luz off' };  

    } else{
        rele.writeSync(0);
        return { message: 'Luz ON' }   
    }
}

router.get('/toggle', function(req, res) {
    res.json(toggle())
});

let toggling= false;
let interval;
router.get('/blink', function(req, res) {
    
    console.log(toggling);
    if (toggling){
        clearInterval(interval);
        toggling=false;
	rele.writeSync(1);
    } else {
        interval = setInterval(toggle, 30);
        toggling=true;
    }   
    res.json({ message: 'Luz blink' }); 
 
});

app.use('/rele', router);
app.listen(port);
console.log('Magic happens on port ' + port);
