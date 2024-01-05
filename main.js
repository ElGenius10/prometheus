let hamburguer = document.getElementById('hamburguer');
let menuMobile = document.getElementById('menuMobile');

hamburguer.addEventListener('click', ()=>{
	if(menuMobile.style.display == 'none'){
		menuMobile.style.display = 'block';
		menuMobile.style.transition = 'transform 1.5s';

	}else{
		menuMobile.style.display = 'none';		
	}
})

menuMobile.addEventListener('click', ()=>{
	alert('Hello World');
})