$('button.scrollsomething').on('click', function() {
    $.smoothScroll({
      scrollElement: $('div.scrollme'),
      scrollTarget: '#findme'
    });
    return false;
  });