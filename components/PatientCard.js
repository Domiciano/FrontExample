export default class PatientCard{

    constructor(user){
        this.user = user;
    }

    onClick(){
        let json = JSON.stringify(this.user);
        window.localStorage.setItem('userClicked', json);
        location.href = 'patientDetail.html';
    }

    render() {
        let container = document.createElement('div'); //<div>
        container.classList.add('card');
        container.classList.add('nicecard');

        let cardbody = document.createElement('div');
        cardbody.classList.add('card-body');

        let title = document.createElement('h5') //<h2>
        title.classList.add('card-title');

        let description = document.createElement('h6'); //<span>
        description.classList.add('card-subtitle');
        description.classList.add('mb-2');
        description.classList.add('text-body-secondary');

        cardbody.appendChild(title); //<div> <h2></h2> </div>
        cardbody.appendChild(description); //<div> <h2></h2> <span></span> </div>
        container.appendChild(cardbody);

        title.textContent = this.user.name;
        description.textContent = this.user.email;


        container.addEventListener('click', ()=>this.onClick() );

        return container;
    }

}