var requestAnimationFrame, canvas, context, width, height, keys;

(initialize());


function initialize () {
	requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimation || window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	// these can be arbitrary, but should be less than the background image dimensions
	// height can be the same if there will be no vertical change in background
	width = 800;
	height = 600;
	canvas.width = width;
	canvas.height = height;

	keys = [];

	player = initPlayer(width/2);
}

// on page load
window.addEventListener('load', function () {
	update();
});

document.body.addEventListener('keydown', function(){
	keys[event.keyCode] = true;
});
document.body.addEventListener('keyup', function(){
    keys[event.keyCode] = false;
});


// on frame draw
function update () {
	if (keys[38])
	{

	}
    if (keys[37])
    {
    	//left
		if (player.xVelocity > -player.maxSpeed)
		{
			player.xVelocity--;
		}
		player.xVelocity--;
    }
    if (keys[39])
    {
    	//right
        if (player.xVelocity < -player.maxSpeed)
        {
            player.xVelocity++;
        }
		player.xVelocity++;
    }

    player.update();
    player.x+= player.xVelocity;

	player.render();
	context.fillStyle = 'green';
	//x,y,and size values Places a square in the middle with 25 x 25 dimensions
	context.fillRect(width / 2, height / 2, 25, 25);
	// update frame
	requestAnimationFrame(update);
}
