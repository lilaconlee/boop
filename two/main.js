var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = 500;
var h = window.innerHeight * window.devicePixelRatio;
var w = window.innerWidth * window.devicePixelRatio;
var flakes = [];
var base = '#1A2150';
var alph = [1,.2,.1,.05];

function background() {
  ctx.fillStyle = base;
  ctx.fillRect(0,0,w,h);
}

function makeFlakes() {
  for (var i = 0; i <= w/30; i++) {
    flakes.push([Math.random() * w, Math.random() * h]);
  }
}

function draw() {
  flakes.forEach(function (flake) {
    for (var i = 0; i <= 3; i++) {
      var x = 10 * i;

      ctx.fillStyle = 'rgba(255, 255, 255, ' + alph[i] + ')';
      ctx.fillRect(flake[0],flake[1] - x,10,10);

      ctx.fillStyle = base;
      ctx.fillRect(flake[0]-1,flake[1] - (x + 10),12,10);
    }
    if (flake[1] >= h + 30) {
      flake[0] = Math.random() * w;
      flake[1] = 0;
    } else {
      flake[1]++;
    }
  });

  setTimeout(function() {
      requestAnimationFrame(draw);
  }, 1000/fps);
}

function fillScreen() {
  canvas.width = w;
  canvas.height = h;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
}

fillScreen();
makeFlakes();
background();
draw();
