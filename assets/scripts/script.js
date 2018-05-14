$(document).ready(function() {
	let popularMovieBlock = $('.popular-movies-element');
	let photo = 'https://image.tmdb.org/t/p/w500';
	let moviesTitle = [];
	let moviesPoster = [];
	let moviesRating = [];
	let moviesRelease = [],
	contentRequest = '',
	requestSearch = 'https://api.themoviedb.org/3/search/movie?',
	requestDiscover = 'https://api.themoviedb.org/3/discover/movie?',
	apiKey = 'api_key=eac8015fd29a0e835e0ccd821380429f',
	totalTypeRequest = '',
	totalRequest = '',
	requestMovieName = '&query=',
	requestDate = '&sort_by=primary_release_date.desc&year=';

	$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=eac8015fd29a0e835e0ccd821380429f', function(result) {

		for (let i = 0; i < result.results.length; i++) {
			moviesTitle.push(result.results[i].original_title);
			moviesPoster.push(result.results[i].poster_path);
			moviesRelease.push(result.results[i].release_date);
			moviesRating.push(result.results[i].vote_average);
			popularMovieBlock.prepend('<div class="gallery-item"><img src="' + photo + moviesPoster[i] + '" class="popular-muvie-poster"><div class="popular-muvie"><h2 class="popular-muvie-title">' + moviesTitle[i] + '</h2><p class="popular-muvie-text">Release Date:' + moviesRelease[i] + '</p><span class="popular-muvie-text-second">' + moviesRating[i] +'</span></div></div>')
		}

		$(".owl-carousel").owlCarousel();
	});

	$('.js-input').click(function() {
		$('.search-img').addClass('-visible');
	});

	function RequesT(){
		if (contentRequest === null) {
			return false;
		} else if (contentRequest === Number ) {
			totalTypeRequest = requestDate;
			totalRequest = requestDiscover;
			return totalTypeRequest;
			return totalRequest;
		} else {
			totalTypeRequest = requestMovieName;
			totalRequest = requestSearch;
			return totalTypeRequest;
			return totalRequest;
		}
	};

	function getSearchWords() {
		contentRequest = $('.js-input').val();
		return contentRequest;
	};

	function mainRequest() {
		getSearchWords();
		RequesT();
		$.getJSON(totalRequest + apiKey + totalTypeRequest + contentRequest, function(result) {
			console.log(result);
		});
	}

	$('.search-img').click(function() {
		mainRequest();
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
