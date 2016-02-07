var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 20;
var colors = ['rgb(250, 128, 114)', 'rgb(250, 173, 114)', 'rgb(250, 218, 114)', 'rgb(236, 250, 114)'];

fillScreen();
draw();

function draw() {
  var i = 0;
  var x = 0;
  var d = 30;
  var width = canvas.width;
  var height = canvas.height;
  while (width > d && height > d) {
    ctx.fillStyle = colors[i%4];
    ctx.fillRect(x,x,width,height);
    x += d;
    width -= 2 * d;
    height -= 2 * d;
    i++;
  }
  colors.push(colors.shift());
  setTimeout(function() {
    requestAnimationFrame(draw);
  }, 1000/fps);
}

function fillScreen() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}
