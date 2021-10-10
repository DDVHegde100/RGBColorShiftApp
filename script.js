var red = 0;
var green = 0;
var blue = 0;
var background;
background = "gray";
onEvent("redSlider", "change", function( ) {
	red = getProperty("redSlider", "value");
	setProperty("colorDisplay", "background-color", rgb(red,green,blue));
	setText("redValue", red);
});
onEvent("greenSlider", "change", function( ) {
  green = getProperty("greenSlider", "value");
  setProperty("colorDisplay", "background-color", rgb(red,green,blue));
  setText("greenValue", green);
});
onEvent("blueSlider", "change", function( ) {
  blue = getProperty("blueSlider", "value");
  setProperty("colorDisplay", "background-color", rgb(red,green,blue));
  setText("blueValue", blue);
});
onEvent("randomButton", "click", function( ) {
  setProperty("colorDisplay", "background-color", rgb(randomNumber(0, 255),randomNumber(0, 255),randomNumber(0, 255)));
});
