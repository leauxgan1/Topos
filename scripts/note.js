
function setupNote(note,container) {
    dragElement(note,container);
}

function setupNotes() {
    let container = document.getElementById("NoteArea");
    let notes = Array.from(document.getElementsByClassName("Note"));
    notes.forEach((note) => {
        setupNote(note,container);
    });
}

function createCard() {
    const addCard = document.getElementById("AddCard");
    const newCard = document.createElement("div");
    newCard.className = "Note bordered";
    
    // newCard.style = "transform: translateX(500px); transform:translateY(200px)";
    const titleSpace = document.createElement("div");
    titleSpace.contentEditable = true;
    titleSpace.className = "NoteTitle bordered";
    // titleSpace.style = "contentEditable: true";
    const bodySpace = document.createElement("div");
    bodySpace.contentEditable = true;
    bodySpace.className = "NoteContent bordered";
    // titleSpace.style = "contentEditable: true";

    
    
    const titleContent = document.createTextNode("New Card");
    const bodyContent = document.createTextNode("Enter Contents");

    titleSpace.appendChild(titleContent);
    bodySpace.appendChild(bodyContent);

    newCard.appendChild(titleSpace);
    newCard.appendChild(bodySpace);

    addCard.insertAdjacentElement('afterend',newCard);
    //setupNote(newCard,noteArea);

}



function dragElement(element, container) {
    let [speedX,speedY,mouseX,mouseY] = [0,0,0,0];
    element.onmousedown = dragMouseDown;
    
    let toleranceX = 15;
    let toleranceY = 15;
    
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      mouseX = e.clientX;
      mouseY = e.clientY;      
      //resize = checkResize(left,top,mouseX,mouseY,width,height,toleranceX,toleranceY);
      resize = -1;

      if (resize > -1) {
        switch (resize) {
          case 0:
            document.onmousemove = elementResizeTop;
            break;
          case 1:
            document.onmousemove = elementResizeRight;
            break;
          case 2:
            document.onmousemove = elementResizeBottom;
            break;
          case 3:
            document.onmousemove = elementResizeLeft;
            break;
          default:
            break;
        }
        
      }
      else {
        document.onmousemove = elementDrag;

      }
      document.onmouseup = closeElement;
      
    }

    function limitPos(container) {
      let left = element.offsetLeft;
      let top = element.offsetTop;
      let width = element.clientWidth;
      let height = element.clientHeight;
      let containerPos = container.getBoundingClientRect();
      let minX = containerPos.left;
      let minY = containerPos.top;
      let maxX = container.clientWidth;
      let maxY = container.clientHeight; 

      console.log(minX,minY,maxX,maxY);
    
      if(mouseX - speedX < minX || mouseX + speedX > maxX) {
        speedX = 0;
      }
      else if(mouseY - speedY < minY || mouseY + speedY > maxY) {
        speedY = 0;
      }

    }
  
    function elementDrag(e) {
      let left = element.left;
      let top = element.top;
      let width = element.clientWidth;
      let height = element.clientHeight;
      e = e || window.event;
      e.preventDefault();
      //console.log([speedX,speedY,mouseX,mouseY]);
      // calculate the new cursor position:
      speedX = (mouseX - e.clientX);
      speedY = (mouseY - e.clientY);
      
      
      mouseX = e.clientX;
      mouseY = e.clientY;

      limitPos(container);

      // set the element's new position, within the bounds of the parent div
      element.style.top = (element.offsetTop - speedY) + "px";
      element.style.left = (element.offsetLeft - speedX) + "px";
    }
  
    function closeElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }

    function checkResize(mouseX,mouseY,dx,dy) {
      if(mouseY <= top + dy) {
        return 0;//resizetop
      }
      else if (mouseX >= left + width - dx ) {
        return 1;// resizeright
      }
      else if(mouseY >= top + height - dy) {
        return 2;//resizebottom
      } 
      else if (mouseX <= left + dx) {
        return 3;//resizeleft
      }
      else {
        return -1;
      } 
    }

    function elementResizeTop(e) {

    }
    function elementResizeRight(e) {

    }
    function elementResizeBottom(e) {

    }
    function elementResizeLeft(e) {

    }

}

createCard();

setupNotes();