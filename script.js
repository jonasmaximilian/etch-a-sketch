console.log("Hello, World!");

const container = document.getElementById('container');

function createSquare(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        //cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
  };
}

createSquare(16, 16);

let gridItems = document.querySelectorAll('.grid-item');

/*
gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = "black";
    });
});
*/

document.addEventListener('mouseover', e => {
    if(e.target.matches('.grid-item')){
        e.target.style.backgroundColor = "black";
    }
})


const reset = document.querySelector('#reset');


reset.addEventListener('click', () => {
    gridItems.forEach(item => {
        item.remove();
    });
    let size = window.prompt("Enter size of new board: ")
    createSquare(size, size);
    gridItems = document.querySelectorAll('.grid-item');
});