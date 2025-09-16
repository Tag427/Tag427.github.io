/*
const sayHello = () => {
    console.log("Hello World");
}

document.getElementById("btn-click-me").onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = (event) => {
    document.getElementById("p-welcome").innerHTML = "Hello World";
    //document.getElementById("btn-click-me").classList.add("clicked");
    event.currentTarget.classList.add("clicked"); //current targes is the button clicked
}

document.getElementById("btn-happy").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "YAY";
    pFeeling.classList.add("happy");
    pFeeling.classList.remove("sad");
}

document.getElementById("btn-sad").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "NAY";
    pFeeling.classList.add("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("btn-clear").onclick = () => {
    const pFeeling = document.getElementById("p-feeling");
    pFeeling.innerHTML = "";
    pFeeling.classList.remove("sad");
    pFeeling.classList.remove("happy");
}

document.getElementById("txt-emotion").onkeyup = (event) => {
    const userInput = event.currentTarget.value;
    document.getElementById("p-emotion").innerHTML = 'You are feeling" $(userInput).'
    document.getElementById("img-emotion").classList.remove("hidden");
};