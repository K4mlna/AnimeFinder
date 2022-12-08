// Connecte l'utilisateur [LOGIN + MDP]
async function checkUser() {
    
    //On recup les inputs
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    //On check si login et mdp déjà dans la base:
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
          if (value.pseudo_text == login && value.motdepasse_text == password) { IS_INSCRIT = true; }
          
          // console.log("Key :" + key + "\n" + "Value :" + value)
          if (IS_INSCRIT === true) { return true }
          //else[alert("ntm");]
        }
    } catch (e) { alert(e) }
};

async function loginUser(){
    //Si l'utilisateur est 
    if(await checkUser()){
        window.location.href = "../zindex.html";
    }
    else{alert("Identifients ou mot de passe incorrect")}
};