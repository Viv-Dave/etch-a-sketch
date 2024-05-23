document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById('container');
  const greenbtn = document.getElementById('greenbtn');
  const bluebtn = document.getElementById('bluebtn');
  const redbtn = document.getElementById('redbtn');
  const whitebtn = document.getElementById('whitebtn');
  const blackbtn = document.getElementById('blackbtn');
  const yellowbtn = document.getElementById('yellowbtn');
  let setColor = '';

  createGrid(8, 8);

  greenbtn.addEventListener('click', function () {
      setColor = "green";
  });

  bluebtn.addEventListener('click', function () {
      setColor = "blue";
  });

  redbtn.addEventListener('click', function () {
      setColor = "red";
  });
  whitebtn.addEventListener('click', function() {
      setColor = "white";
  });
  blackbtn.addEventListener('click', function() {
      setColor = "black";
  });
  yellowbtn.addEventListener('click', function() {
      setColor = "yellow";
  })

  container.addEventListener('click', function(event) {
      if (event.target.classList.contains('grid-item')) {
          event.target.style.backgroundColor = setColor;
      }
  });

  function createGrid(rows, cols) {
      container.innerHTML = '';

      for (let i = 0; i < rows * cols; i++) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');
          container.appendChild(gridItem);
      }
  }
});
