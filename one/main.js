var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 20;
var w = window.innerWidth * window.devicePixelRatio;
var h = window.innerHeight * window.devicePixelRatio;
var colors;

function draw() {
  var i = 0;
  var x = 0;
  var d = 30;
  var width = w;
  var height = h;
  while (width > d && height > d) {
    ctx.fillStyle = colors[i%colors.length];
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

function getColors() {
  var color = Please.make_color({
    format: 'hsv'
  });

  colors = Please.make_scheme(color, {
    scheme_type: 'analogous'
  });

  colors.splice(5,1);
  colors.splice(2,1);
  console.log(colors);
}

function fillScreen() {
  canvas.width = w;
  canvas.height = h;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

function resize() {
  w = window.innerWidth * window.devicePixelRatio;
  h = window.innerHeight * window.devicePixelRatio;
  fillScreen();
}

window.onresize = resize;
fillScreen();
getColors();
draw();
