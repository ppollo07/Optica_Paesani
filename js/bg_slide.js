var bgChange = {
	config : {
		container : "#slide",
		timer : 8500,
		path : "img",
		delayFade : 3500,
		timerFade : 1500,
		dir : window.location.href,
		currentBackground : 0,
		urlImg : []
	},
	slide : {
		init : function (config) {
			$.extend(bgChange.config, config);
			bgChange.slide.changeImg();
			//pathImg = bgChange.config.path + bgChange.config.urlImg;
		},
		changeImg : function (config) {
			$.extend(bgChange.config, config);
			var numArray = bgChange.config.urlImg.length;
			bgChange.config.currentBackground++;
			if(bgChange.config.currentBackground > (numArray)-1) bgChange.config.currentBackground = 0;
			//console.log(bgChange.config.currentBackground)
			$(bgChange.config.container).fadeOut(bgChange.config.timerFade,function() {
				$(bgChange.config.container).css({
					'background-image' : "url('" + bgChange.config.path + bgChange.config.urlImg[bgChange.config.currentBackground] + "')"
				});
				$(bgChange.config.container).fadeIn(bgChange.config.timerFade).delay(bgChange.config.delayFade);
			});

			setTimeout(bgChange.slide.changeImg, bgChange.config.timer);
		}
	}
};

var wordChange = {
	config : {
		container : "#frases", /* id div contenedor */
		path : "images", /* ruta de las imagenes */
		dato : "", /* img Imagen  -  text Texto */
		tipo : "", /* default Orden  -  1 Aleatorio */
		timer : 5000, /* tiempo en milisegundos */
		extencion : "", /* tipo de imagen .png .jpg */
		xcont : 0,
		urlImg : []
	},
	frases : {
		init : function (config) {
			$.extend(wordChange.config, config);
			div = wordChange.config.container;
			wordChange.frases.mostrarFrases();      
			setInterval(wordChange.frases.mostrarFrases, wordChange.config.timer);
		},
		mostrarFrases : function (config) {
			$.extend(wordChange.config, config);
			var numFrases = wordChange.config.urlImg.length;
			if(!wordChange.config.tipo){
				if(wordChange.config.xcont < numFrases){
					if(wordChange.config.xcont > (numFrases)-1) wordChange.config.xcont = 0;
					if(wordChange.config.dato === "img"){
						etiqueta = '<img src="' + wordChange.config.path + wordChange.config.urlImg[wordChange.config.xcont] + wordChange.config.extencion + '"/>';      
					};
					if(wordChange.config.dato === "text"){
						etiqueta = '<h1>' + wordChange.config.urlImg[wordChange.config.xcont] + '</h1>';
					};
					$(div).fadeOut(1000, function() {
						$(div).html(etiqueta);
					}).fadeIn(3000, function() {
						$(div).html(etiqueta);
					});
					wordChange.config.xcont++;
				}
			}else{
				aleatorio = Math.floor((Math.random()*(numFrases)));
				console.log(aleatorio)
				if (wordChange.config.dato === "img"){
					etiqueta = '<img src="' + wordChange.config.path + wordChange.config.urlImg[aleatorio] + wordChange.config.extencion + '" />';
				};
				if (wordChange.config.dato === "text"){
					etiqueta = '<h1>' + wordChange.config.urlImg[ aleatorio] + '</h1>';
				};
				$(div).fadeOut('1000', function() {
					$(div).html(etiqueta);
				}).fadeIn(3000, function() {
					$(div).html(etiqueta);
				});
			};
			if (wordChange.config.xcont >= numFrases){
				wordChange.config.xcont = 0;
			};
		}
	}
}