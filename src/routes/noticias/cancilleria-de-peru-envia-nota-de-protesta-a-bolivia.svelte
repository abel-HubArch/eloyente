<script>
import {slide} from 'svelte/transition';
var welcome = "welcomeHeader";
var titulo = "Arce buscará en la OEA la remoción de Almagro a partir de la ‘verdad’ de lo ocurrido en 2019";
var imagen = "https://www.la-razon.com/wp-content/uploads/2021/05/13/02/15.jpg";
var resumen = "El exministro y embajador de la OEA";
var fecha = "LA PAZ / 12 de junio de 2021 / 00:26";

setTimeout(function(){ welcome = "header"}, 3000);


</script>

<style>
     
 
   .welcomeHeader{
      width: 100%;
      height: 100vh;
      background-color: black;
      color: rgb(255, 255, 255);
    
      padding-top: 50px;
      background-position: top center;
     background-repeat: no-repeat;
      background-size: cover;
   }    
   .welcomeHeader .informacionTitle{
       margin: auto;
       text-align: center;
       margin-top: 100px;
       width: 100%;
   }
   .welcomeHeader .informacionTitle{
       margin: auto;
       text-align: center;
       margin-top: 100px;
       width: 100%;
   }
   .welcomeHeader .informacionTitle article{
       margin: auto;
       width: 900px;

   }
   .welcomeHeader .informacionTitle p{
       font-family: Verdana, Geneva, Tahoma, sans-serif;
       font-style: oblique;
       font-size: 20px;
   }
   .welcomeHeader .informacionTitle h3{
       margin-top: -10px;
       font-family: Georgia, 'Times New Roman', Times, serif;
       font-size: 5vw;
       font-weight: 400;
   }
   .welcomeHeader .informacionTitle .resumen{
       font-size: 25px;
   }








   .header{
      width: 100%;
      background-color: black;
      color: rgb(255, 255, 255);
      height: 450px;
      padding-top: 50px;
      background-position: top center;
     background-repeat: no-repeat;
      background-size: cover;

   }
   .overlay{
       position: relative;
       z-index: 1;
       
   }
   .overlay::after {
   color: inherit;
   background-color: rgba(0,0,0,.55);
}

.overlay::after {
   display: block;
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   content: "";
   z-index: -1;
   }
   .header .informacionTitle{
       margin: auto;
       text-align: center;
       margin-top: 100px;
       width: 100%;
   }
   .header .informacionTitle article{
       margin: auto;
       width: 600px;

   }
   .header .informacionTitle p{
       font-family: Verdana, Geneva, Tahoma, sans-serif;
       font-style: oblique;
   }
   .header .informacionTitle h3{
       margin-top: -10px;
       font-family: Georgia, 'Times New Roman', Times, serif;
       font-size: 42px;
       font-weight: 400;
   }
   .header .informacionTitle .resumen{
       font-size: 15px;
   }
   .noticia .fecha{
       font-family: Georgia, 'Times New Roman', Times, serif;
       font-weight: 400;
       font-size: 22px;
       color: #474747;
   }
   .noticia .texto{
       margin-top: 20px;
       width: 50%;
       text-align: left;
       font-family: sans-serif;
       font-weight: 400;
       font-size: 17px;
       color: #474747;
   }
   .noticia .copyright{
       width: 100%;
       background-color: rgb(34,34,34);
       color: white;
       height: 60px;
       text-align: center;
       margin: auto;
       display: flex;
       justify-content: center;
       align-items: center;
       font-family: sans-serif;
   }
   @media only screen and (max-width: 1512px){
       .noticia .texto{
        width: 70%;
        font-size: 16px;
       }
       .welcomeHeader{
      width: 100%;
      height: 100vh;
      padding-top: 50px;
   }    
   .welcomeHeader .informacionTitle article{
       width: 600px;
   }
   .welcomeHeader .informacionTitle p{
       font-size: 18px;
   }
   .welcomeHeader .informacionTitle h3{
       font-size: 60px;
   }
   .welcomeHeader .informacionTitle .resumen{
       font-size: 20px;
   }

   }
   @media only screen and (max-width: 881px){

    .noticia .texto{
        width: 80%;
        font-size: 16px;
       }
       .header{
      padding-top: 40px;
     
   }
   .header .informacionTitle{
       margin-top: 80px;
   
   }
       
   }
   @media only screen and (max-width: 633px){
    .header{
      padding-top: 40px;
     
   }
   .header .informacionTitle{
       margin-top: 70px;
   
   }
        .header .informacionTitle article{
        margin: auto;
        width: 350px;
       
    }

   .header .informacionTitle h3{
       margin-top: -10px;
       font-family: Georgia, 'Times New Roman', Times, serif;
       font-size: 32px;
       font-weight: 400;
   }
   .header .informacionTitle .resumen{
       font-size: 13px;
   }
   .welcomeHeader{
      width: 100%;
      height: 100vh;
      padding-top: 50px;
   }    
   .welcomeHeader .informacionTitle article{
       width: 400px;
   }
   .welcomeHeader .informacionTitle p{
       font-size: 15px;
   }
   .welcomeHeader .informacionTitle h3{
       font-size: 50px;
   }
   .welcomeHeader .informacionTitle .resumen{
       font-size: 18px;
   }

   }
   @media only screen and (max-width: 467px){
    .header{
      padding-top: 20px;
     
   }
    .welcomeHeader{
      width: 100%;
      height: 100vh;
      padding-top: 50px;
   }    
   .welcomeHeader .informacionTitle article{
       width: 400px;
   }
   .welcomeHeader .informacionTitle p{
       font-size: 14px;
   }
   .welcomeHeader .informacionTitle h3{
       font-size: 40px;
   }
   .welcomeHeader .informacionTitle .resumen{
       font-size: 12px;
   }
   }
   @media only screen and (max-width: 467px){
    .header .informacionTitle{
       margin-top: 80px;
   
   }
    .header .informacionTitle article{
       width: 300px;
   }
   .welcomeHeader .informacionTitle article{
       width: 300px;
   }
   
   }
   @media only screen and (max-width: 467px){
    .header{
      padding-top: 10px;
     
   }
    .header .informacionTitle article{
       width: 280px;
   }
   }
   @media only screen and (max-height: 766px){
    .header{
        margin: auto;
        height: 350px;
    }
    .header .informacionTitle{
       margin-top: 0px;
   
   }
   }
 
</style>

<svelte:head>
	<title>{titulo}</title>
    <meta property="fb:app_id"          content="https://www.facebook.com/El-Oyente-105433015108259/" /> 
<meta property="og:type"            content="article" /> 
<meta property="og:url"             content="https://eloyente.web.app/" /> 
<meta property="og:title"           content="{titulo}" /> 
<meta property="og:image"           content="{imagen}" /> 
<meta property="og:description"    content="{resumen}" />
</svelte:head>

<div class="index">
    {#if welcome == "welcomeHeader"}
         <!-- content here -->
         <div class="welcomeHeader overlay" style="background-image:url({imagen});" transition:slide>
            <div class="informacionTitle" transition:slide>
                <article class="animate__animated animate__fadeIn" transition:slide>
                    <p>El Oyente</p>
                    <h3 transition:slide>{titulo}</h3>
                    <p class="resumen" transition:slide>{resumen}</p>
                </article>
            </div>
          </div>
    {:else}
    <div class="header overlay" style="background-image:url({imagen});">
        <div class="informacionTitle">
            <article class="animate__animated animate__fadeIn">
                <p>El Oyente</p>
                <h3>{titulo}</h3>
                <p class="resumen">{resumen}</p>
            </article>
        </div>
      </div>
    {/if}
	
	<div class="noticia" align="center">
         <div class="fecha"> <h3>{fecha}</h3> </div>
		 <div id="fb-root"></div>
		 <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0" nonce="CciGLKUe"></script>
		 <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="button" data-action="like" data-size="large" data-share="true"></div>
		 <div id="fb-root"></div>
		 <div class="texto">
			<p>La expresidenta transitoria Jeanine Áñez se declaró este jueves una «prisionera política» y acusó al Ministerio de Gobierno de «inventar» nuevos tipos penales para mantenerla detenida en el penal de Miraflores, de la ciudad de La Paz, donde está recluida desde marzo por presuntos delitos de terrorismo, sedición y conspiración en el denominado caso “golpe de Estado”.</p>
			<p>«Soy una prisionera política de este gobierno, me acusan de delitos que no he cometido (…), como no hay sustento para sostener las acusaciones que se hacen, inventan nuevos tipos penales para mantenerme presa y yo me siento en total indefensión», reseña una publicación en su cuenta de Twitter.</p>
			<p>La exmandataria acusó al ministro de Gobierno, Eduardo del Castillo, de encabezar un operativo «grosero y abusivo» para detenerla, el 13 de marzo, en su vivienda en Trinidad, Beni.</p>
			<p>Asimismo, denunció que todos los recursos jurídicos que presenta su defensa «son rechazados», porque —a su juicio— no existe independencia de poderes para realizar procesos justos.</p>
			<p>«Si el deterioro de mi salud, exigiendo independencia de poderes y una injusticia imparcial, tiene estas consecuencias, tengo la seguridad (de) que no será en vano, los bolivianos merecen respeto y que el gobierno no use al sistema judicial como venganza política», agrega en su publicación.</p>
			<p>La exdiputada del Movimiento Al Socialismo (MAS) Lidia Patty presentó una demanda penal por la que Áñez fue acusada inicialmente por los presuntos delitos de sedición, terrorismo y conspiración en el llamado caso “golpe de Estado” cuyo proceso está foliado como “Luis Fernando Camacho y otros”.</p>
			<p>Durante el avance de ese proceso, el presidente de la Cámara de Senadores, Andrónico Rodríguez, solicitó ampliar la acusación contra Áñez por resoluciones contrarias a la Constitución y las leyes, por la sucesión de mandato dos días después de la renuncia del entonces presidente Evo Morales en noviembre de 2019.</p>
			<p>Asimismo, otros procesos fueron adicionados a petición del Ministerio de Gobierno y la Procuraduría General del Estado, por los delitos de prolongación de funciones, asociación delictuosa, resoluciones contrarias a la Constitución y las leyes, sedición, incumplimiento de deberes, incumplimiento de deberes y seducción de tropas.</p>
		 </div>
		 <div class="redesSociales" align="center">
			<div id="fb-root"></div>
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0" nonce="7N1pKTbd"></script>
			<div class="fb-share-button" data-href="https://eloyente.web.app/" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Feloyente.web.app%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Compartir</a></div>    
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v11.0" nonce="QkOoRX72"></script>
		<div class="fb-comments" data-href="https://www.facebook.com/permalink.php?story_fbid=105665681751659&amp;id=105433015108259" data-width="500" data-numposts="5"></div>
		</div>
		<div class="copyright"> 
			<p>Copyright &copy; 2021 - Todos Los Derechos Reservados - <a href="/">ElOyente.com</a></p>
		</div>
	</div>
</div>

