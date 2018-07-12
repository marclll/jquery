var id=1;

$().ready(function(){
	$.get("http://40.118.8.76/pokemons",
		function(data){
			$("#code").text(data[0].num);
			$("#normal").attr("src",data[0].images[0].front);
			$("#shiny").attr("src",data[0].images[1].front_shiny);
			$("#name").text(data[0].name);
			$("#type").text(data[0].types[0].type.name+" & "+data[0].types[1].type.name);
		},"json")

		$("#prev").click(function(){
			--id;
			if (id==0) id=6;
			act();
		});

		$("#next").click(function(){
			++id;
			if (id==7) id=1;
			act();
		});

		$("#search").click(function(){
			
		});
});


function act(){
	$.get("http://40.118.8.76/pokemons/"+id,
		function(data){
			$("#code").text(data.num);
			$("#normal").attr("src",data.images[0].front);
			$("#shiny").attr("src",data.images[1].front_shiny);
			$("#name").text(data.name);
			var n=data.types.length;
			$("#type").text(data.types[0].type.name);
			for (i=1;i<n;++i){
				$("#type").append(" & "+data.types[i].type.name);
			}
		},"json");
}