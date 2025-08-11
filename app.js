// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    let lista = document.getElementById("amigo").value;
    if(lista == ""){
        alert("Por favor, inserte un nombre")
    } else{
        amigos.push(lista);
    }
    
    console.log(lista);
    console.log(amigos);
    limpiar();
}

function limpiar (){
    document.getElementById("amigo").value = "";
}
