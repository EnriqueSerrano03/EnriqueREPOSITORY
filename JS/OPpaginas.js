/*SCRIPT OP WINDOWS*/
$(document).ready(function(){

function toggleClassW(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplayW(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplayW(e){
	const dropdownW = e.currentTarget.parentNode;
	const menuW = dropdownW.querySelector('.menuW');
	const iconW = dropdownW.querySelector('.fa-angle-right');

	toggleClassW(menuW,'hideW');
	toggleClassW(iconW,'rotate-90W');
}

function handleOptionSelectedW(e){
	toggleClassW(e.target.parentNode, 'hideW');			

	const idW = e.target.W;
	const newValueW = e.target.textContent + ' ';
	const iconW = document.querySelector('.dropdownW .titleW .fa');


	titleElemW.textContent = newValueW;
	titleElemW.appendChild(iconW);
	
	//Activa evento personalizado
	document.querySelector('.dropdownW .titleW').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(iconW,'rotate-90w',0));
}

function handleTitleChangeW(e){
	const resultW = document.getElementById('resultW');

	resultW.innerHTML = 'The result is: ' + e.target.textContent;
	
}

//obtiene elementos
const dropdownTitleW = document.querySelector('.dropdownW .titleW');
const dropdownOptionsW = document.querySelectorAll('.dropdownW .optionW');

//vincula listeners a estos elementos
dropdownTitleW.addEventListener('click', toggleMenuDisplayW);
dropdownOptionsW.forEach(option => option.addEventListener('click',handleOptionSelectedW));
document.querySelector('.dropdownW .titleW').addEventListener('change',handleTitleChangeW);

/*SCRIPT OP UBUNTU*/
function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menuU');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hideU');
	toggleClass(icon,'rotate-90U');
}

function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hideU');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const icon = document.querySelector('.dropdownU .titleU .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//Activa evento personalizado
	document.querySelector('.dropdownU .titleU').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(icon,'rotate-90U',0));
}

function handleTitleChange(e){
	const result = document.getElementById('result');

	result.innerHTML = 'The result is: ' + e.target.textContent;
}

//obtiene elementos
const dropdownTitle = document.querySelector('.dropdownU .titleU');
const dropdownOptions = document.querySelectorAll('.dropdownU .optionU');

//vincula listeners a estos elementos
dropdownTitle.addEventListener('click', toggleMenuDisplay);
dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));
document.querySelector('.dropdownU .titleU').addEventListener('change',handleTitleChange);

/*SCRIPT OP CLONECILLA*/

function toggleClassC(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplayC(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplayC(e){
	const dropdownC = e.currentTarget.parentNode;
	const menuC = dropdownC.querySelector('.menuC');
	const iconC = dropdownC.querySelector('.fa-angle-right');

	toggleClassC(menuC,'hideC');
	toggleClassC(iconC,'rotate-90C');
}

function handleOptionSelectedC(e){
	toggleClassC(e.target.parentNode, 'hideC');			

	const idC = e.target.C;
	const newValueC = e.target.textContent + ' ';
	const iconC = document.querySelector('.dropdownC .titleC .fa');


	titleElemC.textContent = newValueC;
	titleElemC.appendChild(iconC);
	
	//Activa evento personalizado
	document.querySelector('.dropdownC .titleC').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(iconC,'rotate-90C',0));
}

function handleTitleChangeC(e){
	const resultC = document.getElementById('resultC');

	resultC.innerHTML = 'The result is: ' + e.target.textContent;
	
}

//obtiene elementos
const dropdowntitleC = document.querySelector('.dropdownC .titleC');
const dropdownOptionsC = document.querySelectorAll('.dropdownC .optionC');

//vincula listeners a estos elementos
dropdowntitleC.addEventListener('click', toggleMenuDisplayC);
dropdownOptionsC.forEach(option => option.addEventListener('click',handleOptionSelectedC));
document.querySelector('.dropdownC .titleC').addEventListener('change',handleTitleChangeC);


//ir arriba

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

	$("#IMGwin").hide();
	$("#IMGlinux").hide();
	$("#IMGclonezilla").hide();	
	$("#ClonHeader").hide();																			
	$("#WindowsHeader").hide();
	$("#LinuxHeader").hide();		
	$("#S-ofimaticaW").hide();	
	$("#recuperacionW").hide();	
	$("#seguridadW").hide();	
	$("#portablesW").hide();	
	$("#S-ofimaticaU").hide();	
	$("#recuperacionU").hide();	
	$("#seguridadU").hide();	
	$("#portablesU").hide();
	$("#ClonLocal").hide();
	$("#ClonSamba").hide();

	//HOME
	function btnHOME() {
		$("#HOME").click(function(e) {
			$("#contentPAG-HOME").html( "  <div class='remove-home'> <nav class='nav' id='menu'> <a class='a' href='#2'>Programas instalados</a> <a class='a' href='#3'>Programas Usados</a> <a class='a' href='#4'>Comparativa S.offimatico</a> <a class='a' href='#5'>Comparativa S.recuperación</a> <a class='a' href='#6'>Comparativa S.seguridad</a> <a class='a' href='#7'>Comparativa S.portables</a> <span class='indicador' id='indicador'></span> </nav> <div class='img-1H section_divider'><center><h1>Programas instalados</h1></center></div> <div class='secciones'> <div class='seccion' id='2'> <div class='card'> <caption>Software instalado en el proyecto:</caption> <table class='table table-hover'> <thead> <tr> <th scope='col'>Tipos</th> <th scope='col'>Windows</th> <th scope='col'>Linux</th> </tr> </thead> <tbody> <tr> <th scope='row'>Software Ofimático</th> <td>Libre office</td> <td>Online Office</td> </tr> <tr> <th scope='row'>Software recuperación</th> <td>Recuva</td> <td>TestDisk</td> </tr> <tr> <th scope='row'>software seguridad</th> <td>Avast</td> <td>ClamAV</td> </tr> <tr> <th scope='row'>software portables</th> <td>Speccy</td> <td>Blender</td> </tr> </tbody> <tfoot> <tr> <th scope='row'>Numero total de softwares</th> <td class='center' colspan='2'>8</td> </tr> </tfoot> </table> </div> </div> <div class='img-2H section_divider'><center><h1>Programas usados</h1></center></div> <div class='secciones'> <div class='seccion' id='3'> <div class='card'> <div class='container'> <div class='row'> <div class='col-md-8 col-center'> <div id='myCarousel' class='carousel slide' data-ride='carousel'> <ol class='carousel-indicators'> <li data-target='#myCarousel' data-slide-to='0' class='active'></li> <li data-target='#myCarousel' data-slide-to='1'></li> <li data-target='#myCarousel' data-slide-to='2'></li> </ol> <div class='carousel-inner'> <div class='item active'> <h2>SublimeText</h2> <div class='img-box'><img src='./imagenes/carrusel/sublime.png' alt=''></div> <p class='overview'><b>Enlace de descarga 🢂</b> <a target='_blank' href='https://www.sublimetext.com/'>AQUÍ</a></p> </div> <div class='item'> <h2>Chrome</h2> <div class='img-box'><img src='./imagenes/carrusel/CHROME.png' alt=''></div> <br><br> <p class='overview'><b>Enlace de descarga 🢂</b> <a target='_blank' href='https://www.google.com/intl/es/chrome/?brand=YTUH&gclid=CjwKCAiAs8acBhA1EiwAgRFdwwF7neZA5hVTLDo_7jO037VrXPRPjOiHc5yQ07g94zBJ-iMg7BZh2hoCPNMQAvD_BwE&gclsrc=aw.ds'>AQUÍ</a></p> </div> <div class='item'> <h2>Firefox</h2> <div class='img-box'><img src='./imagenes/carrusel/FIREFOX.png' alt=''></div> <br><br> <p class='overview'><b>Enlace de descarga 🢂</b> <a target='_blank' href='https://www.mozilla.org/es-ES/firefox/new/'>AQUÍ</a></p> </div> <!-- SI ME DA TIEMPO <div class='item'> <h2>Firefox</h2> <div class='img-box'><img src='' alt=''></div> <p class='overview'><b>Enlace de descarga 🢂</b> <a href='https://www.mozilla.org/es-ES/firefox/new/'>AQUÍ</a></p> </div>--> </div> <!-- Carousel controls --> <a class='carousel-control left' href='#myCarousel' data-slide='prev'> <i class='fa fa-angle-left'></i> </a> <a class='carousel-control right' href='#myCarousel' data-slide='next'> <i class='fa fa-angle-right'></i> </a> </div> </div> </div> </div> </div> </div> </div> <div class='img-3H section_divider'><center><h1>Comparativa Ofimatico</h1></center></div> <div class='seccion' id='4'> <div class='card'> <h1>Comparativas software offimarico</h1> <table class='table table-hover ' style='margin:auto'> <thead> <tr> <th scope='col'>Aplicación</th> <th scope='col'>Descripción</th> <th scope='col'>Disponible en Windows</th> <th scope='col'>Disponible en Linux</th> </tr> </thead> <tbody> <tr> <th scope='row'>Microsoft Office</th> <td>Suite de aplicaciones de ofimática de Microsoft, incluye Word, Excel, PowerPoint, Outlook, Access, y otras herramientas.</td> <td>Sí</td> <td>No disponible de forma nativa, pero es posible utilizarla a través de emuladores o programas de compatibilidad como Wine.</td> </tr> <tr> <th scope='row'>LibreOffice</th> <td>Suite de aplicaciones de ofimática gratuita y de código abierto, incluye Writer, Calc, Impress, Draw, Math, y Base.</td> <td>Sí</td> <td>Sí</td> </tr> <tr> <th scope='row'>Google Docs</th> <td>Plataforma de ofimática basada en la nube de Google, incluye Documentos, Hojas de cálculo, Presentaciones, Formularios, y otros servicios.</td> <td>Sí (a través del navegador web)</td> <td>Sí (a través del navegador web)</td> </tr> <tr> <th scope='row'>WPS Office</th> <td>Suite de ofimática que incluye Writer, Spreadsheets, y Presentation.</td> <td>Sí</td> <td>Sí</td> </tr> <tr> <th scope='row'>OnlyOffice</th> <td>Suite de ofimática en línea gratuita y de código abierto, incluye Documentos, Hojas de cálculo y Presentaciones.</td> <td>Sí (a través del navegador web)</td> <td>Sí (a través del navegador web)</td> </tr> <tr> <th scope='row'>Calligra Suite</th> <td>Suite de ofimática gratuita y de código abierto que incluye Words, Sheets, Stage y Plan.</td> <td>No</td> <td>Sí</td> </tr> </tbody> </table> </div> </div> <div class='img-4H section_divider'><center><h1>Comparativa Recuperación</h1></center></div> <div class='seccion' id='5'> <div class='card'> <table class='table table-hover' style='margin:auto'> <thead> <tr> <th scope='col'></th> <th scope='col'>Recuva (Windows)</th> <th scope='col'>TestDisk (Linux)</th> </tr> </thead> <tbody> <tr> <th scope='row'>Tipo de licencia</th> <td>Freemium/Pago</td> <td>Open source</td> </tr> <tr> <th scope='row'>Soporte de sistemas de archivos</th> <td>FAT, NTFS, exFAT</td> <td>FAT, NTFS, EXT, HFS, HFS+, exFAT</td> </tr> <tr> <th scope='col'>Interfaz de usuario</th> <td>Interfaz gráfica de usuario fácil de usar</td> <td>Interfaz de línea de comandos</td> </tr> <tr> <th scope='row'>Características adicionales</th> <td>Recuperación de archivos eliminados, herramientas para borrar archivos de forma segura</td> <td>Restauración de particiones y registros de arranque, reparación de tablas de particiones</td> </tr> </tbody> </table> </div> </div> <div class='img-5H section_divider'><center><h1>Comparativa Seguridad</h1></center></div> <div class='seccion' id='6'> <div class='card'> <h1>Comparativa software seguridad</h1> <table class='table table-hover' style='margin:auto'> <thead> <tr> <th scope='col'>Software de seguridad</th> <th scope='col'>Windows</th> <th scope='col'>Linux</th> </tr> </thead> <tbody> <tr> <th scope='row'>Firewall</th> <td>Windows tiene un firewall incorporado que es fácil de usar y se configura automáticamente para bloquear conexiones no autorizadas.</td> <td>Linux tiene un firewall llamado iptables que ofrece más opciones de configuración, pero que puede ser más difícil de usar para los usuarios no técnicos.</td> </tr> <tr> <<th scope='row'>Antivirus</th> <td>Hay una gran cantidad de software antivirus disponibles para Windows, tanto gratuitos como de pago.</td> <td>La mayoría de los usuarios de Linux no usan antivirus, pero hay algunas opciones disponibles, como ClamAV. Los virus son menos comunes en Linux debido a que la plataforma es menos popular entre los hackers.</td> </tr> <tr> <th scope='row'>Actualizaciones</th> <td>Las actualizaciones de seguridad de Windows son frecuentes y requieren reiniciar la computadora para completarlas.</td> <td>Las actualizaciones de seguridad de Linux son menos frecuentes y no suelen requerir reiniciar la computadora.</td> </tr> <tr> <th scope='row'>Accesos remotos</th> <td>Windows tiene una herramienta de acceso remoto incorporada llamada Escritorio Remoto, que puede ser peligrosa si se utiliza sin medidas de seguridad adecuadas.</td> <td>Linux también tiene herramientas de acceso remoto, pero requieren más configuración para ser seguras.</td> </tr> <tr> <th scope='row'>Protección de datos</th> <td>Windows incluye BitLocker para cifrar datos, pero solo está disponible en las ediciones Pro y Enterprise.</td> <td>Linux incluye herramientas de cifrado gratuitas y de código abierto, como LUKS, que pueden ser utilizadas en cualquier versión del sistema operativo.</td> </tr> </tbody> </table> </div> </div> <div class='img-6H section_divider'><center><h1>Comparativa Portables</h1></center></div> <div class='seccion' id='7'> <div class='card'> <table> <thead> <tr> <th scope='col'>Software</th> <th scope='col'>Windows</th> <th scope='col'>Linux</th> </tr> </thead> <tbody> <tr> <th scope='row'>Firefox</th> <td><a href='https://portableapps.com/apps/internet/firefox_portable'>Firefox Portable</a></td> <td><a href='https://portablelinuxapps.org/'>Portable Linux Apps</a></td> </tr> <tr> <th scope='row'>LibreOffice</th> <td><a href='https://portableapps.com/apps/office/libreoffice_portable'>LibreOffice Portable</a></td> <td><a href='https://www.appimagehub.com/p/1197342/'>AppImage LibreOffice</a></td> </tr> <tr> <th scope='row'>VLC</th> <td><a href='https://portableapps.com/apps/music_video/vlc_portable'>VLC Portable</a></td> <td><a href='https://www.appimagehub.com/p/1169971/'>AppImage VLC</a></td> </tr> <tr> <th scope='row'>GIMP</th> <td><a href='https://portableapps.com/apps/graphics_pictures/gimp_portable'>GIMP Portable</a></td> <td><a href='https://www.appimagehub.com/p/1241841/'>AppImage GIMP</a></td> </tr> <tr> <th scope='row'>Notepad++</th> <td><a href='https://portableapps.com/apps/development/notepadpp_portable'>Notepad++ Portable</a></td> <td><a href='https://www.appimagehub.com/p/1234241/'>AppImage Notepad++</a></td> </tr> <tr> <th scope='row'>Speccy</th> <td><a href='https://www.ccleaner.com/es-es/speccy/download'>speccy Portable</a></td> <td>x</td> </tr> <tr> <th scope='row'>Blender</th> <td><a href='https://www.blender.org/'>Blender Portable</a></td> <td>x</td> </tr> </table> </tbody> </div> </div> </div> </div>" );
				$(".remove-LIBREOFFICE").remove();
				$(".remove-SPECCY").remove();
				$(".remove-AVAST").remove();
				$(".remove-RECUVA").remove();	
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();	
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					
				$("#IMGwin").hide("0");$("#IMGlinux").hide("0");$("#IMGhome").show("0");$("#LinuxHeader").hide("0");$("#WindowsHeader").hide("0");$("#cabecera").show("0");$("#recuperacionW").hide("0");$("#seguridadW").hide("0");$("#portablesW").hide("0");$("#S-ofimaticaU").hide("0");$("#recuperacionU").hide("0");$("#seguridadU").hide("0");$("#portablesU").hide("0");$("#S-ofimaticaW").hide("0");$("#IMGclonezilla").hide("0");$("#ClonHeader").hide("0");$("#ClonLocal").hide("0");$("#ClonSamba").hide("0");
			});}

	//OPCIONES WINDOWS
		$("#Windows").click(function(e) {
		 	$("#IMGwin").show("0");
		 	$("#IMGlinux").hide("0");
		 	$("#IMGhome").hide("0");
			$("#IMGclonezilla").hide("0");
			$("#ClonHeader").hide("0");																															
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").show("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });
		$("#optionW1").click(function(e) {
		 	$("#IMGwin").show("0");
		 	$("#IMGlinux").hide("0");
		 	$("#IMGhome").hide("0");
		 	$("#IMGclonezilla").hide("0");														
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#ClonHeader").hide("0");																			
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").show("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });
		$("#optionW2").click(function(e) {
		 	$("#IMGwin").show("0");
		 	$("#IMGlinux").hide("0");	
		 	$("#IMGhome").hide("0");	
		 	$("#IMGclonezilla").hide("0");													
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").show("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });

		$("#optionW3").click(function(e) {
		 	$("#IMGwin").show("0");
		 	$("#IMGlinux").hide("0");
		 	$("#IMGhome").hide("0");
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");																 				
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
		 	$("#cabecera").hide("0");
		 	$("#S-ofimaticaW").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").show("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
			$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 }); 
		$("#optionW4").click(function(e) {
			$("#IMGwin").show("0");
		 	$("#IMGlinux").hide("0");
		 	$("#IMGhome").hide("0");	
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");															 	
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
		 	$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").show("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });  

		$("#PAGlibreoffice").click(function(e) {
			$("#contentPAG-LIBREOFFICE").html( " <div class='remove-LIBREOFFICE'>  <div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación ejecutable</a><a class='a' href='#3'>Primer paso</a><a class='a' href='#4'>Segundo paso</a><a class='a' href='#5'>Tercer paso</a><a class='a' href='#6'>Cuarto paso</a><a class='a' href='#7'>quinto paso</a><a class='a' href='#8'>Paquete completo</a><a class='a' href='#9'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación ejecutable</h1><img src='./imagenes/IMG-WIN-OFFI-LB/libreoffice.png' alt=''><p>1.1 En primer lugar entramos en el siguiente enlace el cual es la página oficial de libreoffice.</p><p>1.2 Instalamos el programa de instalación más adecuado para nuestro equipo.</p><p>1.3 Una vez instalado le damos click derecho instalar.</p></div></div><div class='seccion' id='3'><div class='card'><h1>Primera ventana</h1><img src='./imagenes/IMG-WIN-OFFI-LB/paso1.png' alt=''><p>En la primera ventana le damos a siguiente.</p></div></div><div class='seccion' id='4'><div class='card'><h1>Segunda ventana</h1><img src='./imagenes/IMG-WIN-OFFI-LB/paso2.png' alt=''><p>En la segunda ventana seleccionamos la opción de instalación típica. </p></div></div><div class='seccion' id='5'><div class='card'><h1>Tercera ventana</h1><img src='./imagenes/IMG-WIN-OFFI-LB/paso3.png' alt=''><p>A continuación seleccionamos la opción de crear un acceso directo al escritorio para que sea más cómodo iniciar el programa y le damos al botón de instalar. También si lo deseamos podemos elegir la casilla de inicio al arrancar el sistema pero no es recomendable si tienes escasos recursos hardware ya que puede ralentizar tu pc. </p></div></div><div class='seccion' id='6'><div class='card'><h1>Cuarta ventana</h1><img src='./imagenes/IMG-WIN-OFFI-LB/paso4.png' alt=''><p>Ahora os aparecerá una ventana emergente en la que le tenemos que dar a SÍ para darle los permisos necesarios. </p></div></div><div class='seccion' id='7'><div class='card'><h1>Quinta ventana</h1><img src='./imagenes/IMG-WIN-OFFI-LB/paso5.png' alt=''><p>Por último le daremos a finalizar. </p></div></div><div class='seccion' id='8'><div class='card'><h1>Paquete completo</h1><img src='./imagenes/IMG-WIN-OFFI-LB/softwareLB.png' alt=''><p>En la primera ventana aparecen todos los software disponibles del paquete ofimatico. </p></div></div><div class='seccion' id='9'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-WIN-OFFI-LB/INTERFAZ.png' alt=''><p>Esta es la insterfaz del software de documentos. </p></div></div></div></div> " );
				$(".remove-SPECCY").remove();
				$(".remove-AVAST").remove();
				$(".remove-RECUVA").remove();	
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();	
				$(".remove-home").remove();
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});

		$("#PAGrecuva").click(function(e) {
			$("#contentPAG-RECUVA").html("<div class='cont_ancho remove-RECUVA'> <div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación ejecutable</a><a class='a' href='#3'>Ejecutar</a><a class='a' href='#4'>Primera ventana</a><a class='a' href='#5'>Opciones instalación</a><a class='a' href='#6'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación ejecutable</h1><img src='./imagenes/IMG-WIN-RECUVA/Instalacion_ejecutable.png' alt=''><p>1.1 En primer lugar entramos en el siguiente <b><a href='https://www.ccleaner.com/es-es/recuva/download/standard'>enlace</a></b>.</p><p>1.2 Instalamos la versión del programa que queramos en mi caso voy a utilizar la versión gratuita.</p></div></div><div class='seccion' id='3'><div class='card'><h1>Ejecutar</h1><img src='./imagenes/IMG-WIN-RECUVA/ClickInstall.png' alt=''><p>Se nos descargará el ejecutable y le daremos click derecho para proceder con la instalación.</p></div></div><div class='seccion' id='4'><div class='card'><h1>Primera ventana</h1><img src='./imagenes/IMG-WIN-RECUVA/Paso1.png' alt=''><p>Se nos abrira la siguiente ventana en la cual nos aparece un boton de instalar y una serie de opciones para la instalación.</p></div></div><div class='seccion' id='5'><div class='card'><h1>Opciones instalación</h1><img src='./imagenes/IMG-WIN-RECUVA/opciones.png' alt=''><p>Si le damos a el enlace de opciones noos apareceran unas opciones las cuales podemos marcar o desmarcar segun lo que queramos.</p></div></div><div class='seccion' id='6'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-WIN-RECUVA/Interfazrecuva.png' alt=''><p>En esta imagen se logra ver lala interfaz de recuva la cual es bastante sencilla. Cualquier usuario promedi sabra utilizar este programa gracias a la facilidad que nos da la interfaz . </p></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-SPECCY").remove();
				$(".remove-AVAST").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();	
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});

		$("#PAGavast").click(function(e) {
			$("#contentPAG-AVAST").html("<div class='cont_ancho remove-AVAST'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación .EXE</a><a class='a' href='#3'>Ejecutar el .EXE</a><a class='a' href='#4'>Primera ventana</a><a class='a' href='#5'>Segunda ventana</a><a class='a' href='#6'>Tercera ventana</a><a class='a' href='#7'>Cuarta ventana</a><a class='a' href='#8'>Quinta ventana</a><a class='a' href='#9'>Sexta ventana</a><a class='a' href='#10'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación .EXE</h1><img src='./imagenes/IMG-WIN-AVAST/installexe.png' alt=''><p>En primer lugar entramos en el siguiente <b><a target='_blank' href='https://www.avast.com/es-es/lp-ppc-hp-v5?ppc_code=012&ppc=a&gclid=Cj0KCQiA1sucBhDgARIsAFoytUtz6llq6jEzlQcOdRfAyt1x9R8XIXK3cW2Sg32f6WzKz4yanWnM-vYaAiqqEALw_wcB&gclsrc=aw.ds#pc'>enlace</a></b>.</p></div></div><div class='seccion' id='3'><div class='card'><h1>Ejecutar</h1><img src='./imagenes/IMG-WIN-AVAST/ejecutarexe.png' alt=''><p>Le damos click derecho al archivo descargado donde nos señala el navegador</p></div></div><div class='seccion' id='4'><div class='card'><h1>Primera ventana</h1><img src='./imagenes/IMG-WIN-AVAST/ventana1.png' alt=''><p>En esta primera ventana le daremos a personalizar.</p></div></div><div class='seccion' id='5'><div class='card'><h1>Segunda ventana</h1><img src='./imagenes/IMG-WIN-AVAST/ventana2opciones.png' alt=''><p>Aquí podemos seleccionar o deseleccionar las opcines que queramos segun lo que busquemos.</p></div></div><div class='seccion' id='6'><div class='card'><h1>Tercera ventana</h1><img src='./imagenes/IMG-WIN-AVAST/paso1.png' alt=''><p>Ahora le damos al boton <b><u>CONTINUAR</u></b>.</p></div></div><div class='seccion' id='7'><div class='card'><h1>Cuarta ventana</h1><img src='./imagenes/IMG-WIN-AVAST/paso2premiumono.png' alt=''><p>En esta ventana nos da la opcion de cambiar la supcripción a premium mostrando las ventajas que ofrece, en mi caso usaré la gratuita.</p></div></div><div class='seccion' id='8'><div class='card'><h1>Quinta ventana</h1><img src='./imagenes/IMG-WIN-AVAST/paso3.png' alt=''><p>Ahora nos da la opcion de ejecutar nuestro primer analisis.</p></div></div><div class='seccion' id='9'><div class='card'><h1>Sexta ventana</h1><img src='./imagenes/IMG-WIN-AVAST/paso4analisis.png' alt=''><p>Nos muestra la barra de carga que lleva el analisis rapido.</p></div></div><div class='seccion' id='10'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-WIN-AVAST/interfazavast.png' alt=''><p>La interfaz de este software es bastante intuitivo por lo que se hace muy facil usarlo.</p></div></div></div></div>  ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-SPECCY").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});

		$("#PAGspeccy").click(function(e) {
			$("#contentPAG-SPECCY").html("<div class='cont_ancho remove-SPECCY'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación .EXE</a><a class='a' href='#3'>Ejecutar el .EXE</a><a class='a' href='#4'>Paso uno</a><a class='a' href='#5'>Paso dos</a><a class='a' href='#6'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación .EXE</h1><img src='./imagenes/IMG-WIN-SPECCY/installexe.png' alt=''><p>1.1 En primer lugar entramos en el siguiente <b><a target='_blank' href='https://www.ccleaner.com/es-es/speccy/download'>enlace</a></b>.</p><p>1.2 Le damos a download free</p></div></div><div class='seccion' id='3'><div class='card'><h1>Ejecutar</h1><img src='./imagenes/IMG-WIN-SPECCY/ejecutarexe.png' alt=''><p>Le damos click derecho al archivo descargado donde nos señala el navegador</p></div></div><div class='seccion' id='4'><div class='card'><h1>Primera ventana</h1><img src='./imagenes/IMG-WIN-SPECCY/paso1.png' alt=''><p>En esta primera ventana le daremos a personalizar.</p></div></div><div class='seccion' id='5'><div class='card'><h1>Segunda ventana</h1><img src='./imagenes/IMG-WIN-SPECCY/paso2.png' alt=''><p>Aquí podemos seleccinoar o deseleccionar las opcines que queramos segun lo que busquemos.</p></div></div><div class='seccion' id='6'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-WIN-SPECCY/interfazz.png' alt=''><p>Aquí podemos seleccinoar o deseleccionar las opcines que queramos segun lo que busquemos.</p></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});

	//OPCIONES UBUNTU

		$("#Linux").click(function(e) {
			$("#IMGlinux").show("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");																				
			$("#LinuxHeader").show("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });

		$("#optionU1").click(function(e) {
			$("#IMGlinux").show("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");	
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");																			
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").show("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });
		$("#optionU2").click(function(e) {
			$("#IMGlinux").show("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");	
		 	$("#IMGclonezilla").hide("0");													
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").show("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });

		$("#optionU3").click(function(e) {
			$("#IMGlinux").show("0");
			$("#IMGwin").hide("0");		
		 	$("#IMGhome").hide("0");
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");																		
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
		 	$("#cabecera").hide("0");
		 	$("#S-ofimaticaW").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").show("0");	
			$("#portablesU").hide("0");	
			$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 }); 
		$("#optionU4").click(function(e) {
			$("#IMGlinux").show("0");
			$("#IMGwin").hide("0");	
		 	$("#IMGhome").hide("0");
		 	$("#IMGclonezilla").hide("0");
		 	$("#ClonHeader").hide("0");																			
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");						
		 	$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").show("0");	
		 	$("#S-ofimaticaW").hide("0");
		 	$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
	 });

		$("#PAGonlineoffice").click(function(e) {
			$("#contentPAG-ONLINEOFFICER").html("<div class='cont_ancho remove-ONLINEOFFICER'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación .DEB</a><a class='a' href='#3'>Instalar el paquete</a><a class='a' href='#4'>Primera ventana</a><a class='a' href='#5'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación .deb</h1><img src='./imagenes/IMG-UB-ONLYOFFI/InstalacionDEB.png' alt=''><p>1.1 En primer lugar entramos en el siguiente <b><a target='_blank' href='https://www.onlyoffice.com/es/download-desktop.aspx?from=desktop'>enlace</a></b>.</p><p>1.2 Instalamos la versión del programa para linux mas adecuada.</p></div></div><div class='seccion' id='3'><div class='card'><h1>Ejecutar</h1><img src='./imagenes/IMG-UB-ONLYOFFI/comando.png' alt=''><p>Para instalar el paquete tenemoos que saber donde se localiza el archivo .deb previamente descargado, una vez localizad ejecuraremos el comando <b>sudo dpkg -i <u>'nombre del paquete'</u> ponemos nuestra contraseña y listo</b>.</p></div></div><div class='seccion' id='4'><div class='card'><h1>Paquete completo</h1><img src='./imagenes/IMG-UB-ONLYOFFI/PQcompleto.png' alt=''><p>La interfaz de este paqueteb offimatico es muy sencilla y paraecida a la de Word.</p></div></div><div class='seccion' id='5'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-UB-ONLYOFFI/interfaz.png' alt=''><p>La interfaz de este paquete offimatico es muy sencilla y parecida a la de Microsoft office.</p></div></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();	
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					
	});

		$("#PAGtestdisk").click(function(e) {
			$("#contentPAG-TESTDISK").html("<div class='cont_ancho remove-TESTDISK'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación web</a><a class='a' href='#3'>Instalación terminal</a><a class='a' href='#4'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación desde navegador</h1><img src='./imagenes/IMG-UB-TESTDISK/testdiskweb.png' alt=''><p>1.1 La pagina official de testdisk es la siguiente 🢂<b><a target='_blank' href='https://www.cgsecurity.org/wiki/TestDisk_ES'>enlace</a></b>.</p><p>1.2Para instalar el .dev el comando es <b><u>sudo dpkg -i 'nombre archivo'</u></b>. </p></div></div><div class='seccion' id='3'><div class='card'><h1>Instalación desde terminal</h1><img src='./imagenes/IMG-UB-TESTDISK/testdiskcomand.png' alt=''><p>-Para instalar desde la terminal hay que poner una serie de comando los cuales los he resumido en uno solo.</p><p>- <b>sudo apt-get install update && sudo apt install testdisk</b></p><p>Para lanzar el progama ponemos en la terminal <b>sudo testdisk</b></p></div></div><div class='seccion' id='4'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-UB-TESTDISK/interfazTD.png' alt=''><p>La interfaz de este programa es por consola siguiendo una serie de parametros. Asi podremos seleccionar lo que queremos recuperar del disco.</p></div></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();	
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});
		$("#PAGclamav").click(function(e) {
			$("#contentPAG-CLAMAV").html("<div class='cont_ancho remove-CLAMAV'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación web</a><a class='a' href='#3'>Instalación terminal</a><a class='a' href='#4'>Instalar versión grafica</a><a class='a' href='#5'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación desde navegador</h1><img src='./imagenes/IMG-UB-CLAMAV/installdeb.png' alt=''><p>1.1 En primer lugar entramos en el siguiente para istalar el .deb desde el repsitorio <b><a target='_blank' href='https://www.ccleaner.com/es-es/CLAMAV/download'>enlace</a></b>.</p><p>1.2 Para instalar el .dev el comando es <b><u>sudo dpkg -i 'nombre archivo'</u></b>. </p></div></div><div class='seccion' id='3'><div class='card'><h1>Instalación desde terminal</h1><img src='./imagenes/IMG-UB-CLAMAV/clamavcomandos.png' alt=''><p>-Para instalar desde la terminal hay que poner una serie de comando los cuales los he resumido en uno solo.</p><p>- <b>sudo apt-get install update && sudo apt-get install clamav clamav-daemon</b></p><p>-Si deseamos ver la versión que hemos installado ponemos el siguiente comando ☞ <b>clamscan --version</b></p><p>-Esta versión solo se puede usar mediante comandos</p></div></div><div class='seccion' id='4'><div class='card'><h1>Instalar versión grafica</h1><img src='./imagenes/IMG-UB-CLAMAV/clamavgrafica.png' alt=''><p>Con el siguiente cmando instalaremos la versión grafica dew ClamAV <b>sudo apt-get install clamtk</b>.</p></div></div><div class='seccion' id='5'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-UB-CLAMAV/interfazAV.png' alt=''><p>Esta es la versión grafica del antivirus, es bastante simple y facil de usar. Tambienm podemos usarla para ver actualisaciones del sistema.</p></div></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();	
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});
		$("#PAGblender").click(function(e) {
			$("#contentPAG-BLENDER").html("<div class='cont_ancho remove-BLENDER'><div class='hero' id='hero'><img id='imgLB' src='' alt=''></div><nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav><nav class='nav' id='menu'><a class='a' href='#2'>Instalación terminal</a><a class='a' href='#3'>Portable</a><a class='a' href='#4'>Interfaz</a><span class='indicador' id='indicador'></span></nav><div class='secciones'><div class='seccion' id='2'><div class='card'><h1>Instalación desde terminal</h1><img src='./imagenes/IMG-UB-BLENDER/blendercomand.png' alt=''><p>-Para instalar desde la terminal hay que poner una serie de comando los cuales los he resumido en uno solo.</p><p>- <b>sudo apt-get install update && sudo apt install blender</b></p></div></div><div class='seccion' id='3'><div class='card'><h1>Instalkación portable</h1><img src='./imagenes/IMG-UB-BLENDER/installportable.png' alt=''><p>-Para instalar la version portable tenemos que entrar en el siguiente enlace <b><a target='_blank' href='https://www.blender.org/download/'>enlace</a></b>.</p><p>Una vez dentro le damos a <b>download</b></p></div></div><div class='seccion' id='4'><div class='card'><h1>Interfaz</h1><img src='./imagenes/IMG-UB-BLENDER/interfazBL.png' alt=''><p>Esta es su interfaz, este programa es una suite de creación de contenido 3D totalmente integrada que ofrece una amplia gama de herramientas esenciales, que incluyen Modelado, Renderizado, Animación & Rigging, Edición de Video, VFX, Composición, Texturizado y muchos tipos de Simulaciones..</p></div></div></div></div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-home").remove();
				$(".remove-CLONSAMBA").remove();										
				$(".remove-CLONLOCAL").remove();					

	});
		

	//OPCIONES CLONEZILLA

		$("#Clonezilla").click(function(e) {
			$("#IMGclonezilla").show("0");
			$("#IMGlinux").hide("0");
			$("#ClonLocal").hide("0");
			$("#ClonSamba").hide("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");
			$("#ClonHeader").show("0");																		
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
	 });

		$("#optionC1").click(function(e) {
			$("#IMGclonezilla").show("0");
			$("#ClonLocal").show("0");
			$("#ClonSamba").hide("0");
			$("#ClonHeader").hide("0");																		
			$("#IMGlinux").hide("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");																		
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
	 });
		$("#optionC2").click(function(e) {
			$("#IMGclonezilla").show("0");
			$("#ClonLocal").hide("0");
			$("#ClonHeader").hide("0");																		
			$("#ClonSamba").show("0");			
			$("#IMGlinux").hide("0");
			$("#IMGwin").hide("0");
		 	$("#IMGhome").hide("0");												
			$("#LinuxHeader").hide("0");			
		 	$("#WindowsHeader").hide("0");			
			$("#cabecera").hide("0");
			$("#recuperacionW").hide("0");
			$("#seguridadW").hide("0");	
			$("#portablesW").hide("0");	
			$("#S-ofimaticaU").hide("0");	
			$("#recuperacionU").hide("0");	
			$("#seguridadU").hide("0");	
			$("#portablesU").hide("0");	
		 	$("#S-ofimaticaW").hide("0");
	 });

		$("#optionC1").click(function(e) {
			$("#contentPAG-CLONLOCAL").html("<div class='cont_ancho remove-CLONLOCAL'> <div class='hero' id='hero'><img id='imgLB' src='' alt=''></div> <nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav> <nav class='nav' id='menu'><a class='a' href='#2'>Preparación</a><a class='a' href='#3'>Seleccion de discos y opciones</a><a class='a' href='#4'>Restauración</a><span class='indicador' id='indicador'></span></nav> <div class='secciones'> <div class='seccion' id='2'> <div class='card'> <h1>Preparación</h1> <video class='video-stylish' controls> <source src='./videos/Parte1_ClonLocal.mp4' type='video/mp4'> </video> <p>1. Descarga la imagen ISO de Clonezilla desde su página web oficial (<a href='https://clonezilla.org/downloads.php'>https://clonezilla.org/downloads.php</a>).</p> <p>2. Crea un medio de arranque utilizando un USB o CD. Puedes utilizar herramientas como Rufus o Etcher para crear un USB de arranque.</p> <p>3. Configura tu computadora para que arranque desde el medio de arranque que acabas de crear. Para hacer esto, necesitarás acceder a la BIOS o UEFI de tu computadora y seleccionar el medio de arranque como la opción de arranque principal.</p> </div> </div> <div class='seccion' id='3'> <div class='card'> <h1>Seleccion de discos y opciones</h1> <video class='video-stylish' controls> <source src='./videos/Parte2_ClonLocal.mp4' type='video/mp4'> </video> <p>1. Arranca tu computadora desde el medio de arranque de Clonezilla.</p> <p>2. Selecciona 'Clonezilla live' en el menú de arranque.</p> <p>3. Selecciona tu idioma preferido.</p> <p>4. Selecciona 'Start Clonezilla'.</p> <p>5. Selecciona la opción 'device-image' para crear una imagen de tu disco o partición.</p> <p>6. Selecciona la opción 'local_dev' para almacenar la imagen en una unidad local.</p> <p>7. Selecciona la partición que deseas clonar.</p> <p>8. Selecciona la partición en la que deseas restaurar la imagen.</p> <p>9. Selecciona 'Beginner' para utilizar la configuración predeterminada.</p> <p>10. Espera a que Clonezilla restaure la imagen de tu partición o disco.</p> </div> </div> <div class='seccion' id='4'> <div class='card'> <h1>Restauración</h1> <video class='video-stylish' controls> <source src='./videos/Parte3_ClonLocal.mp4' type='video/mp4'> </video> <p>1. Arranca tu computadora desde el medio de arranque de Clonezilla.</p> <p>2. Selecciona 'Clonezilla live' en el menú de arranque.</p> <p>3. Selecciona tu idioma preferido.</p> <p>4. Selecciona 'Start Clonezilla'.</p> <p>5. Selecciona la opción 'device-image' para restaurar la imagen que creaste anteriormente.</p> <p>6. Selecciona la imagen que deseas restaurar.</p> <p>7. Selecciona la partición que deseas clonar.</p> <p>8. Selecciona la partición en la que deseas restaurar la imagen.</p> <p>9. Selecciona 'Beginner' para utilizar la configuración predeterminada.</p> <p>10. Espera a que Clonezilla restaure la imagen de tu partición o disco.</p> </div> </div> </div> </div>");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-TESTDISK").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();
				$(".remove-CLONSAMBA").remove();							
	});

		$("#optionC2").click(function(e) {
			$("#contentPAG-CLONSAMBA").html("<div class='cont_ancho remove-CLONSAMBA'> <div class='hero' id='hero'><img id='imgLB' src='' alt=''></div> <nav class='nav navHOME'><a id='HOME' class='a' href='#1'>HOME</a></nav> <nav class='nav' id='menu'><a class='a' href='#2'>Preparación</a><a class='a' href='#3'>Seleccion de discos y opciones</a><a class='a' href='#4'>Restauración</a><span class='indicador' id='indicador'></span></nav> <div class='secciones'> <div class='seccion' id='2'> <div class='card'> <h1>Preparación</h1> <video class='video-stylish' controls> <source src='./videos/Parte1_ClonLocal.mp4' type='video/mp4'> </video> </div> </div> <div class='seccion' id='3'> <div class='card'> <h1>Seleccion de discos y opciones</h1> <video class='video-stylish' controls> <source src='./videos/Parte1_ClonSamba.mp4' type='video/mp4'> </video> </div> </div> <div class='seccion' id='4'> <div class='card'> <h1>Restauración</h1> <video class='video-stylish' controls> <source src='./videos/Parte3_ClonLocal.mp4' type='video/mp4'> </video> </div> </div> </div> </div> ");
				$(".remove-LIBREOFFICE").remove();
				$(".remove-RECUVA").remove();
				$(".remove-AVAST").remove();
				$(".remove-SPECCY").remove();
				$(".remove-ONLINEOFFICER").remove();
				$(".remove-CLAMAV").remove();
				$(".remove-BLENDER").remove();
				$(".remove-home").remove();
				$(".remove-CLONLOCAL").remove();					
	});

		setInterval(btnHOME, 1000);
});