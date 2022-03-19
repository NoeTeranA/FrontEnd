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
            let pokeNumero = `# ${datos.id}`;
            numeroPokemon(pokeNumero)
            let pokeTipo = `  Type: ${datos.types[0].type.name}`;
            tipoPokemon(pokeTipo.toUpperCase())
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
const numeroPokemon = (pokeapi) => {
    const numero = document.getElementById("numeroPokemon");
    numero.innerText = pokeapi;
}
const tipoPokemon = (pokeapi) => {
    const tipo = document.getElementById("tipoPokemon");
    tipo.innerText = pokeapi;
}





