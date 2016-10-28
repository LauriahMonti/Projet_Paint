$(document).ready(function(){
      // Pour chaque carré de couleur :
  $("#couleurs a").each(function() {
    // Je lui attribut une couleur de fond :
    $(this).css("background", $(this).attr("data-couleur"));
  });
    // Bouton Reset :
  $("#reset").click(function reset_canvas() {
    // Clear canvas :
    clear_canvas();
    // Valeurs par défaut :
    $("#largeur_pinceau").attr("value", 5);
    width_brush = 5;
    $("#output").html("5 pixels");
    });
});