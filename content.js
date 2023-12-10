function onSkipClick() {
    alert("Jee");
}

function addButton() {
    const skip = document.createElement("button");
    skip.textContent = "Skip";
    skip.style = `
        /* position: absolute;
        top: -2px; */
    
        background-color: white;
        border: 10px white;
    `;
    skip.onClick = onSkipClick;

    document
        .querySelector("._PackageTypeDescription_1ehfm_32")
        .appendChild(skip);
}

const href = location.href;

if (href.includes("sparxmaths")) {
    addButton();
}
