function DragAndDrop(){

    let card = document.querySelector(".stages__card");
    let cells = document.querySelectorAll(".stages__cell");

    function DragStart(){
        setTimeout(()=>{this.classList.add('hidden')},1000);
        
    }

    function DragEnd(){
        setTimeout(()=>{this.classList.remove('hidden')},1000);
    }

    card.addEventListener("dragstart",DragStart)
    card.addEventListener("dragend",DragEnd)
}

DragAndDrop()
