$(document).ready(function() {

	const basePath = 'https://api.themoviedb.org/3/',
		  reqSearch = 'search/movie?',
		  reqDiscover = 'discover/movie?',
		  reqQuery = '&query=',
		  reqData = '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=',
		  
		  apiKey = 'api_key=eac8015fd29a0e835e0ccd821380429f',
		  imgPath = 'https://image.tmdb.org/t/p/w500',

		  gifFearHtml = '<iframe src="https://giphy.com/embed/7tKrRNo6MwlZC"; width="180" height="180" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

	let popularMovieBlock = $('.popular-movies-element'),
		answerMovieBlock = $('.answer-block');


	$.getJSON(basePath + 'movie/popular?' + apiKey, function(result) {

		if (result.results.length !== 0) {
			for (let i = 0; i < result.results.length; i++) {
				let movie = result.results[i];
				popularMovieBlock.append('<div class="gallery-item"><img src="' + imgPath + movie.poster_path + '" class="popular-muvie-poster"><div class="popular-muvie"><h2 class="popular-muvie-title">' + movie.original_title + '</h2><p class="popular-muvie-text">Release Date:' + movie.release_date + '</p><span class="popular-muvie-text-second">' + getRatingView(movie.vote_average) +'</span></div></div>')
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
		getSearchWords();

		if (contentRequest != null && contentRequest != '') {
			mainRequest();
		} else {
			answerMovieBlock.html('');
			showEror();
			answerMovieBlock.append(gifFearHtml + '<span class="eror-title">Query data not found...</span>');
		}
	});

	$('.js-input').click(function() {
		$('.search-img').addClass('-visible');
	});



	function getSearchWords() {
		contentRequest = $('.js-input').val();
	};

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	function showAnswer() {
		setTimeout(function() {
			$('.answer').addClass('-animated');
			setTimeout(function() {
				$('.answer').removeClass('-animated');
			}, 35000);
		}, 1000);
		
	};

	function showEror() {
		setTimeout(function() {
			$('.answer').addClass('-animated');
			setTimeout(function() {
				$('.answer').removeClass('-animated');
			}, 3000);
		}, 1000);
		
	};


	function mainRequest() {
		answerMovieBlock.html('');
		showAnswer();
		 if (!isNumeric(contentRequest)) {
			
			$.getJSON(basePath + reqSearch + apiKey + reqQuery + contentRequest, function(result) {
				if (result !== null) {
					for (let i = 0; i < result.results.length; i++) {
						let movie = result.results[i];
						answerMovieBlock.append('<div class="gallery-item-answer"><img src="' + imgPath + movie.poster_path + '" class="answer-muvie-poster"><div class="answer-muvie"><h2 class="answer-muvie-title">' + movie.original_title + '</h2><p class="answer-muvie-text">Release Date:' + movie.release_date + '</p><span class="answer-muvie-text-second">' + getRatingView(movie.vote_average) +'</span></div></div>');
					}
				} else {
					answerMovieBlock.append(gifFearHtml + '<span class="eror-title">Query data not found...</span>');
				}
			});
			
		} else {
			$.getJSON(basePath + reqDiscover + apiKey + reqData + contentRequest, function(result) {
				if (result !== null) {
					for (let i = 0; i < result.results.length; i++) {
						let movie = result.results[i];
						// function roundRating() {
						// 	let value = Math.round(movie.vote_average);
						// 	for (let i = 0; i < value; i++) {

						// 	}
						// }
						answerMovieBlock.append('<div class="gallery-item-answer"><img src="' + imgPath + movie.poster_path + '" class="answer-muvie-poster"><div class="answer-muvie"><h2 class="answer-muvie-title">' + movie.original_title + '</h2><p class="answer-muvie-text">Release Date:' + movie.release_date + '</p><span class="answer-muvie-text-second">' + getRatingView(movie.vote_average) +'</span></div></div>');
					}
				} else {
					answerMovieBlock.append(gifFearHtml + '<span  class="eror-title">Query data not found...</span>');
				}
			});
		}
	};

	function getRatingView(rating) {
		let result = '<div class="stars">',
		value = Math.round(rating);
		for (let i = 0; i < value; i++) {
			result += '<img src="assets/images/star.png" class="star">';
		}
		result += '</div>';
		return result;
	}


});