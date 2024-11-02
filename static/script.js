const title = document.querySelector("h1");
const titleButton = document.getElementById("title-button");

titleButton.addEventListener("click", () => {
    if (title.style.color === "purple") {
        title.style.color = "red";
    } else {
        title.style.color = "purple";
    }
});