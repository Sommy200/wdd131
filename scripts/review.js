
const products = [
    { id: "fc-1888", name: "flux capacitor" },
    { id: "fc-2050", name: "power laces" },
    { id: "fs-1987", name: "time circuits" },
    { id: "ac-2000", name: "low voltage reactor" },
    { id: "jj-1969", name: "warp equalizer" }
];

const params = new URLSearchParams(window.location.search);
const summaryList = document.getElementById("summary-list");

function addRow(label, value) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    summaryList.appendChild(row);
}


const productId = params.get("product");
const matchedProduct = products.find(p => p.id === productId);
addRow("Product:", matchedProduct ? matchedProduct.name : "N/A");


const rating = params.get("rating");
addRow("Rating:", rating ? "&star;".repeat(rating) : "N/A");

const installDate = params.get("installDate");
addRow("Installed:", installDate || "N/A");


const features = params.getAll("features");
addRow("Useful Features:", features.length > 0 ? features.join(", ") : "None selected");


const review = params.get("review");
addRow("Review:", review ? review : "No written review provided.");


const username = params.get("username");
addRow("Submitted by:", username ? username : "Anonymous");


let reviewCount = parseInt(localStorage.getItem("reviewCount"), 10) || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);
document.getElementById("review-count").textContent = reviewCount;


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;