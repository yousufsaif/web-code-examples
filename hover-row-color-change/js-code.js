document.addEventListener('DOMContentLoaded', (event) => {
    const table = document.querySelector('table');

    table.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'TD') {
            event.target.parentNode.style.backgroundColor = 'lightblue'; // Changes the entire row's color
        }
    });

    table.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'TD') {
            event.target.parentNode.style.backgroundColor = ''; // Resets the entire row's color
        }
    });
});
