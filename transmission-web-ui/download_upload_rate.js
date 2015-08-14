var debug = false;

jQuery( function( $ ) {
	
	// do once
	trans.init();
	
	// run on a loop
	setInterval( function() {
		
		if ( ! trans.is_download_or_upload_active() ) {
			if (debug) console.log("nothing currently downloading or uploading.");
			
			trans.reset_title();
			
			return;
		}
		
		if (debug) console.log("updating title with download and upload rate.");
		
		trans.update_title();
		
	}, 500 );
	
});

var trans = {
	
	_original_title: "",
	
	init: function() {
		var _self = this;
		
		var original_title = $("title").text();
		_self.set_original_title( original_title );
		
	},
	
	get_original_title: function() {
		var _self = this;
		
		return _self._original_title;
	},
	
	set_original_title: function( title ) {
		var _self = this;
		
		_self._original_title = title;
		
	},
	
	reset_title: function() {
		var _self = this;
		
		$("title").text( _self.get_original_title() );
	},
	
	update_title: function() {
		var _self = this;
		var download_rate = _self.get_download_rate();
		var upload_rate = _self.get_upload_rate();
		var original_title = _self.get_original_title();
		
		$("title").text( "↓" + download_rate + " ↑" + upload_rate + " - " + original_title );
		
	},
	
	get_download_rate: function() {
		var _self = this;
		
		var download_rate = $("#speed-dn-label").text();
		
		return download_rate;
		
	},
	
	get_upload_rate: function() {
		var _self = this;
		
		var upload_rate = $("#speed-up-label").text();
		
		return upload_rate;
	},
	
	is_download_or_upload_active: function() {
		var _self = this;
		
		var download_rate = _self.get_download_rate();
		var upload_rate = _self.get_upload_rate();
		
		if ( download_rate == "0 kB/s" && upload_rate == "0 kB/s" ) {
			return false;
		}
		
		return true;
	}
	
};