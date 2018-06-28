// Select color input
// Select size input
const table = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');
let gridHeight, gridWidth;
// When size is submitted by the user, call makeGrid()


const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    makeGrid();
})

function makeGrid() {

// Your code goes here!
table.innerHTML = '';


gridHeight = document.getElementById('inputHeight').value;
gridWidth = document.getElementById('inputWidth').value;

for(i = 0; i < gridHeight; i++)  {
    let row = table.insertRow(i);
    for (j =0; j < gridWidth; j++)  {
        let cell = row.insertCell(j);

        cell.addEventListener('click', function(event)  {
            cell.style.backgroundColor = colorPicker.value;
        });

        cell.addEventListener('dblclick', function(event)  {
            cell.style.backgroundColor = '';
        });
    }
}
}
