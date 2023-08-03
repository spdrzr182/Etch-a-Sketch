const container = document.querySelector('#container');
for (i=0; i<16; i++) {
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid)
grid.addEventListener('click', (e) => {
    grid.classList.add('color')
})
const clear = document.querySelector('#clear');
clear.addEventListener ('click', erase); 
function erase() {
    grid.classList.remove('color') 
    }; 
}



//if (grid.classList.contains('color') === true) {
    
    //}