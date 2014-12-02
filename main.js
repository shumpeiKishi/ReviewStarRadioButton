	window.onload = function () {
		
		var radios = document.querySelectorAll('.radio-star'),
		radiosLabels = document.querySelectorAll('.label-star'),
		len = radios.length;

	// Find out which radio button is clicked.
	var findIndex = function (elemList, elem) {

		for (i = 0, len = elemList.length; i < len; i++)  {
			if (elem === elemList.item(i)) {
				radioIndex = i;
				return i;
				break;
			};
		};
	};

	// change the image of radio button (label).
	var changeRadioStar = function () {
		var self = this,
		radioIndex = findIndex(radios, self);

		// Initialize all labels;
		for (i = 0; i < len; i++) {
			radiosLabels.item(i).className = 'label-star star-inactive';
		};

		// Set clicked and the ones before to active;
		for (i = 0; i <= radioIndex; i++) {
			radiosLabels.item(i).className = 'label-star star-active';
		};
	};

	// Give change event to radio buttons.
	for (i = 0; i < len; i++) {
		radios.item(i).addEventListener("change", changeRadioStar);
	};

};
