function addButton() {
    const skip = document.createElement("button");
    skip.textContent = "Skip";
    skip.style = `
        position: absolute;
        top: -2px
    `;

    document.querySelector("body").appendChild(skip);
}

const href = location.href;

if (href.includes("sparxmaths")) {
    addButton();
}
