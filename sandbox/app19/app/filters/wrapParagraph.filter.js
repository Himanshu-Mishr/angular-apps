(function(){
	'use strict';

	angular.module('app.filters')
		.filter('wrapParagraph', wrapParagraph);


	// wraps words
	/*
		example :
		some text .... | wrapParagraph:start:limit
		some text .... | wrapParagraph:0:25
	*/
    function wrapParagraph() {
        'use strict';
        return function(items, begin, end) {
            if (items != null) {
                if (items.length > 25)
                    return items.slice(begin, end) + "...";
                else
                    return items;
            } else {
                return "N/A";
            }
        };
    }


})();