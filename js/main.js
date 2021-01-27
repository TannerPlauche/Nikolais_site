

function submitFunc(event) {
    event.preventDefault();
    let restaurant = document.getElementById('resturant').value;
    console.log(restaurant);
}

function text(event, document) {
    event.preventDefault();
    let b = document.getElementById('textinput').value;
    alert(`hello ${b}`);
}
function login() {
    const aaa = document.getElementById('html');
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    if (password === '88247' && username === 'plauche') {
        alert('acsess granted');
    }


    else {
        alert('acsses deinied');
        aaa.innerHTML = 'sorry incorect password';
    }
}
function what(event) {
    event.preventDefault()
    let thing = document.getElementById('video-game').value;
    console.log(thing);
}

function cut(event) {
    event.preventDefault()
    var w = document.getElementsByClassName('scope');
    console.log(w)
}

const login1 = event => {
    const html = Document.getElementById('html1')
}