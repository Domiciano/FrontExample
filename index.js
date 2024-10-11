
const array = ["Valencia", "De La Pava", "Valens", "Castro"];
array.push("Gaviria");

array.forEach(element => {
    console.log(element);
});

const estudiante = {
    name: 'David',
    lastname: 'Dulce',
    age: 19
};

//Class


const mybutton = document.getElementById('mybutton');

var beta = 'Universidad de la esquina';
let gama = 5.0;
let delta = true;

function accion1(){
    let alfa = 'Universidad Icesi';
    for(let i=0 ; i<10 ; i++){
        var A = 0;
    }
    console.log(A);
    //console.log(i);
    console.log(alfa);
}

accion1();

//Lamdas, arrow functions

const accion2 = (nombre)=>{
    alert("Hola "+nombre);
}
mybutton.addEventListener('click', accion2);
