function scrollHere(id){
    $('html, body').animate({ //.animate -toiminto koko dokumenttiin
    scrollTop: $("#" + id).offset() .top},		'slow'); //scrollataan tietyn id:n yläreunaan.
}

$ (function(){
    $('.slide').css({'height':(( //slide -classin korkeus tyylipohjassa
        $(window).height() //asetetaan korkeudeksi selainikkunan korkeus
        )-100) + 'px' //miinus 100px, joka jostain syystä valuu yli. Todennäköisesti jotain default padding/margin puppua selaimen työkalupalkin lisäksi.
    });
});
