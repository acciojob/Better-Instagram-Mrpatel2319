// Store the dragged element
let draggedElement = null;

document.querySelectorAll(".image-div").forEach((div) => {
  // Allow dragging
  div.addEventListener("dragstart", (e) => {
    draggedElement = e.target;
    setTimeout(() => {
      e.target.style.opacity = "0.5"; // Optional: Visual feedback
    }, 0);
  });

  div.addEventListener("dragend", (e) => {
    e.target.style.opacity = "1";
    draggedElement = null; // Reset the dragged element
  });

  // Allow dropping
  div.addEventListener("dragover", (e) => {
    e.preventDefault(); // Required to allow dropping
  });

  div.addEventListener("drop", (e) => {
    e.preventDefault(); // Prevent default behavior

    if (draggedElement && draggedElement !== e.target) {
      // Swap the background images
      const draggedStyle = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedStyle;
    }
  });
});
