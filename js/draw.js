$(document).ready(function(){
$("#draw").click(function() {
  
  // Variables :
  var color = "#000";
  var painting = false;
  var started = false;
  var width_brush = 5;
  var canvas = document.getElementById("canvas");
  var cursorX, cursorY;
  var restoreCanvasArray = [];
  var restoreCanvasIndex = 0;
  
  var context = canvas.getContext('2d');
  
  // Trait arrondi :
  context.lineJoin = 'round';
  context.lineCap = 'round';
$("canvas").mousedown( function(e) {
    painting = true;
    // Coordonnées de la souris :
    cursorX = (e.pageX - this.offsetLeft);
    cursorY = (e.pageY - this.offsetTop);
  });
$("canvas").mouseup( function() {

    painting = false;
    started = false;
  });

$("canvas").mousemove( function(e) {
    // Si je suis en train de dessiner (click souris enfoncé) :
    if (painting) {
      // Set Coordonnées de la souris :
      cursorX = (e.pageX - this.offsetLeft) - 10; // 10 = décalage du curseur
      cursorY = (e.pageY - this.offsetTop) - 10;
      // Dessine une ligne :
      drawLine();
    }
  });
  // Click souris enfoncé sur le canvas, je dessine :
  // Fonction qui dessine une ligne :
  function drawLine() {
    // Si c'est le début, j'initialise
    if (!started) {
      // Je place mon curseur pour la première fois :
      context.beginPath();
      context.moveTo(cursorX, cursorY);
      started = true;
    } 
    // Sinon je dessine
    else {
      context.lineTo(cursorX, cursorY);
      context.strokeStyle = color;
      context.lineWidth = width_brush;
      context.stroke();
    }
  }
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