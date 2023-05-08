const noteArea = document.getElementById("NoteCard");

function createCard() {
    const newCard = document.createElement("div");
    newCard.className = "Note";
    newCard.style = "transform: translateX(200px); transform:translateY(200px)";
    const newContent = document.createTextNode("New Card");
    newCard.appendChild(newContent);

    document.body.insertBefore(newCard,noteArea);

}