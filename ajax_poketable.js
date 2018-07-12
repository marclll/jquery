var id=1;

$(function(){
	$.get("http://40.118.8.76/pokemons",
		function(data){
			$("#code").text(data[0].num);
			$("#normal").attr("src",data[0].images[0].front);
			$("#shiny").attr("src",data[0].images[1].front_shiny);
			$("#name").text(data[0].name);
			$("#type").text(data[0].types[0].type.name+" & "+data[0].types[1].type.name);
			if (data[0].moves.HM!=null) $("#hm").text(data[0].moves.HM[0]);
			else $("#hm").text("null");
		},"json");

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
			var x=$("#poke").val();
			var find=false;
			$.get("http://40.118.8.76/pokemons/?num="+x,
				function(data){
					if (data.length!=0){
						$("#code").text(data[0].num);
						$("#normal").attr("src",data[0].images[0].front);
						$("#shiny").attr("src",data[0].images[1].front_shiny);
						$("#name").text(data[0].name);
						var n=data[0].types.length;
						$("#type").text(data[0].types[0].type.name);
						for (i=1;i<n;++i){
							$("#type").append(" & "+data[0].types[i].type.name);
						}
						if (data[0].moves.HM!=null) $("#hm").text(data[0].moves.HM[0]);
						else $("#hm").text("null");
						find=true;
					}
				},"json")

			.done(function(){
				if (!find){
					$.get("http://40.118.8.76/pokemons/?name="+x,
					function(data){
						if (data.length!=0){
							$("#code").text(data[0].num);
							$("#normal").attr("src",data[0].images[0].front);
							$("#shiny").attr("src",data[0].images[1].front_shiny);
							$("#name").text(data[0].name);
							var n=data[0].types.length;
							$("#type").text(data[0].types[0].type.name);
							for (i=1;i<n;++i){
								$("#type").append(" & "+data[0].types[i].type.name);
							}
							if (data[0].moves.HM!=null) $("#hm").text(data[0].moves.HM[0]);
							else $("#hm").text("null");
							find=true;					}
					},"json")
					.done(function(){
						if (!find && x!="") alert("Invalid name or code");
					});
				}
			});
			$("#poke").val("");
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
			for (var i=1;i<n;++i){
				$("#type").append(" & "+data.types[i].type.name);
			}
			if (data.moves.HM!=null) $("#hm").text(data.moves.HM[0]);
			else $("#hm").text("null");
		},"json");
}