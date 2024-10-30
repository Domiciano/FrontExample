const BASE_URL = 'https://b664-200-3-193-77.ngrok-free.app';

const patientList = document.getElementById('patientList');

const getAllUsers = async () => {
    let response = await fetch(`${BASE_URL}/users/list`);
    let userList = await response.json();
    console.log(userList);

    userList.forEach(user => {
        let patientCard = new PatientCard(user);
        let component = patientCard.render();
        patientList.appendChild(component);
    });
}

getAllUsers();