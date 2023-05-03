// Add your javascript here

//calcular la edad de una persona
//recibe la fecha como un string en formato español
//devuelve un entero con la edad. Devuelve false en caso de que la fecha sea incorrecta o mayor que el dia actual
function calcular_edad(fecha){
    hoy=new Date()
    var array_fecha = fecha.split("/")  
    
    if (array_fecha.length!=3)
       return false
  
    var ano
    ano = parseInt(array_fecha[2]);
  
    if (isNaN(ano))
       return false

    var mes
    mes = parseInt(array_fecha[1]);
    if (isNaN(mes))
       return false

    var dia
    dia = parseInt(array_fecha[0]);
    if (isNaN(dia))
       return false

    if (ano<=99)
       ano +=1900

    edad=hoy.getYear()- ano - 1; //-1 porque no se si ha cumplido años ya este año

    if (hoy.getMonth() + 1 - mes < 0) //+ 1 porque los meses empiezan en 0
       return edad
    if (hoy.getMonth() + 1 - mes > 0)
       return edad+1

    if (hoy.getUTCDate() - dia >= 0)
       return edad + 1
    return edad
}

// Don't forget to add it into respective layouts where this js file is needed


$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library

  /**
  //Cambio idioma
  $('.idiomaEs').on('click', function(){  
    console.log("español");
    //var lang = $(this).data('lang'); 
    $('html').prop('lang', 'es');
      
  });

  $('.idiomaCat').on('click', function(){  
    console.log("Català");
    //var lang = $(this).data('lang');  
    $('html').prop('lang', 'cat');
      
  });

   **/
});



// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
