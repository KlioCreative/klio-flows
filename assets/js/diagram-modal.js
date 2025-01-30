document.addEventListener('DOMContentLoaded', function() {
  // Create modal container
  const modal = document.createElement('div');
  modal.className = 'diagram-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <div class="zoom-controls">
          <button class="zoom-in">+</button>
          <button class="zoom-out">-</button>
          <button class="zoom-reset">Reset</button>
        </div>
        <button class="close-modal">&times;</button>
      </div>
      <div class="modal-diagram"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Track zoom level and pan position
  let currentZoom = 1;
  let isPanning = false;
  let startPoint = { x: 0, y: 0 };
  let currentPoint = { x: 0, y: 0 };

  // Add click handlers to all mermaid diagrams
  document.querySelectorAll('.mermaid').forEach(diagram => {
    diagram.style.cursor = 'pointer';
    diagram.addEventListener('click', () => {
      const clone = diagram.cloneNode(true);
      modal.querySelector('.modal-diagram').innerHTML = '';
      modal.querySelector('.modal-diagram').appendChild(clone);
      modal.style.display = 'flex';
      currentZoom = 1;
      currentPoint = { x: 0, y: 0 };
      updateTransform();
    });
  });

  // Close modal on button click or outside click
  modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Zoom controls
  modal.querySelector('.zoom-in').addEventListener('click', () => {
    currentZoom = Math.min(currentZoom * 1.2, 5);
    updateTransform();
  });

  modal.querySelector('.zoom-out').addEventListener('click', () => {
    currentZoom = Math.max(currentZoom / 1.2, 0.5);
    updateTransform();
  });

  modal.querySelector('.zoom-reset').addEventListener('click', () => {
    currentZoom = 1;
    currentPoint = { x: 0, y: 0 };
    updateTransform();
  });

  // Mouse wheel zoom
  modal.querySelector('.modal-diagram').addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY;
    if (delta > 0) {
      currentZoom = Math.max(currentZoom / 1.1, 0.5);
    } else {
      currentZoom = Math.min(currentZoom * 1.1, 5);
    }
    updateTransform();
  });

  // Pan functionality
  const modalDiagram = modal.querySelector('.modal-diagram');
  
  modalDiagram.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // Left click only
      isPanning = true;
      startPoint = {
        x: e.clientX - currentPoint.x,
        y: e.clientY - currentPoint.y
      };
    }
  });

  document.addEventListener('mousemove', (e) => {
    if (isPanning) {
      currentPoint = {
        x: e.clientX - startPoint.x,
        y: e.clientY - startPoint.y
      };
      updateTransform();
    }
  });

  document.addEventListener('mouseup', () => {
    isPanning = false;
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
    }
  });

  // Update transform
  function updateTransform() {
    const diagram = modal.querySelector('.modal-diagram > .mermaid');
    if (diagram) {
      diagram.style.transform = `translate(${currentPoint.x}px, ${currentPoint.y}px) scale(${currentZoom})`;
    }
  }
});
