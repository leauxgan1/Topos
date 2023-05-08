

function setZoom(elems){
    let scale = 1;
    let previousScale = 1;
    function zoomPage(e) {
        e = e || window.event;
        e.preventDefault();
        // Check the direction of scaling (scale up -> up scroll, scale down -> down scroll)
        scale += document.documentElement.scrollTop;
        elems.foreach(elem => {
            elem.style = "transform: scale(" + 100 * scale + "%)";
        });
    }
    document.onscroll = zoomPage;
}

let noteElems = Array.from(document.getElementById("NoteArea").children);

//console.log(noteElems);

setZoom(noteElems);