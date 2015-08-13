/**
 * Created by danieloram on 12/08/15.
 */

//Bounce animation for arrow
$(document).ready(function() {

    $(".arrow").hover(function(){
        $(".arrow").effect( "bounce", {times:3, distance:15}, 1000 );
    });

});

$(document).ready(function() {

    $(".arrows").hover(function(){
        $(".arrows").effect( "bounce", {times:3, distance:15}, 1000 );
    });

});

//Scrolls to selected div
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});