
var Canvas = module.exports = function Canvas (w, h) {
  var canvas = document.createElement('canvas')
  canvas.width = w || 300
  canvas.height = h || 150
  return canvas
}

Canvas.Image = function () {
  var img = document.createElement('img')
  return img
}

Canvas.ImageData = function () {
  return new (Function.prototype.bind
              .apply(ImageData, [null]
                     .concat(Array.prototype.slice
                             .call(arguments))))
}
