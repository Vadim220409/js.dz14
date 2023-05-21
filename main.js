let title1 = document.getElementsByClassName("title1")
let text = document.getElementsByClassName("text")
let title2 = document.getElementsByClassName("title2")

for (let a of title1) {
    a.textContent = "Hello!";
    a.style.color = "red";
    a.style.backgroundColor = "black";
}

for (let b of title2){
    b.textContent = "My name Alex";
    b.style.color = "green";
    b.style.backgroundColor = "black";
}

for (let c of text){
    c.textContent = "Bye!";
    c.style.color = "yellow"
    c.style.backgroundColor = "black";
}