const title = document.getElementById('title');
const subtitle =document.getElementById('subtitle');

const user = JSON.parse(
    window.localStorage.getItem('userClicked')
);

title.innerHTML = user.name;
subtitle.innerHTML = user.email;