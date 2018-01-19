;( function ( $ ) {
	var timeagoInstance;
	var locale = function(number, index, total_sec) {
	  // number: the timeago / timein number;
	  // index: the index of array below;
	  // total_sec: total seconds between date to be formatted and today's date;
	  return [
		['just now', 'right now'],
		['%ss', 'in %s seconds'],
		['1min', 'in 1 minute'],
		['%smin', 'in %s minutes'],
		['1h', 'in 1 hour'],
		['%sh', 'in %s hours'],
		['1d', 'in 1 day'],
		['%sd', 'in %s days'],
		['1w', 'in 1 week'],
		['%sw', 'in %s weeks'],
		['1m', 'in 1 month'],
		['%sm', 'in %s months'],
		['1y', 'in 1 year'],
		['%sy', 'in %s years']
	  ][index];
	};
	timeago.register('en', locale);
	timeagoInstance = timeago();
	// then you can use it
	timeagoInstance.render($('.date-ago').show());
	
	//category filters
	$('.categories a').each(function () {
		catBranding($(this), 'JavaScript', 'JavaScript');
		catBranding($(this), 'angular', 'Angular 2+');
	});
	
	function catBranding(el, cat, newCat){
		if (el.text().toLowerCase() == cat.toLowerCase()) {
			el.text(newCat);
			el.parents('.meta.lg-side').addClass('category-' + cat.toLowerCase());
            console.log(el.parents('.article-wrapper').find('.bubble'));
            el.parents('.article-wrapper').find('.bubble').addClass('i-' + cat.toLowerCase());
            el.parents('.article-wrapper').find('.bubble').find('img').hide().attr('src', 'images/i/i-' + cat.toLowerCase() + '.png').show();
		}
	}
}) (jQuery);