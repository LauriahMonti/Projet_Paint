$(document).ready(function(){
    $("#cercle").click(function() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');

    var mouse = {x: 0, y: 0};
    var start_mouse = {x: 0, y: 0};
    var last_mouse = {x: 0, y: 0};

    /* Mouse Capturing Work */
    canvas.addEventListener('mousemove', function(e) {
        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
    }, false);

    /* Drawing on Paint App */
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';

    canvas.addEventListener('mousedown', function(e) {
        canvas.addEventListener('mousemove', onPaint, false);

        mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
        mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;

        start_mouse.x = mouse.x;
        start_mouse.y = mouse.y;

        onPaint();
    }, false);

    canvas.addEventListener('mouseup', function() {
        canvas.removeEventListener('mousemove', onPaint, false);

        // Writing down to real canvas now
        ctx.drawImage(canvas, 0, 0);
        // Clearing tmp canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

    }, false);

    var onPaint = function() {

        // Tmp canvas is always cleared up before drawing.
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var x = (mouse.x + start_mouse.x) / 2;
        var y = (mouse.y + start_mouse.y) / 2;

        var radius = Math.max(
            Math.abs(mouse.x - start_mouse.x),
            Math.abs(mouse.y - start_mouse.y)
        ) / 2;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI*2, false);
        // ctx.arc(x, y, 5, 0, Math.PI*2, false);
        ctx.stroke();
        ctx.closePath();

    };
            $("#couleurs a").each(function () {
    // Je lui attribut une couleur de fond :
    $(this).css("background", $(this).attr("data-couleur"));
    // Et au click :
    $(this).click(function() {
      // Je change la couleur du pinceau :
      color = $(this).attr("data-couleur");
      // Et les classes CSS :
      $("#couleurs a").removeAttr("class", "");
      $(this).attr("class", "actif");
      return false;
  });
});
});
});
