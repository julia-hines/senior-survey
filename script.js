$(document).ready(function() {

    function firstClick() {
        $('#d1').animate({
          'marginTop' : "380px" 
          });
    }

    $("#image").one("click", firstClick);
    
})