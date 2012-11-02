Clazz.createPackage('com.spinner.widget');
Clazz.com.spinner.widget.Spinner = Clazz.extend(Clazz.Widget,{
	mySpinner : null,
	
	initialize : function(config) {
		
	},
	
	setMySpinner : function() {
		var spinner = $('<div class="spinner-class"></div>');
		var spinnerContent = $('<div class="spinner-content"></div>');
		this.mySpinner = spinner;
	},

	/***
	 * @author momo
	 * Bind the UI elements with appropriate events
	 */
	bindUI : function (){
		
	},

	/***
	 * @author suryo_p
	 * This method will override renderUI method and will be called when this widget rendered
	 * @returns returning widget content DOM to be rendered
	 */
	renderUI : function() {
		this.setMySpinner();
		return this.mySpinner;
	},
	
});