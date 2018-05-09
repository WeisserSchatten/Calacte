$(document).ready(function() {
	let popularMovieBlock = $('.popular-movies-element');
	let photo = 'https://image.tmdb.org/t/p/w500';
	let popularMuvie1 = {};
	let popularMuvie2 = {};
	let popularMuvie3 = {};
	let popularMuvie4 = {};
	let popularMuvie5 = {};
	let popularMuvie6 = {};
	let popularMuvie7 = {};
	let popularMuvie8 = {};
	let popularMuvie9 = {};
	let popularMuvie10 = {};
	let popularMuvie11 = {};
	let popularMuvie12 = {};
	let popularMuvie13 = {};
	$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=eac8015fd29a0e835e0ccd821380429f', function(result) {
		console.log(result);
		popularMuvie1 = {
			title:result.results[0].original_title,
			poster:result.results[0].poster_path
		}
		popularMuvie2 = {
			title:result.results[1].original_title,
			poster:result.results[1].poster_path
		}
		popularMuvie3 = {
			title:result.results[2].original_title,
			poster:result.results[2].poster_path
		}
		popularMuvie4 = {
			title:result.results[3].original_title,
			poster:result.results[3].poster_path
		}
		popularMuvie5 = {
			title:result.results[4].original_title,
			poster:result.results[4].poster_path
		}
		popularMuvie6 = {
			title:result.results[5].original_title,
			poster:result.results[5].poster_path
		}
		popularMuvie7 = {
			title:result.results[6].original_title,
			poster:result.results[6].poster_path
		}
		popularMuvie8 = {
			title:result.results[7].original_title,
			poster:result.results[7].poster_path
		}
		popularMuvie9 = {
			title:result.results[8].original_title,
			poster:result.results[8].poster_path
		}
		popularMuvie10 = {
			title:result.results[9].original_title,
			poster:result.results[9].poster_path
		}
		popularMuvie11 = {
			title:result.results[10].original_title,
			poster:result.results[10].poster_path
		}
		popularMuvie12 = {
			title:result.results[11].original_title,
			poster:result.results[11].poster_path
		}
		popularMuvie13 = {
			title:result.results[12].original_title,
			poster:result.results[12].poster_path
		}

		popularMovieBlock.prepend('<img src="' + photo + popularMuvie13.poster + '"?>')
	});
});
















		// console.log(result);
		// let randomMovieInfo = {};
		// let randomMovieActors = {};
		// randomMovieActors = {

		// }
		// randomMovie = {
		// 	title: result.title,
		// 	poster:result.poster_path,
		// 	overview:result.overview
		// };

		// $(randomMovieBlock).html('<img src="' + photo + randomMovie.poster + '" class="random-cinema-poster"><div class="random-cinema-text"><h2 class="random-cinema-title">' + randomMovie.title + '</h2><p class="random-cinema-description">' + randomMovie.overview + '</p></div>')
