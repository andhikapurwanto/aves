Clazz.createPackage('com.initiator.widget');

Clazz.com.initiator.widget.Initiator = Clazz.extend(Clazz.Widget,{
	widgetContent : null,

	initialize : function(config) {
		
	},
	
	
	getHeader : function (){
		var header= $('<div class="login-header"></div>');
		var headerTitle = $('<div class="login-header-title">Accelerating Inovation</div>');
		
		header.append(headerTitle);
		return header;
	},
	getFooter : function (){
		var footer =$('<div class="login-footer"></div>');
		var footerText=$('<div class="login-footer-text">&copy; 2012 Photon Infotech Pvt Ltd  |  </div>');
		var footerLink=$('<div class="login-footer-link"><a>www.photoninfotech.in</a></div>');
		
		footer.append(footerLink);
		footer.append(footerText);
		return footer;
	},
	getBody : function (){
		var body =$('<div class="login-body"></div>');
		var bodyTitle = $('<div class="login-body-title">Welcome to <b>Pho</b>ton <b>World</b></div>');
		
		body.append(bodyTitle);
		body.append(this.getBodyBox());
		return body;
	},
	getBodyBox : function(){
		var bodyBox =$('<div class="login-body-box"></div>');
		var titleBodyBox=$('<div class="title-body-box">Login to <b>Pulse</b></div>');
		var rememberInput =$('<div class="title-body-box-remember-input"><input type="checkbox" class="login-checkbox">Remember Me</input></div>');	


		var contentUP=$('<div class="content-username-password"></div>');
		var usernameTitle= $('<div class="title-body-box-username-title">Username</div>');
		var usernameInput= $('<div class="title-body-box-username-input"></div>');
		var username = $('<input type="text" class="login-input" placeholder="Enter Your Username"></input>');
		usernameInput.append(username);
		
		var passwordTitle= $('<div class="title-body-box-password-title">Password</div>');
		var passwordInput= $('<div class="title-body-box-password-input"></div>');
		var password = $('<input type="password" class="login-input" placeholder="Enter Your Password"></input>');
		passwordInput.append(password);
		
		
		contentUP.append(usernameTitle);
		contentUP.append(usernameInput);
		contentUP.append(passwordTitle);
		contentUP.append(passwordInput);

		
		bodyBox.append(titleBodyBox);
		bodyBox.append(contentUP);
		bodyBox.append(rememberInput);
		bodyBox.append(this.getButtonLine(username,password));
		
		


		
		return	bodyBox;
	},
	
	getButtonLine : function(username,password){
	
	
		var content =$('<div class="content-login-button"></div>');
		var forgotPasswordLink = $('<div class="title-body-box-forgot"><a class="login-link">Forgot Your Password ?</a></div>');
		var buttonLogin = $('<div class="title-body-box-login-button"><button class="login-button">Login</button></div>');
		
		content.append(buttonLogin);
		content.append(forgotPasswordLink);
	
		buttonLogin.click(function(){
		var myListener = new Clazz.com.initiator.widget.LoginListener();
			myListener.buttonLoginClick(username.val(),password.val());
		});
		
		return content;
		
	},
	
	getSpinner:function(){
		var spinnerContent=$('<div class="spinner-content"></div>');
		
		return spinnerContent;
	},
	
	setWidgetContent : function() {
		var widget = $('<div class="initiator-class"></div>');
		widget.append(this.getHeader());
		widget.append(this.getBody());
		widget.append(this.getFooter());
		widget.append(this.getSpinner());
		this.widgetContent = widget;
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
		this.setWidgetContent();
		return this.widgetContent;
	},
});