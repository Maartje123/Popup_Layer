/*
 * Basic responsive mashup template
 * @owner Enter you name here 
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Mashup Components.qvf', config);

	//get objects -- inserted here --
	app.getObject('CurrentSelections','CurrentSelections');
	
	app.getObject('SalesOverTime','eBwDCmJ');
	app.getObject('LB_MaritalStatus','vMLRW');
	app.getObject('LB_ProductCategory2','jZxVJP');
	
	
	//create cubes and lists -- inserted here --
 

  // Trigger Events
  // Function to toggle hidden objects in a bootstrap popup modal
	$.fn.extend({
	  toggleResize: function() {
	    return this.toggle(400, function() {
	      qlik.resize();
	    });
	  }
	});

	// IDs for showing up on toggleResize function (see above)
		$('#ShowMap').on('click', function(event) {
     	$('#LB_ProductCategory2').hide().toggleResize();
		 $('#CustomerGeography').hide().toggleResize();
		 $('#LB_MaritalStatus').hide().toggleResize();
		 $('#SalesOverTime').hide().toggleResize();
	 });

	 $('#showViz').on('click', function(event) {
 		 qlik.resize();
		 $('#SalesOverTime').hide().toggleResize();
 	 });

	 $('.fa-chevron-up').on('click', function(event) {
     $('#SalesOverTime').hide().toggleResize();
 	 });



} );
