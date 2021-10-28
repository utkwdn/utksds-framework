
// ========================================================================================================================
// ===[ Control the focus .  ]=======================================================================================
// ========================================================================================================================


var myModalEl = document.getElementById('searchModal')
myModalEl.addEventListener('shown.bs.modal', function (event) {
  var utksearch = document.querySelector('#q');
  utksearch.focus();
})
var tabEl = document.getElementById('events-tab')
tabEl.addEventListener('shown.bs.tab', function (event) {
  var utksearch2 = document.querySelector('#q-events');
  utksearch2.focus();
})

var tabEl = document.getElementById('news-tab')
tabEl.addEventListener('shown.bs.tab', function (event) {
  var utksearch3 = document.querySelector('#q-news');
  utksearch3.focus();
})
var tabEl = document.getElementById('this-site-tab')
tabEl.addEventListener('shown.bs.tab', function (event) {
  var utksearch4 = document.querySelector('#q');
  utksearch4.focus();
})



// Grab the elements we need to interact with
var openButton = document.getElementById('mobile-menu-open');
var dialog = document.getElementById('site-navigation');
var closeButton = document.getElementById('mobile-menu-close');

// Data filled by openDialog() and later used by closeDialog()
var keyHandle;
var tabHandle;
var disabledHandle;
var hiddenHandle;
var focusedElementBeforeDialogOpened;

function openDialog() {
  // Remember the focused element before we opened the dialog
  // so we can return focus to it once we close the dialog.
  focusedElementBeforeDialogOpened = document.activeElement;

  // We're using a transition to reveal the dialog,
  // so wait until the element is visible, before
  // finding the first keyboard focusable element
  // and passing focus to it, otherwise the browser
  // might scroll the document to reveal the element
  // receiving focus
  ally.when.visibleArea({
    context: dialog,
    callback: function(context) {
      // the dialog is visible on screen, so find the first
      // keyboard focusable element (giving any element with
      // autofocus attribute precendence). If the dialog does
      // not contain any keyboard focusabe elements, focus will
      // be given to the dialog itself.
      var element = ally.query.firstTabbable({
        context: context, // context === dialog
        defaultToContext: true,
      });
      element.focus();
    },
  });

  // Make sure that no element outside of the dialog
  // can be interacted with while the dialog is visible.
  // This means we don't have to handle Tab and Shift+Tab,
  // but can defer that to the browser's internal handling.
  disabledHandle = ally.maintain.disabled({
    filter: dialog,
  });

  // Make sure that no element outside of the dialog
  // is exposed via the Accessibility Tree, to prevent
  // screen readers from navigating to content it shouldn't
  // be seeing while the dialog is open. See example:
  // https://marcysutton.com/slides/mobile-a11y-seattlejs/#/36
  hiddenHandle = ally.maintain.hidden({
    filter: dialog,
  });

  // Make sure that Tab key controlled focus is trapped within
  // the tabsequence of the dialog and does not reach the
  // browser's UI, e.g. the location bar.
  tabHandle = ally.maintain.tabFocus({
    context: dialog,
  });

  // React to enter and escape keys as mandated by ARIA Practices
  keyHandle = ally.when.key({
    escape: closeDialogByKey,
    // Note: in non-interactive content you would also bind the enter
    // key to close the dialog. In our example the form's submit event
    // will cover that instead. The enter handler would be executed
    // for *every* press of the enter key, even if the focused element
    // is a button (which would invoke the default action). Try using
    // a <form> for interactive content to get around that problem.
    // enter: closeDialogByKey,
  });

  // Show the dialog
  // dialog.hidden = false;
}

function closeDialogByKey() {
  // we need to let the keyboard event handlers finish,
  // before actually closing the dialog. Otherwise the
  // keydown of <kbd>enter</kbd> will close the dialog,
  // focus is passed back to the open-dialog-button and
  // the keyup of <kbd>enter</kbd> will open the dialog
  // again.
  setTimeout(closeDialog);
  // alternatively we could've called event.preventDefault()
  // and then run closeDialog() synchronously
}

function closeDialog() {
  // undo listening to keyboard
  keyHandle.disengage();
  // undo trapping Tab key focus
  tabHandle.disengage();
  // undo hiding elements outside of the dialog
  hiddenHandle.disengage();
  // undo disabling elements outside of the dialog
  disabledHandle.disengage();
  // return focus to where it was before we opened the dialog
  focusedElementBeforeDialogOpened.focus();
  // hide or remove the dialog
  //dialog.hidden = true;
}

function saveDialog(event) {
  // do not submit the form
  event.preventDefault();

  // do something with the entered data
  var name = dialog.querySelector('input').value;
  console.log('entered name', name);

  closeDialog();
}

// wire up showing/hiding the dialog
openButton.addEventListener('click', openDialog, false);
closeButton.addEventListener('click', closeDialog, false);
dialog.addEventListener('submit', saveDialog, true);





// ========================================================================================================================
// ===[ Control the Menu details.  ]=======================================================================================
// ========================================================================================================================


// This opens the current page menu. (Left rail version)


var divs = document.querySelectorAll('.current-menu-ancestor > ul.collapse');
for (var i = 0; i < divs.length; i++) {
    divs[i].classList.add('show');
};
var divs = document.querySelectorAll('.current-menu-ancestor > button.btn-bellows');
for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove('collapsed');
};


// Use the escape key to close main menu ('mobile view')
var sitemenu = document.querySelector('#site-navigation')
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    sitemenu.classList.remove('open')
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




// ========================================================================================================================
// ===[ Search CSE.                ]=======================================================================================
// ========================================================================================================================


function executeQuery(evt) {
	evt.preventDefault();
  	var input = document.getElementById("q");
  	var element1 = google.search.cse.element.getElement("this-site-results");
  	if (input.value == "") {
    		element1.clearAllResults();
  	} else {
    		element1.execute(input.value);
  	}
  	return false;
}

document.getElementById("cse-searchbox-form").addEventListener("submit", executeQuery);

function eventSearch(evt){
	evt.preventDefault();
		var input = document.getElementById("q-events");
		window.location.href = "https://calendar.utk.edu/search/events?search=" + input.value;
}

document.getElementById("events-searchbox-form").addEventListener("submit", eventSearch);

function newsSearch(evt){
	evt.preventDefault();
		var input = document.getElementById("q-news");
		window.location.href = "https://news.utk.edu/?s=" + input.value;
}

document.getElementById("news-searchbox-form").addEventListener("submit", newsSearch);



// start everything
// this isn't in a doc.ready - loaded at the bottom of the page so the DOM is already ready
jt.nav.mobileMenu();
jt.nav2.mobileMenu();
