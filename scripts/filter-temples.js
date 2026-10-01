const hamButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamButton.classList.toggle("open");
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Abidjan Côte d'Ivoire",
        location: "Abidjan, Côte d'Ivoire",
        dedicated: "2025, May, 25",
        area: 17362,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Bern Switzerland",
        location: "Bern, Switzerland",
        dedicated: "1955, September, 11",
        area: 35546,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple/bern-switzerland-temple-54641-main.jpg"
    },

    // Add more temple objects here...
];

const main = document.querySelector("main");

// Extract the dedication year from a string like "2005, August, 7"
function getDedicatedYear(dedicated) {
    return parseInt(dedicated.split(",")[0], 10);
}

// Build and insert a temple card for each temple in the given array
function displayTemples(templeArray) {
    // Remove any previously rendered cards (but keep the <h1>)
    document.querySelectorAll("main figure").forEach(figure => figure.remove());

    templeArray.forEach(temple => {
        const figure = document.createElement("figure");

        figure.innerHTML = `
            <figcaption>
                <h2>${temple.templeName}</h2>
                <p><span class="label">Location:</span> ${temple.location}</p>
                <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
                <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        `;

        main.appendChild(figure);
    });
}

// Filter logic for each nav option
function filterTemples(filter) {
    let filtered;

    switch (filter) {
        case "old":
            filtered = temples.filter(temple => getDedicatedYear(temple.dedicated) < 1900);
            break;
        case "new":
            filtered = temples.filter(temple => getDedicatedYear(temple.dedicated) > 2000);
            break;
        case "large":
            filtered = temples.filter(temple => temple.area > 90000);
            break;
        case "small":
            filtered = temples.filter(temple => temple.area < 10000);
            break;
        case "home":
        default:
            filtered = temples;
            break;
    }

    displayTemples(filtered);
}

// Wire up each nav link to its corresponding filter
document.querySelectorAll(".navigation a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        filterTemples(link.dataset.filter);

        // Close the mobile menu after a selection
        navigation.classList.remove("show");
        hamButton.classList.remove("open");
    });
});

// Show all temples on initial page load
displayTemples(temples);