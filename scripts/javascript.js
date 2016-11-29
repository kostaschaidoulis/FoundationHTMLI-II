$(document).ready(function () {
   
    $("#adoptionHeader").on('mouseover', function () {
       
        $('#embededVideo').slideDown("slow");
        
    });
    
    $("#adoptionHeader").on('click', function() {
       
        $('#embededVideo').slideUp("slow");
                            
    });
    
});
