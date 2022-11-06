const div = document.createElement('div');
div.classList.add('block');
const divRow = document.createElement('div');
divRow.classList.add('row');
const main = document.querySelector('#main');

size = 4;

for (let i = 0; i < size; i++) {
    main.appendChild(divRow.cloneNode());
}
document.querySelectorAll('.row').forEach(row => {
    for (let i = 0; i < size; i++) {
        row.appendChild(div.cloneNode());
    }
})

const blocks = document.querySelectorAll('.block');

// const btn = document.querySelector('#size');
// btn.addEventListener('click', () => {
//     size = prompt('Enter number of squares on one side');
//     rows = document.querySelectorAll('.row');
//     rows.forEach((row) => {
//         row.parentNode.removeChild(row);
//     })
// })

blocks.forEach(block => {
    block.addEventListener('mouseover', () => {
        block.classList.toggle('active');
    })
    block.addEventListener('mouseout', () => {
        block.classList.toggle('active');
    })
})