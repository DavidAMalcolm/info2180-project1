/* Add your JavaScript to this file */

document.addEventListener("DOMContentLoaded",function(){
    let button = document.getElementsByClassName("btn")[0];
    let input = document.getElementById('email');
    let message = document.getElementsByClassName('message')[0];
    let form = document.getElementsByTagName('form')[0];

    form.addEventListener('submit',function(event){
        event.preventDefault();
        if (input.value.includes("@") && input.value.includes(".com")){
            message.textContent = "Thank you! Your email address '" + input.value + "' has been added to our mailing list!";
        }
        else{
            message.textContent = "Please enter a valid email address."
        }
    })
})