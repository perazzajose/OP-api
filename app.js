document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "https://my-json-server.typicode.com/perazzajose/onepieceapi/"; 
  const endpoint = "tripulacion_de_luffy"; 
  fetch(`${baseUrl}${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      const personajesCarousel = document.getElementById("personajesCarousel");
      data.forEach((personaje, index) => {
        
        const card = document.createElement("div");
        card.style.width = "48rem"; 
        card.style.display = "inline-block"; 

        const imagen = document.createElement("img");
        imagen.src = personaje.imagen; 
        imagen.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.style.padding = "1rem"; 

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title"); 
        cardTitle.textContent = personaje.nombre;

        const cardText = document.createElement("p");
        cardText.classList.add("card-text"); 
        cardText.textContent = `Rol: ${personaje.rol}`; 

        const cardText2 = document.createElement("p");
        cardText2.classList.add("card-text"); 
        cardText2.textContent = `Fruta del Diablo: ${personaje.fruta_del_diablo}`;


        cardBody.appendChild(imagen);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardText2);
        card.appendChild(cardBody);
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (index === 0) {
          carouselItem.classList.add("active"); 
        }
        carouselItem.appendChild(card);
        personajesCarousel.appendChild(carouselItem);
      });
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
});







let personajeActivo = 0;
function cambiarPersonaje(delta) {
  const personajes = document.querySelectorAll(".carousel-item");
  
  personajes[personajeActivo].classList.remove("active");
  personajeActivo += delta;
  if (personajeActivo < 0) {
    personajeActivo = personajes.length - 1;
  } else if (personajeActivo >= personajes.length) {
    personajeActivo = 0;
  }
  personajes[personajeActivo].classList.add("active");
}
