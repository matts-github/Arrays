
// Variables

const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
var savedEmails = {};
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const picsumURL = 'https://picsum.photos/v2/list?page='


const getData = () => {
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      let pic = response.data[`${randomPage}`]['download_url'];
      document.getElementById("myImg").innerHTML = `<img id="main" src=${pic}/>`;
  });
};

window.onload = getData();

const getEmail = (ev) => {
  ev.preventDefault();
  const randomPage = Math.floor(Math.random() * (10) + 1)
  axios.get(`${picsumURL}${randomPage}&limit=100`)
    .then(response => {
      
      let email = document.getElementById('email').value;
      let pic = response.data[`${randomPage}`]['download_url'];

      if (pattern.test(email) == false) {
        //stop from working
        return false;
    }else{
       //carry on as usual
       
    

      //check if email is already being used
      if (email in savedEmails) {
        savedEmails[email].push(pic);
      }else{
        savedEmails = { ...savedEmails, [email]: [pic]};
      }

      // savedEmails = { ...savedEmails, [email]: pic};
      console.log(savedEmails);
      for (var i = 0; i < [savedEmails].length; i++) {
      document.getElementById('output').innerHTML = `<h3 id=hide> ${JSON.stringify(email)}</h3>`;
      document.getElementById("myImg").innerHTML = `<img id="main" src=${pic}/>`;
      for (var j = 0; j < savedEmails[email].length; j++) {
        
        // Defining variable
        let userCollection = "";

        // Looping through the email keys in the savedEmails object
        for (email in savedEmails) {
            // Variables for key and value
            let emailToAdd = `<h3 id="new"> ${JSON.stringify(email)}</h3>`;
            let imgsToAdd = "";

            // Looping through the entire object
            for (var j = 0; j < savedEmails[email].length; j++) {
                // Variable with the image loop attatched to it
                let imgToAdd = `<img id="card" src=${savedEmails[email][j]}/>`;
                
                imgsToAdd += imgToAdd;
            }

            // Adding the email and images variables into the userCollection varible
            userCollection += `${emailToAdd} ${imgsToAdd}`;
        }
      
        // Displaying userCollection variable in the HTML
        document.getElementById("output").innerHTML += userCollection;
      }
    };

    }


  });
};

function changepic(div) {
	document.getElementById(div).src = "https://picsum.photos/200/300";
}

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', getEmail);


function validation()
{
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  

  if (email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Address is Valid.";
    text.style.color = "#00ff00";
  }
  else
  {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#ff0000";
  }

  if (email == "")
  {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00ff00";
  }
}

