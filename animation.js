var big=1;
var fade=20;
var color1=0;
var color2=0;
var color3=0;
var x=0,y=0;

function proceed(){
	setInterval(rotate,1000);
	$("#size").on("click",size);
	setInterval(fadeout,100);
}

function rotate(){
	color1+=70;
	color2+=130;
	color3+=160;
	if (color1>255) color1=color1%255;
	if (color2>255) color2=color2%255;
	if (color3>255) color3=color3%255;
	$("#first").css("background-color","rgb("+color1+","+color2+","+color3+")");
}

function size(){
	if (big==1){
		$("#size").html("Small");
		$("#second").animate({
			width:"300px",
			height:"300px"
		});
		big=0;
	}
	else{
		$("#size").html("Big");
		$("#second").animate({
			width:"150px",
			height:"150px"
		});
		big=1;
	}
}

function fadeout(){
	if (fade>=10){
		$("#fourth").css("opacity","-=.1");
	}
	else if (fade>=0){
		$("#fourth").css("opacity","+=.1");
	}
	else fade=21;
	--fade;
}

$(proceed)