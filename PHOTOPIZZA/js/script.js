function scrollTo(target){
        var speed = 1000;
        var top = $('#' + target).offset().top;
        $('html, body').animate({scrollTop: top}, speed);
        return false;
}
function social(getSocial){
var shareUrl = 'http://megavisor.com/ru/photopizza'; /*Tumblr is not supporting this part of URL: "http://" */
	if (getSocial == 'facebook'){
	window.open('http://www.facebook.com/sharer.php?u='+ shareUrl,'facebook','width=640,height=480,toolbar=0');
	} else if (getSocial == 'gp') {
	window.open('https://plus.google.com/share?url='+ shareUrl,'gp','width=640,height=480,toolbar=0');
	} else if (getSocial == 'twitter') {
	window.open('http://twitter.com/share?url='+ shareUrl +'&hashtags=MEGAVISOR,PHOTOPIZZA','twitter','width=640,height=480,toolbar=0');
	} else if (getSocial == 'vk') {
	window.open('http://vkontakte.ru/share.php?url='+ shareUrl,'vk','width=640,height=480,toolbar=0');
	} else if (getSocial == 'tmblr') {
	window.open('http://tumblr.com/share/link?url=megavisor.com/ru/photopizza&name=PHOTOPIZZA','tumblr','width=640,height=480,toolbar=0');
	}
}