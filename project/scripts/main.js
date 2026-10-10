const programs = [
    { name: "Learn to Swim", group: "kids", ages: "Ages 5 to 9", blurb: "Small-group lessons that teach floating, kicking and first strokes." },
    { name: "Youth Squad", group: "kids", ages: "Ages 10 to 17", blurb: "Technique and race coaching for young swimmers who want to compete." },
    { name: "Adult Beginners", group: "adults", ages: "Ages 18 and up", blurb: "A patient, private-feeling class for adults who are new to the water." },
    { name: "Adult Fitness", group: "adults", ages: "Ages 18 and up", blurb: "Early-morning lap sessions to build strength and stamina." },
    { name: "Water Safety Basics", group: "safety", ages: "All ages", blurb: "Learn how to stay safe, float and call for help." },
    { name: "Lifesaving Skills", group: "safety", ages: "Ages 14 and up", blurb: "Rescue and first-response skills taught by certified coaches." }
];

function setFooter() {
    const year = document.getElementById("currentyear");
    const modified = document.getElementById("lastModified");
    if (year) {
        year.textContent = `${new Date().getFullYear()}`;
    }
    if (modified) {
        modified.textContent = `Last modified: ${document.lastModified}`;
    }
}

function setupMenu() {
    const button = document.getElementById("menu");
    const nav = document.getElementById("site-nav");
    if (!button || !nav) {
        return;
    }
    button.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        button.setAttribute("aria-expanded", `${isOpen}`);
    });
}

function renderPrograms(group) {
    const list = document.getElementById("program-list");
    if (!list) {
        return;
    }
    const shown = group === "all" ? programs : programs.filter(program => program.group === group);
    list.innerHTML = shown
        .map(program => `<article class="card"><h3>${program.name}</h3><p class="tag">${program.ages}</p><p>${program.blurb}</p></article>`)
        .join("");
}

function setupFilters() {
    const buttons = document.querySelectorAll(".filters button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(other => other.setAttribute("aria-pressed", "false"));
            button.setAttribute("aria-pressed", "true");
            renderPrograms(button.dataset.group);
        });
    });
    renderPrograms("all");
}

function trackVisits() {
    const note = document.getElementById("visit-note");
    if (!note) {
        return;
    }
    const count = (Number(localStorage.getItem("visits")) || 0) + 1;
    localStorage.setItem("visits", count);
    const times = count === 1 ? "time" : "times";
    note.innerHTML = count === 1
        ? `Welcome to our club website! This is your first visit.`
        : `Welcome back! You have visited <strong>${count}</strong> ${times}.`;
}

function greetMember() {
    const message = document.getElementById("thanks-msg");
    if (!message) {
        return;
    }
    const params = new URLSearchParams(window.location.search);
    const name = params.get("name");
    if (name) {
        localStorage.setItem("memberName", name);
    }
    const saved = localStorage.getItem("memberName");
    message.textContent = saved
        ? `Thank you, ${saved}! We will email you shortly to confirm your free trial session.`
        : `Thank you! We will email you shortly to confirm your free trial session.`;
}

setFooter();
setupMenu();
setupFilters();
trackVisits();
greetMember();
