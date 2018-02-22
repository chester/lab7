'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$('.likeBtn').click(buttonClicked);
}

function buttonClicked(e) {
	// create action
	e.preventDefault();
	ga('create', 'UA-114614651-1', 'auto');
	ga('send', 'event', 'like', 'click');
}