function makeAjaxService(){

		//Conserver l'url de base
		var Basic_url= "https://musicbrainz.org/ws/2/"
		var tabfunction = {
			getArtiste:getArtiste,
			getRelease:getRelease,
			getRecording:getRecording,
			getReleaseInfo:getReleaseInfo
		};

		/*
		* Fonction qui renvoie des résultat de recherche pour une chaîne représentant un 
		* methode peut prendre comme valeur:
		*/
		function getArtiste(what,offset){
			//URL de recherche d'artiste
			//var url=Basic_url+"artist/?query=artist:"+what+"&fmt=json";
			var url=`${Basic_url}artist/?query=artist:${what}&fmt=json&offset=${offset}`;
			console.log(url);
			return new Promise(function(resolve,reject){
				request = new XMLHttpRequest();
				request.open("GET", url);
				request.responseType = "json";
				request.onload=(()=>{
					resolve(request.response);
				})

				request.onerror=(()=> {
					reject("erreur");
				})
				request.send();
			});
		}

		/*
		* Fonction qui renvoie des albums en fonction d'une chaine de recherche
		*/
		function getRelease(what,offset)
		{
			//URL de recherche d'album
			var url=`${Basic_url}release/?query=release:${what}&fmt=json&offset=${offset}`;
			console.log(url);
			return new Promise(function(resolve,reject){
				request = new XMLHttpRequest();
				request.open("GET", url);
				request.responseType = "json";
				request.onload=(()=>{
					resolve(request.response);
				})

				request.onerror=(()=> {
					reject("erreur");
				})
				request.send();
			});
		}

		/*
		* Fonction qui renvoie des musiques en fonction d'une chaine de recherche
		*/
		function getRecording(what,offset)
		{
			//URL de recherche d'album
			var url=`${Basic_url}recording/?query=recording:${what}&fmt=json&offset=${offset}`;
			console.log(url);
			return new Promise(function(resolve,reject){
				request = new XMLHttpRequest();
				request.open("GET", url);
				request.responseType = "json";
				request.onload=(()=>{
					resolve(request.response);
				})

				request.onerror=(()=> {
					reject("erreur");
				})
				request.send();
			});
		}

		function getReleaseInfo(id)
		{
			var url=`${Basic_url}release/${id}?inc=recordings&fmt=json`;
			console.log(url);
			return new Promise(function(resolve,reject){
				request = new XMLHttpRequest();
				request.open("GET", url);
				request.responseType = "json";
				request.onload=(()=>{
					resolve(request.response);
				})

				request.onerror=(()=> {
					reject("erreur");
				})
				request.send();
			});
		}


		return tabfunction;
}