$(function(){


  $('.comment').on('submit', function(e){
    e.preventDefault();
    // console.log( $(this).serializeArray() )
    $('.comment input, .comment textarea').each(function() {
      if ($(this).val() === '') {
        $(this).addClass('error');
        $(this).next().show(); //show the error message
      }
    })
  })

  
});
