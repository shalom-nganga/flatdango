const film = (movie) => {

    let Play = document.createElement("div");
    Play.innerHTML = `
    <img src= "${movie.poster}">
    <h2>${movie.title}</h2>
    <p>Show Time: ${movie.showTime}</p>
    <p class="book">Tickets Sold</p> 
    <button>Book Now</button>
    `;

   
   
   
   }