<script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.5.0/lottie.js'></script>


<script>


var theWindow = $(window);
var winHeight = theWindow.height();
var animDuration = winHeight / 2;
var animData = {
	container: document.getElementById('lottie-1'),
	renderer: 'svg',
	loop: false,
	autoplay: false,
	path: 'https://raw.githubusercontent.com/lomaxgithub/bodymovin/master/viveska.json'
};
var anim = bodymovin.loadAnimation(animData);

const getOffsetFromAnimationStart =
    (animationData, bottomAnimationElementOffset = 0) => {
	const minOffset = $(animationData.container).offset().top
	    - $(window).height() + $(animationData.container).height()
	    - bottomAnimationElementOffset;
	const scrollPosition = theWindow.scrollTop() - minOffset;
	return scrollPosition;
};

$( window ).scroll(function() {
    const bottomAnimationElementOffset = 100;
    const animationScrollPosition
        = getOffsetFromAnimationStart(animData, bottomAnimationElementOffset);
    
    if (animationScrollPosition < 0)
        return;
    animatebodymovin(animDuration, anim, animationScrollPosition);
});

function animatebodymovin(duration, animObject, scrollPosition) {
	var maxFrames = animObject.totalFrames;
	var frame =
	    Math.floor((maxFrames / 100) * (scrollPosition / (duration / 100)));
	
	if (frame < 0 || frame >= maxFrames)
	    return;
	animObject.goToAndStop(frame, true);
}


</script>
