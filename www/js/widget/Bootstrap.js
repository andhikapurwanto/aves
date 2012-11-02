$(document).ready(function(e) {

//	apiHost:"localhost",
//	apiPort:"8095",

	var container = $('widget\\:myWidget');
	if(container){
		var initiator = new Clazz.com.initiator.widget.Initiator();
		initiator.render(container);
	}
	
});