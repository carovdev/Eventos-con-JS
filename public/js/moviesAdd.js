window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
//Eventos de mouse
    titulo.addEventListener('mouseover', () => {
        titulo.style.color='white'
        titulo.style.backgroundColor  ='#333'
    })

    titulo.addEventListener('mouseleave', () => {
        titulo.style.color='black'
        titulo.style.backgroundColor  ='#f0f0f0'
    })


    let tituloFormulario = document.getElementById('titulo')

    let estadoSecreto=0;
  
    tituloFormulario.addEventListener('keyup', (e) =>{
        switch (estadoSecreto) {
            case 0:
                e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
        
            case 1:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 2:
                e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 3:
                e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 4:
                e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 5:
                e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
                break;
            case 6:
                e.key == "o" ? alert('SECRETO MÁGICO') : (estadoSecreto = 0);
                break;
            default:
                break;
        }
    })
}