(function($) {
  $.fn.gallery = function(images) {
    var $this = this
      , $content = $('#content')
      , fadeSpeed = 200;

    $.each(images, function(i, image) {
      var html = $('<a href="' + image + '"><img alt="" src="' + image + '"/></a>');
      $this.append(html);
    });

    $('#gallery a').live('click', function(e) {
      e.preventDefault(e);
      $('#modal').remove();
      $('body').prepend('<div id="modal"><div id="modal-content"></div></div>');
      $('#modal-content').append($(this).find('img').clone());
    });

    $('#modal').live('click', function(e) {
      e.preventDefault(e);
      $('#modal').fadeOut(fadeSpeed);
    });
    
    $(window).keypress(function(e) {
      console.log(e.which);
      if (e.which === 0) {
        $('#modal').fadeOut(fadeSpeed);
      }
    });
  };
})(jQuery);
