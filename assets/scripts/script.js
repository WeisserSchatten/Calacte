$(document).ready(function() {

	const basePath = 'https://api.themoviedb.org/3/',
		  reqSearch = 'search/movie?',
		  reqDiscover = 'discover/movie?',
		  reqQuery = '&query=',
		  reqData = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=',
		  
		  apiKey = 'api_key=eac8015fd29a0e835e0ccd821380429f',
		  imgPath = 'https://image.tmdb.org/t/p/w500';

	let popularMovieBlock = $('.popular-movies-element'),
		answerMovieBlock = $('.answer-block');


	$.getJSON(basePath + 'movie/popular?' + apiKey, function(result) {

		if (result.results.length !== 0) {
			for (let i = 0; i < result.results.length; i++) {
				let movie = result.results[i];
				popularMovieBlock.append('<div class="gallery-item"><img src="' + imgPath + movie.poster_path + '" class="popular-muvie-poster"><div class="popular-muvie"><h2 class="popular-muvie-title">' + movie.original_title + '</h2><p class="popular-muvie-text">Release Date:' + movie.release_date + '</p><span class="popular-muvie-text-second">' + movie.vote_average +'</span></div></div>')
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
		}
	});

			$('.search-img').click(function() {
				mainRequest();
			});

			$('.js-input').click(function() {
				$('.search-img').addClass('-visible');
			});



	function getSearchWords() {
		contentRequest = $('.js-input').val();
		return contentRequest;
	};

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	function mainRequest() {
		answerMovieBlock.html('');
		setTimeout(function() {
			$('.answer').addClass('-animated');
		}, 1000);
		getSearchWords();
		if (contentRequest === null) {
			return false;
		} else if (!isNumeric(contentRequest)) {
			$.getJSON(basePath + reqSearch + apiKey + reqData + contentRequest, function(result) {
			for (let i = 0; i < result.results.length; i++) {
				let movie = result.results[i];
				answerMovieBlock.append('<div class="gallery-item-answer"><img src="' + imgPath + movie.poster_path + '" class="answer-muvie-poster"><div class="answer-muvie"><h2 class="answer-muvie-title">' + movie.original_title + '</h2><p class="answer-muvie-text">Release Date:' + movie.release_date + '</p><span class="answer-muvie-text-second">' + movie.vote_average +'</span></div></div>')
			}
		});
			
		} else {
			$.getJSON(basePath + apiKey + totalTypeRequest + contentRequest, function(result) {
			for (let i = 0; i < result.results.length; i++) {
				answerMoviesTitle.push(result.results[i].original_title);
				answerMoviesPoster.push(result.results[i].poster_path);
				answerMoviesRelease.push(result.results[i].release_date);
				answerMoviesRating.push(result.results[i].vote_average);
				answerMovieBlock.prepend('<div class="gallery-item-answer"><img src="' + photo + answerMoviesPoster[i] + '" class="answer-muvie-poster"><div class="answer-muvie"><h2 class="answer-muvie-title">' + answerMoviesTitle[i] + '</h2><p class="answer-muvie-text">Release Date:' + answerMoviesRelease[i] + '</p><span class="answer-muvie-text-second">' + answerMoviesRating[i] +'</span></div></div>')
			}
		});
		}
	}


});