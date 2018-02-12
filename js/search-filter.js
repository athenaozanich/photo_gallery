$('#search').bind('input', function() {
     var searchStr = $(this).val().toLowerCase();
     $('.image').each(function() {
          var str = $(this).attr("alt").toLowerCase();
          var str2 = $(this).attr("caption").toLowerCase();

          if(str.indexOf(searchStr) > -1) { //compares search text to title text
               $(this).show(); // if the entry is found show the container
               //or you can do $(this).closest('.image').show();
          } else if(str2.indexOf(searchStr) > -1){
          		 $(this).show();
          }else {
               $(this).hide(); // if not found, hide it.
               //or you can do $(this).closest('.image').hide();
          }
     });
});
