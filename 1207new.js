var lightSwitch = document.getElementById("light-switch");
var curtain = document.getElementById("curtain");

lightSwitch.onclick = function () {
	curtain.classList.toggle('fadein');
	return false;
}



new Swipe(document.getElementById("light-switch"), function(event, direction) {
	event.preventDefault();
	
	switch (direction) {
		case "up":
			// Handle Swipe Up
			break;
		case "down":
	curtain.classList.toggle('fadein');
			break;
		case "left":
			// Handle Swipe Left
			break;
		case "right":
			// Handle Swipe Right
			break;
	}
});



function Swipe(elem, callback) {
	var self = this;
	this.callback = callback;

	function handleEvent(e) {
		self.touchHandler(e);
	}

	elem.addEventListener('touchstart', handleEvent, false);
	elem.addEventListener('touchmove', handleEvent, false);
	elem.addEventListener('touchend', handleEvent, false);
}
Swipe.prototype.touches = {
	"touchstart": {"x":-1, "y":-1},
	"touchmove" : {"x":-1, "y":-1},
	"touchend"  : false,
	"direction" : "undetermined"
};
Swipe.prototype.touchHandler = function (event) {
	var touch;
	if (typeof event !== 'undefined'){
		if (typeof event.touches !== 'undefined') {
			touch = event.touches[0];
			switch (event.type) {
				case 'touchstart':
				case 'touchmove':
					this.touches[event.type].x = touch.pageX;
					this.touches[event.type].y = touch.pageY;
					break;
				case 'touchend':
					this.touches[event.type] = true;
					var x = (this.touches.touchstart.x - this.touches.touchmove.x),
						y = (this.touches.touchstart.y - this.touches.touchmove.y);
					if (x < 0) x /= -1;
					if (y < 0) y /= -1;
					if (x > y)
						this.touches.direction = this.touches.touchstart.x < this.touches.touchmove.x ? "right" : "left";
					else
						this.touches.direction = this.touches.touchstart.y < this.touches.touchmove.y ? "down" : "up";
					this.callback(event, this.touches.direction);
					break;
			}
		}
	}
};
