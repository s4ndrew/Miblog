
//Creación de iconos de barra //iconos
const iconosNav = document.querySelector('.icons');

const iconoInstragram = document.createElement('a');
iconoInstragram.setAttribute('href', 'https://instagram.com/andrew.5490?igshid=OGQ5ZDc2ODk2ZA==')
iconoInstragram.innerHTML = '<i class="bi bi-instagram"></i>';
iconosNav.append(iconoInstragram)

const iconoWsspp = document.createElement('a');
iconoWsspp.setAttribute('href', 'https://wa.me/qr/EJ6OLCEBZTEBI1')
iconoWsspp.innerHTML = '<i class="bi bi-whatsapp"></i>';
iconosNav.append(iconoWsspp)

const iconoGit = document.createElement('a');
iconoGit.setAttribute('href', 'https://github.com/dashboard')
iconoGit.innerHTML = '<i class="bi bi-github"></i>'
iconosNav.append(iconoGit)

const iconoLinke = document.createElement('a');
iconoLinke.setAttribute('href', 'https://www.linkedin.com/in/segundo-andres-chiroque-mezones-4047a9268/')
iconoLinke.innerHTML = '<i class="bi bi-linkedin"></i>'
iconosNav.append(iconoLinke)




//selectores generales
const iconos = document.querySelector('.container');
const miPerfil = document.querySelector('#cambia--color');
const misProyectos = document.getElementById('color--main');
const footer = document.querySelector('footer');
const primerBoton = document.getElementById('boton1');
const segundoBoton = document.getElementById('boton2');
const tercerBoton = document.getElementById('boton3');
const cuartoBoton = document.getElementById('boton4');
const quintoBoton = document.getElementById('boton5');
const sextoBoton = document.getElementById('boton6');
const descripcionDelPerfil = document.getElementById('container__description');
//links 
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')
const link5 = document.getElementById('link5')
const link6 = document.getElementById('link6')

//Boton noche
const botonMoon = document.querySelector('.bi-moon');

//Boton remove moon
botonMoon.addEventListener('click', cambiarDeColor);

function cambiarDeColor() {
    iconos.classList.add('headerColor');
    miPerfil.classList.add('colorMoon');
    footer.classList.add('colorMoon');
    primerBoton.classList.add('colorMoon');
    segundoBoton.classList.add('colorMoon');
    tercerBoton.classList.add('colorMoon');
    cuartoBoton.classList.add('colorMoon');
    quintoBoton.classList.add('colorMoon');
    sextoBoton.classList.add('colorMoon');
    
    link1.classList.add('colorMoon');
    link2.classList.add('colorMoon');
    link3.classList.add('colorMoon');
    link4.classList.add('colorMoon');
    link5.classList.add('colorMoon');
    link6.classList.add('colorMoon');
}


//Boton dia
const botonFill = document.querySelector('.bi-sun-fill')
botonFill.addEventListener('click',quitarCambio);
function quitarCambio() {
    iconos.classList.remove('headerColor');
    miPerfil.classList.remove('colorMoon');
    footer.classList.remove('colorMoon');
    primerBoton.classList.remove('colorMoon');
    segundoBoton.classList.remove('colorMoon');
    tercerBoton.classList.remove('colorMoon');
    cuartoBoton.classList.remove('colorMoon');
    quintoBoton.classList.remove('colorMoon');
    sextoBoton.classList.remove('colorMoon');

    link1.classList.remove('colorMoon');
    link2.classList.remove('colorMoon');
    link3.classList.remove('colorMoon');
    link4.classList.remove('colorMoon');
    link5.classList.remove('colorMoon');
    link6.classList.remove('colorMoon');
}
descripcionDelPerfil.style.wordSpacing = '0.3px'
descripcionDelPerfil.style.letterSpacing ='0.4px'
descripcionDelPerfil.innerText = ('Soy PROGRAMADOR FRONT END, actualmente me encuentro realizando pequeños proyectos personales como los que están adjuntos, tengo conocimientos básicos en JavaScript, HTML, CSS, display flex, display grid, media queries, también practico la metodología BEM en css, comandos básicos de linux, Git y GitHub.')



