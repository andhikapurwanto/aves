var Clasic={
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
		return body;
	},
	
	
	setWidgetContent : function() {
		var widget = $('<div class="initiator-class"></div>');
		widget.append(this.getHeader());
		widget.append(this.getBody());
		widget.append(this.getFooter());
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
};