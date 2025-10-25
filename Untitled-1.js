//input
function checkName () {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("введите имя для дальнейшего использования сайта!");
    } else {
        alert("привет, " + name);
    }
}
//проверка нажатой клавиши
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Нажата клавиша Enter")
    }
})
const player = document.getElementById("player");
let x = 400; // позиция по X
let y = 800; // позиция по Y
const speed = 10; // скорость движения

document.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "W") y -= speed; // вверх
    if (e.key === "s" || e.key === "S") y += speed; // вниз
    if (e.key === "a" || e.key === "A") x -= speed; // влево
    if (e.key === "d" || e.key === "D") x += speed; // вправо

    player.style.left = x + "px";
    player.style.top = y + "px";
})
