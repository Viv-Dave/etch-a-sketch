document.addEventListener('DOMContentLoaded', (event) => {
    function multiplyDivs(numberOfDivs) {
      const container = document.getElementById('container');
      container.style.gridTemplateColumns = `repeat(${numberOfDivs}, 100px)`; // Set the grid columns
  
      for (var i = 0; i < numberOfDivs; i++) {
        for (var j = 0; j < numberOfDivs; j++) {
          var newDiv = document.createElement("div");
          newDiv.className = "my-div";
          container.appendChild(newDiv);
        }
      }
    }
  
    multiplyDivs(16); 
    document.addEventListener('click', function() {
        const divs = document.querySelector('.my-div'); // Select all divs with class "my-div"
            div.style.backgroundColor = "#0000ff"; // Change the color for each div
        });
    });
  });
