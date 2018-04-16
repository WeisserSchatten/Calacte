$(document).ready(function() {
	let randomMovieBlock = $('.random-cinema');
	let photo = 'https://image.tmdb.org/t/p/w500'
	$.getJSON('https://api.themoviedb.org/3/movie/76341?api_key=eac8015fd29a0e835e0ccd821380429f', function(result) {
		console.log(result);
		let randomMovieInfo = {};
		let randomMovieActors = {};
		randomMovieActors = {

		}
		randomMovie = {
			title: result.title,
			poster:result.poster_path,
			overview:result.overview
		};

		$(randomMovieBlock).html('<img src="' + photo + randomMovie.poster + '" class="random-cinema-poster"><div class="random-cinema-text"><h2 class="random-cinema-title">' + randomMovie.title + '</h2><p class="random-cinema-description">' + randomMovie.overview + '</p></div>')
	});
});