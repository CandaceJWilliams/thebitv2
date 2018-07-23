
console.log("On");

$("#image-holder").mouseenter(function(){
	$(".title-overlay").show();
    $(".description-overlay").show();
    console.log("in");
});

$("#image-holder").mouseleave(function(){
    $(".title-overlay").hide();
    $(".description-overlay").hide();
    console.log("out");
});

$(".starter").click(function() {
   	$(".starter").hide();
    $(".continue").show();
    console.log("pressed");
});

var currentImage = document.getElementById("image");
var currentName = document.getElementsByClassName("title-overlay");
var currentCaption = document.getElementsByClassName("description-overlay");

var teamNames = {

}

var captions = {

}

var images = {

}

var index = 1;

function update(digit) {
	currentImage.src = images[index];
	currentName.innerHTML = teamNames[index];
	currentCaption.innerHTML = captions[index];

	if (index < 0 || index >= teamNames.length ) {
		index = 0;
	} else {
		index += digit;
	}

}



