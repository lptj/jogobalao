var count = 0;

function addBola(){
	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var area1 = Math.floor(Math.random()* 1210);
	var area2 = Math.floor(Math.random()* 708);
	var idBola = Math.floor(Math.random()* 5);
	var listaBola = ["10px", "20px", "30px", "40px", "50px"];
	var tamBola = listaBola[idBola];
	var idCor = Math.floor(Math.random()* 5);
	var listaCor = ["Red", "Green", "Blue", "Pink", "Yellow"];
	var cor = listaCor[idCor];

	bola.setAttribute("style","width:"+tamBola+"; height:"+tamBola+";border-radius:"+tamBola+"; right: "+area1+"px; top: "+area2+"px; background-color: "+cor+";");
	bola.setAttribute("onclick", "estourar(this)");


	local = document.getElementById("areaJogo");
	local.appendChild(bola);
	count++;

	perdeu(count);
}
function estourar(bola){
	local.removeChild(bola);
	placar = document.getElementById("score").innerHTML++;
	count--;
	if(placar == 10){
		setInterval(addBola, 750);
	}
	if(placar == 25){
		alert("Você ganhou!");
		window.location.reload();
	}
}

function iniciar(){
	setInterval(addBola, 1000);
}

function perdeu(erros){
	if(count == 10){
		alert("Você perdeu!");
		window.location.reload();
	}
}