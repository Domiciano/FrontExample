const nameInput = document.getElementById('nameInput');
const natIDInput = document.getElementById('natIDInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const signupBtn = document.getElementById('signupBtn');


const postUser = async (json) => {
    let response = await fetch('http://localhost:8080/users/create', {
        method: 'POST',
        body: json,
        headers:{'Content-Type':'application/json'}
    });
    let responseJSON = await response.json();
    console.log(responseJSON);
}

signupBtn.addEventListener('click', (event)=>{
    event.preventDefault();

    let name = nameInput.value;
    let natID = natIDInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    
    let user = {
        name: name,
        natID: natID,
        email: email,
        password: password
    };

    //Obj -> String
    let json = JSON.stringify(user);
    console.log(json);

    //POST
    postUser(json);
    console.log('Fin del metodo');
});



//ChartJS