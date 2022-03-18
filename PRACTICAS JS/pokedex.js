const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const pokeapi = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(pokeapi).then((objetoPokeapi) => {
        if (objetoPokeapi.status != "200") {
            console.log(objetoPokeapi);
            pokeImage("./Assets/pikachu-sad.gif")
        }
        else {
            return objetoPokeapi .json();
        }
    }).then((datos) => {
        if (datos) {
            console.log(datos);
            let pokeImg = datos.sprites.front_default;
            pokeImage(pokeImg);
            let pokeNombre = datos.name;
            nombrePokemon(pokeNombre.toUpperCase())
            console.log(pokeImg);
        }
    });
}

//Esto sirve para mandar los datos del api a los ids del html

const pokeImage = (pokeapi) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = pokeapi;
}
const nombrePokemon = (pokeapi) => {
    const nombre = document.getElementById("nombrePokemon");
    nombre.innerText = pokeapi;
}


