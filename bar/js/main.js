$(document).ready(function(){
     $( "body" ).fadeIn( 1500, function() {
  });
    var divs = document.getElementsByTagName('li');
var delta = Math.PI * 2 / divs.length;
var x = 0, y = 0, angle = 0;

for (var i = 0; i < divs.length; i++) {
    divs[i].style.position = 'absolute';
    divs[i].style.left =200* Math.cos(angle) + 'px';
    divs[i].style.top =200*  Math.sin(angle) + 'px';
    angle += delta;
}



/*********************************************************/
$('input.deger').val(2);

$('.icons').on('mousewheel DOMMouseScroll', function (e) {
    var direction = (function () {
        var delta = (e.type === 'DOMMouseScroll' ?
                     e.originalEvent.detail * -40 :
                     e.originalEvent.wheelDelta);
        return delta > 0 ? 0 : 1;
    }());
   var deg = parseInt($('input.deger').val());
    if(direction === 1) {
         var degs =parseInt(32);
        deg = parseInt(deg+degs);
        $(this).css('transform', 'rotate('+deg+'deg)');
        $(this).find('li').css('transform', 'rotate('+(-deg)+'deg)');
        $('input.deger').val(deg);
    }

    if(direction === 0) {
         var degs =parseInt(32);
        deg = parseInt(deg-degs)
        $(this).css('transform', 'rotate('+deg+'deg)');
        $(this).find('li').css('transform', 'rotate('+(-deg)+'deg)');
        $('input.deger').val(deg);
    }

});

/****************************************************/










$("a.open").on('click', function(e) {
    $(this).siblings('.icons').toggleClass('active');
    $(this).toggleClass('rot');
for (var i = 0; i < divs.length; i++) {
 
}
   e.preventDefault();
});

});
// -77.8
// -341.2