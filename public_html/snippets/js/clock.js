function haeAika() {
    var aika = new Date();
    var tunnit = aika.getHours();
    var minuutit = aika.getMinutes();
    var sekunnit = aika.getSeconds();
    var sadasosat = aika.getMilliseconds() / 10;
    
    sadasosat = Math.round(sadasosat);
    
    if (tunnit < 10) {
        tunnit = "0" + tunnit;
    }
    
    if (minuutit < 10) {
        minuutit = "0" + minuutit;
    }
    
    if (sekunnit < 10) {
        sekunnit = "0" + sekunnit;
    }
    
    if (sadasosat == 100) {
        sadasosat = "00";
    } else if (sadasosat < 10) {
        sadasosat = "0" + sadasosat;
    }
    
    document.getElementById('kello').innerHTML = 
            tunnit + ":" + minuutit + ":" + 
            sekunnit + ":" + sadasosat;
    ajastin = setTimeout(function(){  haeAika()  }, 80);
}