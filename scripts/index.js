import { BASE_URL } from "./constants.js";

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');

//domic.rincon@gmail.com
//123456

const login = async () => {
    let user = {
        email:emailInput.value,
        password:passwordInput.value
    };

    let response = await fetch(`${BASE_URL}/users/login`, {
        method:'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    });
    if(response.status === 200){
        let data = await response.json();
        console.log(data.access_token);
        //Almacenar el token
        window.localStorage.setItem('access_token', data.access_token);
        location.href = 'screens/patients.html';
    }else{
        alert('Usuario o contraseña no existen en nuestros registros');
    }
}

loginButton.addEventListener('click', login);