$(function() {
	// .Натсраиваем инстафид
	var feed = new Instafeed({
		// clientId: '4119253ff7c54237bdba3d7b67bb1713',
		target: 'instafeed',
		get: 'user',
		userId: 215682317,
		accessToken: '215682317.4119253.16c8867cab1a4fafaf7f67a2b620a38c',
		useHttp: true,
        // tagName: 'tagged',
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();
});