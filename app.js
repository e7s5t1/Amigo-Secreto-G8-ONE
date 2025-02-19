let listaAmigos = [];
let inputAmigo = document.getElementById ("amigo");
let ulListaAmigos = document.getElementById ("listaAmigos");
let ulResultado = document.getElementById ("resultado");

function agregarAmigo() {
    if (!inputAmigo.value)
        alert("Debes ingresar un nombre");
    listaAmigos.push (inputAmigo.value);
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    inputAmigo.value="";
    inputAmigo.focus();

};

function sortearAmigo() {
    let random = Math.floor((Math.random() * listaAmigos.length));
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    
};

function actualizarLista() {
    inputAmigo.innerHTML = ""; 
    let inicioLista = 0;
    let finalLista = listaAmigos.length -1;
    while (inicioLista <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[inicioLista];
        lista.appendChild(listaNombre);
        inicioLista++;
    };
};