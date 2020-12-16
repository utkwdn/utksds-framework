
///document.addEventListener('keydown',handleInputFocusTransfer);
///
///function handleInputFocusTransfer(e){
///  // This method move focus to next item input on DOWN or to previous item input on UP arrow key press.
///  const focusableInputElements= document.querySelectorAll(`a`);
///  
///  //Creating an array from the node list
///  const focusable= [...focusableInputElements]; 
///  
///  //get the index of current item
///  const index = focusable.indexOf(document.activeElement); 
///  
///  // Create a variable to store the idex of next item to be focussed
///  let nextIndex = 0;
///
///  if (e.keyCode === 38) {
///    // up arrow
///    e.preventDefault();
///    nextIndex= index > 0 ? index-1 : 0;
///    focusableInputElements[nextIndex].focus();
///  }
///  else if (e.keyCode === 40) {
///    // down arrow
///    e.preventDefault();
///    nextIndex= index+1 < focusable.length ? index+1 : index;
///    focusableInputElements[nextIndex].focus();
///  }
///}



// ========================================================================================================================
// ===[ Control the focus .  ]=======================================================================================
// ========================================================================================================================

$('#searchHeader').on('shown.bs.collapse', function () {
  var utksearch = document.querySelector('#q');
  utksearch.focus();
});






// ========================================================================================================================
// ===[ Control the Menu details.  ]=======================================================================================
// ========================================================================================================================





// If you keyboard out (lose focus) of the opened off-canvas menu, make the menu automatically close
//var modaldiv = document.querySelector('#site-navigation')
$('#site-navigation').on('focusout', function (e) {
    setTimeout(function () { // needed because nothing has focus during 'focusout'
        if ($(':focus').closest('#site-navigation').length <= 0) {
          if ($("#site-navigation").hasClass("open")) {
             $("#site-navigation").toggleClass("open");
            };
        }
    }, 0);
});


// Use the escape key to close main menu ('mobile view')
var sitemenu = document.querySelector('#site-navigation')
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    sitemenu.classList.toggle('open')
  }
});



var jt = jt || {};

// Make the open menu work (mobile view)

jt.nav = (function() {
    function mobileMenu() {

        // querySelector returns the first element it finds with the correct selector
        // addEventListener is roughly analogous to $.on()
        document.querySelector('#mobile-menu-open').addEventListener('click', function(e) {
            e.preventDefault();

            // querySelectorAll returns all the nodes it finds with the selector
            // however, you can't iterate over querySelectorAll results (!!)
            // so this is a workaround - call Array.map and pass in the
            // list of nodes along with a function
            // technically querySelectorAll returns a NodeList not an Array so
            /// doesn't have standard array functions
            [].map.call(document.querySelectorAll('#site-navigation'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('open');
                el.focus();
               // el.classList.toggle('bg-open');
            });
        });
    }
    return {
        mobileMenu: mobileMenu
    };
})();



// Make the close menu work (mobile view)
jt.nav2 = (function() {
    function mobileMenuClose() {

        // querySelector returns the first element it finds with the correct selector
        // addEventListener is roughly analogous to $.on()
        document.querySelector('#mobile-menu-close').addEventListener('click', function(e) {
            e.preventDefault();

            // querySelectorAll returns all the nodes it finds with the selector
            // however, you can't iterate over querySelectorAll results (!!)
            // so this is a workaround - call Array.map and pass in the
            // list of nodes along with a function
            // technically querySelectorAll returns a NodeList not an Array so
            /// doesn't have standard array functions
            [].map.call(document.querySelectorAll('#site-navigation'), function(el) {

                // classList is the key here - contains functions to manipulate
                // classes on an element
                el.classList.toggle('open');
                let focused = document.getElementById('content');
                focused.focus();

            });
        });
    }
    return {
        mobileMenu: mobileMenuClose
    };
})();


// start everything
// this isn't in a doc.ready - loaded at the bottom of the page so the DOM is already ready
jt.nav.mobileMenu();
jt.nav2.mobileMenu();
