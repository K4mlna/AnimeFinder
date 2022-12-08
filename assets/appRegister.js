// Fonction qui se déclanche quand on clique sur "Create Account"
async function getInputs() {
  try {

    // Récupère les variables de la page Register
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value

    //await checkUser(login)

    // Requêtes en 2 temps :
    // GET pour voir si on est déjà inscrit
    // PUSH pour s'ajouter si on est pas déjà inscrit

    // Chercher parmi tous les logins
    if (await checkUser(login)) { alert("Identifiants déjà utilisés!") }
    // Sinon envoyer dans le bdd mdp + login
    else {
      await createNewUser(login, password);

      //   // alert(login +  "\n" + password);
    }

  } catch (e) { alert(e) }

  // Crée un nouvel utilisateur
  async function createNewUser(login, password) {
    // requête post vers bdd (mdp + login)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "pseudo_text": login,
      "motdepasse_text": password
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };


    let res = await fetch("http://127.0.0.1:8000/Account/users/", requestOptions)
      .then(response => response.json())
      // .then(result => {  })
      .catch(error => console.log('error', error));

      window.location.href = "../login.html";
  };

  // Vérifie si déjà inscrit
  async function checkUser(login) {


    // On demande à la bdd tous les Users


    try {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "text/plain");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let res = await fetch("http://127.0.0.1:8000/Account/users/", requestOptions)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error));

      let IS_INSCRIT = false;
      for (const [key, value] of Object.entries(res)) {
        if (value.pseudo_text == login) { IS_INSCRIT = true; }
        // console.log("Key :" + key + "\n" + "Value :" + value)
        if (IS_INSCRIT === true) { return true; }
      }

      // for (let i = 0; i < res.lenght; i++) {
      //   
      // }
      // console.log(res)
      // Pour chaque élément de la réponse :


    } catch (e) { alert(e) }



  };
};