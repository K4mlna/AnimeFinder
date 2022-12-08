// Crée des DIVs à partir d'une liste
async function generateDiv() {
  try {

    // Supprimer les images avant la nouvelle recherche :
    document.getElementById("animeContainer").innerHTML = "";

    let list = await generateAnimeList()

    for (i = 0; i < list.length; i++) {

      // // divContainer.addEventListener(onclick="alert(`Clicked on anime${i}`)")
      // .addEventListener("click", alert(`Clicked on anime: ${list[i].title}`));

      // Main DIV that contains every sub_div [img,title]

      let container = document.getElementById('animeContainer');

      let subContainer = document.createElement("div");

      subContainer.classList.add("anime")
      subContainer.id = list[i].id;

      img = document.createElement('img');
      img.src = list[i].image;
      img.id = list[i].id

      title = document.createElement('p');
      title = document.createTextNode(list[i].title);
      title.id = list[i].id



      subContainer.appendChild(img);
      subContainer.appendChild(title)


      // subContainer.addEventListener('click', (e) => { try { alert(e.target.id) } catch (e) { alert(e) } })
      subContainer.addEventListener('click', (e) => {try{animeClickEvent(e)}catch(e){alert(e)}})


      // Ajouter le nouveau div au Parent
      container.appendChild(subContainer)

    };
    
  } catch (e) { alert(e) }
};


//Demande à l'API une liste d'anime par critères 
async function generateAnimeList() {
  try {
    // Take input and quantity values
    const query = document.getElementById("input").value;
    // var quantity = document.getElementById("quantity").value; if (quantity == "all") { quantity = 25 };

    // Small fix because if we ask the API to seach but insert noting we must use https://api.jikan.moe/v4/anime without "?q=" 
    let param;
    if (query == null) { param = "" } else { param = "?q=" + query };

    // Here we ask the API about some damn anime
    let response = await axios({
      url: `https://api.jikan.moe/v4/anime${param}`,
      method: 'get',
      timeout: 8000,
      headers: { 'Content-Type': 'application/json' }
    });

    // We format everything into a list : {"title":the_title,"image":link_to_image, "id":id_of_the_anime_on_myanimelist}
    let list = [];
    for (let i = 0; i < response.data.pagination.items.count; i++) {
      list.push({ "title": response.data.data[i].titles[0].title, "image": response.data.data[i].images.jpg.image_url, "id": response.data.data[i].mal_id })
    }
    // alert(JSON.stringify(list))
    return list;

  } catch (e) { alert(e) }
};


// On attend que la page soit chargée pour exécuter ces fonctions
// Elles dépendent généralement d'élements de la page qu'on essaie de récupérer
window.onload = function () {
  generateDiv()
};

// Quand on clique sur un animé
function animeClickEvent(e){};