document.addEventListener('DOMContentLoaded', ready);

function ready () {
	$('a').click (function () {
		var a = event.currentTarget;
		console.log(event.target);
		console.log(event.currentTarget);
		var allA = a.parentNode.parentNode.getElementsByTagName('a');
		a.classList.toggle('selectLi');
		a.classList.toggle('styleLi');
		for (i = 0; i < allA.length; i++) {
			if (allA[i].id !== a.id) {
				allA[i].classList = 'styleLi';
			};
		};	
	});

	document.getElementById("jsHeader").onclick = function () {
		var jsHeaderChild = event.target;
		var replyTread = document.getElementById('jsReplyThread');
		console.log(replyTread);
		if (jsHeaderChild.id === ('bell') || ('cub')) {
			console.log(event.target);
			jsHeaderChild.classList.toggle('opened-icon');
			jsHeaderChild.classList.toggle('closed-icon')
			if (jsHeaderChild.id === ('bell')) {
				console.log(jsHeaderChild.id);
				replyTread.classList.toggle('reply-opened');
				replyTread.classList.toggle('reply-closed');
			};
			if (jsHeaderChild.id === ('cub')) {
				console.log(jsHeaderChild.id);

			}
		};
	};


	/*var tagsI = document.getElementsByTagName('i');
	var userContainer = document.getElementById('jsUserContainer');
	console.log(userContainer);
	tagsI.onclick = function() {
		console.log('hello');
		for (j = 0; j = tagsI.length; j++) {
			if (tagsI[j].id === ("bell")) {};
			console.log('hello');
		};		
	};*/
};