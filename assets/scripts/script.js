$(document).ready(function() {
	let popularMovieBlock = $('.popular-movies-element'),
	answerMovieBlock = $('.answer');
	let photo = 'https://image.tmdb.org/t/p/w500';
	let moviesTitle = [];
	let moviesPoster = [];
	let moviesRating = [];
	let moviesRelease = [];
	let answerMoviesTitle = [];
	let answerMoviesPoster = [];
	let answerMoviesRating = [];
	let answerMoviesRelease = [],
	contentRequest = '',
	requestSearch = 'https://api.themoviedb.org/3/search/movie?',
	requestDiscover = 'https://api.themoviedb.org/3/discover/movie?',
	apiKey = 'api_key=eac8015fd29a0e835e0ccd821380429f',
	totalTypeRequest = '',
	totalRequest = '',
	requestMovieName = '&query=',
	requestDate = '&sort_by=popularity.asc&primary_release_year=';

	$.getJSON('https://api.themoviedb.org/3/movie/popular?api_key=eac8015fd29a0e835e0ccd821380429f', function(result) {

		for (let i = 0; i < result.results.length; i++) {
			moviesTitle.push(result.results[i].original_title);
			moviesPoster.push(result.results[i].poster_path);
			moviesRelease.push(result.results[i].release_date);
			moviesRating.push(result.results[i].vote_average);
			popularMovieBlock.prepend('<div class="gallery-item"><img src="' + photo + moviesPoster[i] + '" class="popular-muvie-poster"><div class="popular-muvie"><h2 class="popular-muvie-title">' + moviesTitle[i] + '</h2><p class="popular-muvie-text">Release Date:' + moviesRelease[i] + '</p><span class="popular-muvie-text-second">' + moviesRating[i] +'</span></div></div>')
		}

		$(".owl-carousel").owlCarousel({
			loop:true,
		    margin:10,
		    nav:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
				});
	});

	$('.js-input').click(function() {
		$('.search-img').addClass('-visible');
	});

	function RequesT(){
		if (contentRequest === null) {
			return false;
		} else if (!isNumeric(contentRequest)) {
			totalTypeRequest = requestMovieName;
			totalRequest = requestSearch;
			return {
				totalTypeRequest: totalTypeRequest,
				totalRequest: totalRequest
			};
		} else {
			totalTypeRequest = requestDate;
			totalRequest = requestDiscover;
			return {
				totalTypeRequest: totalTypeRequest,
				totalRequest: totalRequest
			};
		}
	};

	function getSearchWords() {
		contentRequest = $('.js-input').val();
		return contentRequest;
	};

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	function mainRequest() {
		getSearchWords();
		RequesT();
		$.getJSON(totalRequest + apiKey + totalTypeRequest + contentRequest, function(result) {
			for (let i = 0; i < result.results.length; i++) {
			answerMoviesTitle.push(result.results[i].original_title);
			answerMoviesPoster.push(result.results[i].poster_path);
			answerMoviesRelease.push(result.results[i].release_date);
			answerMoviesRating.push(result.results[i].vote_average);
			answerMovieBlock.prepend('<div class="gallery-item"><img src="' + photo + moviesPoster[i] + '" class="popular-muvie-poster"><div class="popular-muvie"><h2 class="popular-muvie-title">' + moviesTitle[i] + '</h2><p class="popular-muvie-text">Release Date:' + moviesRelease[i] + '</p><span class="popular-muvie-text-second">' + moviesRating[i] +'</span></div></div>')
			}
		});
	}

	$('.search-img').click(function() {
		mainRequest();
	});

	setTimeout(function() {
		$('.answer').addClass('-animated');
		// $('.background').addClass('-animated');
	}, 1000)
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
