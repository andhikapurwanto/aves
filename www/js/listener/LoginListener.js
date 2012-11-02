Clazz.createPackage('com.initiator.widget');

Clazz.com.initiator.widget.LoginListener = Clazz.extend(Clazz.Widget,{

	
	buttonLoginClick : function(username,password){
		if(username=="andhika" && password=="andhika"){
			$('.spinner-content').css('visibility','visible');
			var self= this;
			window.setTimeout(function() {
				self.renderMainPage();
			   }, 4000);
////			window.location="main.html";
		}
		else{
			alert("Please check your username and password again");
		}
	},

	renderSpinnerPage : function(){
		var container = $('widget\\:myWidget');
		var spinner = new Clazz.com.spinner.widget.Spinner();
		spinner.render(container);
	},
	
	renderMainPage : function(){
		var container = $('widget\\:myWidget');
		var main = new Clazz.com.main.widget.Main();
		main.render(container);
	},	
	
	renderAja: function(){
		var container = $('widget\\:myWidget');
		var main = new Clazz.com.main.widget.Main();
		main.render(container);
	},	
	
});