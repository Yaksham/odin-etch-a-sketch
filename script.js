function create(size=4) {
    const div = document.createElement('div');
    div.classList.add('block');
    const divRow = document.createElement('div');
    divRow.classList.add('row');
    const main = document.querySelector('#main');

    for (let i = 0; i < size; i++) {
        main.appendChild(divRow.cloneNode());
    }
    document.querySelectorAll('.row').forEach(row => {
        for (let i = 0; i < size; i++) {
            row.appendChild(div.cloneNode());
        }
    })
    toggle();
}

function selectColor(number) {
    const hue = number * 137.508; // use golden angle approximation
    return `hsl(${hue},40%,65%)`;
}

function toggle(arg) {
    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => {
        if (arg === 'reset') {
            block.style.backgroundColor = null;
            block.classList.remove('active');
            return;
        }
        block.addEventListener('mouseover', () => {
            if (arg === 'erase') {
                block.style.backgroundColor = null;
                block.classList.remove('active');
            }
            else if (arg === 'random') {
                block.style.backgroundColor= selectColor(Math.floor(Math.random() * 999));
            }
            else {
                block.style.backgroundColor = null;
                block.classList.add('active');
            }
        })
    })
}


const btn = document.querySelector('#size');
const draw = document.querySelector('#draw');
const eraser = document.querySelector('#erase');
const random = document.querySelector('#random');
const reset = document.querySelector('#reset');

btn.addEventListener('click', () => {
    console.log('lol')
    size = prompt('Enter number of squares on one side');
    if (size > 100) {
        alert("Max size can be 100.");
        return;
    }
    if (size < 1) {
        alert("Enter a valid value.");
        return;
    }
    rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.parentNode.removeChild(row);
    })
    create(size);
});

eraser.addEventListener('click', toggle.bind(null, 'erase'));
draw.addEventListener('click', toggle.bind(null, 'draw'));
random.addEventListener('click', toggle.bind(null, 'random'));
reset.addEventListener('click', toggle.bind(null, 'reset'));

create();