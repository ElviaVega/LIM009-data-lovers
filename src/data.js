<<<<<<< HEAD
/* /* Manejo de data */
=======
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
const renderizando = document.getElementById("renderizando");
console.log(POKEMON.pokemon);

let pokemon1= POKEMON.pokemon; 
for(let i=0; i<pokemon1.length; i++) {
console.log(pokemon1[i].name);
renderizando.innerHTML +='<div class="col-xs-6 col-md-3"><a href="#" class="thumbnail"><img src= ' + pokemon1[i].img + ' alt="Bulbasaur"><div class="caption"><h3>' + pokemon1[i].name + '</h3><p> height:  ' +  pokemon1[i].height +  '</p> <br><p> weight:  ' +  pokemon1[i].weight +  '</p> <br><p> spawn_chance:  ' +  pokemon1[i].spawn_chance +  '</p></p> <br><p> egg:  ' +  pokemon1[i].egg +  '</p> </p> <br><p> avg_spawns:  ' +  pokemon1[i].avg_spawns +  '</p>  <br>   </div></div></div></a></div>'
}
>>>>>>> d6505d7cd8bdcf968ec113a802eb3a186ebad225

const optionMenu = document.getElementById("optionMenu");



const example = () => {
  return 'example';
};

window.example = example;
