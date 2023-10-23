$(document).ready(function(){

	$('#calida a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	}

	$('#tabluz a[href="#calida"]').tab('show') // Select tab by name
	$('#tabluz a[href="#fria"]').tab('show') // Select tab by name

			});