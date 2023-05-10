onload = function () {

}

// -------------------- TARIFÁRIOS JSON -------------------------//





// ----------------------------- PÁGINA CONSUMOS -----------------------------//



let apis;
const dados = ['./dados/Consumidores de energia elétrica (N.º) por Localização geográfica', './dados/consumo2'];
Promise.all(
	dados.map(json =>
		fetch(json + '.json')
			.then(api => api.json())
	)
).then(data => {
	apis = data.flat();
	//console.log(apis[1].Dados[2020]);


	// ---------- TEMPLATE ITERALS ---------------//
	var aveiro = `<p><h5>Aveiro</h5></p><p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong></p>\u00A0${apis[0].Dados[2020][118].valor}\u00A0 consumidores<br></br><p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>\u00A0${apis[1].Dados[2020][273].valor}\u00A0 kW hora por habitante`;
	var viana = `<p><h5>Viana do Castelo</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica:</strong>\u00A0${apis[0].Dados[2020][2465].valor}\u00A0  consumidores<br></br><p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência:</strong></p>\u00A0${apis[1].Dados[2020][39].valor}\u00A0 kW hora por habitante`;
	var braga = `<p><h5>Braga</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>\u00A0${apis[0].Dados[2020][107].valor}\u00A0 consumidores<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>\u00A0${apis[1].Dados[2020][311].valor}\u00A0 kW hora por habitante`;
	var bragança = "<p><h5>Bragança</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][54].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][316].valor+" kW hora por habitante";
	var vila_real = "<p><h5>Vila Real</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2245].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][240].valor+" kW hora por habitante";
	var porto = "<p><h5>Porto</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][43].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][134].valor+" kW hora por habitante";
	var viseu = "<p><h5>Viseu</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2594].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][39].valor+" kW hora por habitante";
	var coimbra = "<p><h5>Coimbra</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2586].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][274].valor+" kW hora por habitante";
	var guarda = "<p><h5>Guarda</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2145].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][281].valor+" kW hora por habitante";
	var castelo_branco = "<p><h5>Castelo Branco</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2250].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][287].valor+" kW hora por habitante";
	var leiria = "<p><h5>Leiria</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][124].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][226].valor+" kW hora por habitante";
	var santarem = "<p><h5>Santarém</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2047].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][65].valor+" kW hora por habitante";
	var portalegre = "<p><h5>Portalegre</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][79].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][209].valor+" kW hora por habitante";
	var lisboa = "<p><h5>Lisboa</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2148].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][135].valor+" kW hora por habitante";
	var setubal = "<p><h5>Setúbal</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][71].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][180].valor+" kW hora por habitante";
	var evora = "<p><h5>Évora</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][2274].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][151].valor+" kW hora por habitante";
	var beja = "<p><h5>Beja</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][74].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][163].valor+" kW hora por habitante";
	var faro = "<p><h5>Faro</h5></p><strong>Consumidores de energia elétrica (N.º) por Localização geográfica: </strong>" + apis[0].Dados[2020][477].valor + " consumidores"+"<br></br>"+"<p><strong>Consumo de energia elétrica por habitante (kWh/ hab.) por Local de residência: </strong></p>"+apis[1].Dados[2020][310].valor+" kW hora por habitante";


	cidade = (cidade) => {
		document.getElementById("vazio").innerHTML = descricao(cidade);
	}

	descricao = (cidade) => {

		if (cidade === 'aveiro') {

			return aveiro;
		} else if (cidade === 'viana') {

			return viana;
		} else if (cidade === 'braga') {
			return braga;
		} else if (cidade === 'vila_real') {
			return vila_real;
		} else if (cidade === 'bragança') {
			return bragança;
		} else if (cidade === 'porto') {
			return porto;
		} else if (cidade === 'viseu') {
			return viseu;
		} else if (cidade === 'guarda') {
			return guarda;
		} else if (cidade === 'coimbra') {
			return coimbra;
		} else if (cidade === 'castelo_branco') {
			return castelo_branco;
		} else if (cidade === 'leiria') {
			return leiria;
		} else if (cidade === 'santarem') {
			return santarem;
		} else if (cidade === 'portalegre') {
			return portalegre;
		} else if (cidade === 'lisboa') {
			return lisboa;
		} else if (cidade === 'setubal') {
			return setubal;
		} else if (cidade === 'evora') {
			return evora;
		} else if (cidade === 'beja') {
			return beja;
		} else if (cidade === 'faro') {
			return faro;
		}
	}
}).catch(function (erro) {
	console.log(erro);
});




/*  function numRandom() {
  return Math.floor(Math.random() * 5);
}

 var x = numRandom();

console.log(x);

  var comentario=["bom", "mau", "top", "nhec", "nice"];
  
  switch(x){
    case 0:
    console.log(x+' é 0')
    var comentario = comentario[x];
    console.log(comentario)
    break;
    case 1:
    console.log(x+' é 1')
    var comentario = comentario[x];
    console.log(comentario)
    break;
    case 2:
    console.log(x+' é 2')
    var comentario = comentario[x];
    console.log(comentario)
    break;
    case 3:
    console.log(x+' é 3')
    var comentario = comentario[x];
    console.log(comentario)
    break;
    default:
    console.log("zw")
    break;
  }
 */






// ------------ EQUIPA INDEX - CLASS, GETTER, SETTER, DECONSTRUCTOR --------------------//

            



