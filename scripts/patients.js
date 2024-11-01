import PatientCard from "./../components/PatientCard.js";
import { BASE_URL } from "./constants.js";

const access_token = window.localStorage.getItem('access_token');
if(access_token === null){
    location.href = './../index.html';
}

const patientList = document.getElementById('patientList');

const getAllUsers = async (token) => {
    let response = await fetch(`${BASE_URL}/users/list`, {
        headers: {
            'Authorization':`Bearer ${token}`
        },
        method: 'GET'
    });
    let userList = await response.json();
    console.log(userList);

    userList.forEach(user => {
        let patientCard = new PatientCard(user);
        let component = patientCard.render();
        patientList.appendChild(component);
    });
}

getAllUsers(access_token);