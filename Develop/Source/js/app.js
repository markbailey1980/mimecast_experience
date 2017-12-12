/* TEMP GLOBAL VAR TO BE REPLACED AFTER INTERGRATION TO MIMECAST CMS */
var country_name;

jQuery(function($) {
	let App = {
		init: function() {
			this.setupElements();
			this.bindEvents();
		},
		setupElements: function() {
			this.$window = $(window);
			this.mob = 1;
			this.isAfrica = 0;
			this.questionOrder = 1;
			this.questionNext = 0;
			this.questionDisplayNum = 1;
			this.optionOneTally = 0;
			this.optionTwoTally = 0;
			this.$experience = $('#experience');
			this.$experienceOptions = $('#experience-options');
			this.$experienceResults = $('#experience-results');
			this.$option = $('#experience').find('article');
			this.$optionImage = $('#experience').find('article .option-image');
			this.$optionMob = $('#experience').find('article .mob-half');
			this.$optionNext = $('#experience').find('article .next');
			this.$optionDivider = $('#experience').find('.divider');
			this.$questionNum = $('#current-question');
			this.$questionCounter = $('#counter');
			this.$restart = $('#restart');
			this.$loader = $('#load');

			/* data elements */
			this.$imgOne = $('#image-one');
			this.$imgTwo = $('#image-two');
			this.$titleOne = $('#title-one');
			this.$titleTwo = $('#title-two');
			this.$answerOneTitle = $('#answer-one-title');
			this.$answerTwoTitle = $('#answer-two-title');
			this.$answerOneBody = $('#answer-one-body');
			this.$answerTwoBody = $('#answer-two-body');
			this.$answerOneType = $('#answer-one-type');
			this.$answerTwoType = $('#answer-two-type');
			this.$answerOneUrl = $('#answer-one-type').parents('.other');
			this.$answerTwoUrl = $('#answer-two-type').parents('.other');
			this.$resultTitle = $('#result-title');
			this.$resultBody = $('#result-body');
		},
		bindEvents: function() {
			this.$window.on('resize', App.resizeHandler);
			this.$window.on('load', App.setMob);
			this.$window.on('load', App.imagePreload);

			// use this to start experience
			this.$window.on('load', App.searchGeo);

			this.$optionNext.on('click', App.experienceNext);
			this.$restart.on('click', App.experienceRestart);
			if(this.mob == 0) {
				this.$optionImage.on('click', App.optionClickHandler);
			} else {
				this.$optionMob.on('click', App.optionClickHandler);
			}
		},
		experienceEnd: function() {
			console.log(`TALLY ONE = ${App.optionOneTally}`);
			console.log(`TALLY TWO = ${App.optionTwoTally}`);
			let results = App.optionOneTally > App.optionTwoTally ? 0 : 1;
			console.log(`results = ${results}`);

			// hide questions
			if(App.mob == 0) {
				App.$questionCounter.addClass('fade-opacity');
				step1();
				function step1() {
					App.$experienceOptions.addClass('slide-one fade-opacity');
					setTimeout(step2, 200);
				}
				function step2() {
					App.$experience.find('.experience-title, .experience-subtitle').addClass('fade-opacity');
					App.$experienceOptions.removeClass('transitions slide-one').addClass('slide-two');
					App.$experienceResults.removeClass('slide-one slide-two fade-opacity');
				}
			} else {
				App.$questionCounter.addClass('fade-opacity');
				App.$experienceOptions.addClass('fade-opacity');
				App.$experienceResults.removeClass('fade-opacity');
			}

			// show end frame
			App.resultsDataHandler(results);
		},
		experienceNext: function() {
			if (App.questionNext < 7) {
				console.log('NEXT');

				/* experience reset */
				App.$option.removeClass('selected');
				App.$optionDivider.removeClass('shrink');
				App.$experienceOptions.removeClass('option-selected');

				/* experience slide */
				if(App.mob == 0) {
					step1();
					function step1() {
						App.$experienceOptions.addClass('slide-one fade-opacity');
						setTimeout(step2, 200);
					}
					function step2() {
						App.$experienceOptions.removeClass('transitions slide-one').addClass('slide-two');
						setTimeout(step3, 100);
					}
					function step3 () {
						App.$experienceOptions.addClass('transitions').removeClass('slide-one slide-two fade-opacity');
					}
				} else {
					App.$experienceOptions.removeClass('mob-answer fade-opacity');
					App.$experience.removeClass('experience-started');

					let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

					if (window.innerWidth < 480 && supportsTouch) {
						window.scroll(0, 70);
					}
				}

				/* experience data update */
				let orderNum = App.questionOrder,
				questionData = experience.questions[orderNum[App.questionNext]];
				App.questionDataHandler(questionData);
				App.$questionNum.text(App.questionDisplayNum);
				App.questionDisplayNum++;
				App.questionNext++;
			} else {
				console.log('STOP');
				App.experienceEnd();
			}
		},
		experienceRestart: function() {
			App.questionNext = 0;
			App.optionOneTally = 0;
			App.optionTwoTally = 0;
			App.questionDisplayNum = 1;
			App.$optionDivider.removeClass('shrink');
			App.$questionCounter.removeClass('fade-opacity');
			App.$experience.parents('.top-banner').removeClass('background');
			App.$experienceOptions.removeClass('option-selected');

			/* start questions from the beginning */
			let orderNum = App.questionOrder,
			questionData = experience.questions[orderNum[0]];
			App.questionDataHandler(questionData);
			App.$questionNum.text(App.questionDisplayNum);
			App.questionDisplayNum++;
			App.questionNext++;

			if(App.mob == 0) {
				step1();
				function step1() {
					App.$experienceResults.addClass('slide-one fade-opacity');
					setTimeout(step2, 200);
				}
				function step2() {
					App.$experience.find('.experience-title, .experience-subtitle').removeClass('fade-opacity');
					App.$experienceOptions.removeClass('transitions slide-one').addClass('slide-two');
					App.$option.removeClass('selected');
					setTimeout(step3, 100);
				}
				function step3 () {
					App.$experienceOptions.addClass('transitions').removeClass('slide-one slide-two fade-opacity');
					App.$experienceResults.addClass('slide-two');
				}
			} else {
				App.$option.removeClass('selected');
				App.$experience.removeClass('experience-started');
				App.$experienceOptions.removeClass('mob-answer fade-opacity');
				App.$experienceResults.addClass('fade-opacity');
			}
		},
		experienceStart: function() {
			console.log('LOAD');
			let orderNum = App.questionOrder,
			questionData = experience.questions[orderNum[0]];
			
			App.questionDataHandler(questionData);
			App.$questionNum.text(App.questionDisplayNum);
			App.questionDisplayNum++;
			App.questionNext++;

			App.$loader.addClass('fade-opacity');
			App.$experienceOptions.removeClass('fade-opacity');
		},

		getUrlParameter: function(name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
			var results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		},

		imagePreload: function() {
			$.preloadImages = function() {
				for (var i = 0; i < arguments.length; i++) {
					$("<img />").attr("src", arguments[i]);
				}
			}
			let imagesInOrder = App.questionOrder;
			for (var i = 0; i < imagesInOrder.length; i++) {
				let imgOne = experience.questions[App.questionOrder[i]].option_one.image;
				let imgTwo = experience.questions[App.questionOrder[i]].option_two.image;
				$.preloadImages(imgOne, imgTwo);
				console.log(`preload ${imgOne} & ${imgTwo}`);
			}
		},
		searchGeo: function() {

			console.log(`geo check`);			
			let string = App.getUrlParameter('country_name') != null ? App.getUrlParameter('country_name') : 'null';
			console.log(`string = ${string}`);
			let substring = 'Africa';
			if(string.indexOf(substring) >= 0) {
				country_name = App.getUrlParameter('country_name');
				console.log(`country_name = ${country_name}`);
			}

			if(country_name == 'South Africa' ||  country_name == 'Africa') {
				App.isAfrica = 1;
				console.log(`isAfrica = ${App.isAfrica}`);
				App.setOrder();
			} else {
				App.isAfrica = 0;
				console.log('country not in africa');
				App.setOrder();
			}
		},
		optionClickHandler: function() {
			if(!$('.options-container').hasClass('option-selected')) {
				console.log('START');
				let thisOption = $(this).parents('article');
				App.$experience.parents('.top-banner').addClass('background');
				App.$optionDivider.addClass('shrink');

				if(App.mob == 0) {
					// reverse answer one / answer two title and body to make correct text show
					let answerOneTitle = App.$answerOneTitle.text();
					let answerOneBody = App.$answerOneBody.text();
					let answerTwoTitle = App.$answerTwoTitle.text();
					let answerTwoBody = App.$answerTwoBody.text();

					App.$answerOneTitle.text(answerTwoTitle);
					App.$answerTwoTitle.text(answerOneTitle);
					App.$answerOneBody.text(answerTwoBody);
					App.$answerTwoBody.text(answerOneBody);
					
					if(!$('.option').hasClass('selected')) {
						App.$option.not(thisOption).addClass('selected');
					}
				} else {
					thisOption.addClass('selected');
					App.$experience.addClass('experience-started');
					App.$experienceOptions.addClass('mob-answer');
				}

				App.$experienceOptions.addClass('option-selected');
				
				if(thisOption.hasClass('one')) {
					App.optionOneTally++;
				} else if(thisOption.hasClass('two')) {
					App.optionTwoTally++;
				}
			}
		},
		questionDataHandler: function(questionData) {
			let imgOne = questionData.option_one.image;
			let imgTwo = questionData.option_two.image;
			document.getElementById('image-one').style.backgroundImage = "url(" + imgOne + ")";
			document.getElementById('image-two').style.backgroundImage = "url(" + imgTwo + ")";
			App.$titleOne.text(questionData.option_one.question_title);
			App.$titleTwo.text(questionData.option_two.question_title);
			App.$answerOneTitle.text(questionData.option_one.answer_title);
			App.$answerTwoTitle.text(questionData.option_two.answer_title);
			App.$answerOneBody.text(questionData.option_one.answer_body);
			App.$answerTwoBody.text(questionData.option_two.answer_body);
			App.$answerOneType.text(questionData.option_one.type);
			App.$answerTwoType.text(questionData.option_two.type);
			App.$answerOneUrl.attr('href',questionData.url);
			App.$answerTwoUrl.attr('href',questionData.url);
			App.$optionNext.text(questionData.btn);
		},
		resizeHandler() {
			console.log('resize');
			App.setMob();
			App.$experienceOptions.removeClass('option-selected');
			if(App.mob == 1) {
				console.log('IS MOBILE');
				if(!App.$experience.data('format') == 1) {
					App.questionNext = 0;
					App.optionOneTally = 0;
					App.optionTwoTally = 0;
					App.questionDisplayNum = 1;
					App.$questionCounter.removeClass('fade-opacity');
					App.$questionNum.text(App.questionDisplayNum);
					App.$experienceResults.addClass('fade-opacity');
					App.$experienceOptions.addClass('fade-opacity');
					App.$option.removeClass('selected');
					App.$loader.removeClass('fade-opacity');
					App.$experience.data('format',App.mob).removeClass('experience-started');
					App.searchGeo();
				}
			} else {
				console.log('IS DESKTOP');
				if(!App.$experience.data('format') == 0) {
					App.questionNext = 0;
					App.optionOneTally = 0;
					App.optionTwoTally = 0;
					App.questionDisplayNum = 1;
					App.$questionNum.text(App.questionDisplayNum);
					App.$questionCounter.removeClass('fade-opacity');
					App.$experienceResults.addClass('fade-opacity');
					App.$experienceOptions.addClass('fade-opacity').removeClass('mob-answer slide-one slide-two');
					App.$option.removeClass('selected');
					App.$loader.removeClass('fade-opacity');
					App.$experience.data('format',App.mob).removeClass('experience-started');
					App.searchGeo();
				}
			}
		},
		resultsDataHandler(result) {
			let resultTitle = experience.results[result].title,
			resultBody = experience.results[result].body;
			App.$resultTitle.text(resultTitle);
			App.$resultBody.text(resultBody);
		},
		setMob: function() {
			App.mob = App.$option.css('float') != 'none' ? 0 : 1;
			App.$experience.attr('data-format', App.mob);
			console.log(`is mob = ${App.mob}`);
		},
		setOrder: function() {
			let questionOrderParam = App.getUrlParameter('order');
			if (questionOrderParam && App.isAfrica == 0) {
				/* order IS being set via query string and IS NOT africa */
				App.questionOrder = experience.orders[0][questionOrderParam].order;
			} else if (questionOrderParam && App.isAfrica == 1) {
				/* order IS being set via query string and IS africa */
				App.questionOrder = experience.orders[0][questionOrderParam].order_africa;
			} else if (App.isAfrica == 1) {
				/* order IS NOT being set via query string and IS africa */
				App.questionOrder = experience.orders[0][1].order_africa;
			} else {
				/* order IS NOT being set via query string and IS NOT africa */
				App.questionOrder = experience.orders[0][1].order;
			}
			console.log(`questionOrderParam = ${questionOrderParam}`);
			App.experienceStart();
			App.imagePreload();
		}
	};
	App.init();
	window.App = App;
});
