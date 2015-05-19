(function () {
	var embeds = document.querySelectorAll('.embeddable-wp'),
		embed,
		x;

	var createEmbed = function(element) {
		// Featured Image
		element.style.backgroundImage = 'url("' + element.dataset.featuredimage + '")';

		// Title
		var titleContainer = document.createElement('h1');
		var title = document.createTextNode(element.dataset.title);
		titleContainer.appendChild(title);
		element.appendChild(titleContainer);

		// Author
		var authorContainer = document.createElement('p');
		authorContainer.classList.add('author');
		var author = document.createTextNode(element.dataset.author);
		var authorImage = document.createElement('div');
		authorImage.style.backgroundImage = 'url("' + element.dataset.authorimage + '")';
		authorContainer.appendChild(authorImage);
		authorContainer.appendChild(author);
		element.appendChild(authorContainer);

		// Excerpt
		var excerptContainer = document.createElement('p');
		excerptContainer.classList.add('excerpt');
		var excerpt = document.createTextNode(element.dataset.excerpt);
		excerptContainer.appendChild(excerpt);
		element.appendChild(excerptContainer);
	};

	var loopEmbeds = function(embeds) {
		for(x = 0; x < embeds.length; x++) {
			embed = embeds[x];	
			createEmbed(embed);
		}
	}

	loopEmbeds(embeds);
	
})();