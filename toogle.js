var req = new XMLHttpRequest();
var onoff = document.getElementById('onoff')
onoff.addEventListener('click', function(){
    req.open("GET", "http://192.168.80.53:3000/rele/toggle", false);
    // Envío de la petición
    req.send(null);
    // Impresión por la consola de la respuesta recibida desde el servidor
    console.log(req.responseText);
})