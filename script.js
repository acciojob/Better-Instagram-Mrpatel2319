//your code here
const draggables = document.querySelectorAll('.draggable');
let draggedElement = null;

// Add drag event listeners to all draggable elements
draggables.forEach(draggable => {
    // On drag start
    draggable.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        setTimeout(() => {
            e.target.style.opacity = '0.5';
        }, 0);
    });

    // On drag end
    draggable.addEventListener('dragend', (e) => {
        setTimeout(() => {
            e.target.style.opacity = '1';
        }, 0);
        draggedElement = null;
    });

    // Allow dropping on other elements
    draggable.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // Handle the drop
    draggable.addEventListener('drop', (e) => {
        e.preventDefault();

        if (draggedElement && draggedElement !== e.target) {
            // Swap the background images
            const tempBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = tempBg;
        }
    });
});
