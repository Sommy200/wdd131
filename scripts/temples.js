const hamButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("open");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;
