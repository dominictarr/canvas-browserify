# canvas-browserify

wrap canvas so you can load it the same in node or the client!

## Example

draw a green circle in both the browser or node.

``` js
//example.js
var Canvas = require('./')

var dia = 200
var canvas = new Canvas(dia, dia)
var ctx = canvas.getContext('2d')

var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = (dia - 5)/2;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'green';
context.fill();
context.lineWidth = 5;
context.strokeStyle = '#003300';
context.stroke();

if(process.title == 'browser') {
  document.body.appendChild(canvas)
} else {
  canvas.pngStream().pipe(process.stdout)
}
```

run it in node...
```
node example.js > circle.png
```

bundle and run in the browser
```
browserify example | indexhtmlify > index.html
open index.html
```

## License

MIT
