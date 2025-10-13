
const myform = document.querySelector('.container');
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const userlist = document.querySelector('.users');
const msg = document.querySelector('.msg');

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameinput.value);

    if(nameinput.value === '' || emailinput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = '  Please enter all fields';
        msg.style.color = 'white';
        msg.style.backgroundColor = 'red';

        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
        userlist.appendChild(li);

        //clear fields
        nameinput.value = '';
        emailinput.value = '';
    } 
}