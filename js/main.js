(function($)
{
	var fullscreen = $('#image-container');
	var fetch_button = $('#fetch-button');
	var url_input = $('#url');
	var fullscreen_elem = document.getElementById('fullscreen');
	var pfx = ["webkit", "moz", "ms", "o", ""];
	
	function RunPrefixMethod(obj, method)
	{
		var p = 0, m, t;
		while (p < pfx.length && !obj[m]) {
			m = method;
			if (pfx[p] == "") {
				m = m.substr(0,1).toLowerCase() + m.substr(1);
			}
			m = pfx[p] + m;
			t = typeof obj[m];
			if (t != "undefined") {
				pfx = [pfx[p]];
				return (t == "function" ? obj[m]() : obj[m]);
			}
			p++;
		}
	}

	var fetch_image = function()
	{
		var url = url_input.val();
		var img = $('<img/>');
		fullscreen.html(img);
		img.attr('src', url);
	}
	
	var go_fullscreen = function() 
	{
		if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
			RunPrefixMethod(document, "CancelFullScreen");
		}
		else {
			RunPrefixMethod(fullscreen_elem, "RequestFullScreen");
		}
	}

	fetch_button.click(fetch_image);
	fullscreen.parent().bind({ click: go_fullscreen })
	
}(jQuery));