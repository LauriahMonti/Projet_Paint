$(document).ready(function(){
    $("#line").click(function() {
        var color = "#000";
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');



        var mouse = {x: 0, y: 0};
        var start_mouse = {x: 0, y: 0};


        canvas.addEventListener('mousemove', function(e) {
            mouse.x = typeof e.offsetX !== 'undefined' ? e.offsetX : e.layerX;
            mouse.y = typeof e.offsetY !== 'undefined' ? e.offsetY : e.layerY;
            ctx.lineWidth = 5;
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.strokeStyle = color;
            ctx.fillstyle = color;
        }, false);




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

            ctx.drawImage(canvas, 0, 0);
            /*ctx.clearRect(0, 0, canvas.width, canvas.height);*/

        }, false);
        function onPaint() {


            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.beginPath();
            ctx.moveTo(start_mouse.x, start_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = color;
            ctx.stroke();
            /*ctx.closePath();*/

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
        function stoped(){
            drawLine();
        }
        $("#draw").click(function() {
            stoped();
        });
    });
});
