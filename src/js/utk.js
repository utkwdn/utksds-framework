

// This makes the escape key and unfocusing event collapse the mobile menu
// Will need to be edited. The #sidebar ID was in the old theme. Current theme is still undetermined

var elem = "#site-navigation"; 
$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { // ESC
      $("#site-navigation").toggleClass("open");
    }
});

$('#site-navigation').on('focusout', function (e) {
    setTimeout(function () { // needed because nothing has focus during 'focusout'
        if ($(':focus').closest('#site-navigation').length <= 0) {
          if ($("#site-navigation").hasClass("open")) {
             $("#site-navigation").toggleClass("open");
            };
        }
    }, 0);
});


// Bellows MenuCollapsing
// =========================================================
// Add the button
$('#bellows .sub-menu').before('<button class="btn btn-bellows"><div class="btn-bellows-openedcontent"><svg class="btn-icon-plus" version="1.1"   xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M24,10.4H13.6V0h-3.1v10.4H0v3.1h10.4V24h3.1V13.6H24V10.4z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  class="btn-icon-minus" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg><span class="sr-only">Toggle Sub Menu</span></div></button>');





$('.sub-menu').addClass("collapse");
$('#bellows .current-menu-item > .sub-menu').removeClass("collapse");
$('#bellows .current-page-ancestor > .sub-menu').removeClass("collapse");
$('#bellows .current-menu-ancestor > .sub-menu').removeClass("collapse");
$('#bellows .current-page-ancestor > .btn-bellows').addClass("btn-bellows-open");
$('#bellows .current-menu-ancestor > .btn-bellows').addClass("btn-bellows-open");
$('button.btn-bellows').attr("aria-expanded","false");
$('button.btn-bellows.btn-bellows-open').attr("aria-expanded","true");
$('#bellows .current-menu-item > .btn-bellows').toggleClass("btn-bellows-open");
$('#bellows .current-menu-item button.btn-bellows').attr("aria-expanded","true");


// Make the button work
$("button.btn-bellows").click(function(){
    $(this).next('.sub-menu').toggleClass("collapse");
    $(this).toggleClass("btn-bellows-open");
    if ( $( this ).hasClass( "btn-bellows-open" ) ) {
      $(this).attr("aria-expanded","true");
    } else {
      $(this).attr("aria-expanded","false");
    }
    $(this).parent().siblings().children(".open").removeClass("collapse");
    $(this).parent().siblings().children(".btn-bellows-open").removeClass("btn-bellows-open");
});


// Mobile Menu Show

$("#mobile-menu-open").click(function(){
    $('#site-navigation').toggleClass("open");
});
$("#mobile-menu-close").click(function(){
    $('#site-navigation').toggleClass("open");
});