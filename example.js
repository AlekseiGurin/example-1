document.addEventListener('DOMContentLoaded', ready);
function ready () {
	$('a').click (function () {
		var tagA = event.currentTarget;
		console.log(event.target);
		console.log(event.currentTarget);
		var allTagsA = tagA.parentNode.parentNode.getElementsByTagName('a');
		console.log(tagA.style);
		var styleTagsA = tagA.style;
		tagA.classList.toggle('selectedLink');
		for (i = 0; i < allTagsA.length; i++) {
			if (allTagsA[i].id !== tagA.id) {
				allTagsA[i].classList = styleTagsA;
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
	var video = document.getElementById('jsVideo');
	video.ontimeupdate = function () {
		var positionBar = document.getElementById('positionBar');
		positionBar.style.width = (video.currentTime/video.duration * 100) + "%";
	}
};