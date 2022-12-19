
	var pleft = 0
	var ptop = 0
    var demo = document.getElementById('demo')






onkeydown = function(e){
	

	if(e.key == "ArrowRight"){
		if(pleft < 600){
			console.log(e.key)
			demo.style.left=pleft +"px"
			demo.style.transform='rotateY(0deg)'
			pleft+=30
		}
		
		
	}
	if(e.key == "ArrowLeft"){
		console.log(e.key)
		demo.style.left=pleft +"px"
		demo.style.transform='rotateY(180deg)'
		pleft-=30
	}
	if(e.key == "ArrowUp"){
		console.log(e.key)
		demo.style.top=ptop +"px"
		ptop-=30
	}
	if(e.key == "ArrowDown"){
		console.log(e.key)
		demo.style.top=ptop +"px"
		ptop+=30
	}




}