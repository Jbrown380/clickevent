const buttons = document.querySelectorAll("buttons")
const tbody = document.querySelector("body")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        console.log(event.target.id);
 })
}
const main = document.querySelector("main");
main = document.createElement("h2" + "h3");
main = document.appendChild("h3");
main = document.appendChild("h2");