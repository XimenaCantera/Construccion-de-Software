const http = require('http');
 
 const server = http.createServer( (request, response) => {    
 
     console.log(request.url);
 
     if(request.url === "/") {
         response.setHeader('Content-Type', 'text/html');
         response.write('<!DOCTYPE html>');
         response.write('<html>');
         response.write('<head><meta charset="utf-8"></head><body>');
        
         response.write('<table class="default">');
		response.write('<caption>Principales hobbys y mi Top 3</caption>');
		response.write('<tr>');
	    response.write('<th>Escuchar música</th>');
	    response.write('<th>Ver películas</th>');
	    response.write('<th>Leer</th>');
	    response.write('<th>Jugar</th>');
	    response.write('</tr>');
	   	response.write('<tr>');
	    response.write('<td>Stray Kids</td>');
	    response.write('<td>Terror y suspenso</td>');
	    response.write('<td>The Loop</td>');
	    response.write('<td> Clash Of Clans </td>');
	    response.write('</tr>');
	    response.write('<tr>');
	    response.write('<td>Harry Styles</td>');
	    response.write('<td>Ciencia ficción</td>');
	    response.write('<td>El jardín de las mariposas</td>');
	    response.write('<td>Valorant</td>');
	  	response.write('</tr>');
	  	response.write('<tr>');
	    response.write('<td>The Weekend</td>');
	    response.write('<td>Aventuras</td>');
	    response.write('<td>La biblioteca de la media noche</td>');
	    response.write('<td>Minecraft</td>');
	    response.write('</tr>');
	    response.write('</table>');
		response.write('<p style="color: rgba(168, 0, 0, 0.84)">¿En qué coincidimos en gustos?</p>');
	    response.write("</form>");

	    response.write('<a class="button is-warning is-light is-outlined is-normal" href="/enviar">Sugerir</a>');

	    response.end();
	    } else if (request.url === "/enviar" && request.method === "GET") {
         response.setHeader('Content-Type', 'text/html');
         response.write('<!DOCTYPE html>');
         response.write('<html>');
         response.write('<head><meta charset="utf-8"></head><body>');
        	
        let radios = '<fieldset><legend>¿Cuál te gs¿usta más?</legend>';

        response.write('<form action="/enviar" method="POST">');

         response.write('<div class="columns">');
	  	 response.write('<div class="column">');
	  	 response.write('<h5 class="title is-5">Música</h5>');
		 response.write('<form>');
		 response.write('<input type="checkbox" name="Gusto" value="JONGHYUN">');
		 response.write('<label for="L3">Just Chill - JONGHYUN</label><br>');
		
		response.write('<h5 class="title is-5">Películas</h5>');
		response.write('<form>');
		response.write('<input type="checkbox" name="Gusto" value="Duna">');
		response.write('<label for="L4">Duna</label><br><br>');
			  

	    response.write('<div class="column">');
		response.write('<article class="message">');
		response.write('<div class="message-header">');
		response.write('<p>Just Chill - JONGHYUN</p>');
		response.write('</div>');
		response.write('<div class="message-body">');
		response.write('Oh, the sound of the rain has come to me<br>Pit pat, it knocks on my window<br>But I don’t Wanna open<br>I wanna be alone<br>Let me be still just for today<br>I’m gonna turn on the AC and get under the covers<br>I wanna be wasteful...<br>');
		response.write('</div>');
		response.write('</article>');

		response.write('<article class="message">');
		response.write('<div class="message-header">');
		response.write('<p>DUNA</p>');
		response.write('</div>');
		response.write('<div class="message-body">');
		response.write('“Duna” cuenta la historia de Paul Atreides, un joven brillante, talentoso y con un destino que va más allá de su comprensión, quien debe viajar al planeta más peligroso del universo para garantizar el futuro de su familia y de su gente.');
		response.write('</div>');
		response.write('</article>');

	  	response.write('</div>');
  		response.write('</div>');
        
 
        response.write('<br><input type="submit" value="Enviar">');
 
        response.write("</form>");
        response.write('</body></html>');
        response.end();

     } else if (request.url === "/enviar" && request.method === "POST") {

        const datos = [];

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const Gusto = datos_completos.split('&')[0].split('=')[1];
            console.log(Gusto);
            if(Gusto === "JONGHYUN") {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
         		response.write('<head><meta charset="utf-8"></head><body>');
                response.write("Qué buenos gustos tienes!!");
                response.write('<br><img alt="JONGHYUN" src="https://i.pinimg.com/564x/1a/eb/d9/1aebd96f7e29bf7fea42599af754908e.jpg">');
                return response.end();
            } else {
                response.setHeader('Content-Type', 'text/html');
                response.write('<!DOCTYPE html>');
                response.write('<html>');
         		response.write('<head><meta charset="utf-8"></head><body>');
                response.write("¿Qué te pareció la película?");
                response.write('<br><img alt="duna" src="https://i.pinimg.com/564x/98/27/ae/9827ae0ed42031dead8d75e3d46ef933.jpg">');
                return response.end();
            }
            
        });

        
     } else {
         response.statusCode = 404;
         response.setHeader('Content-Type', 'text/html');
         response.write('<!DOCTYPE html>');
         response.write('<html>');
   		 response.write('<head><meta charset="utf-8"></head><body>');
         response.write("A dónde intentas ir???");
         response.write('<br><img src="https://i.pinimg.com/564x/e3/5c/83/e35c83c38269d60ec602f06c2d11eb2e.jpg">');
         response.end();
     }
 
     
     
 });

  server.listen(4000);