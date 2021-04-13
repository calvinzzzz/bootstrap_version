
// Instantiate a slider
var mySlider = $("input.slider").bootstrapSlider();

// Call a method on the slider
var value = mySlider.bootstrapSlider('getValue');
let generateUrl = function (defaultValue) {
    let baseValue = 581;
    baseValue += defaultValue * 4;
    
    let urlString = "";
    let toStringValue = [...baseValue.toString()];

    for (let j = 0; j < 8-toStringValue.length; j++) {
        urlString += "0";
    }
    urlString += baseValue.toString();
    let url = "assets/img/Sheep MicroCT/resized_20191028s__IR_rec" + urlString  + ".jpg"
    return url;
}

$('#imageSilderID').on('change', function(o){
   //return amount value
   currentValue = o.value.newValue;
   var imagePath = generateUrl(currentValue);
   $("#imgViewer").attr("src", imagePath);
});
